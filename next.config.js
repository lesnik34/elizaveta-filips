module.exports = {
  env: require(`./config/${process.env.ENV_MODE}.json`),
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["media.graphcms.com", "media.graphassets.com"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};
