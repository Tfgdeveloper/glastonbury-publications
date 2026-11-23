import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";

const routes = [
  // Home
  { url: "/", priority: 1.0, changefreq: "weekly" },

  // Core pages
  { url: "/about", priority: 0.8, changefreq: "monthly" },
  { url: "/services", priority: 0.9, changefreq: "monthly" },
  { url: "/contact", priority: 0.7, changefreq: "monthly" },
  { url: "/2026-catalogue", priority: 0.8, changefreq: "monthly" },

  // Service pages
  { url: "/publishing-solutions", priority: 0.9, changefreq: "monthly" },
  { url: "/cover-design-and-layout", priority: 0.8, changefreq: "monthly" },
  { url: "/marketing-and-promotion", priority: 0.8, changefreq: "monthly" },
  { url: "/ebook-and-audiobook-publishing", priority: 0.8, changefreq: "monthly" },
  { url: "/book-translation", priority: 0.8, changefreq: "monthly" },
  { url: "/global-distribution", priority: 0.8, changefreq: "monthly" },
  { url: "/ghost-writing", priority: 0.8, changefreq: "monthly" },
  { url: "/book-design-and-formatting", priority: 0.8, changefreq: "monthly" },

  // Publishing platform pages
  { url: "/publishing-services", priority: 0.8, changefreq: "monthly" },
  { url: "/kobo-publishing", priority: 0.7, changefreq: "monthly" },
  { url: "/lulu-publishing", priority: 0.7, changefreq: "monthly" },
  { url: "/apple-books-publishing", priority: 0.7, changefreq: "monthly" },
  { url: "/draft2digital-publishing", priority: 0.7, changefreq: "monthly" },
  { url: "/ingram-spark-publishing", priority: 0.7, changefreq: "monthly" },
  { url: "/childrens-book-publishing", priority: 0.8, changefreq: "monthly" },

  // Marketing sub-pages
  { url: "/online-book-advertising-programs", priority: 0.7, changefreq: "monthly" },
  { url: "/amazon-author-page", priority: 0.7, changefreq: "monthly" },
  { url: "/podcast-booking-service", priority: 0.7, changefreq: "monthly" },
  { url: "/author-website-design", priority: 0.7, changefreq: "monthly" },
  { url: "/social-media-publicist", priority: 0.7, changefreq: "monthly" },
  { url: "/times-square-book-announcement", priority: 0.7, changefreq: "monthly" },
  { url: "/become-amazon-bestselling-author", priority: 0.7, changefreq: "monthly" },
  { url: "/become-barnes-noble-bestselling-author", priority: 0.7, changefreq: "monthly" },

  // Legal pages
  { url: "/terms-and-conditions", priority: 0.3, changefreq: "yearly" },
  { url: "/privacy-policy", priority: 0.3, changefreq: "yearly" },
  { url: "/refund-policy", priority: 0.3, changefreq: "yearly" },
];

async function generateSitemap() {
  const sitemapPath = path.resolve("./public/sitemap.xml");
  const writeStream = createWriteStream(sitemapPath);

  const sitemapStream = new SitemapStream({
    hostname: "https://glastonburypublications.com",
  });

  sitemapStream.pipe(writeStream);

  const lastmod = new Date().toISOString();

  routes.forEach(({ url, priority, changefreq }) => {
    sitemapStream.write({ url, changefreq, priority, lastmod });
  });

  sitemapStream.end();

  await streamToPromise(sitemapStream);

  console.log(`Sitemap generated with ${routes.length} URLs at:`, sitemapPath);
}

generateSitemap().catch(console.error);

