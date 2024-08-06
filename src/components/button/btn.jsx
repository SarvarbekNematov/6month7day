import React from 'react'

export const Btn = ({children , extraClass, type}) => {
  return (
    <button type={type} className={`w-full py-[18px] border-none bg-[#1DA1F2] text-white rounded-[76px] text-[18px] ${extraClass}`}>
        {children}
    </button>
)
}
