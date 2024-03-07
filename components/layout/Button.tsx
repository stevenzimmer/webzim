import React from 'react'
import ButtonSvg from "../svg/ButtonSvg";

export default function Button({className, href, children, icon}: {
  className?: string,
  href: string,
  children: string;
  icon: React.ReactNode;
}) {
  const renderButton = () => (
    <a href={href} className={`${className ?? ""} button relative z-10 inline-flex items-center justify-center text-n-1 transition-colors h-11 px-7 hover:text-n-2`} >
      {icon}
      <span className='ml-2'>{children}</span>
  
      {ButtonSvg()}
    </a>
  )
  return renderButton();
}
