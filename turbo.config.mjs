export default {
  turbo: {
    pipeline: {
      ts: {
        input: "**/*.ts?(x)",
        use: "@turbojs/plugin-typescript",
      },
    },
  },
};
