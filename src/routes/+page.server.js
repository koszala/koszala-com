/** @type {import('./$types').PageLoad} */
export async function load() {
  const assetsBaseUrl = 'https://cdn.koszala.com';
  const version = 1;
  return {
    items:
      [
        {
          desktop: assetsBaseUrl + "/photos/2024-0001-field-desktop.jpg",
          mobile: assetsBaseUrl + "/photos/2024-0001-field-mobile.jpg",
          meta: {
            name: "In field",
            description: "...",
            camera: "Huawei P40",
            date: "2024-06-28",
            location: "Uciechów, Poland"
          }
        },
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
          desktop: assetsBaseUrl + "/photos/2024-0001-cabin-in-the-woods-desktop.jpg",
          mobile: assetsBaseUrl + "/photos/2024-0001-cabin-in-the-woods-mobile.jpg",
          meta: {
            name: "Cabin...",
            description: "... in the woods",
            camera: "Sony ZV-1M2",
            date: "2024-11-01",
            location: "Masyw Śnieżnika, Polska"
          }
        },
        {
          desktop: assetsBaseUrl + "/photos/2024-0002-bathtub-desktop.jpg",
          mobile: assetsBaseUrl + "/photos/2024-0002-bathtub-mobile.jpg",
          meta: {
            name: "Bath tub",
            description: "Bathing with a view",
            camera: "Sony ZV-1M2",
            date: "2024-11-01",
            location: "Masyw Śnieżnika, Polska"
          }
        },
        {
          desktop: assetsBaseUrl + "/photos/2024-0003-birds-desktop.jpg",
          mobile: assetsBaseUrl + "/photos/2024-0003-birds-mobile.jpg",
          meta: {
            name: "Birds",
            description: "Birds. Lots of birds",
            camera: "Huawei P40",
            date: "2024-07-10",
            location: "Hel, Polska"
          }
        },
        {
          desktop: assetsBaseUrl + "/photos/2024-0004-conversation-desktop.jpg",
          mobile: assetsBaseUrl + "/photos/2024-0004-conversation-mobile.jpg?v=" + version,
          meta: {
            name: "Conversation",
            description: "Let's talk",
            camera: "Huawei P40",
            date: "2024-07-14",
            location: "Skalne miasto, Czechy"
          }
        },
      ]
  }
}
