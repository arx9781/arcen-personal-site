import ThemeToggle from "./components/ThemeToggle";
import Heading from "./components/Heading";
import Anchor from "./components/Anchor";

function App() {
  return (
    <div className="min-w-screen min-h-screen bg-background-light transition-all duration-500 ease-in-out dark:bg-background-dark">
      <div className="mx-auto w-[90%] sm:w-[50%]">
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
        <p className="p-4 text-justify text-base text-primary-light dark:text-primary-dark">
          hi, i'm <span className="text-gradient">aditya</span> aka{" "}
          <span className="text-gradient">arcen</span>, a software engineering
          student; primarily working on the frontend with a heavy focus on{" "}
          <span className="text-gradient">reactjs</span>,{" "}
          <span className="text-gradient">nextjs</span>,{" "}
          <span className="text-gradient">tailwindcss</span>, and{" "}
          <span className="text-gradient">typescript</span>. my design language
          being <span className="text-gradient">minimalism</span> and{" "}
          <span className="text-gradient">neo-brutalism</span>, as you can see
          in this website.
          <br />
          <br />
          fascinated by the <span className="text-gradient">
            internet
          </span> and <span className="text-gradient">computers</span>, i've
          always wanted to make those programs myself and — that's why i'm{" "}
          <span className="text-gradient">here</span>.
          <br />
          <br />
          outside of programming, i maintain a relatively{" "}
          <span className="text-gradient">low profile</span>. playing games like{" "}
          <span className="text-gradient">valorant</span> and{" "}
          <span className="text-gradient">mobile legends</span>, and also
          watching <span className="text-gradient">anime</span> sometimes. if
          you're interested, hit me up on my{" "}
          <span className="text-gradient">
            socials for playing games and working on a project
          </span>
          .
        </p>
        <div className="p-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
