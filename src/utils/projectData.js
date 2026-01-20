
// Initial set of projects for the portfolio application
 
export const initialProjects = [
  {
    id: 1,
    title: 'Enterprise E-Commerce Platform',
    category: 'Full-Stack Web',
    description: 'Architected and deployed a scalable multi-vendor marketplace with real-time inventory management, AI-powered recommendations, and seamless payment processing. Handles 50k+ daily transactions.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Stripe', 'Docker']
  },
  {
    id: 2,
    title: 'Real-Time Analytics Dashboard',
    category: 'Data Visualization',
    description: 'Built an interactive business intelligence platform with live data streaming, custom reporting, and predictive analytics. Processes millions of events per day with sub-second latency.',
    technologies: ['Vue.js', 'Python', 'Apache Kafka', 'ClickHouse', 'D3.js', 'WebSocket']
  },
  {
    id: 3,
    title: 'Mobile Health & Fitness App',
    category: 'Mobile Development',
    description: 'Developed cross-platform mobile application with workout tracking, nutrition planning, and social features. Integrated with wearable devices and achieved 4.8★ rating with 100k+ downloads.',
    technologies: ['React Native', 'Firebase', 'GraphQL', 'TypeScript', 'Redux', 'iOS', 'Android']
  },
  {
    id: 4,
    title: 'AI-Powered Chatbot Platform',
    category: 'Machine Learning',
    description: 'Created an intelligent customer service automation system using natural language processing and machine learning. Reduced support tickets by 60% and improved response time by 10x.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'MongoDB', 'NLP', 'Kubernetes', 'GCP']
  },
  {
    id: 5,
    title: 'Blockchain Supply Chain Tracker',
    category: 'Blockchain',
    description: 'Engineered a decentralized supply chain management solution with smart contracts for transparency and traceability. Deployed on Ethereum with IPFS for document storage.',
    technologies: ['Solidity', 'Web3.js', 'Ethereum', 'IPFS', 'Next.js', 'Hardhat', 'MetaMask']
  },
  {
    id: 6,
    title: 'Cloud Infrastructure Automation',
    category: 'DevOps',
    description: 'Designed and implemented Infrastructure as Code solution for multi-cloud deployment with CI/CD pipelines, automated testing, and monitoring. Reduced deployment time by 80%.',
    technologies: ['Terraform', 'Jenkins', 'Ansible', 'Kubernetes', 'Prometheus', 'Grafana', 'AWS']
  },
  {
    id: 7,
    title: 'Video Streaming Platform',
    category: 'Media & Entertainment',
    description: 'Developed a Netflix-like streaming service with adaptive bitrate streaming, content recommendation engine, and offline viewing capabilities. Serves 1M+ monthly active users.',
    technologies: ['Angular', 'Node.js', 'MongoDB', 'FFmpeg', 'CDN', 'HLS', 'AWS S3']
  },
  {
    id: 8,
    title: 'IoT Smart Home System',
    category: 'IoT & Embedded',
    description: 'Built end-to-end IoT solution for home automation with voice control, mobile app, and edge computing. Integrates with 50+ smart devices and uses MQTT for communication.',
    technologies: ['C++', 'Arduino', 'MQTT', 'Flutter', 'AWS IoT', 'Alexa', 'Raspberry Pi']
  }
];

// Helper function to get projects by category 

export const getProjectsByCategory = (category) => {
  return initialProjects.filter(project => project.category === category);
};

// Helper function to get all unique categories 

export const getAllCategories = () => {
  return [...new Set(initialProjects.map(project => project.category))];
};

// Helper function to get projects by technology

export const getProjectsByTechnology = (technology) => {
  return initialProjects.filter(project => 
    project.technologies.some(tech => 
      tech.toLowerCase() === technology.toLowerCase()
    )
  );
};