import datathon from "@/assets/images/datathon.png";
import hpc from "@/assets/images/hpc.png";
import chatbot from "@/assets/images/chatbot.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "DATATHON",
    year: "2024",
    title: "Vehicle image detection",
    results: [
      { title: "Real-Time Vehicle Detection & Classification for Smart Traffic Monitoring" },
      { title: "Built an AI system using OpenCV to detect and classify vehicles in real-time." },
      { title: "Achieved 90%+ accuracy and received recognition at the Datathon competition." },
    ],
    link: "https://github.com/ItsYash4u/Dathathon-AI-Confluence-IITG",
    image: datathon,
  },
  {
    company: "Hyper Supercomputing",
    year: "2025",
    title: "Deep Flow HPC",
    results: [
      { title: "High-Performance Computing Pipeline for Large-Scale AI Workloads" },
      { title: "Developed a parallel HPC pipeline using MPI and OpenMP." },
      { title: "Boosting data processing and model training speed by ~5000x." },
    ],
    link: "https://github.com/ItsYash4u/DeepFlow-HPC",
    image: hpc,
  },
  {
    company: "CHATBOT",
    year: "2025",
    title: "Ai chatbot",
    results: [
      { title: "AI-Powered Customer Support Chatbot with Next.js" },
      { title: "Built a smart chatbot using GPT APIs to automate FAQs and live support" },
      { title: "Tech Stack: Next.js, OpenAI GPT API, Node.js" },
    ],
    link: "https://github.com/ItsYash4u/nextjs-ai-chatbot",
    image: chatbot,
  },
];


export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="See how I tranformed concepts into engaging digital experiences."/>
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-xl"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
