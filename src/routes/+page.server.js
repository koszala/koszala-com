/** @type {import('./$types').PageLoad} */
export async function load() {
  const assetsBaseUrl = 'https://koszala.com';
  return {
    items:
      [
        {
          desktop: assetsBaseUrl + "/photos/desktop/001.jpg",
          tablet: assetsBaseUrl + "/photos/tablet/001.jpg",
          mobile: assetsBaseUrl + "/photos/mobile/001.jpg",
          meta: {
            name: "A Tree",
            description: "Some rubbish on the beach",
            camera: "Galaxy Note 3",
            date: "2014-08-25",
            location: "Sardinia, Italy"
          }
        },
        {
          desktop: assetsBaseUrl + "/photos/desktop/002.jpg",
          tablet: assetsBaseUrl + "/photos/tablet/002.jpg",
          mobile: assetsBaseUrl + "/photos/mobile/002.jpg",
          meta: {
            name: "Grass silhouette",
            description: "",
            camera: "Galaxy Note 3",
            date: "2013-12-23",
            location: "Uciechów, Poland"
          }
        },
        {
          desktop: assetsBaseUrl + "/photos/desktop/003.jpg",
          tablet: assetsBaseUrl + "/photos/tablet/003.jpg",
          mobile: assetsBaseUrl + "/photos/mobile/003.jpg",
          meta: {
            name: "Well...",
            description: "A view from old backyard well.",
            camera: "Galaxy Note 3",
            date: "2013-12-23",
            location: "Uciechów, Poland"
          }
        },
        {
          desktop: assetsBaseUrl + "/photos/desktop/004.jpg",
          tablet: assetsBaseUrl + "/photos/tablet/004.jpg",
          mobile: assetsBaseUrl + "/photos/mobile/004.jpg",
          meta: {
            name: "Glass, sky, woman",
            description: "",
            camera: "Galaxy Note 3",
            date: "2014-08-27",
            location: "Sardinia, Italy"
          }
        },
        {
          desktop: assetsBaseUrl + "/photos/desktop/005.jpg",
          tablet: assetsBaseUrl + "/photos/tablet/005.jpg",
          mobile: assetsBaseUrl + "/photos/mobile/005.jpg",
          meta: {
            name: "Italian sunset",
            description: "",
            camera: "Galaxy Note 3",
            date: "2014-08-27",
            location: "Sardinia, Italy"
          }
        },
        {
          desktop: assetsBaseUrl + "/photos/desktop/006.jpg",
          tablet: assetsBaseUrl + "/photos/tablet/006.jpg",
          mobile: assetsBaseUrl + "/photos/mobile/006.jpg",
          meta: {
            name: "Sunset and the wood",
            description: "",
            camera: "Galaxy Note 3",
            date: "2013-11-10",
            location: "Cagliari, Italy"
          }
        },
        {
          desktop: assetsBaseUrl + "/photos/desktop/007.jpg",
          tablet: assetsBaseUrl + "/photos/tablet/007.jpg",
          mobile: assetsBaseUrl + "/photos/mobile/007.jpg",
          meta: {
            name: "Italian job",
            description: "",
            camera: "Galaxy Note 3",
            date: "2014-08-28",
            location: "Cagliari, Italy"
          }
        },
        {
          desktop: assetsBaseUrl + "/photos/desktop/008.jpg",
          tablet: assetsBaseUrl + "/photos/tablet/008.jpg",
          mobile: assetsBaseUrl + "/photos/mobile/008.jpg",
          meta: {
            name: "Handy",
            description: "",
            camera: "Galaxy Note 3",
            date: "2014-10-05",
            location: "Warsaw, Poland"
          }
        }
      ]
  }
}
