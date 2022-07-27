import { FaEnvelope, FaTelegram, FaGithub, FaCodepen } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="flex gap-8">
        <a href="mailto:enotcode@gmail.com">
          <FaEnvelope className="h-8 w-8 text-indigo-800" />
        </a>
        <a href="https://github.com/vafomin" target="_blank" rel="noreferrer">
          <FaGithub className="h-8 w-8" />
        </a>
        <a href="https://t.me/enotcode" target="_blank" rel="noreferrer">
          <FaTelegram className="h-8 w-8 text-blue-500" />
        </a>
        <a href="https://codepen.io/enotcode" target="_blank" rel="noreferrer">
          <FaCodepen className="h-8 w-8" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
