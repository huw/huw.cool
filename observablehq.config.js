export default {
  title: "huw",
  root: "src",
  style: "style.generated.css",

  interpreters: {
    ".ts": [
      "node",
      "--experimental-strip-types",
      "--harmony-temporal",
      "--env-file-if-exists=.env",
    ],
  },

  head: `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`,

  globalStylesheets: [
    "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",
  ],

  header: false,
  footer: false,
};
