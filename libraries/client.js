import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const clientSanity = sanityClient({
    projectId: '2minkm93',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-06-20',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN

})

const builder = imageUrlBuilder(clientSanity);
export const urlFor = (source) => builder.image(source)
