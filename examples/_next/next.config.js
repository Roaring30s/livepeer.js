const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Add your environment variables here
    STUDIOTOKEN: process.env.STUDIOTOKEN,
  },
};

module.exports = nextConfig;
