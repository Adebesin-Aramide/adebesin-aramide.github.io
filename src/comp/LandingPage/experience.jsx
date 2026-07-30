import { ExperienceSection } from '../../assets/styles';

const experienceData = [
   {
    role: "Data Scientist",
    company: "Karimi Talent",
    duration: "Nov 2025 - Present",
    tags: ["Recommender Systems", "GenAI", "RAG", "LLM"],
    description: "Developed LLMs for Recommendation Systems in the Talent space",
    achievements: [
      "Built the automated vacancy ingestion pipeline behind Karimi's Discover Jobs and Company feature with over 3,800+ companies and 60,000+ job vacancies, Firecrawl scraping with LLM extraction, and a 2,500+ parser library with content-hash caching that reduced recurring API cost to near zero.",
      "Evaluated and improved the semantic job-matching engine (instructor embeddings + FAISS), building an evaluation harness for HyDE, query rewriting, and profile-augmented retrieval."
    ],
  },  

   {
    role: "Research Fellow",
    company: "SPARK (MICCAI-Endorsed Academy for African Medical Imaging Translation)",
    duration: "Feb 2026 - June 2026",
    tags: ["Medical Imaging", "Computer Vision", "Healthcare", "Deep Learning"],
    description: "Led a six-person team on a cervical cancer screening study using a Nigerian colposcopy dataset",
    achievements: [
      "Led a six-person team developing cervical lesion grading pipelines on a Nigerian colposcopy dataset, benchmarking EfficientNet-B3 against a Swin Transformer–autoencoder–BiGRU–deep belief network ensemble under strict patient-level splits with macro-recall as the clinical safety metric.",
      "Proposed a hierarchical task framing decomposing lesion grading into clinically motivated binary stages, outperforming flat 4-class and 3-class framings in precancerous recall across three seeds"
    ],
  },

  {
    role: "Data Science Tutor",
    company: "DeepTech_Ready Program",
    duration: "Sept 2024 - Present",
    tags: ["Computer Vision", "GenAI", "RAG", "LLM"],
    description: "Fostered an engaging learning environment to enhance understanding and application of advanced AI topics",
    achievements: [
      "Provided comprehensive tutoring on computer vision concept",
      "Educated learners on generative AI, focusing on the RAG"
    ],
    // links: [
    //   { text: "Research Details", url: "#" }
    // ]
  },
  {
    role: "Junior Data Scientist",
    company: "Pariti",
    duration: "Nov 2024 - April 2025",
    tags: ["EDA", "NLP", "LLM"],
    description: "Built an LLM-based recruitment chatbot, automated email processes with Zapier",
    achievements: [
      "Developed a chatbot using LLM to assist users with recruitment inquiries",
      "Worked on Large Language Models to improve the process of matching job seekers and vacancies (model selection, finetuning, deployment)",
      "Automated email workflows with Zapier"
  
    ],
    // links: [
    //   { text: "ML Collective Overview", url: "#" }
    // ]
  },
  {
    role: "Data Science Intern",
    company: "Pariti",
    duration: "Aug 2024 - Nov 2024",
    tags: ["LLM", "Embeddings", "KPI"],
    description: "Analyzed large datasets, built KPI dashboards, and applied machine learning models to support data-driven business decisions.",
    achievements: [
      "Analyzed and interpreted large datasets",
      "Developed and maintained KPI dashboards",
      "Applied machine learning models to address the business needs"
    ],
    // links: [
    //   { text: "Cakasa Engineering Services", url: "#" }
    // ]
  },
  {
    role: "AI/ML Intern",
    company: "Strategies and Yields Limited (SYL)",
    duration: "June 2024 - Nov 2024",
    tags: ["Machine Learning", "Data Science"],
    description: "Developed responsive websites and optimized web applications.",
    achievements: [
      "Contributed to the development of Qknows, a chatbot designed to meet the specific needs of Africans, enhancing user engagement and functionality.",
      "Taught data science concepts to students enrolled in the company’s academy",
      "Worked with a diverse development team"
    ],
    // links: [
    //   { text: "Credo Projects", url: "#" }
    // ]
  }
];

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <h1>Experience</h1>
      <div className="experience-grid">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3 className="role">{exp.role}</h3>
            <div className="company">{exp.company}</div>
            <div className="duration">{exp.duration}</div>
            <div className="tags">
              {exp.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
            <p className="description">{exp.description}</p>
            <ul className="achievements">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
            {exp.links && (
              <div className="links">
                {exp.links.map((link, i) => (
                  <a key={i} href={link.url}>{link.text}</a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </ExperienceSection>
  );
};

export default Experience;