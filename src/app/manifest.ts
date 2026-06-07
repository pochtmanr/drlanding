import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.doctorName.en,
    short_name: "Dr. Dubenko",
    description: site.doctorTitle.en,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    // --color-primary from globals.css
    theme_color: "#0085e6",
    // Default locale is Hebrew (RTL).
    lang: "he",
    dir: "rtl",
    icons: [
      { src: "/icon.png", sizes: "96x96", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
