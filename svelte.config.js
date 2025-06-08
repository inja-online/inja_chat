import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
  preprocess: [vitePreprocess()],
  compilerOptions: {
    runes: true,
  },
  kit: {
    adapter: adapter({
      routes: {
        include: ["/*"],
        exclude: ["<all>"],
      },
    }),
    alias: {
      $components: "src/lib/components",
      $stores: "src/lib/stores",
      $utils: "src/lib/utils",
      $types: "src/lib/types",
    },
    prerender: {
      entries: ["/"],
      handleHttpError: "warn",
    },
    csp: {
      mode: "auto",
      directives: {
        "script-src": ["self", "unsafe-inline"],
        "object-src": ["none"],
        "base-uri": ["self"],
      },
    },
    csrf: {
      checkOrigin: process.env.NODE_ENV === "production",
    },
    typescript: {
      config: (config) => {
        config.compilerOptions = {
          ...config.compilerOptions,
          verbatimModuleSyntax: false,
        };
        return config;
      },
    },
  },
  extensions: [".svelte"],
  onwarn: (warning, handler) => {
    const { code } = warning;
    if (code === "css-unused-selector") return;
    if (code === "a11y-click-events-have-key-events") return;
    if (code === "a11y-no-static-element-interactions") return;
    handler(warning);
  },
};

export default config;
