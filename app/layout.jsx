import "@nextra/theme-docs/style.css";
import "./globals.css";
import { Layout, Navbar, Footer, ThemeSwitch } from "@nextra/theme-docs";
import { Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import pkg from "../package.json";

export const metadata = {
  metadataBase: new URL("https://aiden-lab-docs.vercel.app"),
  // Keep favicon identical to homepage brand logo.
  icons: {
    icon: [
      {
        url: "/Aiden%20lab%20Assets%20(Png%20%26%20SVG)/Night%20Blue/Asset%205.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: [
      "/Aiden%20lab%20Assets%20(Png%20%26%20SVG)/Night%20Blue/Asset%205.svg",
    ],
    apple: [
      "/Aiden%20lab%20Assets%20(Png%20%26%20SVG)/Night%20Blue/Asset%205.svg",
    ],
  },
  title: {
    default: "AIDEN Lab Docs",
    template: "%s | AIDEN Lab Docs",
  },
  description:
    "Official AIDEN Lab documentation for architecture, deployment paths, AI logger workflows, and practical ICT training implementation.",
  keywords: [
    "AIDEN Lab",
    "eNSP",
    "ICT training",
    "network simulation",
    "Huawei ICT Academy",
    "MindSpore Lite",
  ],
  openGraph: {
    type: "website",
    url: "https://aiden-lab-docs.vercel.app",
    title: "AIDEN Lab Docs",
    description:
      "Build, deploy, and scale AI-assisted networking labs with AIDEN Lab documentation.",
    siteName: "AIDEN Lab Docs",
    images: [
      {
        url: "/Aiden lab Assets (Png & SVG)/Night Blue/Asset 6@150x.png",
        width: 1200,
        height: 630,
        alt: "AIDEN Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIDEN Lab Docs",
    description:
      "Guides for architecture, setup, and AI-assisted operations in elastic networking labs.",
    images: ["/Aiden lab Assets (Png & SVG)/Night Blue/Asset 6@150x.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const lastUpdated = new Date().toISOString().split("T")[0];

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap();

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <Layout
          pageMap={pageMap}
          navbar={
            <Navbar
              logo={
                <span className="brand-logo-wrap" aria-label="AIDEN Lab">
                  <img
                    className="brand-logo brand-logo--light"
                    src="/Aiden%20lab%20Assets%20(Png%20%26%20SVG)/Night%20Blue/Asset%205.svg"
                    alt="AIDEN Lab"
                  />
                  <img
                    className="brand-logo brand-logo--dark"
                    src="/Aiden%20lab%20Assets%20(Png%20%26%20SVG)/White/Asset%209.svg"
                    alt="AIDEN Lab"
                  />
                </span>
              }
              projectLink="https://github.com/victor-akande/aiden-lab-setup-scripts"
            >
              <ThemeSwitch />
            </Navbar>
          }
          search={<Search placeholder="Search AIDEN docs..." />}
          docsRepositoryBase="https://github.com/victor-akande/aiden-lab-setup-scripts/blob/main"
          footer={
            <Footer>
              <a href="https://github.com/victor-akande/aiden-lab-setup-scripts">
                GitHub
              </a>{" "}
              | Contact:{" "}
              <a href="mailto:hello@aidenlab.local">hello@aidenlab.local</a> |
              {" "}Version {pkg.version} | Last updated {lastUpdated} | Built for
              Huawei ICT Competition 2025-2026
            </Footer>
          }
          feedback={{ content: null }}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          toc={{ backToTop: true }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
