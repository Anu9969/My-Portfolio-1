import sanityClient from '@sanity/client'
import imageBuilder from '@sanity/image-url'

export const frontend = sanityClient({
    projects: '',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-03-25',
})

const builder = imageBuilder(frontend)

export const urlFor = (source) => builder.image(source)

//sanity cors add jaha host ho rha sanity https://localhost:3000

//now we ill be using groq queries to fetch data from sanity