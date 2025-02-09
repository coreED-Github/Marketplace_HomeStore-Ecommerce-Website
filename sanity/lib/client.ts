import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:"7lxgr08p",
  dataset:"production",
  apiVersion:"v2025-01-19",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: 'skoVlGPhQASqkXbgKUs2kx3zRL88JpJCBw9X6CO7XaWU7SY8HojGjP8vAksxmam1c8i4gYlNO9tZSdcnDhd9SdLoLNvdUZNhhQPtQplqLft1xJYIGuKyxxzsj5LPAuDmECFUOBXGx16nqbYOdzvdueMliR3TnTzJst4Q1TzmP3Nypn4n3PKo',
})
