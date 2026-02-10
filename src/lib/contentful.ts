import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: '3h3lq4r5edw3',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'r-4MPQP5iorwJUsfwyc57dmptaIAwJrbCjO2zUKdI8o'
});

export function getEntryById(id: string) {
  return contentfulClient.getEntry(id);
}
