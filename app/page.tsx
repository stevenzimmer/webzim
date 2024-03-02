"use client";
import Card from "@/components/home/card";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import {  FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import Header from "@/components/layout/header";
import Subheader from "@/components/layout/subheader";
import { features, dictSkills, certifications, buttons, projects } from "@/lib/data";
import Balancer from "react-wrap-balancer";


export default function Home() {
  return (
    <Layout>
      <motion.div
        className="container px-5 xl:px-0 md:py-10"
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
          <Image  src={`https://github.com/stevenzimmer.png`} alt="Steven Zimmer Headshot" className="rounded-full mx-auto mb-5 border-4" width="200" height="200"/>
      
        <Header>Steven Zimmer</Header>
        <motion.h2
          className="mt-6 text-center text-white md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
         Full stack web developer specializing in modern web technologies, growth marketing, ecommerce, and CMS platforms, and excelling in dynamic, fast-paced, collaborative environments.
        </motion.h2>
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
            Web Dev Toolbox
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
        Recent Freelance Work
        </Subheader>

       
        {/* here we are animating with Tailwind instead of Framer Motion because Framer Motion messes up the z-index for child components */}
        <div className="grid mx-auto w-full max-w-screen-lg animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 md:px-5 md:grid-cols-2 xl:px-0">
        {features.map(({ title, description, demo, large, href, bullets, logo, subtitle, nofollow }, i: number) => (
          <Card
            href={href}
            key={i}
            title={title}
            description={description || ""}
            bullets={bullets}
            logo={logo}
            nofollow={nofollow}
            demo={demo}
            large={large}
            subtitle={subtitle}
          />
        ))}
        </div>


        <div className="py-6 md:py-12"></div>

       
        <Subheader>
        Personal Projects
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
