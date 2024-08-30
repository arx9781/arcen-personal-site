const SkeletonHeading = () => {
  return (
    <div className="min-w-screen min-h-screen bg-background-dark transition-all duration-500 ease-in-out">
      <div className="mx-auto w-[90%] pt-8 sm:w-[50%] md:pt-4">
        <div className="h-[55px] w-full animate-pulse rounded-md bg-secondary-dark/40 dark:bg-secondary-light/40 md:h-[80px]"></div>
        <div className="mt-6 md:mt-6">
          <div className="mb-1 mt-4 h-[150px] w-full animate-pulse rounded-md bg-secondary-dark/40 dark:bg-secondary-light/40 md:h-[70px]"></div>
          <div className="mb-1 mt-6 h-[75px] w-full animate-pulse rounded-md bg-secondary-dark/40 dark:bg-secondary-light/40 md:h-[80px]"></div>
          <div className="mb-1 mt-6 h-[130px] w-full animate-pulse rounded-md bg-secondary-dark/40 dark:bg-secondary-light/40 md:h-[80px]"></div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="h-[370px] w-full animate-pulse rounded-md bg-secondary-dark/40 dark:bg-secondary-light/40 md:h-[200x]"></div>
          <div className="h-[370px] w-full animate-pulse rounded-md bg-secondary-dark/40 dark:bg-secondary-light/40 md:h-[200x]"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonHeading;
