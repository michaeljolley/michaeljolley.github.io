const {
	SearchIndexClient,
	AzureKeyCredential,
} = require('@azure/search-documents')

const endpoint = process.env.SEARCH_API_ENDPOINT || ''
const apiKey = process.env.SEARCH_API_KEY || ''

const indexDefinition = require('./azureIndex.json')

const indexClient = new SearchIndexClient(
	endpoint,
	new AzureKeyCredential(apiKey)
)

const deleteIndexIfExists = async (indexClient, indexName) => {
	try {
		await indexClient.deleteIndex(indexName)
		console.log(`Deleted ${indexName} index`)
	} catch {
		console.log('Index did not exist')
	}
}

const indexName = indexDefinition.name

const buildSearchIndex = async (searchIndexDocuments) => {
	await deleteIndexIfExists(indexClient, indexName)

	console.log('Creating index...')
	await indexClient.createIndex(indexDefinition)
	const searchClient = indexClient.getSearchClient(indexName)

	console.log(`Uploading ${searchIndexDocuments.length} documents...`)
	const indexDocumentsResult = await searchClient.mergeOrUploadDocuments(
		searchIndexDocuments
	)

	console.log(
		`Index operations succeeded: ${JSON.stringify(
			indexDocumentsResult.results[0].succeeded
		)}`
	)
}

export default {
	buildSearchIndex,
}
