import { Github, LinkedIn, Email } from "@/components/shared/icons";
import type { DictItem, DictSkills } from "./types";
import Image from "next/image";

// Frontend Skills
export const dictSkills: DictSkills = {
  "Frontend": ["HTML/CSS", "Vanilla JavaScript", "TypeScript", "React","jQuery", "xState","Redux","Zustand","Gutenberg Blocks","HubL","Liquid", "Tailwind CSS", "PostCSS","Framer Motion", "MJML","Email Development"],
  "Backend": ["Node JS", "Next JS", "Remix",  "PHP", "Laravel","Gatsby","AWS","Prisma ORM","NoSQL","PostgreSQL", "MySQL","GraphQL", "REST APIs", "MongoDB", "Technical SEO"],
  
  "Tools": ["Webpack","Git","Vite","Okta", "Elastic Search","Statsig", "Optimizely","Microsoft Clarity","Hotjar", "Zapier","Stripe","Firebase","Clerk", "Auth0"],
  "CMS": [ "WordPress", "HubSpot","Webflow", "Statamic", "Strapi", "Contentful"],
  "Marketing": ["Marketo", "Pardot", "Salesforce", "Mailchimp", "Google Analytics",  "Google Tag Manager", "Google Search Console"],
  "UI Design": ["Figma", "Adobe ", "Sketch"],
};


