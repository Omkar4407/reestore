import { getPage } from "@/lib/shopify";

export default async function QualityCompliancePage() {
  const page = await getPage(
    "reework-quality-compliance"
  );

  if (!page) {
    return (
      <main className="max-w-5xl mx-auto px-6 pt-40 pb-20">
        <h1>
          Page not found
        </h1>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-6 pt-40 pb-20">
      <h1 className="text-4xl font-bold mb-8">
        {page.title}
      </h1>

      <div
        dangerouslySetInnerHTML={{
          __html: page.body,
        }}
      />
    </main>
  );
}