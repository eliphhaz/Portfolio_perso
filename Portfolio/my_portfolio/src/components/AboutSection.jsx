import { Briefcase, Code, User } from "lucide-react";
import CV from "../assets/cv.pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-blue-600">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texte / Description */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-gray-600">
              With over 5 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="text-gray-600">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-300 text-center"
              >
                Get In Touch
              </a>

              <a
                href={CV}
                download={"CV"}
                className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600/10 transition-colors duration-300 text-center"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Cartes / Skills */}
          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-gray-600">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-gray-600">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-100">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-gray-600">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