export const features: DictItem[] = [
  {
    title: "Dotmatics",
    bullets: [ "Collaborate with marketing and design teams to develop a scalable and high-performance web infrastructure, ensuring a consistent and engaging user experience across platforms.", "Built a library of reusable components and templates, streamlining future development efforts for both web and email content creators."],
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
    ),
    href: "https://www.dotmatics.com/",
    nofollow: true,
  },
  {
    logo: "/logos/verta-logo.png",
    title: "Verta AI",
    bullets: ["Rebuilt the company website on the HubSpot CMS platform, aligning with comprehensive rebranding efforts to enhance brand visibility and go-to-market initiatives.", "Oversaw the development of web and email projects, assuming responsibility for technical marketing strategies and execution to drive engagement and conversion."],
    
    demo: (
      
        <>
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-16 text-slate-200" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 20v-12a4 4 0 0 1 4 -4h2a4 4 0 0 1 4 4v12"></path><line x1="7" y1="13" x2="17" y2="13"></line></svg>
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-16 text-slate-200" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="12" y1="4" x2="12" y2="20"></line></svg>
          </>
    ),

    href: "https://www.verta.ai/",
    nofollow: true,
    

  },
  
  {
 
    title: "Fictiv",
    bullets: [ "Orchestrated a complex migration project consolidating multiple web properties from diverse CMS platforms (Webflow, Drupal) into a single, unified WordPress instance.", "Led strategic planning and execution to ensure seamless integration, including the unification of URL structures for enhanced navigability and SEO optimization.", "Meticulous attention to detail in data mapping, content restructuring, and ensuring functionality and design consistency across the consolidated platform, resulting in a cohesive web presence that improved user experience, site management efficiency, and overall digital brand coherence."],
    demo: (
      <svg stroke="currentColor" fill="currentColor" className="w-32 text-slate-200" viewBox="0 0 77 25" version="1.1" xmlns="http://www.w3.org/2000/svg">
 
    <g  stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-20.000000, -25.000000)" className="fill-slate-700">
            <g  transform="translate(20.000000, 25.000000)">
                <path d="M60,6.66666667 L63.5099711,6.66666667 L67.7089165,19.0602213 C68.0496061,20.0778434 68.2568409,21.557602 68.2893909,21.557602 L68.3577458,21.557602 C68.3892108,21.557602 68.6289955,20.0709287 68.9881301,19.0602213 L73.1870755,6.66666667 L76.6666667,6.66666667 L70.2684287,25 L66.4481479,25 L60,6.66666667 Z" id="Fill-11"></path>
                <polygon points="53.3333333 25 56.6666667 25 56.6666667 6.66666667 53.3333333 6.66666667"></polygon>
                <polygon  points="53.3333333 3.33333333 56.6666667 3.33333333 56.6666667 0 53.3333333 0"></polygon>
                <path d="M42.2438602,9.72611513 L40,9.72611513 L40,6.91537104 L42.3444769,6.91537104 L42.3444769,1.66666667 L45.5436547,1.66666667 L45.5436547,6.91537104 L49.6927405,6.91537104 L49.6927405,9.72611513 L45.5436547,9.72611513 L45.5436547,17.8118643 C45.5436547,21.4459346 47.9573731,21.910199 49.2145407,21.910199 C49.4785243,21.9136296 49.7414259,21.8896159 50,21.838158 L50,24.9267747 C49.6159256,24.9782326 49.2307692,25.0011027 48.844531,25 C46.6320459,25 42.2438602,24.2818358 42.2438602,18.2040877 L42.2438602,9.72611513 Z" ></path>
                <path d="M29.5575876,6.66666667 C34.0298976,6.66666667 36.2509245,9.22407541 36.2509245,9.22407541 L34.629418,11.5768034 C33.3071113,10.3168064 31.5432887,9.60152429 29.6999036,9.57621431 C26.0938165,9.57621431 23.4895448,12.2040508 23.4895448,15.7958676 C23.3595553,19.1444884 26.0176158,21.9638005 29.4275981,22.0914508 C29.550864,22.0958526 29.6741299,22.096953 29.7985163,22.0947521 C31.869383,22.030927 33.836034,21.1890949 35.2939331,19.7409237 L36.6666667,22.1970925 C34.78294,24.0436208 32.2122862,25.0549197 29.550864,24.9976972 C23.9456285,24.9976972 20,21.0845537 20,15.8288806 C20,10.5732076 23.9579551,6.66666667 29.5575876,6.66666667" ></path>
                <path d="M13.2194041,9.9533921 L5.65464081,9.9533921 L5.65464081,25 L2.23902527,25 L2.23902527,9.9533921 L0,9.9533921 L0,7.2126641 L2.23902527,7.2126641 L2.23902527,6.61442278 C2.23902527,0.741593953 6.71820607,0 8.99000859,0 C9.43080609,-0.00313262704 9.8693431,0.0315318234 10.3033591,0.104215348 L10.3033591,3.02162022 C10.0106244,2.97130086 9.71449885,2.94781849 9.41724309,2.95005491 C8.10389258,2.95005491 5.64785931,3.37273756 5.64785931,6.67927885 L5.64785931,7.2126641 L16.6666667,7.2126641 L16.6666667,25 L13.2194041,25 L13.2194041,9.9533921 Z" ></path>
                <polygon points="13.3333333 0.0310426033 16.6666667 0.0310426033 16.6666667 3.33333333 13.3333333 3.33333333 13.3333333 0"></polygon>
            </g>
        </g>
    </g>
</svg>
       
    ),
    href:"https://www.fictiv.com/",
    nofollow: true,
  },
  {
    title: "Benzinga",
    bullets: ["Spearheaded performance optimization initiatives for a WordPress-based affiliate website, implementing advanced caching, image optimization, and database optimization techniques.", "These efforts significantly reduced page load times, improved search engine rankings, and enhanced user engagement metrics, driving increased traffic and affiliate revenue.", "The project also involved customizing WordPress themes and plugins to streamline content delivery and user interactions, ensuring a seamless and fast browsing experience for all users."],
    href: "https://www.benzinga.com/",
    nofollow: true,
    demo: (
      <svg className="text-slate-300 w-48 grayscale" stroke="currentColor" fill="currentColor"  role="img" viewBox="0 0 471.1 63.8"  xmlns="http://www.w3.org/2000/svg"><path d="M67.7 63.8h45.2V51.9H81.4V37.3h26.1V25.4H81.4V11.9h31.7V0H67.7zm99.6-23.6L137.7 0h-20.4l6.4 8.1V64h13.6V22.1l30.6 41.7H181V0h-13.7zM47.1 31c6-1.1 11-6.7 11-14.6C58.1 7.9 51.9 0 39.6 0H0l6.2 7.9v56H41c12.3 0 18.7-7.7 18.7-17.3-.3-7.9-5.7-14.7-12.6-15.6zM19.8 12h17.1c4.6 0 7.5 2.7 7.5 6.7s-2.9 6.7-7.5 6.7H19.8V12zm17.7 40H19.8V37.3h17.7c5.2 0 8.1 3.3 8.1 7.3 0 4.6-3.1 7.3-8.1 7.4zm343.3-11.8h7.1v7.5c-3.7 3-8.3 4.7-13.1 4.8-11.4 0-19.4-8.7-19.4-20.4s8.1-20.4 19.4-20.4c5.9 0 11.4 3.1 14.6 8.1l10.8-6C395.6 6.5 387.5 0 374.7 0c-18.1 0-33.1 12.5-33.1 31.9s14.8 31.9 33.1 31.9c10 .2 19.5-4.1 26.1-11.5V28.7h-29.2l9.2 11.5zm-61.5 0L289.6 0h-20.3l6.3 8.1V64h13.7V22.1l30.6 41.7h13V0h-13.6zM446 0h-26.3l6.3 8.1-1.1 3.1L404.5 64h15.4l4-10.8h27.5l4 10.8h15.4L446 0zm-18.6 41.2l10-27.5 10 27.5h-20zM247.7 0h13.7v64.1h-13.7zm-10.9 11V0h-48.1v11.9h30.2l-30.2 41v10.9h48.6V51.9h-30.9z" ></path></svg>
    ),
  },
  {
    logo: "/logos/nue-logo-dark.png",
  title: "Nue",
  bullets: [ "Developed a modern, visually appealing company website utilizing React, Next.js, and a headless CMS architecture for dynamic content management.", "Employed AWS S3, Amplify, and Cloudfront for efficient hosting and delivery of static assets, ensuring optimal site performance.", "Integrated Framer Motion to craft a seamless and interactive user experience, elevating the site's engagement level.", ],

  demo: (
   
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" className="w-16 text-slate-200" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
   
  ),
  large: false,
  href:"https://www.nue.io",
  nofollow: true,
},
{
  logo: "/logos/armory-logo-blue.png",

  title: "Armory",
  subtitle: "Acquired by Harness",
  bullets: [ "Directed the rebuild of the company's website with WordPress CMS and a custom Gutenberg block theme, complementing a strategic rebranding effort.", "Served as the technical lead for go-to-market strategies, driving the alignment of technical and marketing efforts for product launches.","Overhauled email automation processes and created user-friendly templates, streamlining marketing communications and engagement."],

  demo: (
    
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="w-16 text-slate-200" xmlns="http://www.w3.org/2000/svg"><path d="M209.68 883.264c-20.112 41.807-32.802 69.666-144.689 73.73 3.216-107.968 23.792-119.552 64.992-140.08 17.296-8.624 38.832-19.344 62.113-37.248l-38.96-49.744c-18.4 14.128-35.329 21.568-51.697 29.712C32.8 793.858.45 827.569.45 988.289l.543 32.704 31.456-.704c169.632 0 201.328-38.32 233.104-104.32 6.96-14.464 10.832-24.24 22.56-43.729l-47.456-43.104c-14.224 19.408-23.104 37.872-30.976 54.128zm495.279-694.607c-70.768 0-128.352 57.583-128.352 128.335 0 70.784 57.6 128.353 128.352 128.353s128.336-57.584 128.336-128.352c0-70.752-57.6-128.336-128.336-128.336zm0 192.415c-35.328 0-64.08-28.752-64.08-64.08 0-35.313 28.752-64.08 64.08-64.08s64.08 28.767 64.08 64.08c-.016 35.344-28.752 64.08-64.08 64.08zm318.821-351.76c-.976-15.968-13.63-28.771-29.598-29.955 0 0-179.088-13.056-351.376 51.28-62.944 23.504-114.752 60.737-163.104 117.137-40.32 47.025-80.385 132.032-115.745 202.608-13.664 27.248-26.72 53.313-37.792 73.217H148.15a32.003 32.003 0 0 0-23.936 10.768L6.917 581.503A31.993 31.993 0 0 0 .388 612.51c3.44 10.785 12.32 18.945 23.329 21.44l190.944 43.665c13.007 16.064 34.687 40.097 69.376 78.593l72.335 80.192 38.945 164.72a31.984 31.984 0 0 0 21.231 23.056c3.233 1.024 6.576 1.568 9.904 1.568a31.95 31.95 0 0 0 20.832-7.712l118.56-117.936a31.981 31.981 0 0 0 11.184-24.288v-165.12c15.936-9.904 44.191-25.152 70.783-40.032 72.464-40.496 180.624-90.912 225.472-130.784 63.153-56.128 86.16-97.28 108.752-158.112 53.712-144.688 42.288-344.031 41.744-352.447zM922.001 359.469c-19.712 53.072-37.568 84.83-91.248 132.558-39.664 35.232-148.128 85.824-214.192 122.769-49.312 27.568-78.848 43.664-91.792 54.256a31.949 31.949 0 0 0-11.76 24.784v167.248l-67.52 74.193-28.752-121.6a31.949 31.949 0 0 0-7.393-14.064c-58.847-65.216-147.743-163.808-154.56-171.632a32.017 32.017 0 0 0-17.568-10.848L90.624 583.597l71.904-76H344.56a31.988 31.988 0 0 0 27.264-15.248c14.08-22.928 30.416-55.536 49.344-93.296 32.048-63.952 71.92-148.544 107.12-189.632 41.584-48.528 83.824-79.009 136.896-98.848C783.28 66.445 905.152 61.805 960.864 62.22c1.04 59.008-1.184 195.824-38.863 297.248z"></path></svg>
  ),
  href:"https://www.armory.io/",
  nofollow: true,
},

