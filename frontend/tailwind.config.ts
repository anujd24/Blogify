import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        sky: "#b3d6f9",
        black : "#031930",
        cobalt : "#223a59",
        blue : "#3684db",
        gw : "#758ba5",
        bw : "#d1dded"
      },
       
    },
  },
  plugins: [],
}

export default config;
