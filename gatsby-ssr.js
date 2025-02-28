import React from "react"
;("use strict")

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([
    <div
      key={pluginOptions.key ? pluginOptions.key : "my-portal"}
      id={pluginOptions.id ? pluginOptions.id : "my-portal"}
    >
      {pluginOptions.text}
    </div>,
  ])
}
