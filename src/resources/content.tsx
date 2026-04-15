import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ali",
  lastName: "Bhutto",
  name: `Ali Raza Bhutto`,
  role: "BSAI Student | AI & Robotics Enthusiast",
  avatar: "https://avatars.githubusercontent.com/u/257011925?v=4",
  email: "the0theraliiii@gmail.com",
  location: "Asia/Karachi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about AI and robotics</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Ali-cmd354",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ali-raza-bhutto-a968a9402/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website of ${person.name}, passionate about AI, robotics, and intelligent systems`,
  headline: <>Exploring AI, Robotics & Intelligent Systems</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured Project</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
    I'm Ali, a BSAI student at <Text as="span" size="xl" weight="strong">SZABIST</Text>, deeply passionate about <br /> Artificial Intelligence, automation, and building intelligent systems that solve real-world problems.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, passionate AI and robotics enthusiast`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ali is a BSAI (Bachelor of Science in Artificial Intelligence) student at SZABIST, passionate about exploring the intersection of artificial intelligence, robotics, and automation. With a keen interest in agentic AI and robotic engineering, Ali is dedicated to building intelligent systems that solve real-world problems and drive innovation in the tech space.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Education & Learning",
    experiences: [
      {
        company: "SZABIST (Shaheed Zulfiqar Ali Bhutto Institute of Science and Technology)",
        timeframe: "Present",
        role: "BSAI Student",
        achievements: [
          <>
            Pursuing a Bachelor's degree in Artificial Intelligence with specialized focus on Agentic and Robotic AI Engineering (CAE).
          </>,
          <>
            Engaging in cutting-edge coursework covering machine learning, deep learning, robotics control, and autonomous systems.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Key Interests",
    institutions: [
      {
        name: "Artificial Intelligence",
        description: <>Machine learning, deep learning, and neural networks</>,
      },
      {
        name: "Robotics & Automation",
        description: <>Robotic systems, control engineering, and autonomous agents</>,
      },
      {
        name: "Agentic AI",
        description: <>Building intelligent autonomous agents and multi-agent systems</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Python",
        description: (
          <>Core programming language for AI/ML development and algorithms.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
        ],
        images: [],
      },
      {
        title: "Machine Learning",
        description: (
          <>Experience with ML frameworks and building predictive models.</>
        ),
        tags: [
          {
            name: "TensorFlow",
            icon: "tensorflow",
          },
          {
            name: "PyTorch",
            icon: "pytorch",
          },
          {
            name: "Scikit-learn",
            icon: "scikit-learn",
          },
        ],
        images: [],
      },
      {
        title: "Robotics & Control",
        description: (
          <>Working with robotic systems and control algorithms.</>
        ),
        tags: [
          {
            name: "ROS",
            icon: "ros",
          },
          {
            name: "Control Systems",
            icon: "engineering",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Thoughts on AI & Robotics...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `AI and robotics projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
