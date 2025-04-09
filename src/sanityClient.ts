import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: '94554kre',      // 👉 from sanity.json or sanity.io/manage
    dataset: 'production',             // or your dataset name
    useCdn: true,                      // `true` for faster but cached
    apiVersion: '2023-01-01',          // use the current date
})