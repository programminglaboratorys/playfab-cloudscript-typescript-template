import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    file: "./index.js",
  },
  plugins: [typescript()],
};
