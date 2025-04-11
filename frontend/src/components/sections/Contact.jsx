import user_info from "../../data/user_info.js";

import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section id="contact" className="mt-16 pt-12 px-6 lg:px-24">
      {/* =========== TITLE =========== */}
      <h4 className="text-5xl font-bold text-primary">
        Let&apos;s Get in Touch:{" "}
        <span className="text-accent">
          Ways to Connect with Me
        </span>
      </h4>
  
      {/* =========== DESCRIPTION =========== */}
      <p className="mt-8 leading-7 text-base text-secondary font-light">
        {user_info.contact.description}
      </p>
  
      {/* =========== LINKS =========== */}
      <div className="mt-12">
        {/* =========== X =========== */}
        <a
          href={user_info.socials.twitter}
          className="flex gap-4 text-secondary hover:text-primary transition-all duration-300 mt-4"
        >
          <FaSquareXTwitter className="self-center text-lg text-accent" />
          <span className="self-center">Follow on X</span>
        </a>
  
        {/* =========== INSTAGRAM =========== */}
        <a
          href={user_info.socials.instagram}
          className="flex gap-4 text-secondary hover:text-primary transition-all duration-300 mt-4"
        >
          <FaInstagram className="self-center text-lg text-accent" />
          <span className="self-center">Follow on Instagram</span>
        </a>
  
        {/* =========== LINKEDIN =========== */}
        <a
          href={user_info.socials.linkedin}
          className="flex gap-4 text-secondary hover:text-primary transition-all duration-300 mt-4"
        >
          <FaLinkedin className="self-center text-lg text-accent" />
          <span className="self-center">Follow on Linkedin</span>
        </a>
      </div>
  
      <hr className="mt-6 w-72 border-secondary" />
  
      {/* =========== EMAIL =========== */}
      <a
        href={`mailto:${user_info.main.email}`}
        className="flex mt-6 text-secondary hover:text-primary gap-4 transition-all duration-300"
      >
        <MdEmail className="self-center text-lg text-accent" />
        <span>{user_info.main.email}</span>
      </a>
    </section>
  );
  
}

export default Contact;
