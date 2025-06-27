/** @type {import('./$types').PageLoad} */
export async function load() {
  const assetsBaseUrl = 'https://cdn.koszala.com';
  return {
    items:
      [
        {
          desktop: assetsBaseUrl + "/photos/2024-0000-connection-desktop.jpg",
          mobile: assetsBaseUrl + "/photos/2024-0000-connection-mobile.jpg",
          meta: {
            name: "Connection",
            description: "<=>",
            camera: "Canon EOS R50",
            date: "2024-12-25",
            location: "Uciechów, Poland"
          }
        },
        {
          desktop: assetsBaseUrl + "/photos/2025-0001-cabin-in-the-woods-desktop.jpg",
          mobile: assetsBaseUrl + "/photos/2025-0001-cabin-in-the-woods-mobile.jpg",
          meta: {
            name: "Cabin...",
            description: "... in the woods",
            camera: "Sony ZV-1M2",
            date: "2024-11-01",
            location: "Masyw Śnieżnika, Polska"
          }
        },
      ]
  }
}
