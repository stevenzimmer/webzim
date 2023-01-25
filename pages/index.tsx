import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, LinkedIn, Email } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <motion.div
        className="container max-w-[600px] px-5 xl:px-0 py-20"
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

       
        <motion.div
          className="mx-auto mt-6 flex flex-wrap items-center justify-center space-x-5"
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
        className="flex justify-center flex-wrap mx-auto"
        >
          {skills.map((skill, i) => (
            <motion.div key={i} variants={FADE_DOWN_ANIMATION_VARIANTS}  className="w-auto border rounded bg-slate-100 px-3 py-1 shadow m-1">
            <motion.p
            className="bg-gradient-to-br from-black to-stone-500 bg-clip-text  font-display  font-bold  text-transparent drop-shadow-sm text-lg  text-left "
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
            {skill}
            </motion.p>
            </motion.div>
          ))}
         
         
        </motion.div>
        <div className="py-6 md:py-12"></div>
        <motion.h2
          className="bg-gradient-to-br from-black to-stone-500 bg-clip-text  font-display text-3xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-5xl md:leading-[5rem] text-center mb-6"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>Certifications</Balancer>
        </motion.h2>


        <motion.div className="mb-6" variants={FADE_DOWN_ANIMATION_VARIANTS} >
        
        <a target="_blank"  rel="noreferrer" href='https://app.hubspot.com/academy/achievements/qqll3dz8/en/1/steven-zimmer/hubspot-cms-for-developers' title='HubSpot CMS for Developers'>
          
        <Image 
          className="w-full transition duration-200 mx-auto hover:shadow-lg shadow rounded-lg hover:-translate-y-0.5" 
          alt="Hubspot CMS Certification"
          src='https://hubspot-academy.s3.amazonaws.com/prod/tracks/user-badges/46809903/24a8e54b9a5a4dbebfebdbfe3d0aafc7.png' 
            width="1500"
            height="1000"
          
          />

        </a>
        </motion.div>

        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} >
        
        <a target="_blank"  rel="noreferrer" href='https://app.hubspot.com/academy/achievements/gg7782jv/en/1/steven-zimmer/hubspot-cms-for-developers-ii-best-practices' title='HubSpot CMS for Developers II: Best Practices'>
          
        <Image 
          className="w-full transition duration-200 mx-auto hover:shadow-lg shadow rounded-lg hover:-translate-y-0.5" 
          alt="Hubspot CMS Certification"
          src='https://hubspot-credentials-na1.s3.amazonaws.com/prod/badges/user/f5ccf36a68f84ee2949af85df33007cd.png' 
            width="1500"
            height="1000"
          
          />

        </a>
        </motion.div>



      
        {/* <motion.h2
          className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-3xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-5xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>Recent Projects</Balancer>
        </motion.h2> */}
      </motion.div>
      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
      {/* <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
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

const skills = ["HTML", "CSS", "JavaScript", "PHP", "React", "WordPress", "Technical SEO", "Hubspot", "Marketo", "Webflow", "Figma", "TailwindCSS", "Typescript", "Google Analytics", "Google Tag Manager", "Google Big Query", "Google Optimize", "Hotjar", "Optimizely", "Firebase","Stripe", "Node JS", "MySQL", "Mailchimp", "Elastic Search"]
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
]

// const features = [
//   {
//     title: "Beautiful, reusable components",
//     description:
//       "Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [Framer Motion](https://framer.com/motion)",
//     large: true,
//   },
//   {
//     title: "Performance first",
//     description:
//       "Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.",
//     demo: <WebVitals />,
//   },
//   {
//     title: "One-click Deploy",
//     description:
//       "Jumpstart your next project by deploying Precedent to [Vercel](https://vercel.com/) in one click.",
//     demo: (
//       <a href={DEPLOY_URL}>
//         {/* eslint-disable-next-line @next/next/no-img-element */}
//         <img
//           src="https://vercel.com/button"
//           alt="Deploy with Vercel"
//           width={120}
//         />
//       </a>
//     ),
//   },
//   {
//     title: "Built-in Auth + Database",
//     description:
//       "Precedent comes with authentication and database via [Auth.js](https://authjs.dev/) + [Prisma](https://prisma.io/)",
//     demo: (
//       <div className="flex items-center justify-center space-x-20">
//         <Image alt="Auth.js logo" src="/authjs.webp" width={50} height={50} />
//         <Image alt="Prisma logo" src="/prisma.svg" width={50} height={50} />
//       </div>
//     ),
//   },
//   {
//     title: "Hooks, utilities, and more",
//     description:
//       "Precedent offers a collection of hooks, utilities, and `@vercel/og`",
//     demo: (
//       <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
//         <span className="font-mono font-semibold">useIntersectionObserver</span>
//         <span className="font-mono font-semibold">useLocalStorage</span>
//         <span className="font-mono font-semibold">useScroll</span>
//         <span className="font-mono font-semibold">nFormatter</span>
//         <span className="font-mono font-semibold">capitalize</span>
//         <span className="font-mono font-semibold">truncate</span>
//       </div>
//     ),
//   },
// ];
