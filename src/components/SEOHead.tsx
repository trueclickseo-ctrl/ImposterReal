import { 
  generateFAQSchema, 
  generateHowToSchema, 
  generateBreadcrumbSchema, 
  generateSoftwareApplicationSchema,
  generateWebSiteSchema,
  generateOrganizationSchema
} from "@/lib/schemaGenerator";

interface SEOHeadProps {
  faqItems?: Array<{ question: string; answer: string }>;
  breadcrumbs?: Array<{ name: string; url: string }>;
  includeHowTo?: boolean;
}

export default function SEOHead({ faqItems, breadcrumbs, includeHowTo = true }: SEOHeadProps) {
  const schemas: any[] = [
    generateSoftwareApplicationSchema(),
    generateWebSiteSchema(),
    generateOrganizationSchema()
  ];

  if (includeHowTo) {
    schemas.push(generateHowToSchema());
  }

  if (faqItems && faqItems.length > 0) {
    schemas.push(generateFAQSchema(faqItems));
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(breadcrumbs));
  }

  return (
    <>
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
