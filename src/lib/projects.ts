export interface Project {
  id: string;
  subtitle: string;
  title: string;
  description: string;
  preview: string;
  tech: string[];
  links: {
    website: string;
    github: string;
    video?: string;
  };
  color: string;
  screenshot: string; // Add this new property
}

export const projects: Project[] = [
  {
    id: "Luminate",
    subtitle: "Helping You Understand and Grow from Your Experiences",
    title: "Luminate",
    description:
      ` This app includes reflective exercises and best practices of plant medicine experiences, helping you optimize or improve the feelings and life changes you get as a result of these experiences.

    By answering these few questions, it will help you maximize your plant medicine experience.
    description:`,
    preview: "#",
    tech: [
      "ReactJs",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "JWT",
      "react-speech-recognition",
      "Vercel SDK",
      "OpenAI GPT API for generating context-aware descriptions",
    ],
    links: {
      website: "https://luminate-client.vercel.app/",
      github: "https://luminate-client.vercel.app/",
    },
    color: "from-[#FFD700] to-[#FFC000]",
    screenshot: "/portfolio/projects/luminate.png"
  },
  {
    id: "Global House Activity",
    subtitle: "A Comprehensive Overview of Global House Contributions, Grants, and Revenue Metrics",
    title: "Global House Activity",
    description:
      `Global House Activity is a data-driven project that showcases detailed information about all seven houses globally. It highlights key metrics such as grants received, revenue generated, and provides brief descriptions of each house’s activities and contributions. The goal is to offer a clear snapshot of each house's impact and performance.`,
    preview: "#",
    tech: ["NextJs", "NodeJs", "MongoDB", "ExpressJs", "github-scraper", "google-spreadsheet"],
    links: {
      website: "https://globe-frontend.vercel.app/",
      github: "https://globe-frontend.vercel.app/",
    },
    color: "from-[#10B981] to-[#059669]",
    screenshot: "/portfolio/projects/globe1.png",
  }
  ,
  {
    id: "AlumiTalk",
    subtitle: "Connecting College Juniors with Seniors for Mentorship and Career Guidance",
    title: "Alumi Talk",
    description: `
    Alumi Talk is a student-alumni connection platform designed to bridge the gap between college juniors and their seniors. It allows students to directly connect with experienced alumni based on their branch, interests, or career path. The platform enables real-time communication, mentorship, and knowledge sharing to help juniors with internships, placements, and academic decisions. Alumi Talk fosters a culture of guidance and support within the campus, empowering students to learn from real experiences and make informed choices for their future.`,    
    preview: "#",
    tech: ["ReactJs", "NodeJs", "MongoDB", "ExpressJs", "socket.io"],
    links: {
      website: "https://github.com/Aj052001/Scholar-chat",
      github: "https://github.com/Aj052001/Scholar-chat",
    },
    color: "from-[#10B981] to-[#059669]",
    screenshot: "/portfolio/projects/alumitalk.png",
  }
];
