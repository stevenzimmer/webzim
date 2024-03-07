import React from 'react'
import ButtonSvg from "../svg/ButtonSvg";

export default function Button({className, href, children, icon}: {
  className?: string,
  href: string,
  children: string;
  icon: React.ReactNode;
}) {
  const renderButton = () => (
    <a href={href} target='_blank' className={`${className ?? ""} button relative z-10 inline-flex items-center justify-center text-n-1 transition-all duration-200 h-11 px-7 hover:text-n-2 hover:-translate-y-0.5 my-2 md:my-0`} >
      {icon}
      <span className='ml-2'>{children}</span>
      {ButtonSvg()}
    </a>
  )
  return renderButton();
}
