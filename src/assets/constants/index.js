import { AiFillHtml5 } from "react-icons/ai";
import {
  DiCss3Full,
  DiReact,
  DiGitBranch,
  DiSass,
  DiJavascript1,
  DiGithubBadge,
} from "react-icons/di";
import { ReactComponent as Gsap } from "../gsap-greensock.svg";

export const navbarLinks = [
  {
    title: "intro",
    path: "intro",
  },
  {
    title: "about",
    path: "about",
  },
  {
    title: "portfolio",
    path: "portfolio",
  },
  {
    title: "say hello !",
    path: "contact",
  },
];

export const introTitle = [
  "Ashraf Elshaer,",
  "frontend developer,",
  "based in United States.",
];

export const socialMediaLinks = [
  {
    title: "LinkedIn",
    path: "",
  },
  {
    title: "GitHub",
    path: "",
  },
  {
    title: "Twitter",
    path: "",
  },
];

export const technologies = [
  {
    title: "language's",
    skills: [
      {
        icon: <DiJavascript1 />,
        name: "JavaScript",
        color: "#f0db4f",
      },
    ],
  },
  {
    title: "frontend",
    skills: [
      {
        icon: <AiFillHtml5 />,
        name: "HTML5",
        color: "#f06529",
      },
      {
        icon: <DiCss3Full />,
        name: "CSS3",
        color: "#2965f1",
      },
      {
        icon: <DiSass />,
        name: "SCSS",
        color: "#cd6799",
      },
      {
        icon: <DiReact />,
        name: "React JS",
        color: "#61dbfb",
      },
    ],
  },
  {
    title: "animation",
    skills: [
      {
        icon: <Gsap />,
        name: "GSAP",
      },
    ],
  },
  {
    title: "tools",
    skills: [
      {
        icon: <DiGitBranch />,
        name: "Git",
        color: "#f1502f",
      },
      {
        icon: <DiGithubBadge />,
        name: "GitHub",
        color: "#fff",
      },
    ],
  },
];

export const aboutMe = {
  about:
    "My friend's call me Ash , a self-taught junior web developer focused on creating interactive digital experiences on the web.",
  mission: {
    title: " Mission",
    text: "To empower our clients to use the web to its full potential by providing affordable, effective, custom solutions.",
  },
  vision: {
    title: " Vision",
    text: "To become a prime performer, in providing quality Web and Software solutions in the competitive global marketplace.",
  },
};
