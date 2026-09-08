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

  header: `<div class="site-header"><a href="/" class="site-title">huw</a><nav class="site-nav"><a href="mailto:yo@huw.cool">mail</a><a href="https://book.huw.cool" target="_blank" rel="noopener">book</a><a href="tel:+61431218603">+61 431 218 603</a></nav></div>`,

  footer: false,
};
