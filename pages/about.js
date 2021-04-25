import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full transition duration-500 ease-in-out hover:transform hover:-translate-y-1 hover:scale-110" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">A software geek</div>
            <div className="text-gray-500 dark:text-gray-400">who loves to build modern projects</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Hello there! Before talking about qualifications and professional abilities, I would like to introduce myself. I am Mitul Patel and I am from India. Taking software development as a profession not only fulfills my pocket but also my heart because it has been my passion since my early teenage.
            </p>
            <p>
              I believe that people should do things in which they are good at or in which their heart lays. That’s why I chose freelance web development as my career because I believe I’m good at this and I am always honest and I am never afraid of doing hard work.
            </p>
            <p>
              I did my graduation from The Ganpat University in IT Engineering and I have taken many lessons on modern web designing and web development from famous courses. My educational background allowed me to thrive in this career and my training on this has made me a master of this section.
            </p>

            <div className="grid grid-cols-6 sm:grid-cols-6 gap-2">
              <div className=""><img  src="https://img.shields.io/badge/Code-React-informational?style=flat-square&logo=react&logoColor=white&color=2bbc8a" /></div>
              <div className=""><img  src="https://img.shields.io/badge/Code-Gatsby-informational?style=flat-square&logo=gatsby&logoColor=white&color=2bbc8a" /></div>
              <div className=""><img  src="https://img.shields.io/badge/Code-Nodejs-informational?style=flat-square&logo=node.js&logoColor=white&color=2bbc8a" /></div>
              <div className=""><img  src="https://img.shields.io/badge/Tools-MongoDB-informational?style=flat-square&logo=mongodb&logoColor=white&color=2bbc8a" /></div>
              <div className=""><img  src="https://img.shields.io/badge/Tools-Docker-informational?style=flat-square&logo=docker&logoColor=white&color=2bbc8a" /></div>
              <div className=""><img  src="https://img.shields.io/badge/Cloud-AWS-informational?style=flat-square&logo=aws&logoColor=white&color=2bbc8a" /></div>

            </div>
            
          </div>

    
        </div>
      </div>
    </>
  )
}
