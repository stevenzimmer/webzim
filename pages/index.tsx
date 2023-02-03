import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import {  FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, LinkedIn, Email } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <motion.div
        className="container  px-5 xl:px-0 py-20"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
      
      <motion.div
          className="max-w-[600px] mx-auto"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
        <motion.h1
          className="bg-gradient-to-br from-black to-slate-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>Steven Zimmer</Balancer>
        </motion.h1>
        <motion.p
          className="mt-6 text-center text-slate-500 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
          Military vet turned full-stack engineer specializing in growth marketing, web strategy, and CMS platforms.
          </Balancer>
        </motion.p>
        </motion.div>

       
        <motion.div
          className="max-w-[600px] mx-auto mt-6 flex flex-wrap items-center justify-center space-x-5"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          {buttons.map(({ title, link, icon }, i) => (
              <a
                key={i}
                className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-slate-300 bg-white px-5 py-2 my-2 text-sm text-slate-600 shadow-md transition-colors hover:border-slate-800"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
                <p>{title}</p>
              </a>
          ))}
       
        </motion.div>

        <div className="py-6 md:py-12"></div>

        <motion.h2
          className="bg-gradient-to-br from-black to-stone-500 bg-clip-text  font-display text-3xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-5xl md:leading-[5rem] text-center mb-6"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>Skills</Balancer>
        </motion.h2>

       

        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} 
        className="mx-auto max-w-[800px]"
        >

         {Object.keys(dict_skills).map((skill, i) => {
          return (
            <motion.div key={i} variants={FADE_DOWN_ANIMATION_VARIANTS}  className="flex items-center mb-12">
                <div className="w-1/4">
                  <motion.p className="text-lg md:text-2xl font-bold" variants={FADE_DOWN_ANIMATION_VARIANTS}>{skill}</motion.p>
                </div>
                <div className="flex flex-wrap w-full">
                  {dict_skills[skill].map((item, j) => {
                    return ( 
                      <motion.div key={j} variants={FADE_DOWN_ANIMATION_VARIANTS}  className="w-auto border rounded bg-slate-100 px-3 py-1 shadow m-1">
                        
                        <motion.p
                        className="bg-gradient-to-br from-black to-stone-500 bg-clip-text  font-display  font-bold  text-transparent drop-shadow-sm text-lg  text-left "
                        variants={FADE_DOWN_ANIMATION_VARIANTS}
                        >
                          {item}
                        </motion.p>
                      </motion.div>
                    )
                  })}
                </div>
             
              </motion.div>
            
          )
         })}
         
        </motion.div>

        <div className="py-6 md:py-12"></div>
        <motion.h2
          className="bg-gradient-to-br from-black to-stone-500 bg-clip-text  font-display text-3xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-5xl md:leading-[5rem] text-center mb-6"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>Certifications</Balancer>
        </motion.h2>

          <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="grid gap-4 md:grid-cols-2 max-w-5xl mx-auto ">
        {certifications.map(({title, src, link}, i) => (
             <motion.div key={i} className="mb-12" variants={FADE_DOWN_ANIMATION_VARIANTS} >
      
              <a className="mb-3 block" target="_blank"  rel="noreferrer" href={link} title={title}>
                
                <Image 
                  className=" transition duration-200 mx-auto hover:shadow-lg shadow rounded-lg hover:-translate-y-0.5 aspect-video object-cover" 
                  alt={title}
                  src={src}
                    width="1500"
                    height="1000"
                  />
      
              </a>
              <p className="text-center text-slate-500 font-bold">{title}</p>
             </motion.div>
          ))}
        </motion.div>
          

        
      </motion.div>

      {/* <motion.h2
          className="w-full bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-3xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-5xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>Recent Projects</Balancer>
        </motion.h2> */}
      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
      {/* <div className="grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large }, i) => (
          <Card
            key={i}
            title={title}
            description={description}
            demo={
              title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
            large={large}
          />
        ))}
      </div> */}
    </Layout>
  );
}

