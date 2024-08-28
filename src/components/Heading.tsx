const Heading = ({ heading }: { heading: string }) => {
  return (
    <h1 className="text-3xl font-bold text-secondary-light dark:text-secondary-dark">
      {heading}
    </h1>
  );
};

export default Heading;
