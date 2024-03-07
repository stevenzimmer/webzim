import { buttons } from '@/lib/data'

const d = new Date();

export default function Footer() {
  return (
    <footer className="bg-slate-800 py-3 text-black w-full">
          <div className="container px-6">
            <div className="flex flex-wrap justify-around flex-row-reverse">
              <div className="flex items-center mb-3 sm:mb-0">
              {buttons.map(({  link, icon }, i) => (
              <a
                key={i}
                className="mx-2 text-slate-100"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
          ))}

              </div>
              <div className="flex items-center">
                
              <p className="text-center md:text-right text-slate-100">
              {d.getFullYear()} &nbsp; <span className='font-code'>Web Dev Zim LLC</span> &nbsp; | &nbsp; All Rights Reserved
            </p>
              </div>
            </div>
          </div>
        </footer>
  )
}
