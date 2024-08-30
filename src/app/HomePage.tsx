import { useEffect, useState } from "react";
import PageLayout from "../layout/PageLayout";
import SkeletonHeading from "../components/SkeletonLoaders/Skeleton";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return loading ? <SkeletonHeading /> : <PageLayout />;
};

export default HomePage;
