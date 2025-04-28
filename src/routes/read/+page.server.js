import fs from 'fs';
import path from 'path';

export async function load() {
    const contentDir = path.join(process.cwd(), 'src/read');
    const files = fs.readdirSync(contentDir);

    const posts = []
    for (const file of files) {
        const fullPath = path.join(contentDir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            const post = await import(`../../read/${file}/post.md`);
            posts.push({
                name: file,
                title: post.metadata.title,
                date: post.metadata.date,
                link: `/read/${file}`
            });
        }
    }
    posts.sort((a, b) => new Date(b.date) - new Date(a.date))
    return {posts}
}
