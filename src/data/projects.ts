export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  github?: string;
  demo: string;
  color: string;
  features: string[];
  challenges?: string;
  mobileSourceCode?: string;
  webSourceCode?: string;
  backendSourceCode?: string;
  webDemo?: string;
  mobileApp?: boolean;
}

export const projects: Project[] = [
  {
    id: "ai-study-companion",
    title: "AutoCourse, AI Study Companion",
    shortDescription:
      "An intelligent study assistant that uses Gemini's Generative AI to generate flashcards, practice quizzes, and matching games from lecture notes or study guides. It also includes an AI Study ChatBot.",
    fullDescription:
      "AutoCourse is a web and mobile app designed to help students streamline their revision process. By uploading lecture notes or study guides, the application uses advanced Natural Language Processing (NLP) from Gemini's API to extract key concepts and generate interactive flashcards and highly customizable quizzes and matching games. This tool leverages the power of Large Language Models to understand context and importance, ensuring that the generated study materials are relevant and high-quality.",
    tags: [
      "React",
      "Next.js and Vercel",
      "Gemini API",
      "Tailwind CSS",
      "PostgreSQL",
      "NeonDB",
      "Web Dev",
      "App Dev",
    ],
    github: "https://github.com/shreetheman2011/AutoCourse",
    demo: "https://auto-course-studytools.vercel.app",
    color: "from-blue-500 to-cyan-500",
    features: [
      "Automatic flashcard generation from text",
      "Practice quizzes",
      "Matching games",
      "Spaced repetition algorithm for efficient learning",
    ],
    challenges:
      "One of the main challenges was ensuring the accuracy of the generated content and handling large texts within the API token limits. I implemented a chunking strategy to process long documents effectively. I also had to make sure my app was user-friendly and preserved context. I took all the feedback from my friends and made it so much better that they didn't have any more feedback to give.",
  },
  {
    id: "waste-easy",
    title: "WasteEasy",
    shortDescription:
      "A mobile-first web app that uses an incentive-based program to help users reduce their waste on organization campuses(primarily schools) and help encourage environmental sustainability and reproducibility.",
    fullDescription:
      "WasteEasy is a mobile-first web app that uses an incentive-based program to help users reduce their waste on organization campuses(primarily schools) and help encourage environmental sustainability and reproducibility. Users can take pictures of waste and report it as well as pick the waste up. They then put in their location and using image processing skills from the Gemini API, the app is able to provide recommendations for which bin in which the waste goes in as well as letting the user earn points which then transfers over to rewards that the organization that is hosting the program decides on. This incentive based method deeply drives waste reduction and has been proven and used by hundreds and soon thousands of students(as we expand all over the Livermore Valley) to be one of the best ways to manage waste.",
    tags: [
      "React",
      "MongoDB",
      "Image Processing",
      "Gemini API",
      "Node.js",
      "Software Project Management",
      "Tailwind CSS",
      "Business/Marketing",
      "Environmental Sustainability",
      "Web Dev",
      "Next.JS and Vercel",
    ],
    github: "https://github.com/shreetheman2011/wasteEasy",
    demo: "https://waste-easy.vercel.app",
    color: "from-green-500 to-emerald-500",
    features: [
      "Waste reporting and collection",
      "Incentive-based program for waste reduction",
      "Progress tracking via history and rewards/points",
      "Community leaderboards and challenges",
      "Automatic waste sorting and recommendations",
    ],
    challenges:
      "Designing a mobile-first interface that was both intuitive and feature-rich was a challenge. I had to figure out how to make a UI that users(primarily students) could use directly from their mobile devices in order to make image taking easy(no one ones to take their computers out every time). Also, I had to make sure that the app was secure and that user data was protected. I implemented encryption and secure authentication methods to ensure the privacy and confidentiality of users' personal information as it took in location data for statistical purposes for the organization to track waste reduction as well as for waste collection purposes.",
  },
  {
    id: "naam",
    title: "NAAM — Nagarathar Association Address Manager",
    shortDescription:
      "A secure cross-platform iOS, Android, and Web application built for the Nagarathar community in Northern California, serving as a private mobile/web address book and community connection platform.",
    fullDescription:
      "NAAM (Nagarathar Association Address Manager) is a cross-platform mobile(and web) application developed in partnership with the Northern California Nagarathars Association (NCNA). While it functions as a mobile address book at its core, NAAM is a full-fledged community platform that allows members to securely manage profiles, connect with other community members, send emails, and discover family connections through seamless integration with NA Tree, a Nagarathar family tree service. The app is backed by the community and is currently in beta testing with a limited user base, preparing to scale to thousands of users. A major focus of the project was designing a highly secure backend with encrypted storage to protect sensitive personal data such as addresses, phone numbers, names, and photos.",
    tags: [
      "iOS",
      "Android",
      "React Native",
      "HTML/CSS/JS",
      "Node.js",
      "MongoDB",
      "Mobile App Development",
      "Backend Engineering",
      "Encryption & Security",
      "Community Platform",
      "Analytics",
      "API Integration",
      "App Dev",
      "Web Dev",
    ],
    mobileApp: true,
    mobileSourceCode: "https://github.com/teamncna/namma-ooru-frontend",
    webSourceCode: "https://github.com/teamncna/naam.github.io",
    backendSourceCode: "https://github.com/teamncna/naam-backend",
    demo: "https://teamncna.github.io/naam.github.io",
    color: "from-orange-500 to-red-500",
    features: [
      "Secure mobile address book for community members",
      "Profile creation and self-managed updates",
      "Email connectivity within the community",
      "Planned integration with NA Tree for discovering family relationships",
      "Admin analytics and address management tools",
      "Encrypted storage of sensitive user data",
    ],
    challenges:
      "The biggest challenge was ensuring enterprise-grade security while handling highly sensitive personal data for a real community. I spent days and weeks designing, implementing, and testing encrypted storage, secure authentication, and backend safeguards to prevent data leaks. Scaling the architecture to support thousands of users while maintaining privacy, trust, and performance was a critical technical and ethical responsibility.",
  },
];
