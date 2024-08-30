import Heading from "../components/Heading";
import SocialButtons from "../components/SocialButtons";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaSpotify,
  FaThreads,
  FaXTwitter,
} from "react-icons/fa6";

const Links = () => {
  return (
    <div className="text-fade-anim px-4 md:p-4">
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
  );
};

export default Links;
