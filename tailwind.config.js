module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      typography: () => ({
        "custom-mid": {
          css: {
            fontSize: '14px',
            lineHeight: '1.5',
            letterSpacing: '0px',
            // 必要に応じて各要素ごとに上書きする場合
            h1: {
              fontSize: '14px',
              lineHeight: '1.5',
              letterSpacing: '0px',
            },
            // 他の要素も同様に
          },
        },
        custom: {
          fontSize: "16px",
          lineHeight: "1.5",
          letterSpacing: "0px",
        }
      }),
    },
  },
};
