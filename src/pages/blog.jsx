import { BlogSection } from "../assets/styles";
import Nav from "../comp/LandingPage/nav";
import Footer from "../comp/LandingPage/footer";
import blog1 from "../assets/img/blog1.jpeg"
import blog2 from "../assets/img/blog2.jpeg"
import blog3 from "../assets/img/blog3.jpeg"
import blog4 from "../assets/img/blog4.jpeg"
import blog5 from "../assets/img/blog5.jpeg"
import blog6 from "../assets/img/blog6.jpeg"




const blogPosts = [
    {
      id: 1,
      title: "I lived Through It: A reflection on 2025",
      excerpt: "This is a reminder to anyone reading this. When you do not have a clear vision of what you want, it is easy to drift through life without truly working toward anything.",
      author: "Aramide Adebesin",
      // publication: "AI Mind",
      date: "Jan 13, 2026",
      readTime: "6 min read",
      image: blog1,
      content: "A sneak peek of my experiences throughout 2025, it includes my personal growth, challenges, and lessons learned over the year.",
      links: [
        {
          text: "Read on Medium",
          url: "https://medium.com/@adebesinaramide/i-lived-through-it-a-reflection-on-2025-f4550e8ede80"
        }
      ]
    },
    {
      id: 2,
      title: "Intensive Learning, Lasting Impact: DSN AI 2024 Bootcamp",
      excerpt: "The qualifying hackathon was quite challenging, as a lot of people were competing for the top position on the leaderboard including myself",
      author: "Aramide Adebesin",
      // publication: "Personal Blog",
      date: "Nov 1, 2024",
      readTime: "8 min read",
      image: blog3,
      content: "A personal reflection on the intensive learning and the lasting impact of attending the DSN AI 2024 Bootcamp, describing the skills gained and experiences that shaped my data science journey",
      links: [
        {
          text: "Read on Medium",
          url: "https://medium.com/@adebesinaramide/intensive-learning-lasting-impact-dsn-ai-2024-bootcamp-c537a6b2f33d"
        }
      ]
    },
    {
      id: 3,
      title: "Deep Learning, Deeper Connections: From Preparation to Insight at Indaba ",
      excerpt: "September 2023, was the very first time I heard of Deep Learning Indaba",
      author: "Aramide Adebesin",
      // publication: "Personal Blog",
      date: "Oct 9, 2024",
      readTime: "9 min read",
      image: blog3,
      content: "A comprehensive account of my experience at the Deep Learning Indaba 2024, from prepartions to insights gain and the overall experience.",
      links: [
        {
          text: "Read on Medium",
          url: "https://medium.com/@adebesinaramide/deep-learning-deeper-connections-from-preparation-to-insight-at-indaba-c77fad84c984"
        }
      ]
    },
    {
      id: 4,
      title: "Web scraping Google Images Using Selenium",
      excerpt: "Web scraping involves using bots to extract data from websites",
      author: "Aramide Adebesin",
      // publication: "Personal Blog",
      date: "Sept 12, 2024",
      readTime: "3 min read",
      image: blog4,
      content: "A detailed explanation on how to perform web scraping of Google Images using Selenium in Python to automatically collect image data.",
      links: [
        {
          text: "Read on Medium",
          url: "https://medium.com/@adebesinaramide/web-scraping-google-images-using-selenium-259178add043"
        }
      ]
    },
    {
      id: 5,
      title: "My Datathon Experience",
      excerpt: "Yayyyy, that was the sound I made after successfully downloading it",
      author: "Aramide Adebesin",
      publication: "Medium",
      date: "Oct 10, 2023",
      readTime: "6 min read",
      image: blog5, // <-- add an image variable for this post
      content: "A reflection of my personal experience participating in a datathon, reflecting on the challenges, learnings, and insights gained from the competition..",
      links: [
        {
          text: "Read on Medium",
          url: "https://medium.com/@adebesinaramide/my-datathon-experience-e4cbe5a3ab2c"
        }
      ]
    },
    {
      id: 6,
      title: "5 Important Steps to Data Preprocessing",
      excerpt: "This article highlights the significance of data preprocessing and delves into five essential steps commonly employed in this process.",
      author: "Aramide Adebesin",
      publication: "Medium",
      date: "Oct 6, 2023",
      readTime: "3 min read",
      image: blog6, // <-- add an image variable for this post
      content: "Five key steps to effectively preprocess data — a crucial foundational stage in any data science workflow.",
      links: [
        {
          text: "Read on Medium",
          url: "https://medium.com/@adebesinaramide/5-important-steps-to-data-preprocessing-data-preprocessing-is-a-very-crucial-step-in-data-science-27d907494a1c"
        }
      ]
    }
  ];

const Blog = () => {
  return (
    <>
      <Nav />
      <BlogSection>
        <div className="blog-header">
          <h1>Blog</h1>
          <p>Thoughts, insights, and experiences from my journey in AI and technology</p>
        </div>
        
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-overlay">
                {post.publication && (
                    <span className="publication-badge">{post.publication}</span>
                )}
                </div>
              </div>
              
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                
                <div className="blog-links">
                  {post.links && post.links.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="blog-link"
                    >
                      Link to Blog
                    </a>
                  ))}
                </div>
                
                <div className="blog-author">
                  <span>By {post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </BlogSection>
      <Footer />
    </>
  );
};

export default Blog;
