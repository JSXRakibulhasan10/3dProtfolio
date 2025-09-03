import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1ref = useRef(null);
  const project2ref = useRef(null);
  const project3ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1ref.current,
      project2ref.current,
      project3ref.current,
    ];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="ScoreSpare" />
            </div>
            <div className="text-content">
              <h2>
                Perfect FootBall companion for u with a modern and stylish,
                User-Friendly App called ScoreSpare
              </h2>
              <p className="text-white-50 md:text-xl">
                An WebApp for the Football enthusiasts built by an enthusiast.
                This app keeps you updated to European top 5 league + UCL + BPL,
                with an integreted Football ChatBot to extend your Football
                knowledge further.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="BariBnb" />
              </div>
              <h2> BariBnb - A Hotel booking Platform</h2>
            </div>
            <div className="project" ref={project3ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="UsePopcorn" />
              </div>
              <h2> UsePopcorn - A movie finding App </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
