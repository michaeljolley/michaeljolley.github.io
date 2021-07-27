import config from '../modules/config'

const fs = require('fs')
const path = require('path')
const Airtable = require('airtable')
const Parser = require('rss-parser')

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: config.airtableAPIKey,
})

const fetchEvents = () => {

  return new Promise((resolve, reject) => {

    const airtableBase = Airtable.base(config.airtableBase)

    const events = [];

    airtableBase('Content production').select({
      maxRecords: 50,
      view: "Community Events"
    }).eachPage(function page(records, fetchNextPage) {

      events.push(...records.map((record) => {

        const images = record.get('Image')

        return {
          title: record.get('Title'),
          id: record.id,
          thumbnail: images && images.length > 0 ? images[0].url : undefined,
          date: record.get('PublishDate'),
          description: record.get('Description'),
          speaker: record.get('GuestName'),
          speakerTwitter: record.get('GuestTwitter'),
          tags: record.get('Topic') ? record.get('Topic') : []
        }
      }))

      fetchNextPage();

    }, function done(err) {
      if (err) { console.error(err); return; }

      const meetupPath = path.join(__dirname, `../content/meetup`)
      if (!fs.existsSync(meetupPath)) {
        fs.mkdirSync(meetupPath)
      }

      events.forEach((meetup) => {
        const data = `---
id: ${meetup.id}
date: ${new Date(meetup.date).toISOString().substring(0, 10)}
title: ${meetup.title}
slug: ${meetup.id}
thumbnail: ${meetup.thumbnail}
speaker: ${meetup.speaker}
speakerTwitter: ${meetup.speakerTwitter}
description: ${meetup.title}
---

${meetup.description}`
        fs.writeFileSync(`${meetupPath}/${meetup.id}.md`, data)
      })
    });

    resolve();

  });

}

export default async function (moduleOptions) {
  await fetchEvents()
}