{
  title: "General Assembly",
  bullets: ["Led a comprehensive 12-week course on front-end web development, equipping students with current industry practices and technologies.","Provided students with individualized technical support and constructive feedback, enhancing their learning outcomes and performance."],
  href: "https://generalassemb.ly/instructors/steven-zimmer/16517",
  demo: (
    <svg className="text-slate-300 grayscale" width="128" height="43" viewBox="0 0 227 76" stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_99_3769)"><path d="M94.3968 4.19531C95.7489 4.19531 96.9207 4.38723 97.9122 4.78936C98.9037 5.18234 99.724 5.73069 100.373 6.43441C101.022 7.12899 101.482 7.96065 101.752 8.9294C102.022 9.88902 102.122 10.9309 102.031 12.0367L96.3348 13.042C96.3077 12.1373 96.1184 11.3878 95.7669 10.7938C95.4154 10.1997 94.9466 9.89816 94.3517 9.89816C93.9551 9.89816 93.6396 9.98041 93.4053 10.1358C93.1709 10.3003 92.9726 10.4922 92.8374 10.7298C92.6932 10.9583 92.603 11.2142 92.5399 11.4975C92.4859 11.7717 92.4588 12.0184 92.4588 12.2195V27.7378C92.4588 28.1491 92.558 28.5421 92.7563 28.9168C92.9546 29.3006 93.4143 29.4834 94.1444 29.4834C94.7033 29.4834 95.172 29.328 95.5325 29.0264C95.8931 28.7157 96.0824 28.3227 96.0824 27.8201V23.1408H94.0993V17.9315H101.95V27.5185C101.95 30.0318 101.283 31.9327 99.9673 33.2305C98.6423 34.5282 96.7764 35.1771 94.3607 35.1771C91.6566 35.1771 89.6826 34.5374 88.4477 33.2487C87.2128 31.9693 86.5908 30.0409 86.5908 27.4728V12.2012C86.5908 9.77935 87.2578 7.84184 88.6009 6.37957C89.9349 4.91731 91.8729 4.19531 94.4058 4.19531" ></path><path d="M104.455 34.9117V4.45996H118.219V10.1445H110.323V16.6151H117.227V22.3088H110.323V29.218H118.219V34.9117H104.455Z"></path><path d="M131.162 18.8542V4.45996H136.904V34.9117H131.919L128.395 26.0284L126.33 20.2524H126.114V34.9117H120.246V4.45996H125.384L128.917 13.2975L130.945 18.8542H131.162Z" ></path><path d="M140.052 34.9117V4.45996H153.825V10.1445H145.929V16.6151H152.825V22.3088H145.929V29.218H153.825V34.9117H140.052Z" ></path><path d="M163.097 4.45996C164.332 4.45996 165.468 4.61533 166.505 4.91692C167.541 5.21851 168.434 5.73031 169.182 6.44316C169.93 7.15602 170.507 8.08821 170.93 9.23975C171.345 10.3913 171.552 11.7987 171.552 13.462C171.552 15.5366 171.282 17.2274 170.732 18.5343C170.182 19.8503 169.353 20.9013 168.226 21.6873L172.544 34.9025H166.55L163.007 23.049H161.845V34.9025H155.977V4.45996H163.097ZM161.845 10.1445V17.3188H162.755C163.188 17.3188 163.584 17.2639 163.963 17.1634C164.341 17.0629 164.675 16.8618 164.981 16.5694C165.279 16.2769 165.522 15.8931 165.693 15.4087C165.865 14.9243 165.955 14.2937 165.955 13.5077C165.955 12.3379 165.675 11.488 165.117 10.9488C164.558 10.4096 163.828 10.1445 162.935 10.1445H161.854H161.845Z" ></path><path d="M183.857 28.9621H179.458L178.556 34.9117H172.337L178.034 4.45996H185.2L190.941 34.9117H184.767L183.857 28.9621ZM180.882 18.5069L180.278 23.3598H183L182.441 18.5069L181.792 12.3379H181.531L180.882 18.5069Z" ></path><path d="M192.446 34.9117V4.45996H198.314V29.218H206.21V34.9117H192.446Z"></path><path d="M96.2526 65.4191H91.8538L90.9434 71.3687H84.7329L90.4296 40.917H97.5956L103.337 71.3687H97.163L96.2526 65.4191ZM93.278 54.9639L92.6741 59.8168H95.3963L94.8374 54.9639L94.1884 48.795H93.927L93.278 54.9639Z"></path><path d="M119.772 62.4028C119.772 63.8011 119.646 65.0714 119.403 66.2138C119.159 67.3471 118.745 68.325 118.15 69.1201C117.564 69.9243 116.762 70.5458 115.752 70.9754C114.743 71.414 113.481 71.6334 111.957 71.6334C110.578 71.6334 109.388 71.4232 108.397 71.0119C107.405 70.6006 106.594 70.034 105.981 69.312C105.359 68.59 104.909 67.7584 104.62 66.7987C104.332 65.8483 104.188 64.8247 104.188 63.7463L110.101 62.613C110.155 63.7189 110.326 64.5505 110.596 65.108C110.867 65.6655 111.372 65.9397 112.111 65.9397C112.534 65.9397 112.868 65.8391 113.111 65.6289C113.355 65.4279 113.535 65.1628 113.661 64.843C113.787 64.5231 113.877 64.1392 113.913 63.7097C113.958 63.271 113.977 62.8323 113.977 62.4028C113.977 61.7905 113.931 61.2787 113.85 60.8766C113.76 60.4653 113.616 60.118 113.4 59.8256C113.183 59.5331 112.886 59.2772 112.516 59.0579C112.138 58.8385 111.678 58.6101 111.137 58.3816C109.668 57.7692 108.487 57.1386 107.595 56.4806C106.702 55.8226 106.017 55.128 105.549 54.3786C105.071 53.6383 104.764 52.8524 104.62 52.0207C104.476 51.189 104.404 50.2843 104.404 49.2881C104.404 48.036 104.548 46.8754 104.836 45.8152C105.125 44.7551 105.576 43.8412 106.198 43.0826C106.82 42.324 107.622 41.73 108.613 41.2913C109.605 40.8526 110.804 40.6333 112.219 40.6333C113.715 40.6333 114.95 40.8709 115.933 41.3553C116.915 41.8397 117.681 42.452 118.24 43.1923C118.799 43.9325 119.196 44.7642 119.43 45.6598C119.655 46.5646 119.772 47.442 119.772 48.2828L113.986 49.5531C113.986 49.1145 113.968 48.7032 113.922 48.3285C113.877 47.9538 113.787 47.6065 113.643 47.3049C113.499 46.9942 113.309 46.7565 113.066 46.5829C112.823 46.4093 112.489 46.3179 112.066 46.3179C111.669 46.3179 111.353 46.4184 111.128 46.6012C110.903 46.7931 110.723 47.0216 110.596 47.3049C110.47 47.5791 110.38 47.8989 110.344 48.2462C110.299 48.5935 110.281 48.9317 110.281 49.2515C110.281 49.6628 110.308 50.0284 110.362 50.3482C110.416 50.6681 110.56 50.9788 110.795 51.2713C111.02 51.5637 111.363 51.8471 111.804 52.1212C112.246 52.3954 112.868 52.697 113.67 53.0169C115.04 53.5744 116.131 54.1593 116.933 54.7625C117.735 55.3748 118.339 56.0419 118.763 56.7731C119.177 57.5042 119.448 58.3267 119.583 59.2407C119.709 60.1637 119.772 61.2056 119.772 62.3663"></path><path d="M137.122 62.4028C137.122 63.8011 136.996 65.0714 136.753 66.2138C136.51 67.3471 136.095 68.325 135.5 69.1201C134.914 69.9243 134.112 70.5458 133.102 70.9754C132.093 71.414 130.831 71.6334 129.308 71.6334C127.928 71.6334 126.739 71.4232 125.747 71.0119C124.756 70.6006 123.944 70.034 123.331 69.312C122.709 68.59 122.259 67.7584 121.97 66.7987C121.682 65.8483 121.538 64.8247 121.538 63.7463L127.451 62.613C127.505 63.7189 127.667 64.5505 127.937 65.108C128.208 65.6655 128.713 65.9397 129.452 65.9397C129.875 65.9397 130.209 65.8391 130.452 65.6289C130.696 65.4279 130.876 65.1628 131.002 64.843C131.128 64.5231 131.218 64.1392 131.254 63.7097C131.3 63.271 131.318 62.8323 131.318 62.4028C131.318 61.7905 131.273 61.2787 131.191 60.8766C131.101 60.4653 130.957 60.118 130.741 59.8256C130.524 59.5331 130.227 59.2772 129.857 59.0579C129.479 58.8385 129.019 58.6101 128.478 58.3816C127.009 57.7692 125.828 57.1386 124.936 56.4806C124.043 55.8226 123.358 55.128 122.89 54.3786C122.412 53.6383 122.105 52.8524 121.961 52.0207C121.817 51.189 121.745 50.2843 121.745 49.2881C121.745 48.036 121.889 46.8754 122.178 45.8152C122.466 44.7551 122.917 43.8412 123.539 43.0826C124.161 42.324 124.963 41.73 125.954 41.2913C126.946 40.8526 128.145 40.6333 129.56 40.6333C131.056 40.6333 132.291 40.8709 133.274 41.3553C134.256 41.8397 135.022 42.452 135.581 43.1923C136.14 43.9325 136.537 44.7642 136.771 45.6598C136.996 46.5646 137.113 47.442 137.113 48.2828L131.327 49.5531C131.327 49.1145 131.309 48.7032 131.264 48.3285C131.218 47.9538 131.128 47.6065 130.984 47.3049C130.84 46.9942 130.651 46.7565 130.407 46.5829C130.164 46.4093 129.83 46.3179 129.407 46.3179C129.01 46.3179 128.695 46.4184 128.469 46.6012C128.244 46.7931 128.064 47.0216 127.937 47.3049C127.811 47.5791 127.721 47.8989 127.685 48.2462C127.64 48.5935 127.622 48.9317 127.622 49.2515C127.622 49.6628 127.649 50.0284 127.703 50.3482C127.766 50.6681 127.901 50.9788 128.136 51.2713C128.361 51.5637 128.704 51.8471 129.145 52.1212C129.587 52.3954 130.209 52.697 131.011 53.0169C132.381 53.5744 133.472 54.1593 134.274 54.7625C135.076 55.3748 135.68 56.0419 136.104 56.7731C136.519 57.5042 136.789 58.3267 136.924 59.2407C137.05 60.1637 137.113 61.2056 137.113 62.3663"></path><path d="M139.537 71.3687V40.917H153.301V46.6107H145.405V53.0812H152.31V58.7749H145.405V65.6842H153.301V71.3687H139.537Z" ></path><path d="M163.911 65.4191L162.658 61.5258L161.288 57.0202H161.072V71.3687H155.204V40.917H160.684L163.659 49.06L165.687 55.0919H165.948L168.021 48.9229L170.951 40.917H176.431V71.3687H170.563V57.1482H170.392L168.977 61.8823L167.814 65.4191H163.911Z" ></path><path d="M191.014 55.4483C191.708 55.6859 192.276 56.0149 192.718 56.4536C193.169 56.8923 193.52 57.3949 193.8 57.9615C194.07 58.5282 194.268 59.1496 194.385 59.8259C194.503 60.4931 194.557 61.1785 194.557 61.8823C194.557 65.1449 193.854 67.5485 192.438 69.0748C191.032 70.6102 188.932 71.3687 186.138 71.3687H179.495V40.917H186.273C188.95 40.917 190.951 41.6298 192.294 43.0647C193.628 44.4904 194.304 46.6107 194.304 49.4073C194.304 50.0196 194.241 50.6228 194.106 51.226C193.98 51.82 193.782 52.3867 193.52 52.9076C193.259 53.4377 192.925 53.9038 192.502 54.3059C192.087 54.7171 191.591 55.0187 191.014 55.2289V55.4483ZM188.68 49.5809C188.68 48.3837 188.463 47.5886 188.031 47.1956C187.598 46.8026 186.904 46.6016 185.958 46.6016H185.354V52.6426H186.084C187.814 52.6426 188.671 51.619 188.671 49.5809H188.68ZM188.932 61.4984C188.932 60.2646 188.725 59.4055 188.31 58.9029C187.896 58.4002 187.265 58.1535 186.435 58.1535H185.354V65.675H186.39C186.94 65.675 187.373 65.5653 187.706 65.346C188.04 65.1267 188.292 64.8251 188.481 64.4412C188.671 64.0574 188.788 63.6187 188.851 63.116C188.905 62.6134 188.941 62.0742 188.941 61.4893" ></path><path d="M197.666 71.3687V40.917H203.534V65.6842H211.43V71.3687H197.666Z" ></path><path d="M217.669 52.0302L218.733 46.9123L220.022 40.917H226.232L220.41 58.9851V71.3687H214.533V58.9851L208.665 40.917H214.92L216.38 47.0037L217.453 52.0302H217.669Z"></path><path d="M32.9906 0C32.9906 2.54983 35.0277 4.61528 37.5426 4.61528C40.0574 4.61528 42.0946 2.54069 42.0946 0L47.7102 1.13326C46.7457 3.48202 47.8544 6.18722 50.1709 7.16511C52.4875 8.13386 55.1556 7.01888 56.111 4.67012L60.8794 7.89625C59.1036 9.69666 59.1036 12.6212 60.8794 14.4216C62.6551 16.222 65.5395 16.222 67.3152 14.4216L70.4971 19.2562C68.1715 20.2341 67.0719 22.9302 68.0363 25.2881C68.9918 27.646 71.6599 28.761 73.9764 27.7831L75.1032 33.4768C72.5883 33.4768 70.5512 35.5422 70.5512 38.0921C70.5512 40.6419 72.5973 42.7074 75.1032 42.7074L73.9855 48.4102C71.6599 47.4323 69.0008 48.5564 68.0363 50.9052C67.0719 53.254 68.1806 55.9592 70.4971 56.9279L67.3152 61.7625C65.5395 59.9621 62.6551 59.9621 60.8794 61.7625C59.1036 63.563 59.1036 66.4875 60.8794 68.2879L56.111 71.514C55.1556 69.1561 52.4875 68.0411 50.1709 69.019C47.8454 69.9969 46.7457 72.693 47.7102 75.0417L42.0946 76.175C42.0946 73.6252 40.0574 71.5597 37.5426 71.5597C35.0277 71.5597 32.9906 73.6252 32.9906 76.175L27.375 75.0417C28.3395 72.693 27.2398 69.9878 24.9142 69.019C22.5977 68.0411 19.9296 69.1561 18.9741 71.514L14.2058 68.2879C15.9815 66.4875 15.9815 63.563 14.2058 61.7625C12.4301 59.9621 9.55465 59.9621 7.77893 61.7625L4.59705 56.937C6.92262 55.9592 8.0223 53.2631 7.05782 50.9143C6.09334 48.5564 3.43427 47.4414 1.11771 48.4193L0 42.7165C2.51486 42.7165 4.54297 40.651 4.54297 38.1012C4.54297 35.5514 2.50584 33.4859 0 33.4859L1.11771 27.7922C3.43427 28.761 6.10236 27.646 7.05782 25.2881C8.0223 22.9393 6.9136 20.2341 4.59705 19.2654L7.77893 14.4308C9.55465 16.2312 12.4391 16.2312 14.2058 14.4308C15.9815 12.6303 15.9815 9.7058 14.2058 7.91452L18.9741 4.6884C19.9386 7.03716 22.5977 8.16128 24.9142 7.18339C27.2398 6.2055 28.3395 3.50944 27.375 1.16067L32.9906 0.0274175V0Z" ></path><path d="M27.3689 15.5464C24.8 15.5464 22.8259 16.2958 21.4739 17.8038C20.1128 19.3026 19.4277 21.2949 19.4277 23.7899V52.688C19.4277 55.3292 20.0677 57.3124 21.3206 58.6284C22.5826 59.9536 24.5746 60.6116 27.3329 60.6116C29.7936 60.6116 31.6955 59.9445 33.0386 58.601C34.3817 57.2667 35.0577 55.3109 35.0577 52.7245V39.2534H27.7745V44.609H29.0906V53.0444C29.0906 53.5471 28.9103 53.9675 28.5317 54.2782C28.1621 54.5889 27.6934 54.7534 27.1165 54.7534C26.3774 54.7534 25.8997 54.5615 25.7014 54.1685C25.5031 53.7755 25.4039 53.3734 25.4039 52.953V23.7899C25.4039 23.5797 25.4309 23.333 25.494 23.0496C25.5481 22.7663 25.6563 22.5013 25.7915 22.2637C25.9357 22.0261 26.125 21.8159 26.3774 21.6514C26.6208 21.4868 26.9362 21.4046 27.3419 21.4046C27.3419 21.4046 27.396 21.4046 27.423 21.4046C27.8196 21.4046 28.1441 21.4868 28.3875 21.6514C28.6399 21.8159 28.8382 22.0169 28.9734 22.2637C29.1176 22.5013 29.2167 22.7663 29.2708 23.0496C29.3249 23.3421 29.361 23.5797 29.361 23.7899V30.5163H35.3371V23.7899C35.3371 21.2949 34.6521 19.3026 33.291 17.8038C31.9389 16.2958 29.9649 15.5464 27.3869 15.5464" fill="black"></path><path d="M49.821 15.8213H42.5378L36.7329 60.3473H43.0516L44.4127 49.5266H48.0182L49.3793 60.3473H55.6529L49.821 15.8213ZM46.2155 44.5457C44.3856 44.5457 42.9074 43.0286 42.9074 41.1459C42.9074 39.2633 44.3856 37.7462 46.2155 37.7462C48.0453 37.7462 49.5235 39.2633 49.5235 41.1459C49.5235 43.0286 48.0362 44.5457 46.2155 44.5457Z" fill="black"></path></g><defs><clipPath id="clip0_99_3769"><rect width="226.233" height="76" fill="black"></rect></clipPath></defs></svg>
  ),
},

  {
    logo:"/logos/punchcut-logo.png",
    title: "Punchcut",
    bullets: [ "Enhanced website performance and conducted technical SEO optimizations, significantly improving search visibility and user experience.","Identified and eradicated a sophisticated spam link infection, restoring website integrity and safeguarding against future security threats."],
   
    demo: (
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-16 text-slate-200" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16.24 11.51l1.57-1.57-3.75-3.75-1.57 1.57-4.14-4.13c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l4.13 4.13L3 17.25V21h3.75l4.76-4.76 4.13 4.13c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-4.13-4.13zm-7.06-.44L5.04 6.94l1.89-1.9L8.2 6.31 7.02 7.5l1.41 1.41 1.19-1.19 1.45 1.45-1.89 1.9zm7.88 7.89l-4.13-4.13 1.9-1.9 1.45 1.45-1.19 1.19 1.41 1.41 1.19-1.19 1.27 1.27-1.9 1.9zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34c-.47-.47-1.12-.29-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>
      ),
    href:"https://punchcut.com/",
    nofollow: true,
  },
  {
    logo: "/logos/prokeep-logo.png",
  
    title: "Prokeep",
    bullets: [ "Led the technical migration of the company website from Webflow to HubSpot CMS, facilitating content management and scalability.","Served as the technical lead during rebranding initiatives, ensuring a consistent and impactful brand representation across digital assets."],
    
    demo: (
     
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="w-16 text-slate-200" xmlns="http://www.w3.org/2000/svg"><path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-11zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25.222 25.222 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56V3.224zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009a68.14 68.14 0 0 1 .496.008 64 64 0 0 1 1.51.048zm1.39 1.081c.285.021.569.047.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a65.81 65.81 0 0 1 1.692.064c.327.017.65.037.966.06z"></path></svg>
   
      ),
    href:"https://www.prokeep.com/",
    nofollow: true,
  },
  
  
{
  logo: "/logos/bloomtech-logo-dark.png",
  title: "BloomTech",
  bullets: [ "Spearheaded a strategic revamp of the student sign-up process, resulting in a 30% increase in enrollments due to improved user experience.", "Developed an innovative activity tracker to visualize student progress, boosting sprint completion rates by 15% through enhanced engagement and motivation."],
  demo: (
      <svg stroke="currentColor" fill="currentColor" className="w-16 text-slate-200" strokeWidth="0" version="1.1" viewBox="0 0 18 16"  xmlns="http://www.w3.org/2000/svg"><path d="M3.5 2h-3c-0.275 0-0.5 0.225-0.5 0.5v11c0 0.275 0.225 0.5 0.5 0.5h3c0.275 0 0.5-0.225 0.5-0.5v-11c0-0.275-0.225-0.5-0.5-0.5zM3 5h-2v-1h2v1z"></path><path d="M8.5 2h-3c-0.275 0-0.5 0.225-0.5 0.5v11c0 0.275 0.225 0.5 0.5 0.5h3c0.275 0 0.5-0.225 0.5-0.5v-11c0-0.275-0.225-0.5-0.5-0.5zM8 5h-2v-1h2v1z"></path><path d="M11.954 2.773l-2.679 1.35c-0.246 0.124-0.345 0.426-0.222 0.671l4.5 8.93c0.124 0.246 0.426 0.345 0.671 0.222l2.679-1.35c0.246-0.124 0.345-0.426 0.222-0.671l-4.5-8.93c-0.124-0.246-0.426-0.345-0.671-0.222z"></path><path d="M14.5 13.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5z"></path></svg>
  ),
  href:"https://www.bloomtech.com/",
  nofollow: true,
},

    {
      logo: "/logos/stanford-med-logo.png",
    title: "Stanford Med",
    bullets: [ "Managed Drupal upgrades from version 7 to 9, ensuring the website's technology stack was up-to-date and secure.", "Transitioned websites to a more robust server architecture, enhancing site reliability and performance.","Integrated websites with Box and SAML authentication, improving user access management and security protocols."],
  
    demo: (
     
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" className="w-16 text-slate-200" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
     
    ),
    large: false,
    href:"https://med.stanford.edu/",
    nofollow: true,
  },
  
  // {
  //   title: "Performance first",
  //   description:
  //     "Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.",
  //   // demo: <WebVitals />,
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



