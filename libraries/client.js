import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const clientSanity = sanityClient({
    projectId: '2minkm93', // you can find this in sanity.json
    dataset: 'production', // or the name you chose in step 1
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: '2022-06-20'
})

const builder = imageUrlBuilder(clientSanity);
export const urlFor = (source) => builder.image(source)
