import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

const isDev = process.env.BUILD == "development";

export default {
  input: "src/index.ts",
  output: {
    file: isDev ? "dist/index.js" : "build/index.jsx",
    format: "es",
    sourcemap: isDev,
  },
  plugins: [typescript(), !isDev && terser()],
};
