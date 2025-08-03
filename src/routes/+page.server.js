/** @type {import('./$types').PageLoad} */
export async function load() {
  const assetsBaseUrl = 'https://cdn.koszala.com';
  const version = 1;
  let items =
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
          description: "Lots of birds",
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
      {
        desktop: assetsBaseUrl + "/photos/2024-0005-field-desktop.jpg",
        mobile: assetsBaseUrl + "/photos/2024-0005-field-mobile.jpg",
        meta: {
          name: "Catcher...",
          description: "in the rye",
          camera: "Huawei P40",
          date: "2024-06-28",
          location: "Uciechów, Poland"
        }
      },
      {
        desktop: assetsBaseUrl + "/photos/2023-0001-frozen-desktop.jpg",
        mobile: assetsBaseUrl + "/photos/2023-0001-frozen-mobile.jpg",
        meta: {
          name: "Frozen",
          description: "in time?",
          camera: "ZV-1M2",
          date: "2023-10-02",
          location: "Uciechów, Poland"
        }
      },
    ];

  items = items.sort(() => Math.random() - 0.5);

  return {
    items: items.slice(0, 4)
  }
}
