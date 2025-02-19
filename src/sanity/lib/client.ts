// sanityClient.js
import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, apiToken } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: apiToken,
  useCdn: false, // Set to false to ensure fresh data
});
