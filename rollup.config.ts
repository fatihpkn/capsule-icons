import { babel } from "@rollup/plugin-babel";
import filesize from "rollup-plugin-filesize";
import typescript from "rollup-plugin-typescript2";
import tsTreeshaking from "rollup-plugin-ts-treeshaking";

import resolve from '@rollup/plugin-node-resolve'


const config = {
  input: './src/index.ts',
  output: [
    {
      // Bundle into ESM for modern consumers.
      // Only ESM build can currently be tree-shaken.
      dir: 'dist/esm',
      format: 'esm',
    },
    {
      // Bundle into CJS for other consumers.
      dir: 'dist/cjs',
      format: 'cjs',
    },
  ],
  external: [/@babel\/runtime/, "react"],
  plugins: [typescript({ useTsconfigDeclarationDir: true }), tsTreeshaking({ js: true }), filesize()],
};

export default config;
