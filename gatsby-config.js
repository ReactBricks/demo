module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `React Bricks Demo website`,
        short_name: `React Bricks Demo`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#F65A8E`,
        display: `minimal-ui`,
        icon: `src/images/reactbricks-icon.svg`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(`./tailwind.config.js`),
          require(`autoprefixer`),
          require(`cssnano`)
        ]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
  ],
}
