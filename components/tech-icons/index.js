import reactjs from './react.svg'
import docker from './docker.svg'
import gatsby from './gatsby.svg'
import java from './java.svg'
import javascript from './javascript.svg'
import linux from './linux.svg'
import mongodb from './mongodb.svg'
import nextjs from './nextjs.svg'
import tsnode from './ts-node.svg'
import ubuntu from './ubuntu.svg'
import redux from './redux.svg'
import python from './python.svg'
import nodejs from './nodejs.svg'
import aws from './aws.svg'



// Icons taken from: https://simpleicons.org/

const components = {
  reactjs,
  docker,
  gatsby,
  java,
  javascript,
  linux,
  mongodb,
  nextjs,
  tsnode,
  ubuntu,
  redux,
  python,
  nodejs,
  aws
}

const TechIcon = ({ kind, href, size = 8, tooltip = "" }) => {
  if (!href) return null

  const TechSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600 "
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      // data-toggle="tooltip" data-placement="top" title={tooltip}
      aria-label={tooltip} data-cooltipz-dir="top"
    >
      <span className="sr-only">{kind}</span>
      <TechSvg
        className={`fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default TechIcon
