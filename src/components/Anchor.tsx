import { FaGithub } from "react-icons/fa6";

const Anchor = ({ link }: { link: string }) => {
  return (
    // <a
    //   href={link}
    //   className="bg-translucent-accent-light border-2 border-secondary-light font-medium text-xs text-secondary-dark px-2 py-1 rounded-full dark:bg-translucent-accent-dark dark:border-secondary-dark dark:text-secondary-light"
    // >
    //   View on Github
    // </a>
    /* From Uiverse.io by abdulGitHb */
    <a href={link}>
      <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-full bg-translucent-accent-light dark:bg-translucent-accent-dark backdrop-blur-lg px-2 md:px-3 py-1 text-base font-semibold text-secondary-dark dark:text-secondary-light transition-all duration-300 ease hover:scale-110">
        <span className="text-base font-black flex items-center justify-between md:gap-x-4 gap-x-2">
          <FaGithub />
          <code>View on Github</code>
        </span>
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
          <div className="relative h-full w-10 bg-white/20 dark:bg-neutral-600/20"></div>
        </div>
      </button>
    </a>
  );
};

export default Anchor;
