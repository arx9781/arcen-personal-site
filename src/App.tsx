import ThemeToggle from "./components/ThemeToggle";
import Heading from "./components/Heading";
import Anchor from "./components/Anchor";
import SocialButtons from "./components/SocialButtons";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaSpotify,
  FaThreads,
  FaXTwitter,
} from "react-icons/fa6";

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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
          <div className="p-4">
            <div className="px-0 md:px-2">
              <Heading heading="links" />
            </div>
            <SocialButtons
              link="https://github.com/arx9781"
              app="Github"
              id="arx9781"
              icon={<FaGithub />}
            />
            <SocialButtons
              link="https://www.threads.net/@arx9781"
              app="Threads"
              id="arx9781"
              icon={<FaThreads />}
            />
            <SocialButtons
              link="https://instagram.com/arx9781"
              app="Instagram"
              id="arx9781"
              icon={<FaInstagram />}
            />
            <SocialButtons
              link="https://open.spotify.com/user/e9z0rzwxyw9dwv7sngwscw26q?si=e8f4ec727152412d"
              app="Spotify"
              id="adi"
              icon={<FaSpotify />}
            />
            <SocialButtons
              link="https://x.com/morphinearc?t=mt7mr3w5p4WPg6lOi_eNIA&s=09"
              app="X"
              id="morphinearc"
              icon={<FaXTwitter />}
            />
            <SocialButtons
              link="https://discordapp.com/users/502370675386875907"
              app="Discord"
              id="arx9781"
              icon={<FaDiscord />}
            />
          </div>
        </div>
        <div className="mt-10 p-4 pb-8 text-left font-medium text-primary-light dark:text-primary-dark md:mt-20">
          <span className="text-gradient">MIT</span> 2024 - present ©{" "}
          <span className="text-gradient">arcen</span>
        </div>
      </div>
    </div>
  );
}

export default App;
