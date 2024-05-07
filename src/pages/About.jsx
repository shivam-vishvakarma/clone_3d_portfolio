import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../Components/CTA";

export default function About() {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm
        <span className="blue-gradient_text font-semibold drop-shadow">
          Shivam
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500 dark:text-black-500 text-xl">
        <p>
          As a dedicated and ambitous BCA student with a passion for web
          development, programming and computer science. I am seeking
          opportunities to contribute my skills and learned from experienced
          profesionals. My goal is to become the world's best full stack web
          developer
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap justify-center gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl"></div>
              <div className="btn-front rounded-xl flex justify-center items-center peer">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              <div className="absolute px-1 -translate-x-1/2 text-nowrap dark:bg-gray-500 bg-gray-100 rounded top-8 scale-0 transition-all peer-hover:-top-8 peer-hover:scale-100 peer-hover:z-10 duration-150 left-1/2 min-w-min mx-auto shadow-xl text-center text-black-500 font-semibold">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      {experiences.length > 0 && (
        <div className="py-16">
          <h3 className="subhead-text">Work Experience</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              I created multiple projects ......., by creating these projects i
              gain much experience and leveled up my skills to the next level.
              Here's the rundown:
            </p>
          </div>
          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  iconStyle={{ background: experience.iconBg }}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p
                      className="text-black-500 font-medium font-base"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li className="text-black-500/50 font-normal pl-1 text-sm">
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      )}
      <hr className="border-slate-200 dark:border-black-500" />
      <CTA />
    </section>
  );
}
