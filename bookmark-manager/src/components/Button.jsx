import React from 'react'

function Button({ link, bgColor, hoverBgColor, hoverTextColor, borderColor, content, className }) {
  return (
    <a href={`${link}`} className={`${bgColor} text-white px-6 py-2 rounded-md shadow-md ${hoverBgColor} ${hoverTextColor} border-2 ${borderColor} ${className}`}>{content}</a>
  )
}

export default Button