import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'
import TechIcon from '@/components/tech-icons'

export default function Home() {
  const TECH_ICON_SIZE = 8
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img
              src={siteMetadata.image}
              alt="avatar"
              className="w-48 h-48 rounded-full transition duration-500 ease-in-out hover:transform hover:-translate-y-1 hover:scale-110"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">A software geek</div>
            <div className="text-gray-500 dark:text-gray-400">
              who loves to build modern projects
            </div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Greetings! Let me begin by introducing myself. I'm Mitul Patel, and my fascination
              with software development dates back to my early teenage years.
            </p>
            <p>
              For me, the true essence of professional fulfillment lies in pursuing one's innate
              talents and passions. That's precisely why I chose to embark on a career in web
              development—it not only aligns with my strengths but also ignites a genuine sense of
              joy and purpose within me. Honesty and an unwavering work ethic are the cornerstones
              of my approach to every project.
            </p>
            <p>
              My educational background includes a degree in IT Engineering, which provided me with
              a solid foundation. Additionally, I've dedicated myself to mastering the intricacies
              of modern web design and development through various reputable courses. This
              combination of formal education and practical training has equipped me with the skills
              and knowledge needed to thrive in this dynamic field.
            </p>
            <p>
              I'm deeply committed to delivering high-quality solutions that not only meet but
              exceed my clients' expectations. With a blend of technical expertise, creativity, and
              a relentless drive for excellence, I'm eager to tackle new challenges and contribute
              meaningfully to the world of web development.
            </p>

            <div className="grid xl:grid-cols-10 sm:grid-cols-10 grid-cols-10  ">
              <TechIcon
                kind="nodejs"
                href={'https://nodejs.org/en/'}
                tooltip="NodeJs"
                size={TECH_ICON_SIZE}
              />
              <TechIcon
                kind="mongodb"
                href={'https://www.mongodb.com/'}
                tooltip="MongoDB"
                size={TECH_ICON_SIZE}
              />
              <TechIcon
                kind="aws"
                href={'https://aws.amazon.com/'}
                tooltip="AWS"
                size={TECH_ICON_SIZE}
              />
              <TechIcon
                kind="reactjs"
                href={'https://reactjs.org/'}
                tooltip="ReactJs"
                size={TECH_ICON_SIZE}
              />
              <TechIcon
                kind="redux"
                href={'https://redux.js.org/'}
                tooltip="Redux"
                size={TECH_ICON_SIZE}
              />
              <TechIcon
                kind="nextjs"
                href={'https://nextjs.org/'}
                tooltip="NextJs"
                size={TECH_ICON_SIZE}
              />
              <TechIcon
                kind="gatsby"
                href={'https://www.gatsbyjs.com/'}
                tooltip="GatsbyJs"
                size={TECH_ICON_SIZE}
              />
              <TechIcon
                kind="docker"
                href={'https://www.docker.com/'}
                tooltip="Docker"
                size={TECH_ICON_SIZE}
              />
              <TechIcon
                kind="python"
                href={'https://www.python.org/'}
                tooltip="Python"
                size={TECH_ICON_SIZE}
              />
              <TechIcon kind="linux" href={'#'} tooltip="Linux" size={TECH_ICON_SIZE} />
            </div>

            {/* <div className="grid grid-cols-6 sm:grid-cols-6 gap-2">
              <div className="">
                <img src="https://img.shields.io/badge/Code-React-informational?style=flat-square&logo=react&logoColor=white&color=2bbc8a" />
              </div>
              <div className="">
                <img src="https://img.shields.io/badge/Code-Gatsby-informational?style=flat-square&logo=gatsby&logoColor=white&color=2bbc8a" />
              </div>
              <div className="">
                <img src="https://img.shields.io/badge/Code-Nodejs-informational?style=flat-square&logo=node.js&logoColor=white&color=2bbc8a" />
              </div>
              <div className="">
                <img src="https://img.shields.io/badge/Tools-MongoDB-informational?style=flat-square&logo=mongodb&logoColor=white&color=2bbc8a" />
              </div>
              <div className="">
                <img src="https://img.shields.io/badge/Tools-Docker-informational?style=flat-square&logo=docker&logoColor=white&color=2bbc8a" />
              </div>
              <div className="">
                <img src="https://img.shields.io/badge/Cloud-AWS-informational?style=flat-square&logo=aws&logoColor=white&color=2bbc8a" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
