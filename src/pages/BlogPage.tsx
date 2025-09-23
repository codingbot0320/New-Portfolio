import { useEffect } from "react";
import Blogs from "@/components/Blogs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <div className="pt-20">
        <Blogs showAll={true} />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;