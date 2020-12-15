require('dotenv').config()

const { AzureKeyCredential, SearchClient } = require('@azure/search-documents')

const ACS_ENDPOINT = process.env.SEARCH_API_ENDPOINT
const ACS_API_KEY = process.env.SEARCH_API_KEY

const searchClient = new SearchClient(
	ACS_ENDPOINT,
	'bbb-content',
	new AzureKeyCredential(ACS_API_KEY)
)

const searchOptions = {
	includeTotalCount: true,
	orderBy: ['title desc'],
	select: ['route', 'title', 'description'],
}

exports.handler = async (event, context) => {
	const searchFor = event.queryStringParameters.searchFor
	console.log(searchFor)

	const searchResults = await searchClient.search(searchFor, searchOptions)
	// for await (const result of searchResults.results) {
	// 	console.log(`${JSON.stringify(result.document)}`)
	// }
	console.dir(searchResults)
	//	console.log(`Result count: ${searchResults.count}`)

	return {
		statusCode: 200,
		headers: {
			'Cache-Control': 'no-cache',
		},
		body: JSON.stringify(searchResults),
	}
}
