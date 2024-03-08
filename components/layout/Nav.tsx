import Image from "next/image"



export default function Nav() {
  return (
<header className='pt-6'>
    <div className='max-w-4xl mx-auto px-6 md:px-12'>
      <div className='flex flex-wrap items-center justify-between'>
        <div className="w-full md:w-1/2 flex justify-center md:block mb-6 md:mb-0">
        <span className='inline-block relative'>
        <a href="/" className='font-code text-2xl tracking-wide'>Web Dev Zim</a>
        <Image 
          src="/assets/hero/curve.png"
          alt="Steven Zimmer Logo"
          width={624}
          height={28}
          className='absolute top-full left-0 w-full'
        />
      </span>
        </div>
        <div className="w-full md:w-1/3 ">
          <nav>
            <ul className='flex justify-center md:justify-between space-x-6'>
              <li>
                <a href="/#skills" className='text-white hover:text-teal-200'>Skills</a>
              </li>
              <li>
                <a href="/#work" className='text-white hover:text-teal-200'>Work</a>
              </li>
              <li>
                <a href="/#projects" className='text-white hover:text-teal-200'>Projects</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
     
  
    </div>
    
  </header>
  )
}
