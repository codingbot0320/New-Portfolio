import Blogs from "@/components/Blogs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BlogPage = () => {
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