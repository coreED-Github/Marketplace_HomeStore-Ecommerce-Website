import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:"7lxgr08p",
  dataset:"production",
  apiVersion:"v2025-01-19",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
