export default defineAppConfig({
  title: 'AmirGT Link Shortner',
  email: 'me@amir.ovh',
  blog: 'https://www.amir.ovh/',
  github: 'https://github.com/AmirOVH',
  telegram: 'https://t.me/AmirOVH',
  description: 'This is AmirGT\'s private link shortener service.',
  image: 'https://www.amir.ovh/icon.webp',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
