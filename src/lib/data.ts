// ─── Portfolio Data ──────────────────────────────────────────────────────────
// Replace this dummy data with your actual content.
export const PERSONAL = {
  name: "Kavali Pavan",
  tagline: "I Build What Matters",
  email: "kavalipavan22@gmail.com",
  linkedin: "https://www.linkedin.com/in/kavali-pavan-598515274/",
  github: "https://github.com/KAVALIPAVAN/",
  twitter: "https://twitter.com/pavan_dev",
  cvUrl: "/Pavan_resume.pdf",
  bio: `I'm a multidisciplinary engineer who lives at the crossroads of web development,
    data analytics, and machine learning. I love turning complex problems into
    beautiful, functional products that make a real impact.`,
  shortBio: `Full-stack developer, data scientist,Data Analyst, and ML engineer crafting elegant
    solutions at the intersection of software and intelligence. From scalable
    APIs to predictive models — I make data do extraordinary things.`,
};

export const STATS = [
  { num: "1+", label: "Years Exp" },
  { num: "20+", label: "Projects" },
  { num: "4+", label: "Tech Stacks" },
];

// export const TYPED_PHRASES = [
//   "Web Developer",
//   "Data Scientist",
//   "ML Engineer",
//   "Data Analyst",
//   "Problem Solver",
// ];

export const TYPED_PHRASES = [
  "Full Stack Developer",
  "AI / ML Engineer",
  "Generative AI Developer",
  "Data Analyst",
  "Problem Solver",
];

export const SKILLS = [
  {
    icon: "🤖",
    title: "Generative AI",
    pills: [
      "LLMs", "Prompt Engineering", "RAG (Retrieval-Augmented Generation)",
      "LangChain", "Vector Databases", "Embeddings", "Ollama (Local LLMs)", "Hugging Face",
      "Fine-tuning (LoRA / PEFT)", "AI Agents", "Chatbot Development"
    ],
  },
    {
    icon: "🧠",
    title: "Machine Learning",
    pills: [
      "Scikit-learn", "TensorFlow", "PyTorch", "Keras",
      "XGBoost", "Transformers", "MLflow",
    ],
  },
    {
    icon: "📊",
    title: "Data Analytics",
    pills: [
      "Python (Pandas)", "NumPy", "Power BI", "Tableau",
      "SQL", "Excel ", "Matplotlib", "Seaborn", "Plotly",
    ],
  },
  {
    icon: "🎨",
    title: "Frontend Development",
    pills: [
      "React.js", "Next.js", "TypeScript", "Tailwind CSS",
      , "HTML5 / CSS3", "Framer Motion", "Redux", "Responsive Design", "GSAP",
    ],
  },
  {
    icon: "⚙️",
    title: "Backend Development",
    pills: [
      "Node.js", "Python", "Express.js",
      "MYSQL", "PostgreSQL", "MongoDB", "REST APIs",
    ],
  },
  {
    icon: "🛠️",
    title: "Tools & DevOps",
    pills: [
      "Git / GitHub", "Docker", "Vercel",
       "Jupyter", "VS Code", "Postman","Cursor",
    ],
  },
];

export const TECH_STACK = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Python", icon: "🐍" },
  { name: "Node.js", icon: "🟢" },
  // { name: "FastAPI", icon: "🔥" },
  // { name: "PostgreSQL", icon: "🐘" },
  { name: "SQL", icon: "🗄️" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Docker", icon: "🐋" },
  // { name: "AWS", icon: "☁️" },
  { name: "PyTorch", icon: "🧠" },
  { name: "TensorFlow", icon: "🔭" },
  { name: "Tailwind", icon: "🏗️" },
  { name: "Pandas", icon: "📊" },
  // { name: "Redis", icon: "🔴" },
  { name: "GitHub", icon: "🐙" },
  { name: "Web Scraping", icon: "🕷️" },
  { name: "Express.js", icon: "🚂" },
  { name: "Scikit-learn", icon: "📈" },
];

