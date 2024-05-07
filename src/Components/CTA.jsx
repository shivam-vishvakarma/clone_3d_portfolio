import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

export default function CTA() {
  return (
    <section className="cta">
      <p className="cta-text dark:text-black-500">
        Have a project in mind? <br className="sm:block hidden" /> Let's build
        something together!
      </p>
      <div className="flex gap-4">
        {
            socialLinks.map((socialLink, index) => (
                <Link
                key={index}
                to={socialLink.link}
                className=""
                target="_blank"
                rel="noreferrer"
                >
                <img className="w-10 h-10" src={socialLink.iconUrl} alt={socialLink.name}/>
                </Link>
            ))
        }
      </div>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
}
