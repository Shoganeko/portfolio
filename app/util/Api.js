import matter from "gray-matter";
import fs from "fs"
import { join } from "path";
import remark from "remark";
import html from "remark-html";

const docsDirectory = join(process.cwd(), "public\\changelogs");

export function getDocBySlug(slug) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(docsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { slug: realSlug, meta: data, content };
}

export function getDocSlugs() {
    return fs.readdirSync(docsDirectory);
}

export function getAllDocs(fields = []) {
    const slugs = getDocSlugs();
    const posts = slugs
        .map((slug) => getDocBySlug(slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}

export async function markdownToHtml(markdown) {
    const result = await remark().use(html).process(markdown);
    return result.toString();
}