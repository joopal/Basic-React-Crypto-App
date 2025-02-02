import React from "react"
import { Global } from "@emotion/react"
import tw, { css, theme, GlobalStyles as BaseStyles } from "twin.macro"
import "../index.css"

const customStyles = css({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`min-h-screen`,
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
