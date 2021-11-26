module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "website-2021-11",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "post",
        path: "./src/posts/",
      },
      // __key: "pages",
    },
  ],
};
