import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import nodePolyfills from 'rollup-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  presets: [
    "@emotion/babel-preset-css-prop",
  ],
  build: {
    polyfillModulePreload: true,
    //target: 'browser',
    rollupOptions: {
      plugins: [
        //nodePolyfills(),
      ],
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [
          "@emotion",
          "babel-plugin-transform-inline-environment-variables",
          //"babel-plugin-twin",
          "babel-plugin-macros",
          ["@emotion/babel-plugin-jsx-pragmatic", {
            export: "jsx",
            import: "__cssprop",
            module: "@emotion/react",
          },],
          ["@babel/plugin-transform-react-jsx", {
            pragma: "__cssprop",
            pragmaFrag: "React.Fragment"
          },],
          ["@babel/plugin-transform-react-jsx",
            { pragma: "__cssprop" },
            "twin.macro",
          ],
        ],
      },
    }), // plugin.react
  ]
})
