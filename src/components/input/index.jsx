import React from 'react'

export const Inputs = ({
    type,
    placeholder,
    name,
    extraClass,
    isRequired
}) => {
  return <>
    <input required={isRequired} className={`w-full focus:shadow-lg duration-300 py-[23px] pl-[20px] border-[1px] outline-none border-slate-500 text-[18px] text-slate-500 rounded-[6px] ${extraClass}`} name={name} placeholder={placeholder} type={type} />
  </> 
}
