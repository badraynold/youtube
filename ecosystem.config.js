module.exports = {
  name: "youtube-production",
  script: "serve",
  env: {
    PM2_SERVE_PATH: "./build",
    PM2_SERVE_HOST: "127.0.0.1",
    PM2_SERVE_PORT: 4000,
    PM2_SERVE_SPA: true,
  },
};
