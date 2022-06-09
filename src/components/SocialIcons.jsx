import { EmailIcon, GithubIcon, LinkedinIcon } from '@/configs/icons'

const SocialIcons = () => {
  return (
    <span className="flex gap-x-5">
      <a
        href="mailto:awesome@dev.com"
        className="group cursor-pointer"
        aria-label="Email"
        title="Email"
      >
        <EmailIcon />
      </a>
      <a
        href="https://github.com/username"
        className="group cursor-pointer"
        aria-label="Github"
        title="Github"
      >
        <GithubIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/username"
        className="group cursor-pointer"
        aria-label="Linkedin"
        title="Linkedin"
      >
        <LinkedinIcon />
      </a>
    </span>
  )
}
export default SocialIcons
