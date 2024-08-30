import { NavLink } from "react-router-dom";
import Heading from "../components/Heading";
import Anchor from "../components/Anchor";

const Projects = () => {
  return (
    <div className="text-fade-anim p-4">
      <Heading heading="projects" />
      <div className="mt-4">
        <div className="my-4 flex flex-row items-center justify-between">
          <Anchor
            link="https://github.com/arx9781/arxe.gallery"
            text="Image filter made w/ reactjs"
          />
        </div>
        <div className="my-4 flex flex-row items-center justify-between">
          <Anchor
            link="https://github.com/arx9781/Mono-cl"
            text="Mono-cl VSCode Theme"
          />
        </div>
        <div className="my-4 flex flex-row items-center justify-between">
          <Anchor
            link="https://github.com/arx9781/password_gen"
            text="Minimal Password Generator"
          />
        </div>
        <div className="my-4 flex flex-row items-center justify-between">
          <Anchor
            link="https://github.com/arx9781/arcen-personal-site"
            text="arcen.site"
          />
        </div>
        <NavLink to="/blog">
          <div className="flex flex-row items-center text-base text-secondary-dark underline decoration-neutral-800 transition-all duration-300 ease-in-out hover:-translate-y-2 dark:text-secondary-light">
            <p className="w-fit text-nowrap pt-3">a link to my blog page</p>
            <span className="relative ml-2 h-[1px] w-full translate-y-2 bg-secondary-dark dark:bg-secondary-light"></span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Projects;
