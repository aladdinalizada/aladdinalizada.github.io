import { File, Github, Linkedin } from "lucide-react";

export const getSocials = (className: string) => [
  {
    label: "Github",
    icon: <Github aria-label="Github Profile" className={className} />,
    url: "https://github.com/aladdinalizada",
  },
  {
    label: "LinkedIn",
    icon: <Linkedin aria-label="LinkedIn Profile" className={className} />,
    url: "https://www.linkedin.com/in/aladdinalizada/",
  },
  {
    label: "Resume",
    icon: <File aria-label="Jarrod Servilla's Resume" className={className} />,
    url: "/resume.pdf",
    content: [
      " Python, JavaScript, TypeScript, HTML, CSS",
      "React, Django, GraphQL, Angular, Express, NextJS, Spring",
      "MongoDB",
      "Git",
    ],
  },
];
