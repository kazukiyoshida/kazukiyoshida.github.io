import { visit } from "unist-util-visit";

/**
 * Prefix absolute image paths in Markdown with the site's base path.
 * Pass `{ base: "/sub-path" }` when the site is served under a sub-path.
 * With no base (root deployment) this plugin is a no-op.
 */
export function remarkBasePath({ base = "" } = {}) {
  const prefix = base.replace(/\/$/, "");
  return (tree) => {
    if (!prefix) return;
    visit(tree, (node) => {
      // Markdown images: ![alt](/images/...)
      if (node.type === "image" && node.url?.startsWith("/")) {
        node.url = prefix + node.url;
      }
      // HTML in markdown: <img src="/images/...">
      if (node.type === "html" && typeof node.value === "string") {
        node.value = node.value.replace(/(<img\s[^>]*\bsrc=")\/([^"]*")/g, `$1${prefix}/$2`);
      }
    });
  };
}
