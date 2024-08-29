import { FaGithub } from "react-icons/fa6";

const Anchor = ({ link, text }: { link: string; text: string }) => {
  return (
    <a href={link}>
      <button className="group/button ease relative inline-flex items-center justify-center overflow-hidden rounded-full bg-secondary-dark/40 px-2 py-1 text-base font-semibold text-secondary-dark backdrop-blur-lg transition-all duration-300 hover:scale-110 dark:bg-secondary-light/40 dark:text-secondary-light md:px-3">
        <span className="flex items-center justify-between gap-x-2 text-sm font-black md:gap-x-4 md:text-base">
          <FaGithub />
          <code className="md:font-black">{text}</code>
        </span>
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
          <div className="relative h-full w-10 bg-white/20 dark:bg-neutral-600/20"></div>
        </div>
      </button>
    </a>
  );
};

export default Anchor;
