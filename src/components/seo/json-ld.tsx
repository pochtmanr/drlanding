/**
 * Renders a schema.org JSON-LD block. Content is static and first-party;
 * "<" is escaped so no sequence can close the script tag.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
