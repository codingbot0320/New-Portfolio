import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { blogPosts } from "@/data/blogData";

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen relative">
        <Navigation />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Button onClick={() => navigate('/blogs')} className="btn-hero">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      <article className="pt-32 pb-20">
        <div className="container-custom max-w-4xl">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate('/blogs')}
            className="mb-8 hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Articles
          </Button>

          {/* Header */}
          <div className="mb-8">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-text-muted mb-8">
              <div>
                <div className="font-semibold text-foreground">{post.author.name}</div>
                <div className="text-sm">Web Developer & Designer</div>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button variant="outline" className="btn-outline">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" className="btn-outline">
                <Bookmark className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative overflow-hidden rounded-2xl mb-12 shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-sm border-primary/20 text-primary/80"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-xl text-text-secondary leading-relaxed mb-8">
              {post.excerpt}
            </div>

            {/* Full Content */}
            <div className="space-y-6 text-text-secondary leading-relaxed">
              {post.content.map((section, index) => (
                <div key={index}>
                  {section.type === 'heading' && (
                    <h2 className="text-3xl font-bold text-foreground mt-12 mb-4">
                      {section.text}
                    </h2>
                  )}
                  {section.type === 'subheading' && (
                    <h3 className="text-2xl font-semibold text-foreground mt-8 mb-3">
                      {section.text}
                    </h3>
                  )}
                  {section.type === 'paragraph' && (
                    <p className="text-lg mb-4">
                      {section.text}
                    </p>
                  )}
                  {section.type === 'list' && (
                    <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                      {section.items?.map((item, i) => (
                        <li key={i} className="text-lg">{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.type === 'quote' && (
                    <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic text-xl text-foreground bg-primary/5 rounded-r-lg">
                      {section.text}
                    </blockquote>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="glass-card border-primary/10 p-8 mt-16 rounded-2xl">
            <div className="flex items-start gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">About {post.author.name}</h3>
                <p className="text-text-secondary mb-4">
                  Web developer and designer passionate about creating beautiful, functional digital experiences. 
                  Specialized in modern web technologies and UI/UX design.
                </p>
                <div className="flex gap-4">
                  <Button className="btn-hero" onClick={() => navigate('/#contact')}>
                    Get in Touch
                  </Button>
                  <Button variant="outline" className="btn-outline" onClick={() => navigate('/blogs')}>
                    More Articles
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;
