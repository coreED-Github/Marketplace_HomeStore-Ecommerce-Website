import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: '7lxgr08p',
    dataset: 'production',
    apiVersion: '2025-01-19',
    useCdn: true,
});

const builder = imageUrlBuilder(client)
export function urlFor(source:any){
    return builder.image(source);
}