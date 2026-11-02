export const dynamic = 'force-static';

export default async function sitemap() {
  const baseUrl = 'https://hasanalbannadev.github.io';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}