module.exports = {
  siteMetadata: {
    title: "Excellent Homebrew Approach",
    shortTitle: "EHA",
    description: "My personal site for homebrew",
    github: {
      username: "Everspace",
      repo: "ludobrew-exalted-3e",
      branch: "master",
    },
  },
  flags: {
    DEV_SSR: true,
    FAST_REFRESH: true,
  },
  plugins: [
    "gatsby-theme-ludobrew-core",
    "gatsby-theme-ludobrew-exalted-3e",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-40632548-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: true,
        // Any additional optional fields
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        cookieDomain: "everspace.ca",
      },
    }
  ],
}
