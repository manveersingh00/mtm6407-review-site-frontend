import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: '94554kre',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-01-01',
})