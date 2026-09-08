import postcssPresetEnv from "postcss-preset-env";

const failOnWarning = {
  postcssPlugin: "fail-on-postcss-warning",
  OnceExit(_root, { result }) {
    const warnings = result.warnings();
    if (warnings.length > 0) throw new Error(warnings.map(String).join("\n"));
  },
};

export default {
  plugins: [
    postcssPresetEnv({ preserve: true, features: { "gamut-mapping": false } }),
    failOnWarning,
  ],
};
