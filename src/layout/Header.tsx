import Heading from "../components/Heading";
import ThemeToggle from "../hooks/ThemeToggle";

const Header = () => {
  return (
    <div className="flex w-full flex-row items-center justify-center p-4 pt-8">
      <div className="flex w-[80%] flex-col items-start justify-between">
        <Heading heading="arcen" />
        <p className="text-xs font-medium text-secondary-light dark:text-secondary-dark md:text-xl">
          IPA /ˈɑrsn̩ / — pronounced{" "}
          <mark className="rounded-full bg-secondary-dark/40 px-1.5 font-mono font-bold text-secondary-dark dark:bg-secondary-light/40 dark:text-secondary-light">
            {" "}
            r-sen{" "}
          </mark>
        </p>
      </div>
      <div className="flex w-[20%] items-center justify-end">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