// export const PROJECTS = [
//   {
//     num: "/01",
//     label: "ML",
//     featured: true,
//     title: "End-to-End Student Performance Prediction Pipeline (CatBoost)",
//     description:
//       "Built a production-ready ML pipeline to ingest, clean, and transform student data, train and evaluate CatBoost models,and produce reproducible artifacts for deployment. Implemented modular training, prediction, logging, and experiment tracking to enable reliable, scalable inference and model lifecycle management.",
//     tags: ["Next.js", "Python", "FastAPI", "OpenAI", "PostgreSQL"],
//     github: "https://github.com/KAVALIPAVAN/SMS_Spam_classifier",
//     demo: "https://example.com",
//     gradient: "linear-gradient(135deg,#1a1040,#0d1a30)",
//   },
//   {
//     num: "/02",
//     label: "NLP",
//     featured: false,
//     title: "SMS Spam Classification Web App",
//     description:
//       "Built and deployed an NLP-based SMS spam classifier using TF-IDF and Multinomial Naive Bayes, improving accuracy on 5,574 SMS messages.",
//     tags: ["Python", "XGBoost", "MLflow", "Docker", "FastAPI"],
//     github: "https://github.com/KAVALIPAVAN/SMS_Spam_classifier",
//     demo: "https://example.com",
//     gradient: "linear-gradient(135deg,#0d2010,#1a2030)",
//   },
//   {
//     num: "/03",
//     label: "DL",
//     featured: false,
//     title: "Deep Learning Face Mask Classifier",
//     description:
//       "Developed a CNN-based face mask detection model using TensorFlow with data augmentation.",
//     tags: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Redis"],
//     github: "https://github.com/KAVALIPAVAN/Mask_detect_cnn",
//     demo: "https://example.com",
//     gradient: "linear-gradient(135deg,#201008,#2a1530)",
//   },
//   {
//     num: "/04",
//     label: "DA",
//     featured: false,
//     title: "Banking Customer Retention& Insights Analysis",
//     description:
//       "Analyzed banking customer dataset using Python to uncover retention patterns and behavioral insights. Developed an interactive Power BI dashboard and applied predictive modeling for churn-risk identification.",
//     tags: ["PyTorch", "HuggingFace", "FastAPI", "AWS"],
//     github: "https://github.com/KAVALIPAVAN/Banking_analysis_DA",
//     demo: "https://example.com",
//     gradient: "linear-gradient(135deg,#0f1f35,#1a0a30)",
//   },
//   {
//     num: "/05",
//     label: "DA",
//     featured: false,
//     title: "Customer Shopping Behavior Analysis using Python & SQL",
//     description:
//       "Analyzed banking customer dataset using Python to uncover retention patterns and behavioral insights. Developed an interactive Power BI dashboard and applied predictive modeling for churn-risk identification.",
//     tags: ["Python", "Pandas", "Power BI", "SQL"],
//     github: "https://github.com/KAVALIPAVAN/Customer_behavior_analysis_DA",
//     demo: "https://example.com",
//     gradient: "linear-gradient(135deg,#1a1515,#0a1a20)",
//   },
//   {
//     num: "/06",
//     label: "web app",
//     featured: false,
//     title: "Tic-Tac-Toe Multiplayer",
//     description:
//       "Real-time game using WebRTC,Socket.IO for peer-to-peer communication, with responsive React UI.",
//     tags: ["Python", "OpenCV", "YOLOv8", "WebSocket"],
//     github: "https://github.com/KAVALIPAVAN/tic-tac-toe-multiplayer-",
//     demo: "https://tic-tac-toe-multiplayer-eight.vercel.app/",
//     gradient: "linear-gradient(135deg,#0a2020,#201020)",
//   },
// ];

