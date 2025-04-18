export const prerender = true;

export async function load({ params }) {
  const post = await import(`../../../read/${params.slug}/post.md`);

  const { title, date } = post.metadata;
  const content = post.default;

  return {
    title,
    date,
    content
  }
}
