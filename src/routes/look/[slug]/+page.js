export const prerender = true;

export async function load({ fetch, params }) {
  const post = await import(`../../../look/${params.slug}/post.md`);

  const { title, date, photos, galleryUrl } = post.metadata;
  let galleryPhotos;
  const content = post.default;

  if (galleryUrl) {
    const res = await fetch(galleryUrl);
    galleryPhotos = await res.json();
  }

  return {
    title,
    date,
    content,
    photos,
    galleryPhotos,
  }
}
