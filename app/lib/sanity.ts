import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: '7lxgr08p',
    dataset: 'production',
    apiVersion: '2025-01-19',
    useCdn: true,
    token: 'skoVlGPhQASqkXbgKUs2kx3zRL88JpJCBw9X6CO7XaWU7SY8HojGjP8vAksxmam1c8i4gYlNO9tZSdcnDhd9SdLoLNvdUZNhhQPtQplqLft1xJYIGuKyxxzsj5LPAuDmECFUOBXGx16nqbYOdzvdueMliR3TnTzJst4Q1TzmP3Nypn4n3PKo',
});

const builder = imageUrlBuilder(client)
export function urlFor(source:any){
    return builder.image(source);
}