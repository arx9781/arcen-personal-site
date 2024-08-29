import { Link } from "react-router-dom";

const SocialButtons = ({
  link,
  app,
  id,
  icon,
}: {
  link: string;
  app: string;
  id: string;
  icon: any;
}) => {
  return (
    <Link
      to={link}
      className="mt-3 flex items-center justify-between rounded-md px-0 py-0.5 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-translucent-accent-light dark:hover:bg-translucent-accent-dark md:px-2"
    >
      <p className="w-full text-sm font-medium text-primary-light dark:text-primary-dark md:text-base">
        {app}{" "}
        <span className="text-secondary-light dark:text-secondary-dark">
          //
        </span>{" "}
        <span className="text-gradient">{id}</span>
      </p>
      <span className="flex h-6 w-6 items-center justify-center text-primary-light dark:text-primary-dark">
        {icon}
      </span>
    </Link>
  );
};

export default SocialButtons;
