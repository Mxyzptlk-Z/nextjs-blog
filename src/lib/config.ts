export const config = {
  site: {
    title: "Nextjs Personal Blog",
    name: "Nextjs Personal Blog",
    description: "Nextjs Personal Blog",
    keywords: ["Nextjs Blog", "Quant", "AI", "Full Stack Developer"],
    url: "https://xxx.com",
    baseUrl: "https://xxx.com",
    image: "https://xxx.com/og-image.png",
    favicon: {
      ico: "/favicon.ico",
      png: "/favicon.png",
      svg: "/favicon.svg",
      appleTouchIcon: "/favicon.png",
    },
    manifest: "/site.webmanifest",
    rss: {
      title: "Nextjs Blog Template",
      description: "Thoughts on Full-stack development, AI",
      feedLinks: {
        rss2: "/rss.xml",
        json: "/feed.json",
        atom: "/atom.xml",
      },
    },
  },
  author: {
    name: "LIG",
    email: "ericcccc_z@outlook.com",
    bio: "这是一个 Nextjs 个人博客",
  },
  social: {
    github: "https://github.com/Mxyzptlk-Z",
    x: "https://x.com/LIG17z",
    xiaohongshu: "https://www.xiaohongshu.com/user/profile/608e3e73000000000101c4c9",
    wechat: "/images/wechat-public.png",
    buyMeACoffee: "https://www.buymeacoffee.com/lig17",
  },
  giscus: {
    repo: "Mxyzptlk-Z/nextjs-blog",
    repoId: "R_kgDOOojZow",
    categoryId: "DIC_kwDOOojZo84CqDXK",
  },
  navigation: {
    main: [
      { 
        title: "文章", 
        href: "/blog",
      },
    ],
  },
  seo: {
    metadataBase: new URL("https://xxx.com"),
    alternates: {
      canonical: './',
    },
    openGraph: {
      type: "website" as const,
      locale: "zh_CN",
    },
    twitter: {
      card: "summary_large_image" as const,
      creator: "@xxx",
    },
  },
};
