import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={13}
      viewBox="0 0 18 13"
      {...props}
    >
      <path
        d="M16.714 0H1.286a1.279 1.279 0 00-.909.381A1.307 1.307 0 000 1.3v10.4a1.307 1.307 0 00.377.919 1.279 1.279 0 00.909.381h15.428a1.279 1.279 0 00.909-.381A1.307 1.307 0 0018 11.7V1.3a1.307 1.307 0 00-.377-.919A1.279 1.279 0 0016.714 0zM15.3 1.3L9 5.707 2.7 1.3zM1.286 11.7V1.891l7.348 5.142a.637.637 0 00.733 0l7.348-5.142V11.7z"
        fill="#4f5270"
      />
    </svg>
  )
}

export default SvgComponent