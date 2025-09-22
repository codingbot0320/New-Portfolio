import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Design: Trends to Watch in 2024",
      excerpt: "Exploring the latest design trends that are shaping the future of web development, from AI integration to immersive experiences.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
      tags: ["Web Design", "UI/UX", "Trends"]
    },
    {
      id: 2,
      title: "Building Responsive Websites: A Complete Guide",
      excerpt: "Learn how to create websites that look and work perfectly on all devices. A comprehensive guide to responsive design principles.",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "Development",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80",
      tags: ["Responsive", "CSS", "Mobile"]
    },
    {
      id: 3,
      title: "The Art of Color in Digital Design",
      excerpt: "Understanding color theory and psychology in digital design. How to choose the perfect color palette for your next project.",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      tags: ["Color Theory", "Design", "Psychology"]
    },
    {
      id: 4,
      title: "My Journey as a Freelance Developer",
      excerpt: "From student to successful freelancer - sharing my experiences, challenges, and lessons learned along the way.",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Personal",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      tags: ["Freelancing", "Career", "Tips"]
    },
    {
      id: 5,
      title: "JavaScript Best Practices for Modern Development",
      excerpt: "Essential JavaScript patterns and practices that every developer should know to write clean, maintainable code.",
      date: "2023-12-20",
      readTime: "7 min read",
      category: "Development",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
      tags: ["JavaScript", "Best Practices", "Code Quality"]
    },
    {
      id: 6,
      title: "Creating Engaging User Experiences",
      excerpt: "Discover the principles of UX design that keep users engaged and coming back for more. Real examples and case studies included.",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "UX",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
      tags: ["UX Design", "User Research", "Engagement"]
    }
  ];

  const categories = ["All", "Design", "Development", "UX", "Personal"];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blogs" className="section-padding bg-navy-light/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Latest Insights
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Blog & Articles</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Sharing knowledge, experiences, and insights about web development, 
            design trends, and the freelancing journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-delay-1">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              className="rounded-full px-6 py-2 hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer fade-in-delay-${index % 3 + 1}`}
            >
              {/* Featured Image */}
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {post.category}
                  </Badge>
                </div>
              </div>

              {/* Post Meta */}
              <div className="flex items-center text-text-muted text-sm mb-4 space-x-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Post Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-text-secondary mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-xs border-primary/20 text-primary/80"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Read More */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-text-muted text-sm">
                  <User className="w-4 h-4" />
                  <span>Sujal Fuldevare</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary-foreground hover:bg-primary group-hover:translate-x-1 transition-all duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center fade-in-delay-2">
          <Button className="btn-hero px-8 py-3">
            Load More Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Newsletter Subscription */}
        <div className="glass-card p-8 rounded-2xl mt-16 text-center fade-in-delay-2">
          <h3 className="text-2xl font-bold mb-4 gradient-text">
            Stay Updated
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Get notified about new articles, tutorials, and insights delivered directly to your inbox.
            Join our community of developers and designers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-background/50 border border-white/10 text-foreground placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button className="btn-hero px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;