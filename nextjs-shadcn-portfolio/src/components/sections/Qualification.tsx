import React from 'react';

const QualificationItem = ({ title, institution, years, description }: { title: string, institution: string, years: string, description: string }) => (
  <div className="relative mb-6 pl-6"> {/* Increased mb and pl for better spacing, adjusted for icon */}
    {/* Font Awesome icon placeholder - will not render yet */}
    <i className="far fa-dot-circle text-blue-600 absolute left-[-2px] top-1 text-lg"></i> {/* Adjusted icon position and size */}
    <h5 className="font-semibold text-lg mb-1">{title}</h5> {/* Tailwind: font-semibold, text-lg */}
    <p className="mb-2"><strong className="font-medium">{institution}</strong> | <small className="text-sm text-gray-600">{years}</small></p> {/* Tailwind: font-medium, text-sm, text-gray-600 */}
    <p className="text-gray-700 text-sm">{description}</p> {/* Tailwind: text-gray-700, text-sm */}
  </div>
);

const Qualification = () => {
  const education = [
    { title: "Master In CSE", institution: "Cambridge University", years: "2000 - 2050", description: "Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam" },
    { title: "Master In CSE", institution: "Cambridge University", years: "2000 - 2050", description: "Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam" },
    { title: "Master In CSE", institution: "Cambridge University", years: "2000 - 2050", description: "Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam" },
  ];

  const experience = [
    { title: "Web Designer", institution: "Soft Company", years: "2000 - 2050", description: "Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam" },
    { title: "Web Designer", institution: "Soft Company", years: "2000 - 2050", description: "Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam" },
    { title: "Web Designer", institution: "Soft Company", years: "2000 - 2050", description: "Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam" },
  ];

  return (
    <section id="qualification" className="py-16">
      <div className="container mx-auto px-4"> {/* Added px-4 for container padding */}
        {/* Heading structure from original site */}
        <div className="relative flex flex-col items-center justify-center mb-10">
          <h1 className="text-8xl md:text-9xl uppercase text-gray-200 dark:text-gray-700" style={{ WebkitTextStroke: '1px #dee2e6' }}>Quality</h1> {/* Adjusted for better visibility in light/dark */}
          <h1 className="absolute text-4xl md:text-5xl uppercase text-primary">Education & Expericence</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8"> {/* Tailwind grid for columns, increased gap */}
          <div> {/* Education Column */}
            <h3 className="mb-6 text-2xl font-semibold">My Education</h3> {/* Tailwind: text-2xl */}
            <div className="border-l-2 border-primary pl-6"> {/* Tailwind for border, increased pl */}
              {education.map((item, index) => (
                <QualificationItem key={`edu-${index}`} {...item} />
              ))}
            </div>
          </div>
          <div> {/* Experience Column */}
            <h3 className="mb-6 text-2xl font-semibold">My Expericence</h3> {/* Tailwind: text-2xl */}
            <div className="border-l-2 border-primary pl-6"> {/* Tailwind for border, increased pl */}
              {experience.map((item, index) => (
                <QualificationItem key={`exp-${index}`} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
