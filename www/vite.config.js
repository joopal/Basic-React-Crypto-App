import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import nodePolyfills from 'rollup-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  presets: [
    "@emotion/babel-preset-css-prop",
  ],
  build: {
    polyfillModulePreload: true,
    target: 'es2022',
    //lib: false,
    //rollupOptions: {
      //plugins: [
        //nodePolyfills(),
      //],
    //},
  },
  plugins: [
    react({
      babel: {
        plugins: [
          "babel-plugin-macros",
          //["babel-plugin-twin", { debug: true }, "twinning"],
          "@emotion",
          "babel-plugin-transform-inline-environment-variables",
          ["@emotion/babel-plugin-jsx-pragmatic", {
            export: "jsx",
            import: "__cssprop",
            module: "@emotion/react",
          }, "emotion-jsx"],
          ["@babel/plugin-transform-react-jsx", {
            pragma: "__cssprop",
            pragmaFrag: "React.Fragment"
          }, "fragment-jsx"],
          ["@babel/plugin-transform-react-jsx", {
            pragma: "__cssprop"
          }, "twin.macro", ],
        ],
      },
    }), // plugin.react
  ]
})
