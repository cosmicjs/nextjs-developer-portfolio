import { EmailIcon, GithubIcon, LinkedinIcon, PaperIcon } from '@/configs/icons'

const Socials = ({ resume, email, github, linkedin }) => {
  return (
    <div className="flex items-center">
      <a
        href={resume}
        target="_blank"
        rel="noreferrer"
        className="flex items-center mr-4 text-fore-primary border-2 border-accent w-fit px-4 py-1 rounded cursor-pointer hover:text-accent transition-colors"
      >
        <span className="mr-2">
          <PaperIcon />
        </span>
        Resume
      </a>
      <span className="flex gap-x-5 ml-2">
        <a
          href={`mailto:${email}`}
          className="group cursor-pointer"
          aria-label="Email"
          title="Email"
        >
          <EmailIcon />
        </a>
        <a
          href={`https://github.com/${github}`}
          className="group cursor-pointer"
          aria-label="Github"
          title="Github"
        >
          <GithubIcon />
        </a>
        <a
          href={`https://www.linkedin.com/in/${linkedin}`}
          className="group cursor-pointer"
          aria-label="Linkedin"
          title="Linkedin"
        >
          <LinkedinIcon />
        </a>
      </span>
    </div>
  )
}
export default Socials
