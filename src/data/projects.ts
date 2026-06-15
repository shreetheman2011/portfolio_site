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
  demoLabel?: string;
  status?: string;
  availability?: string;
  category?: 'featured' | 'content' | 'publications';
  comingSoon?: string; // bold callout text
}

export const projects: Project[] = [
  {
    id: "bookiq",
    title: "BookIQ AI",
    shortDescription:
      "A published iOS app that turns book and bookshelf scans into personalized recommendations, reading-level insights, deeper analysis, adaptation details, and community reviews.",
    fullDescription:
      "BookIQ AI is an App Store-published reading discovery app built to make choosing your next book feel instant and personal. Users can scan a single book to get useful context like reading level, recommendations, deeper analysis, and movie or series adaptation info. They can also scan an entire bookshelf so BookIQ can understand their taste from the books they already own or browse, then recommend titles they are more likely to enjoy. The app combines camera-based discovery, genre preferences, ratings, reviews, and AI-assisted book intelligence into one mobile-first experience for readers who want better recommendations without digging through endless lists.",
    tags: [
      "iOS",
      "AI Recommendations",
      "Camera Scanning",
      "Book Discovery",
      "Reviews",
      "Reading Analytics",
      "App Store",
      "Mobile App Development",
      "App Dev",
    ],
    demo: "https://apps.apple.com/us/app/bookiq-ai/id6763798088",
    demoLabel: "App Store",
    status: "Published on the App Store",
    availability: "Free iOS app in the Books category.",
    mobileApp: true,
    category: "featured",
    color: "from-amber-400 via-rose-500 to-fuchsia-500",
    features: [
      "Scan any book to unlock personalized recommendations and useful reading context",
      "Scan a bookshelf to infer reading taste from a real collection",
      "Reading-level insights, deeper analysis, and adaptation information",
      "Favorite-genre personalization that improves recommendations over time",
      "Ratings, written reviews, and community feedback before starting a book",
      "A polished mobile reading-discovery flow designed for fast decisions",
    ],
    challenges:
      "The core product challenge was turning messy real-world book discovery into a smooth mobile experience. BookIQ needs to feel useful after one scan, but it also has to build a richer taste profile over time from genres, scanned books, bookshelf context, ratings, and reviews. Designing that flow meant balancing quick camera-based lookup, personalized recommendation logic, book metadata, and a clean App Store-ready user experience.",
  },
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
    category: "featured",
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
    category: "featured",
    color: "from-green-500 to-emerald-500",
    comingSoon:
      "WasteEasy Lite is coming soon — a robotics evolution featuring a never-before-seen sorting mechanism. Put it on the tray and walk away. It uses computer vision to automatically classify your waste and route it into the correct bin through a precision trapdoor system.",
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
    category: "featured",
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
  {
    id: "compile-after-class",
    title: "Compile After Class",
    shortDescription:
      "A podcast where I break down the real side of building software as a student — featuring guest conversations, project deep-dives, the tech industry, and the intersection of code and life.",
    fullDescription:
      "Compile After Class is a podcast hosted by me, exploring what it actually looks like to build software, learn to code, and navigate the tech world as a student. We bring guests on — developers, founders, and people doing interesting things in tech — for honest conversations about real projects, the lessons that only come from shipping things, and what it means to grow as a developer while still in school. The name is a nod to the build step every programmer knows — the moment after the work is done where you find out if it all holds together.",
    tags: [
      "Podcast",
      "Technology",
      "Student Developer",
      "Software Engineering",
      "Content Creation",
    ],
    demo: "https://www.youtube.com/@shreemanickaraja",
    demoLabel: "Watch on YouTube",
    category: "content",
    color: "from-purple-500 to-indigo-600",
    features: [
      "Real talk on building software as a student",
      "Deep dives into personal projects and what they taught me",
      "Perspectives on the tech industry, career paths, and developer culture",
      "Honest, unfiltered episodes — no fluff",
    ],
  },
  {
    id: "shared-oxygen",
    title: "Shared Oxygen",
    shortDescription:
      "A science fiction novel exploring what happens when the boundaries of survival, identity, and human connection collapse aboard an isolated deep-space station.",
    fullDescription:
      "Shared Oxygen is a science fiction novel set aboard a deteriorating deep-space research station where a small crew must confront a crisis that forces them to question what they owe each other when resources run out. The story weaves themes of survival, moral tension, and the fragile systems — biological and social — that keep people alive. Equal parts thriller and character study, it explores what it means to share more than air with the people you're stuck with.",
    tags: [
      "Science Fiction",
      "Novel",
      "Author",
      "Fiction",
    ],
    demo: "https://www.amazon.com/Shared-Oxygen-Trust-One-Yourself/dp/B0GZKFH3RZ/",
    demoLabel: "Buy on Amazon",
    category: "publications",
    color: "from-slate-500 via-blue-600 to-indigo-700",
    features: [
      "Science fiction set in deep space",
      "Character-driven survival narrative",
      "Themes of identity, moral conflict, and human connection",
      "Full-length novel",
    ],
  },
  {
    id: "project-py-fundamentals",
    title: "Project Py: Fundamentals",
    shortDescription:
      "A beginner-friendly Python programming book written to make the fundamentals of coding actually click — built from the ground up to be clear, practical, and approachable.",
    fullDescription:
      "Project Py: Fundamentals is a Python programming book aimed at beginners who want to learn to code without drowning in jargon. Written from a student's perspective, it focuses on clarity and practical examples over theory-heavy explanations. The book walks readers through the core concepts of Python in a way that is structured to actually build intuition — not just pattern-match syntax. It reflects the way I wish I had learned to code when I was starting out.",
    tags: [
      "Python",
      "Programming",
      "Education",
      "Non-Fiction",
      "Author",
    ],
    demo: "https://www.amazon.com/Project-Py-Foundations-Beginner-Friendly-Programming/dp/B0GC5LJCM8/",
    demoLabel: "Buy on Amazon",
    category: "publications",
    color: "from-yellow-400 via-orange-500 to-rose-500",
    features: [
      "Beginner-friendly Python curriculum",
      "Written from a student's perspective",
      "Practical, example-driven learning",
      "Clear explanations over jargon-heavy theory",
      "Full-length programming book",
    ],
  },
];

export const featuredProjects = projects.filter(p => p.category === 'featured');
export const contentProjects = projects.filter(p => p.category === 'content');
export const publicationProjects = projects.filter(p => p.category === 'publications');
