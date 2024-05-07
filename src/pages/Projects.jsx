import { Link } from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import CTA from "../Components/CTA";

export default function Projects() {
  return (
    <section className="max-container relative">
      <h1 className="head-text">
        My{"  "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500"></div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            {project.iconUrl && (
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt="Project Icon"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            )}
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold dark:text-black-500">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500 dark:text-black-500">
                {project.description}
              </p>
              {project.gitLink && (
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.gitLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-semibold text-blue-600 dark:text-black-500"
                  >
                    Github Link
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain dark:filter dark:invert"
                  />
                </div>
              )}
              {project.link && (
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-semibold text-blue-600 dark:text-black-500"
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain dark:filter dark:invert"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <Link to={"https://projects.shivamvishwakarma.me"} target="_blank" className="btn absolute right-0 left-0 mx-10 -translate-y-[110%]" aria-label="View More Projects">
        View All Projects
      </Link>
      <hr className="border-slate-200 dark:border-black-500" />
      <CTA />
    </section>
  );
}
