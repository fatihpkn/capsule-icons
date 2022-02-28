import { babel } from "@rollup/plugin-babel";
import filesize from "rollup-plugin-filesize";
import typescript from "rollup-plugin-typescript2";

const config = {
  input: "src/icons/index.ts",
  output: {
    file: "dist/index.esm.js",
    format: "esm",
  },
  external: [/@babel\/runtime/, "react"],
  plugins: [typescript({ useTsconfigDeclarationDir: true }), babel({ babelHelpers: "runtime", plugins: ["@babel/plugin-transform-runtime"] }), filesize()],
};

export default config;
