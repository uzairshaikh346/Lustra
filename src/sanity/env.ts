// sanityClient.js
import { createClient } from 'next-sanity';

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2021-10-21';
export const dataset = assertValue(process.env.NEXT_PUBLIC_SANITY_DATASET, 'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET');
export const projectId = assertValue(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID');
export const apiToken = assertValue(process.env.NEXT_PUBLIC_SANITY_API_TOKEN, 'Missing environment variable: NEXT_PUBLIC_SANITY_API_TOKEN');

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }
  return v;
}

console.log('Sanity Client Config:', { apiVersion, dataset, projectId, apiToken });

