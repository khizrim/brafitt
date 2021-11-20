module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.brafitt.ru',
    title: 'Первый брафиттинг в Дагестане | Brafitt',
    description:
      'Первый в Дагестане брафиттинг-сервис, который помогает правильно подобрать бельё, избавиться от проблем, связанных с неправильной посадкой и учит, как избежать ошибок в дальнейшем.',
  },
  plugins: [
    "gatsby-plugin-image",
    `gatsby-plugin-postcss`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
