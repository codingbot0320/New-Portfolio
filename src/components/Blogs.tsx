import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, ArrowRight, Tag, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { blogPosts } from "@/data/blogData";

const Blogs = ({ showAll = false }: { showAll?: boolean }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const categories = ["All", "Design", "Development", "UX", "Personal"];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const displayedPosts = showAll ? filteredPosts : filteredPosts.slice(0, 3);

  return (
    <section id="blogs" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Latest Insights
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Sharing insights on web development, design trends, and the journey of freelancing.
          </p>
        </div>

        {/* Category Filter - Only show on blog page */}
        {showAll && (
          <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-delay-1">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${
                  selectedCategory === category ? "btn-hero" : "btn-outline"
                } transition-all duration-300`}
              >
                <Tag className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedPosts.map((post, index) => (
            <article
              key={post.id}
              className={`glass-card border-white/10 hover:border-primary/20 transition-all duration-300 group cursor-pointer fade-in-delay-${
                (index % 3) + 1
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 text-primary-foreground">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center justify-between text-text-muted text-sm mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title & Excerpt */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="text-xs border-primary/20 text-primary/80"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Author & Read More */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="text-sm text-text-secondary font-medium">
                    {post.author.name}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate(`/blog/${post.id}`)}
                    className="text-primary hover:text-primary-foreground hover:bg-primary group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Visit More Blogs Button - Only show on main page */}
        {!showAll && (
          <div className="text-center mb-16 fade-in-delay-2">
            <Button onClick={() => navigate("/blogs")} className="btn-hero">
              <BookOpen className="w-5 h-5 mr-2" />
              Visit More Blogs
            </Button>
          </div>
        )}

        {/* Newsletter Signup - Only show on blog page */}
        {showAll && (
          <div className="max-w-2xl mx-auto fade-in-delay-3">
            <Card className="glass-card border-white/10">
              <CardHeader className="text-center">
                <h3 className="text-2xl font-bold mb-2">
                  Subscribe to <span className="gradient-text">Newsletter</span>
                </h3>
                <p className="text-text-secondary">
                  Get the latest insights on web development, design trends, and tech innovations delivered to your inbox.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-background/50 border-white/20 focus:border-primary"
                  />
                  <Button
                    className="btn-hero sm:w-auto"
                    onClick={() => {
                      if (email) {
                        console.log("Newsletter signup:", email);
                        setEmail("");
                        // Add your newsletter signup logic here
                      }
                    }}
                  >
                    Subscribe
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <p className="text-xs text-text-muted text-center">
                  No spam ever. Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blogs;
