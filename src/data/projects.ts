export interface Project {
  id: string;
  slug: string;
  name: string;
  category: string;
  status: string;
  description: string;
  role: string;
  technologies: string[];
  github?: string;
  live?: string;
  details: string[];
  workflow?: string[];
}
export const projects: Project[] = [
  {
    id: "001",
    slug: "jaldrishti",
    name: "JalDrishti",
    category: "FULL STACK",
    status: "DEPLOYED",
    description:
      "A citizen-focused water-disaster reporting and monitoring platform that helps collect, verify and visualize incidents.",
    role: "Integration work; x402 implementation and integration for a separate competition requirement.",
    technologies: ["Platform integration", "x402"],
    github: "https://github.com/Sajid-ally/JalDrishti",
    live: "https://jaldrishti-blond.vercel.app/",
    details: [
      "Citizen incident reporting with location-aware reports and water-disaster classification.",
      "Government-facing monitoring, live maps, and severity and status tracking.",
      "AI-assisted reporting and disaster intelligence integrations.",
      "x402 was added for a separate competition requirement. It was not a core original feature or the primary purpose of JalDrishti.",
    ],
  },
  {
    id: "002",
    slug: "coastalsocial",
    name: "CoastalSocial",
    category: "FULL STACK",
    status: "DEPLOYED",
    description:
      "A simulated social platform demonstrating how ML-powered image detection can turn water-disaster posts into reported incidents.",
    role: "Frontend and backend development.",
    technologies: ["Frontend", "Backend", "ML integration"],
    github: "https://github.com/NishantSyadav/CoastalSocial",
    live: "https://coastalsocial-frontend.onrender.com",
    details: [
      "A separate project demonstrating a social-media disaster intelligence workflow.",
      "Images from social posts are checked for water disasters; identified incidents are forwarded to JalDrishti.",
    ],
    workflow: [
      "Social post",
      "Image",
      "ML detection",
      "Water disaster identified",
      "Sent to JalDrishti",
      "Reported incident",
    ],
  },
  {
    id: "003",
    slug: "swasthyasetu",
    name: "SwasthyaSetu",
    category: "COMPUTER VISION",
    status: "GITHUB",
    description:
      "A digital healthcare platform designed to help users organize and process medical information.",
    role: "Trained the ML/OCR model used for medicine and medical-report extraction.",
    technologies: ["EasyOCR", "OpenCV", "ML / image processing"],
    github: "https://github.com/Sajid-ally/swasthyasetu",
    details: [
      "My work focused on training the model for extracting information from medicine images and medical reports.",
      "The pipeline handled medicine names, medicine types, medicine images and medical reports.",
      "This project has not been deployed.",
    ],
  },
  {
    id: "004",
    slug: "resnet",
    name: "ResNet from Scratch in PyTorch",
    category: "RESEARCH",
    status: "CURRENTLY IMPLEMENTING",
    description:
      "A research-paper implementation to understand residual learning and move toward deeper AI/ML work.",
    role: "Learning and implementing the core ideas of the ResNet paper.",
    technologies: ["Python", "PyTorch", "CIFAR-10"],
    details: [
      "Planned: convolutional neural networks, residual blocks and skip connections.",
      "Planned: model training, validation, evaluation and architecture comparisons.",
      "In progress. No completed implementation, trained-model results or accuracy claims are presented.",
    ],
  },
];
