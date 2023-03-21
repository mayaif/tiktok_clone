import {createClient} from '@sanity/client';

export const client = createClient({
  projectId: 'aro7yefh',
  dataset: 'production',
  apiVersion: '2023-03-07',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
