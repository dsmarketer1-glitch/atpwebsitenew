// Renders a JSON-LD <script> tag server-side so search engines see it in the
// initial HTML. `data` is a plain schema.org object.
export default function JsonLd({ data }) {
    if (!data) return null;
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
