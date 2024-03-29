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
import IMAGES from "../images/index";

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
    path: "https://www.linkedin.com/in/ashrafelshaer/",
  },
  {
    title: "GitHub",
    path: "https://github.com/AshrafElshaer",
  },
  {
    title: "Twitter",
    path: "https://twitter.com/AshrafElshaer98",
  },
];

export const technologies = [
  {
    title: "languages",
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
    "My friend's call me Ash , a self-taught junior web developer focused on creating interactive digital experiences on the web. eager to secure entry-level frontend developer position. Ready to learn more and help team achieve company goals.",
  mission: {
    title: " Mission",
    text: "To empower web clients to use the web to its full potential by providing affordable, effective, custom solutions.",
  },
  vision: {
    title: " Vision",
    text: "To become a prime performer, in providing quality Web and Software solutions in the competitive global marketplace.",
  },
};

export const projects = [
  {
    title: "Invocice App ",
    subTitle:
      "Full stack app to create / update / delete Invoices mainly focued on front end technologies",
    techStack: [
      "React Js",
      "Redux toolkit",
      "Firebase authentication",
      "Styled components",
    ],
    images: [IMAGES.invoiceDesktop, IMAGES.invoiceMobile],
    github: "https://github.com/AshrafElshaer/invoice-app-redux",
    live: "https://curious-meringue-78ffd1.netlify.app/",
  },

  {
    title: "Amore Lounge & Caffee ",
    subTitle: "Static landing page for a local lounge & caffe.",
    techStack: ["React Js", "SASS/SCSS"],
    images: [IMAGES.amoreDesktop, IMAGES.amoreMobil],
    github: "https://github.com/AshrafElshaer/amore-lounge-reactJS",
    live: "https://ashrafelshaer.github.io/amore-lounge-reactJS/",
  },

  {
    title: "Clock App",
    subTitle:
      "A clock app that provide's Worldwide local Time ,  alarms , timer and stop watch  .",
    techStack: ["HTML / CSS", "JavaScript"],
    images: [IMAGES.clockApp1, IMAGES.clockApp2],
    github: "https://github.com/AshrafElshaer/clock-app",
    live: "https://ashrafelshaer.github.io/clock-app/",
  },
];
