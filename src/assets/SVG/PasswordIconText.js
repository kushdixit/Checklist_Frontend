import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={12}
      viewBox="0 0 18 12"
      {...props}
    >
      <defs>
        <style>{".prefix__a{fill:#6f7172}"}</style>
      </defs>
      <path
        className="prefix__a"
        d="M8.99 0C5.76 0 3.213 2.108.167 5.554a.677.677 0 000 .888C2.774 9.429 5.072 12 8.994 12c3.873 0 6.778-3.238 8.843-5.583a.672.672 0 00.02-.863C15.748 2.908 12.835 0 8.99 0zm.177 9.746a3.752 3.752 0 01-.337-7.492 3.752 3.752 0 01.337 7.492z"
      />
      <path
        className="prefix__a"
        d="M8.999 4.241a1.758 1.758 0 01.116-.632h-.116a2.394 2.394 0 102.394 2.394v-.146a1.659 1.659 0 01-.681.146 1.737 1.737 0 01-1.713-1.762z"
      />
    </svg>
  )
}

export default SvgComponent
