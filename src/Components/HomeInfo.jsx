import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

export default function HomeInfo({ currentStage }) {
  const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box w-1/3">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
  const renderContent = {
    1: (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi I am <span>Shivam Vishwakarma</span>👋
        <br />A Software Engineer from India
      </h1>
    ),
    2: (
      <InfoBox
        text="I completed my bachelors degree and learned a lots of skills at that time"
        link="/about"
        btnText="Learn more"
      />
    ),
    3: (
      <InfoBox
        text="Created many projects. And learn much more things. See my projects"
        link="/projects"
        btnText="My Portfolio"
      />
    ),
    4: (
      <InfoBox
        text="Need a developer? I am here to serve you many things"
        link="/contact"
        btnText="Lets Talk"
      />
    ),
  };
  return renderContent[currentStage] || null;
}
