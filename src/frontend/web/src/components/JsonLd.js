/**
 * JsonLd - injects JSON-LD structured data (Schema.org) into the page <head>
 * Pass any valid schema object as the `data` prop.
 */
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