export const PROJECTS = [
    {
    num: "/01",
    label: "GenAI",
    featured: true,
    title: "Adaptive AI Interviewer",
    description:
      "Built a full-stack mock interview platform using React, FastAPI, and a locally-hosted LLM via Ollama, featuring JWT authentication, adaptive chain-of-thought questioning, real-time competency tracking, and persistent session history stored in MongoDB.",
    tags: ["React", "FastAPI", "Python", "Ollama", "MongoDB", "JWT", "RAG", "LLM", "Vite", "REST API"],
    github: "https://github.com/KAVALIPAVAN/Adaptive-AI-Interviewer",
    demo: "https://example.com",
    gradient: "linear-gradient(135deg,#201008,#2a1530)",
  },
  {
    num: "/02",
    label: "ML",
    featured: false,
    title: "End-to-End Student Performance Prediction Pipeline (CatBoost)",
    description:
      "Built a production-ready ML pipeline to ingest, clean, and transform student data, train and evaluate CatBoost models,and produce reproducible artifacts for deployment. Implemented modular training, prediction, logging, and experiment tracking to enable reliable, scalable inference and model lifecycle management.",
    tags: ["Python", "CatBoost", "Pandas", "Scikit-learn", "MLflow"],
    github: "https://github.com/KAVALIPAVAN/mlproject",
    demo: "https://example.com",
    gradient: "linear-gradient(135deg,#1a1040,#0d1a30)",
  },

  {
    num: "/03",
    label: "NLP",
    featured: false,
    title: "SMS Spam Classification Web App",
    description:
      "Built and deployed an NLP-based SMS spam classifier using TF-IDF and Multinomial Naive Bayes, improving accuracy on 5,574 SMS messages.",
    tags: ["Python", "TF-IDF", "Scikit-learn", "NLP", "streamlit"],
    github: "https://github.com/KAVALIPAVAN/SMS_Spam_classifier",
    demo: "https://example.com",
    gradient: "linear-gradient(135deg,#0d2010,#1a2030)",
  },

  // {
  //   num: "/03",
  //   label: "DL",
  //   featured: false,
  //   title: "Deep Learning Face Mask Classifier",
  //   description:
  //     "Developed a CNN-based face mask detection model using TensorFlow with data augmentation.",
  //   tags: ["Python", "TensorFlow", "CNN", "NumPy"],
  //   github: "https://github.com/KAVALIPAVAN/Mask_detect_cnn",
  //   demo: "https://example.com",
  //   gradient: "linear-gradient(135deg,#201008,#2a1530)",
  // },

  {
    num: "/04",
    label: "DA",
    featured: false,
    title: "Banking Customer Retention & Insights Analysis",
    description:
      "Analyzed banking customer dataset using Python to uncover retention patterns and behavioral insights. Developed an interactive Power BI dashboard and applied predictive modeling for churn-risk identification.",
    tags: ["Python", "Pandas", "Power BI", "SQL", "EDA"],
    github: "https://github.com/KAVALIPAVAN/Banking_analysis_DA",
    demo: "https://example.com",
    gradient: "linear-gradient(135deg,#0f1f35,#1a0a30)",
  },

  {
    num: "/05",
    label: "DA",
    featured: false,
    title: "Customer Shopping Behavior Analysis using Python & SQL",
    description:
      "Performed EDA and SQL-based analysis on shopping behavior dataset. Built visual dashboards and extracted actionable insights.",
    tags: ["Python", "Pandas", "SQL", "Matplotlib", "Jupyter"],
    github: "https://github.com/KAVALIPAVAN/Customer_behavior_analysis_DA",
    demo: "https://example.com",
    gradient: "linear-gradient(135deg,#1a1515,#0a1a20)",
  },

  {
    num: "/06",
    label: "Web App",
    featured: false,
    title: "Tic-Tac-Toe Multiplayer",
    description:
      "Real-time multiplayer game using WebRTC and Socket.IO for peer-to-peer communication with responsive React UI.",
    tags: ["React", "Node.js", "Socket.IO", "WebRTC", "JavaScript"],
    github: "https://github.com/KAVALIPAVAN/tic-tac-toe-multiplayer-",
    demo: "https://tic-tac-toe-multiplayer-eight.vercel.app/",
    gradient: "linear-gradient(135deg,#0a2020,#201020)",
  },
];

export const EXPERIENCE = [
  {
    company: "Tech Morphers",
    role: "Web Developer Intern ",
    duration: "Mar 2025 — May 2025",
    description:
      "Collaborated using Git and maintained version-controlled workflows.Developed structured data tracking features and optimized web performance",
    tags: ["Next.js",  "Web Scraping",  "PostgreSQL", "Tailwind CSS"],
  },
  {
    company: "CoinHarbour Startup",
    role: "MERN Stack Developer",
    duration: "Feb 2025 — Mar 2025",
    description:
      "Designed dashboards with structured data visualization components.Implemented RESTful APIs and ensured reliable backend data handling.",
    tags: ["React.js", "Golang","Docker", "SQL"],
  },
  // {
  //   company: "CloudEdge Startup",
  //   role: "Frontend Developer",
  //   duration: "Sep 2020 — May 2021",
  //   description:
  //     "Developed React-based SaaS dashboard from scratch. Improved performance by 60% through code-splitting and lazy loading. Implemented CI/CD pipelines reducing deployment time by 80%.",
  //   tags: ["React", "TypeScript", "Node.js", "Docker"],
  // },
  // {
  //   company: "Freelance / Contract",
  //   role: "Web Developer & Data Analyst",
  //   duration: "2018 — 2020",
  //   description:
  //     "Completed 20+ client projects spanning e-commerce platforms, data dashboards, and custom web apps. Served clients across fintech, healthcare, and retail verticals.",
  //   tags: ["React", "Python", "MySQL", "Tableau"],
  // },
];