const certifications = [{
  "title": "HubSpot CMS for Developers",
  "link": "https://app.hubspot.com/academy/achievements/qqll3dz8/en/1/steven-zimmer/hubspot-cms-for-developers",
  "src": "https://hubspot-academy.s3.amazonaws.com/prod/tracks/user-badges/46809903/24a8e54b9a5a4dbebfebdbfe3d0aafc7.png"
},{
  "title": "HubSpot CMS for Developers II: Best Practices",
  "link": "https://app.hubspot.com/academy/achievements/gg7782jv/en/1/steven-zimmer/hubspot-cms-for-developers-ii-best-practices",
  "src": "https://hubspot-credentials-na1.s3.amazonaws.com/prod/badges/user/f5ccf36a68f84ee2949af85df33007cd.png"
},{
  "title": "HubSpot SEO Certification",
  "link": "https://app.hubspot.com/academy/achievements/lkmshnsl/en/1/steven-zimmer/seo",
  "src": "https://hubspot-credentials-na1.s3.amazonaws.com/prod/badges/user/dda9fb17f6c84d1eaa7a4e1311fa6c25.png"
},
{
  "title": "HubSpot SEO II Certification",
  "link": "https://app.hubspot.com/academy/achievements/1hqtt55s/en/1/steven-zimmer/seo-ii",
  "src": "https://hubspot-credentials-na1.s3.amazonaws.com/prod/badges/user/ff364760900d4f7b97c11c45de89f9f4.png"
}];

interface iObjectKeys {
  [key: string]: Array<String>;
}



// Frontend Skills
const dict_skills: iObjectKeys = {
  "Frontend": ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "PostCSS","Framer Motion", "TypeScript"],
  "Backend": ["Node JS","PHP", "Laravel", "Next JS", "WordPress", "HubL","Stripe","Gutenberg Blocks", "MySQL", "Firebase", "MongoDB",  "Technical SEO"],
  "CMS": [ "WordPress", "Drupal", "Webflow", "Strapi", "Contentful"],
  "Tools": ["Google Analytics", "Google Optimize", "Google Tag Manager", "Optimizely","Google BigQuery", "Google Search Console", "Elastic Search", "Hotjar", "Zapier"],
  "Marketing": ["Hubspot", "Marketo", "Salesforce", "Mailchimp"],
  "Design": ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe XD", "Sketch"],
};


const strings = ["Marketing", "Strategy", "Designer", "Developer", "Zim"];

const buttons = [
  {
    link: "https://github.com/stevenzimmer",
    title: "GitHub",
    icon: <Github />
  },
  {
    link: "https://www.linkedin.com/in/webdevzim/",
    title: "LinkedIn",
    icon: <LinkedIn />
  },
  {
    link: "mailto:steven@webzim.dev",
    title: "steven@webzim.dev",
    icon: <Email />
  },
];

// const features = [
  // {
  //   title: "Marketing Agency",
  //   description:
  //     "Improved performance of website, web core vitals, technical SEO, and fixed spam link issues",
  //   demo: <WebVitals />,
  // },
    // {
  //   title: "Teaching Institution",
  //   description:
  //     "CMS migration, webauth, Box integration",
  //   demo: <WebVitals />,
  // },
  
  // {
  //   title: "Performance first",
  //   description:
  //     "Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.",
  //   demo: <WebVitals />,
  //   large:true
  // },
  // {
  //   title: "B2B Startup",
  //   description:
  //     "Technical lead on website redesign, go-to-market strategizing for go-to-market initiatives",
  //   demo: <WebVitals />,
  // },
  // {
  //   title: "Beautiful, reusable components",
  //   description:
  //     "Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [Framer Motion](https://framer.com/motion)",
  //   large: true,
  // },
  

  // {
  //   title: "One-click Deploy",
  //   description:
  //     "Jumpstart your next project by deploying Precedent to [Vercel](https://vercel.com/) in one click.",
  //   demo: (
  //     <a href={""}>
  //       {/* eslint-disable-next-line @next/next/no-img-element */}
  //       <img
  //         src="https://vercel.com/button"
  //         alt="Deploy with Vercel"
  //         width={120}
  //       />
  //     </a>
  //   ),
  // },
  // {
  //   title: "Built-in Auth + Database",
  //   description:
  //     "Precedent comes with authentication and database via [Auth.js](https://authjs.dev/) + [Prisma](https://prisma.io/)",
  //   demo: (
  //     <div className="flex items-center justify-center space-x-20">
  //       <Image alt="Auth.js logo" src="/authjs.webp" width={50} height={50} />
  //       <Image alt="Prisma logo" src="/prisma.svg" width={50} height={50} />
  //     </div>
  //   ),
  // },
  // {
  //   title: "Hooks, utilities, and more",
  //   description:
  //     "Precedent offers a collection of hooks, utilities, and `@vercel/og`",
  //   demo: (
  //     <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
  //       <span className="font-mono font-semibold">useIntersectionObserver</span>
  //       <span className="font-mono font-semibold">useLocalStorage</span>
  //       <span className="font-mono font-semibold">useScroll</span>
  //       <span className="font-mono font-semibold">nFormatter</span>
  //       <span className="font-mono font-semibold">capitalize</span>
  //       <span className="font-mono font-semibold">truncate</span>
  //     </div>
  //   ),
  // },
// ];
