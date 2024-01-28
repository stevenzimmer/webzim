"use client";
import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import {  FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, LinkedIn, Email } from "@/components/shared/icons";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import Header from "@/components/layout/header";
import Subheader from "@/components/layout/subheader";

interface DictSkills {
  [key: string]: string[];
}

interface DictItem {
  title: string;
  subtitle?: string;
  logo?: string;
  description?: string;
  demo?: React.ReactNode;
  href?: string;
  bullets?: string[];
  large?: boolean;
}

export default function Home() {
  return (
    <Layout>
      <motion.div
        className="container  px-5 xl:px-0 md:py-20"
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
      
        <Header>Steven Zimmer</Header>
        <motion.p
          className="mt-6 text-center text-white md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
          Military vet turned full-stack engineer specializing in web strategy, project management, technical SEO, and growth marketing.
          </Balancer>
        </motion.p>
      </motion.div>

       
        <motion.div
          className="max-w-[600px] mx-auto mt-6 flex flex-wrap items-center justify-center space-x-2 md:space-x-5"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          {buttons.map(({ title, link, icon }, i) => (
              <a
                key={i}
                className="flex max-w-fit items-center justify-center mspace-x-2 rounded-full border border-slate-800 bg-slate-900 px-3 md:px-5 py-2 my-2 text-sm text-white shadow-md transition-colors hover:border-slate-700"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
                <p className="px-2">{title}</p>
              </a>
          ))}
       
        </motion.div>

        <div className="py-6 md:py-12"></div>
            <Subheader>
            Skills
            </Subheader>
       
        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} 
        className="mx-auto max-w-[800px]"
        >

         {Object.keys(dictSkills).map((skill, i) => {
          return (
            <motion.div key={i} variants={FADE_DOWN_ANIMATION_VARIANTS}  className="flex items-center flex-wrap py-6 first:pt-0  border-b border-slate-500 ">
                <div className="w-full md:w-1/4 mb-3 md:mb-0">
                  <motion.p className="md:text-2xl font-bold text-white" variants={FADE_DOWN_ANIMATION_VARIANTS}>{skill}</motion.p>
                </div>
                <div className="flex flex-wrap w-full md:w-3/4 -mx-1">
                  {dictSkills[skill].map((item, j) => {
                    return ( 
                      <motion.div key={j} variants={FADE_DOWN_ANIMATION_VARIANTS}  className="w-auto border border-teal-600 bg-teal-600 rounded px-2 md:px-3 py-1 shadow m-1">
                        
                        <motion.p
                        className="bg-gradient-to-br from-white to-slate-50 bg-clip-text font-display  font-bold text-transparent drop-shadow-sm text-sm md:text-lg text-left"
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
        <Subheader>
        Recent Work
        </Subheader>

       
        {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
        <div className="grid mx-auto w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 md:px-5 md:grid-cols-2 lg:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large, href, bullets, logo, subtitle }, i: number) => (
          <Card
            href={href}
            key={i}
            title={title}
            description={description || ""}
            bullets={bullets}
            logo={logo}
            demo={
              title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
            large={large}
            subtitle={subtitle}
          />
        ))}
        </div>


        <div className="py-6 md:py-12"></div>

       
        <Subheader>
        Recent Projects
        </Subheader>
      {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
      <div className="grid mx-auto w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 md:px-5 md:grid-cols-2 lg:grid-cols-3 xl:px-0">
        {projects.map(({ title, description, demo, href, large, bullets,logo, subtitle }, i) => (
          <Card
 
            key={i}
            href={href}
            title={title}
            description={description || ""}
            bullets={bullets}
            logo={logo}
            subtitle={subtitle}

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
      </div>

        <div className="py-6 md:py-12"></div>

        
        <Subheader>
        Certifications
        </Subheader>

          <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="grid gap-4 md:grid-cols-2 max-w-5xl mx-auto ">
        {certifications.map(({title, src, link}, i) => (
             <motion.div key={i} className="mb-12" variants={FADE_DOWN_ANIMATION_VARIANTS} >
      
              <a className="mb-3 block" target="_blank"  rel="noreferrer" href={link} title={title}>
                
                <Image 
                  className=" transition duration-200 mx-auto shadow-md rounded-lg hover:-translate-y-0.5 aspect-video object-cover border hover:border-blue-300" 
                  alt={title}
                  src={src}
                    width="1500"
                    height="1000"
                  />
      
              </a>
              <p className="text-center text-white font-bold">{title}</p>
             </motion.div>
          ))}
        </motion.div>
        
      </motion.div>
    
    </Layout>
  );
}

// const strings = ["Marketing", "Strategy", "Designer", "Developer", "Zim"];

const buttons = [
  {
    link: "https://github.com/stevenzimmer",
    title: "GitHub",
    icon: <Github className="text-white" />
  },
  {
    link: "https://www.linkedin.com/in/webdevzim/",
    title: "LinkedIn",
    icon: <LinkedIn className="fill-white" />
  },
  {
    link: "mailto:steven@webzim.dev",
    title: "steven@webzim.dev",
    icon: <Email className="text-white" />
  },
];

// Frontend Skills
const dictSkills: DictSkills = {
  "Frontend": ["HTML/CSS", "Vanilla JavaScript", "TypeScript", "React", "xState","Redux","Zustand", "Tailwind CSS", "PostCSS","Framer Motion", "Email Development"],
  "Backend": ["Node JS", "PHP", "Laravel", "Next JS", "Remix", "Gatsby","AWS", "HubL","Stripe","Gutenberg Blocks", "MySQL","GraphQL", "Firebase", "REST APIs", "MongoDB", "Technical SEO"],
  
  "Tools": ["Okta", "Elastic Search","Statsig", "Optimizely","Microsoft Clarity","Hotjar", "Zapier","Git", "Webpack", "Vite", "Clerk", "Auth0"],
  "CMS": [ "WordPress", "Hubspot","Webflow", "Strapi", "Contentful"],
  "Marketing": ["Marketo", "Pardot", "Salesforce", "Mailchimp", "Google Analytics",  "Google Tag Manager", "Google Search Console"],
  "UI Design": ["Figma", "Adobe ", "Sketch"],
};



const features: DictItem[] = [
  {
    // logo: "/logos/dotmatics-dark.svg",
    title: "Dotmatics",
    bullets: [ "Collaborate with marketing and design teams to build a scalable, performant, and consistent user experience.", "Build and maintain reusable components and templates for future use by website and email stakeholders."],
   demo: (
<svg width="200"  viewBox="0 0 232 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.1001 23.7999C32.1001 16.2999 38.0001 10.3999 45.6001 10.3999C53.1001 10.3999 59.1001 16.2999 59.1001 23.7999C59.1001 31.2999 53.1001 37.1999 45.6001 37.1999C38.0001 37.1999 32.1001 31.2999 32.1001 23.7999ZM45.5001 31.7999C49.8001 31.7999 53.3001 28.2999 53.3001 23.7999C53.3001 19.1999 49.9001 15.6999 45.5001 15.6999C41.1001 15.6999 37.7001 19.1999 37.7001 23.7999C37.8001 28.2999 41.1001 31.7999 45.5001 31.7999Z" fill="#000000"/>
<path d="M60.7002 11.0002H65.5002V4.2002H71.3002V11.0002H78.1002V16.1002H71.3002V27.6002C71.3002 30.2002 72.6002 31.5002 75.1002 31.5002H78.2002V36.6002H74.4002C68.6002 36.6002 65.6002 33.9002 65.6002 28.0002V16.1002H60.8002V11.0002H60.7002Z" fill="#000000"/>
<path d="M82.8999 10.9998H89.0999V13.2998C91.1999 11.1998 93.8999 10.2998 96.0999 10.2998C99.2999 10.2998 102 11.7998 103.6 14.2998C105.6 11.6998 109 10.2998 112.6 10.2998C118.4 10.2998 122.1 14.2998 122.1 20.5998V36.4998H116.3V21.9998C116.3 18.0998 114.4 15.6998 111.1 15.6998C108.2 15.6998 105.4 17.6998 105.4 21.9998V36.4998H99.5999V21.9998C99.5999 18.0998 97.5999 15.6998 94.1999 15.6998C91.2999 15.6998 88.6999 17.7998 88.6999 22.3998V36.4998H82.8999V10.9998Z" fill="#000000"/>
<path d="M125.9 29.2998C125.9 24.2998 130.1 20.7998 137.9 20.7998H142.5V20.1998C142.5 16.9998 140.6 14.9998 137.3 14.9998C134.5 14.9998 132.1 16.7998 131.9 19.3998H126.1C126.4 13.9998 131 10.2998 137.4 10.2998C144.2 10.2998 148.3 14.3998 148.3 20.6998V36.3998H142.6V33.6998C140.9 35.6998 138.1 36.9998 135.4 36.9998C129.7 37.1998 125.9 34.0998 125.9 29.2998ZM135.9 32.5998C139.7 32.5998 142.7 29.4998 142.7 25.4998V25.0998H138.1C133.9 25.0998 131.6 26.4998 131.6 29.1998C131.6 31.1998 133.1 32.5998 135.9 32.5998Z" fill="#000000"/>
<path d="M150.9 11.0002H155.7V4.2002H161.5V11.0002H168.3V16.1002H161.5V27.6002C161.5 30.2002 162.8 31.5002 165.3 31.5002H168.4V36.6002H164.6C158.8 36.6002 155.8 33.9002 155.8 28.0002V16.1002H151V11.0002H150.9Z" fill="#000000"/>
<path d="M171.8 0H178V6.39999H171.8V0ZM177.8 36.5H172V11H177.8V36.5Z" fill="#000000"/>
<path d="M181.8 23.7999C181.8 16.0999 187.7 10.3999 195.1 10.3999C201.3 10.3999 206.5 14.5999 207.2 20.1999H201.3C200.7 17.6999 198 15.7999 194.9 15.7999C190.6 15.7999 187.3 19.1999 187.3 23.7999C187.3 28.3999 190.6 31.7999 194.9 31.7999C198 31.7999 200.7 29.8999 201.3 27.1999H207.1C206.4 33.0999 201.2 37.1999 195 37.1999C187.7 37.1999 181.8 31.3999 181.8 23.7999Z" fill="#000000"/>
<path d="M210.5 28.6999H216C216.2 30.9999 218.1 32.6999 221.1 32.6999C224 32.6999 225.6 31.2999 225.6 29.3999C225.6 23.9999 211 27.7999 211 18.2999C211 13.4999 215 10.3999 220.5 10.3999C226.1 10.3999 230.2 13.0999 230.8 18.1999H225.1C224.8 16.2999 223 14.7999 220.5 14.7999C218.4 14.7999 216.4 15.6999 216.4 17.7999C216.4 22.8999 231.3 18.8999 231.3 28.7999C231.3 33.7999 227.1 37.2999 221.1 37.2999C215.1 37.1999 210.9 33.9999 210.5 28.6999Z" fill="#000000"/>
<path d="M12.1001 0H0.100098V5.8H6.2001H12.5001C19.2001 5.8 24.1001 11.1 24.1001 18.1C24.1001 25.3 19.2001 30.7 12.5001 30.7H6.2001V24.4H0.100098V36.5H12.1001C22.6001 36.5 30.3001 28.7 30.3001 18.1C30.3001 7.69999 22.6001 0 12.1001 0Z" fill="#000000"/>
<path d="M6.10001 12H0V18.1H6.10001V12Z" fill="#000000"/>
</svg>
   )
  },
  {
    logo: "/logos/bloomtech-logo-dark.png",
    title: "BloomTech",
    bullets: [ "Technical Lead on a strategic overhaul of the student sign up flow, increasing enrollments by 30%.", "Built an activity tracker that visualizes student progress, which increased sprint completion rates by 15%."],
    demo: (
        <svg stroke="currentColor" fill="currentColor" className="w-16 text-slate-200" strokeWidth="0" version="1.1" viewBox="0 0 18 16"  xmlns="http://www.w3.org/2000/svg"><path d="M3.5 2h-3c-0.275 0-0.5 0.225-0.5 0.5v11c0 0.275 0.225 0.5 0.5 0.5h3c0.275 0 0.5-0.225 0.5-0.5v-11c0-0.275-0.225-0.5-0.5-0.5zM3 5h-2v-1h2v1z"></path><path d="M8.5 2h-3c-0.275 0-0.5 0.225-0.5 0.5v11c0 0.275 0.225 0.5 0.5 0.5h3c0.275 0 0.5-0.225 0.5-0.5v-11c0-0.275-0.225-0.5-0.5-0.5zM8 5h-2v-1h2v1z"></path><path d="M11.954 2.773l-2.679 1.35c-0.246 0.124-0.345 0.426-0.222 0.671l4.5 8.93c0.124 0.246 0.426 0.345 0.671 0.222l2.679-1.35c0.246-0.124 0.345-0.426 0.222-0.671l-4.5-8.93c-0.124-0.246-0.426-0.345-0.671-0.222z"></path><path d="M14.5 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path></svg>
    ),
  },{
    logo: "/logos/armory-logo-blue.png",

    title: "Armory",
    subtitle: "Acquired by Harness",
    bullets: [ "Rebuilt website in tandem with a company rebrand", "Technical lead for go-to-market strategizing", "Revamped email automation and built easy-to-use templates."],
  
    demo: (
      
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="w-16 text-slate-200" xmlns="http://www.w3.org/2000/svg"><path d="M209.68 883.264c-20.112 41.807-32.802 69.666-144.689 73.73 3.216-107.968 23.792-119.552 64.992-140.08 17.296-8.624 38.832-19.344 62.113-37.248l-38.96-49.744c-18.4 14.128-35.329 21.568-51.697 29.712C32.8 793.858.45 827.569.45 988.289l.543 32.704 31.456-.704c169.632 0 201.328-38.32 233.104-104.32 6.96-14.464 10.832-24.24 22.56-43.729l-47.456-43.104c-14.224 19.408-23.104 37.872-30.976 54.128zm495.279-694.607c-70.768 0-128.352 57.583-128.352 128.335 0 70.784 57.6 128.353 128.352 128.353s128.336-57.584 128.336-128.352c0-70.752-57.6-128.336-128.336-128.336zm0 192.415c-35.328 0-64.08-28.752-64.08-64.08 0-35.313 28.752-64.08 64.08-64.08s64.08 28.767 64.08 64.08c-.016 35.344-28.752 64.08-64.08 64.08zm318.821-351.76c-.976-15.968-13.63-28.771-29.598-29.955 0 0-179.088-13.056-351.376 51.28-62.944 23.504-114.752 60.737-163.104 117.137-40.32 47.025-80.385 132.032-115.745 202.608-13.664 27.248-26.72 53.313-37.792 73.217H148.15a32.003 32.003 0 0 0-23.936 10.768L6.917 581.503A31.993 31.993 0 0 0 .388 612.51c3.44 10.785 12.32 18.945 23.329 21.44l190.944 43.665c13.007 16.064 34.687 40.097 69.376 78.593l72.335 80.192 38.945 164.72a31.984 31.984 0 0 0 21.231 23.056c3.233 1.024 6.576 1.568 9.904 1.568a31.95 31.95 0 0 0 20.832-7.712l118.56-117.936a31.981 31.981 0 0 0 11.184-24.288v-165.12c15.936-9.904 44.191-25.152 70.783-40.032 72.464-40.496 180.624-90.912 225.472-130.784 63.153-56.128 86.16-97.28 108.752-158.112 53.712-144.688 42.288-344.031 41.744-352.447zM922.001 359.469c-19.712 53.072-37.568 84.83-91.248 132.558-39.664 35.232-148.128 85.824-214.192 122.769-49.312 27.568-78.848 43.664-91.792 54.256a31.949 31.949 0 0 0-11.76 24.784v167.248l-67.52 74.193-28.752-121.6a31.949 31.949 0 0 0-7.393-14.064c-58.847-65.216-147.743-163.808-154.56-171.632a32.017 32.017 0 0 0-17.568-10.848L90.624 583.597l71.904-76H344.56a31.988 31.988 0 0 0 27.264-15.248c14.08-22.928 30.416-55.536 49.344-93.296 32.048-63.952 71.92-148.544 107.12-189.632 41.584-48.528 83.824-79.009 136.896-98.848C783.28 66.445 905.152 61.805 960.864 62.22c1.04 59.008-1.184 195.824-38.863 297.248z"></path></svg>
    ),
    // href:"https://www.armory.io/"
  },
  {
    logo: "/logos/prokeep-logo.png",

    title: "Prokeep",
    bullets: [ "Migrated company website from Webflow to Hubspot CMS","Technical lead for rebrand initiatives."],
    
    demo: (
     
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="w-16 text-slate-200" xmlns="http://www.w3.org/2000/svg"><path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z"></path></svg>
   
      ),
    // href:"https://www.prokeep.com/"
  },
  {
    logo:"/logos/punchcut-logo.png",
    title: "Punchcut",
    bullets: [ "Optimized website performance, improved technical SEO.","Unmasked and purged a malicious spam link infection."],
   
    demo: (

      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-16 text-slate-200" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.24 11.51l1.57-1.57-3.75-3.75-1.57 1.57-4.14-4.13c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l4.13 4.13L3 17.25V21h3.75l4.76-4.76 4.13 4.13c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-4.13-4.13zm-7.06-.44L5.04 6.94l1.89-1.9L8.2 6.31 7.02 7.5l1.41 1.41 1.19-1.19 1.45 1.45-1.89 1.9zm7.88 7.89l-4.13-4.13 1.9-1.9 1.45 1.45-1.19 1.19 1.41 1.41 1.19-1.19 1.27 1.27-1.9 1.9zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34c-.47-.47-1.12-.29-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>
      ),
    // href:"https://punchcut.com/"
  },
  {
    logo: "/logos/verta-logo.png",
    title: "Verta AI",
    bullets: ["Rebuilt corporate marketing website in tandem with company rebrand.", "Manage Hubspot CMS website, email development, and hold technical marketing reins."],
    
    demo: (
      
        <>
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-16 text-slate-200" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 20v-12a4 4 0 0 1 4 -4h2a4 4 0 0 1 4 4v12"></path><line x1="7" y1="13" x2="17" y2="13"></line></svg>
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-16 text-slate-200" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="12" y1="4" x2="12" y2="20"></line></svg>
          </>
    ),

  },
  {
    logo: "/logos/nue-logo-dark.png",
  title: "Nue",
  bullets: [ "Built a sleek company website using React, Next JS, and with a headless CMS.", "AWS S3, Amplify, and Cloudfront to host and serve static assets.", "Used Framer Motion to create a smooth, interactive experience.", ],

  demo: (
   
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" className="w-16 text-slate-200" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
   
  ),
  large: false,
  // href:"https://med.stanford.edu/"
},
    {
      logo: "/logos/stanford-med-logo.png",
    title: "Stanford Med",
    bullets: [ "Drupal upgrades 7 to 9", "Migrated websites to more robusting server architecture", "Integrated websites with Box and SAML authentication."],
  
    demo: (
     
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" className="w-16 text-slate-200" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
     
    ),
    large: false,
    // href:"https://med.stanford.edu/"
  },
  
  // {
  //   title: "Performance first",
  //   description:
  //     "Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.",
  //   demo: <WebVitals />,
  //   large:true
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
];


// https://mdrndsgn.webzim.dev/
const projects: DictItem[] = [
  // {
  //   title: "Todos",
  //   bullets: [ "React, State Management, and TailwindCSS."],
    
  //   href: "/todos",
  //   demo: (


    
  //     <svg stroke="#06b6d4" fill="#06b6d4"  strokeWidth="2" viewBox="0 0 24 24"  strokeLinecap="round" strokeLinejoin="round" className="w-16 " xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="6" height="6" rx="1"></rect><path d="m3 17 2 2 4-4"></path><path d="M13 6h8"></path><path d="M13 12h8"></path><path d="M13 18h8"></path></svg>
       
  //   ),
  //   large:false
  
  // },
  // {
  //   title: "Quizzes",
  //   bullets: [ "Next JS, Postgres DB, React, State Management, and TailwindCSS."],
    
  //   href: "/quizzes",
  //   demo: (


  //     <svg stroke="#a78bfa" fill="#a78bfa" strokeWidth="0" viewBox="0 0 24 24" className="w-16 text-violet-400" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"></path><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5.99 13c-.59 0-1.05-.47-1.05-1.05 0-.59.47-1.04 1.05-1.04.59 0 1.04.45 1.04 1.04-.01.58-.45 1.05-1.04 1.05zm2.5-6.17c-.63.93-1.23 1.21-1.56 1.81-.13.24-.18.4-.18 1.18h-1.52c0-.41-.06-1.08.26-1.65.41-.73 1.18-1.16 1.63-1.8.48-.68.21-1.94-1.14-1.94-.88 0-1.32.67-1.5 1.23l-1.37-.57C11.51 5.96 12.52 5 13.99 5c1.23 0 2.08.56 2.51 1.26.37.61.58 1.73.01 2.57z"></path></svg>
       
  //   ),
  //   large:false
  
  // },
  {
    title: "ZimGPT",
    bullets: [ "A showcase of TypeScript, React, OpenAI Chat API, and persisted state management."],
    
    href: "/zimgpt",
    demo: (
  
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-16 text-slate-600" xmlns="http://www.w3.org/2000/svg"><title>OpenAI logo</title><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"></path></svg>
       
    ),
    large:false
  
  },
  {
  title: "Tic Tac Toe",
  bullets: [ "A showcase of React, State Management, and Tailwind CSS."],
  
  href: "/tic-tac-toe",
  demo: (

    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="w-16 text-slate-600"  xmlns="http://www.w3.org/2000/svg"><path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"></path></svg>
     
  ),
  large:false

},
{
    title: "Mdrn Dsgn",
    bullets: [ "A showcase of modern design trends on a fake company website."],
    
    href: "https://mdrndsgn.webdevzim.com/",
    demo: (

      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="w-16 text-slate-600" xmlns="http://www.w3.org/2000/svg"><path d="M339.3 367.1c27.3-3.9 51.9-19.4 67.2-42.9L568.2 74.1c12.6-19.5 9.4-45.3-7.6-61.2S517.7-4.4 499.1 9.6L262.4 187.2c-24 18-38.2 46.1-38.4 76.1L339.3 367.1zm-19.6 25.4l-116-104.4C143.9 290.3 96 339.6 96 400c0 3.9 .2 7.8 .6 11.6C98.4 429.1 86.4 448 68.8 448H64c-17.7 0-32 14.3-32 32s14.3 32 32 32H208c61.9 0 112-50.1 112-112c0-2.5-.1-5-.2-7.5z"></path></svg>
     
    ),
    large:false

  },{
    title: "Stats and Graphs",
    bullets: [ "A demonstration of data visualization using random stats and charts library."],
    
    href: "https://stats.webdevzim.com/",
    demo: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="w-16 text-slate-600" xmlns="http://www.w3.org/2000/svg"><path d="M944 224c-44.192 0-79.999 35.824-79.999 80 0 9.072 1.84 17.632 4.607 25.76L673.6 497.68C659.92 486.784 642.848 480 624 480c-21.743 0-41.407 8.736-55.808 22.816l-152.752-76.48C412.465 384.848 378.241 352 336 352c-44.175 0-80 35.824-80 80 0 12.096 2.88 23.44 7.68 33.712L107.936 645.296C99.2 642.032 89.872 640 80 640c-44.176 0-80 35.824-80 80s35.824 80 80 80 80-35.824 80-80c0-10.64-2.176-20.767-5.952-30.048l158.272-181.92C319.856 510.368 327.696 512 336 512c23.28 0 44.047-10.112 58.671-26l149.408 74.912C544.608 604.656 580.127 640 624 640c44.193 0 80-35.824 80-80 0-1.424-.336-2.752-.416-4.16L911.68 377.072C921.584 381.456 932.463 384 944 384c44.193 0 80-35.808 80-80 0-44.176-35.807-80-79.999-80z"></path></svg>
    ),
    large:false

  },{
    title: "Box Scores App",
    bullets: [ "A web app that displays box scores for NBA and MLB game scores."],
    
    href: "https://boxscores.webdevzim.com/",
    demo: (
   
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-16 text-slate-600" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM5.23 7.75C6.1 8.62 6.7 9.74 6.91 11H4.07a8.12 8.12 0 011.16-3.25zM4.07 13h2.84a5.972 5.972 0 01-1.68 3.25A8.12 8.12 0 014.07 13zM11 19.93c-1.73-.22-3.29-1-4.49-2.14A7.952 7.952 0 008.93 13H11v6.93zM11 11H8.93A7.99 7.99 0 006.5 6.2 8.035 8.035 0 0111 4.07V11zm8.93 0h-2.84c.21-1.26.81-2.38 1.68-3.25.6.97 1.01 2.07 1.16 3.25zM13 4.07c1.73.22 3.29.99 4.5 2.13a7.99 7.99 0 00-2.43 4.8H13V4.07zm0 15.86V13h2.07a8.006 8.006 0 002.42 4.79A7.988 7.988 0 0113 19.93zm5.77-3.68A6.004 6.004 0 0117.09 13h2.84a8.12 8.12 0 01-1.16 3.25z"></path></svg>
       
    ),
    large:false

  },
  // {
  //   title: "OpenAI Dall-E",
  //   bullets: ["A demonstration of the OpenAI API using Dall-E to generate images"],
  //   href: "/openai-dall-e",
  //   demo: (
    
  //       <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" className="w-16 text-slate-600" xmlns="http://www.w3.org/2000/svg"><title>OpenAI logo</title><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"></path></svg>
    
  //   ),
  //   large:false
  // },
  {
    title: "Dog Guessing Game",
    bullets: ["Built using React, TypeScript, Tailwind, Vite, Immer and connect with the dog.ceo API."],
    href: "/dog-breed-guessing-game/",
    demo: (
     
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="w-16 text-slate-600" xmlns="http://www.w3.org/2000/svg"><path d="M298.06,224,448,277.55V496a16,16,0,0,1-16,16H368a16,16,0,0,1-16-16V384H192V496a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V282.09C58.84,268.84,32,233.66,32,192a32,32,0,0,1,64,0,32.06,32.06,0,0,0,32,32ZM544,112v32a64,64,0,0,1-64,64H448v35.58L320,197.87V48c0-14.25,17.22-21.39,27.31-11.31L374.59,64h53.63c10.91,0,23.75,7.92,28.62,17.69L464,96h64A16,16,0,0,1,544,112Zm-112,0a16,16,0,1,0-16,16A16,16,0,0,0,432,112Z"></path></svg>
        
    ),
    large:false


  },
  // {
  //   title: "Design Agency",
  //   description:
  //     "Improved overall website performance, web core vitals, and technical SEO.",
  //   demo: (
  //     <div className="border-4 p-6 rounded-full border-[#4D4F53]">
  //     <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-20 text-slate-500" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.24 11.51l1.57-1.57-3.75-3.75-1.57 1.57-4.14-4.13c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l4.13 4.13L3 17.25V21h3.75l4.76-4.76 4.13 4.13c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-4.13-4.13zm-7.06-.44L5.04 6.94l1.89-1.9L8.2 6.31 7.02 7.5l1.41 1.41 1.19-1.19 1.45 1.45-1.89 1.9zm7.88 7.89l-4.13-4.13 1.9-1.9 1.45 1.45-1.19 1.19 1.41 1.41 1.19-1.19 1.27 1.27-1.9 1.9zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34c-.47-.47-1.12-.29-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg></div>
  //     ),
  // },
  //   {
  //   title: "Teaching Institution",
  //   description:
  //     "Drupal upgrades 7/8 to 9, host migrations, SAML authentication, Box integration.",
  //   demo: (
  //     <div className="border-4 p-6 rounded-full border-[#4D4F53]">
  //       <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" className="text-[#8C1515] w-20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
  //     </div>
  //   ),
  //   large: false
  // },
  
  // {
  //   title: "Performance first",
  //   description:
  //     "Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.",
  //   demo: <WebVitals />,
  //   large:true
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
];



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