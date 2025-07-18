import path from "path";
import { readFile, access, readdir } from "fs/promises";
import { notFound } from "next/navigation";
import PostClient from "./PostClient";
import styles from "./page.module.scss";
import Link from "next/link";

const POSTS_FOLDER = path.join(process.cwd(), "src", "blog-posts");

async function readPostFile(slug: string) {
  const file = path.join(POSTS_FOLDER, `${slug}.mdx`);
  try {
    await access(file);
    return readFile(file, "utf8");
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  const files = await readdir(POSTS_FOLDER);
  return files
    .filter(f => f.endsWith(".mdx"))
    .map(f => ({ slug: f.replace(/\.mdx$/, "") }));
}

function stripFrontmatter(markdown: string) {
  const m = markdown.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return { frontmatter: {}, content: markdown };
  const fm: Record<string, string> = {};
  m[1].split("\n").forEach(line => {
    const [k, ...v] = line.split(":");
    fm[k.trim()] = v.join(":").trim();
  });
  return {
    frontmatter: fm,
    content: markdown.slice(m[0].length),
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const raw = await readPostFile(slug);
  if (!raw) return notFound();

  const { frontmatter, content } = stripFrontmatter(raw);

  return (
    <main className={styles.postContainer}>
      <header>
        <Link href="/blog" className="btn-outline">
          Go Back
        </Link>
      </header>
      <div className={styles.blogPost}>
        <h1>{frontmatter.title}</h1>
        <span className={styles.publishedDate}>
          Published: {new Date(frontmatter.publishedAt!).toLocaleDateString()}
        </span>
        <div>
          <PostClient markdown={content} />
        </div>
      </div>
    </main>
  );
}