// const strings = ["Marketing", "Strategy", "Designer", "Developer", "Zim"];

export const buttons = [
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
    link: "mailto:webdevzim@gmail.com",
    title: "webdevzim@gmail.com",
    icon: <Email className="text-white" />
  },
];




export const projects: DictItem[] = [
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
  // {
  //   title: "Statamic CMS Demo",
  //   bullets: [ "Developed a robust full-stack web application using Laravel, PHP, and Vanilla JavaScript, styled with TailwindCSS, and hosted on the Statamic CMS platform.", "This comprehensive project included setting up server management through Laravel Forge, ensuring optimal performance, security, and scalability.","The application featured a custom-built, responsive UI/UX design, seamless content management capabilities, and advanced functionality tailored to meet specific business needs.", "The successful deployment of this application on a managed server environment facilitated streamlined workflows, enhanced user engagement, and provided a solid foundation for future scalability and feature expansion."],
    
  //   href: "https://statamic.webdevzim.com/",
  //   demo: (
  //     <svg className="w-16 text-slate-600"  stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M19.78 21.639c1.754 0 2.398-.756 2.398-2.607v-3.62c0-1.722.837-2.704 1.641-3.17.242-.145.242-.483 0-.644-.836-.531-1.64-1.642-1.64-3.122v-3.54c0-1.996-.548-2.575-2.302-2.575H4.123c-1.754 0-2.301.58-2.301 2.575v3.556c0 1.48-.805 2.59-1.641 3.122a.377.377 0 0 0 0 .643c.804.451 1.64 1.433 1.64 3.17v3.605c0 1.85.645 2.607 2.399 2.607zm-7.82-3.299c-1.883 0-3.25-.563-4.522-1.673a.891.891 0 0 1-.29-.676.83.83 0 0 1 .193-.563l.403-.515c.193-.242.402-.354.643-.354.274 0 .531.112.805.29a5.331 5.331 0 0 0 2.993.884c.885 0 1.593-.37 1.593-1.126 0-1.963-6.533-.885-6.533-5.294 0-2.366 1.93-3.685 4.441-3.685 1.77 0 3.074.515 4.04 1.126.24.161.402.483.402.805 0 .193-.049.37-.161.53l-.29.435c-.21.29-.45.435-.756.435-.21 0-.435-.08-.676-.193a5.07 5.07 0 0 0-2.398-.564c-.95 0-1.513.515-1.513 1.046 0 2.012 6.534.918 6.534 5.198 0 2.414-1.947 3.894-4.908 3.894z"></path></svg>
           
       
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



export const certifications = [{
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