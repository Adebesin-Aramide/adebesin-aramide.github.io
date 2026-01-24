import { useState } from 'react';
import { ProjectsSection } from '../../assets/styles';
import image2 from "../../assets/img/proj1.png"
import image3 from "../../assets/img/proj2.png"
import image1 from "../../assets/img/proj3.png"


const projectsData = [
    {
      title: "MediVoice: Multimodal AI for Accessible Medication Management:",
      category: "GenAI",
      thumbnail: image2, 
      tags: ["NLP", "Python", 'Huggingface'],
      description:
        "MediVoice is a voice-based mobile app that helps visually impaired people manage their medications on their own. With this app, users can take a picture of a drug label and ask questions by speaking.",
      highlights: [
        "Improved medication access for visually impaired",
        "Presented it as a poster at DLI 2025",
        "Developed it into a research paper"
      ],
      links: {
        github: "https://github.com/Adebesin-Aramide/Medivoice", 
        // article: "https://medium.com/maternify-article" 
      }
    },
    {
      title: "Foodie Lens - Yoruba Traditional Dishes Identification App:",
      category: "Deep Learning",
      thumbnail: image3, 
      tags: ["Python", "Computer Vision", "Streamlit"],
      description:
        "Foodie Lens is a machine learning-based application designed to identify various traditional Yoruba dishes from images and provide the corresponding recipes and cooking instructions",
      highlights: [
        "Achieved high accuracy in classification",
        "Curated food dataset as a result of this projet",
        "Presented it as a poster at DSN AI Bootcamp 2024 and won second best poster award"
      ],
      links: {
        github: "https://github.com/Adebesin-Aramide/Foodie_lens", 
        website: "https://huggingface.co/spaces/Aramide/foodie_lens" 
      }
    },
    {
      title: "UlcerMate: AI-Powered Ulcer Management System",
      category: "Machine Learning",
      thumbnail: image1, 
      tags: ["Python", "Scikit learn", "ML"],
      description:
        "UlcerMate is an AI-powered app that helps users log meals, symptoms, and medications to identify personal ulcer triggers and detect risk patterns.",
      highlights: [
        "Improved healthcare for ulcer patient",
        "used real data from actual ulcer patients to train the model"
      ],
      links: {
        github: "https://github.com/Adebesin-Aramide/Ulcer_Management_System", 
        // article: "https://medium.com/cassava-leaf-disease" 
      }
    }
  ];


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', ...new Set(projectsData.map(project => project.category))];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <ProjectsSection id="projects">
      <h1>Featured Projects</h1>
      
      <div className="filters">
        {categories.map(category => (
          <button
            key={category}
            className={activeFilter === category ? 'active' : ''}
            onClick={() => setActiveFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.thumbnail} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              
              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>

              <p>{project.description}</p>

              <div className="highlights">
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="highlight-item">
                    <span className="highlight-icon">✦</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {project.links.article && (
                <a href={project.links.article} className="read-more" target="_blank" rel="noopener noreferrer">
                  Read Article →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </ProjectsSection>
  );
};

export default Projects;