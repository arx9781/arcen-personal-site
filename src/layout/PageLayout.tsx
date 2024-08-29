import Header from "./Header";
import Content from "./Content";
import Projects from "./Projects";
import Links from "./Links";
import Footer from "./Footer";

const PageLayout = () => {
  return (
    <div className="min-w-screen min-h-screen bg-background-light transition-all duration-500 ease-in-out dark:bg-background-dark">
      <div className="mx-auto w-[90%] sm:w-[50%]">
        <Header />
        <Content />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Projects />
          <Links />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;
