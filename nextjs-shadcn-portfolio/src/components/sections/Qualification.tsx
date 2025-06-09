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

export default function Qualification() {
  return (
    <section className="container py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Quality</h2>
        <h3 className="text-xl font-semibold text-primary">
          Education & Expericence
        </h3>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 mt-10">
        <div>
          <h4 className="text-2xl font-bold mb-4">My Education</h4>
          <div className="border-l-2 border-primary pl-4">
            <div className="mb-8">
              <h5 className="font-bold">Master In CSE</h5>
              <p className="text-muted-foreground">
                <strong>Cambridge University</strong> | <small>2000 - 2050</small>
              </p>
              <p className="text-muted-foreground">
                Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit
                amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd
                sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
              </p>
            </div>
            <div className="mb-8">
              <h5 className="font-bold">Master In CSE</h5>
              <p className="text-muted-foreground">
                <strong>Cambridge University</strong> | <small>2000 - 2050</small>
              </p>
              <p className="text-muted-foreground">
                Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit
                amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd
                sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
              </p>
            </div>
            <div className="mb-8">
              <h5 className="font-bold">Master In CSE</h5>
              <p className="text-muted-foreground">
                <strong>Cambridge University</strong> | <small>2000 - 2050</small>
              </p>
              <p className="text-muted-foreground">
                Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit
                amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd
                sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
              </p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-4">My Expericence</h4>
          <div className="border-l-2 border-primary pl-4">
            <div className="mb-8">
              <h5 className="font-bold">Web Designer</h5>
              <p className="text-muted-foreground">
                <strong>Soft Company</strong> | <small>2000 - 2050</small>
              </p>
              <p className="text-muted-foreground">
                Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit
                amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd
                sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
              </p>
            </div>
            <div className="mb-8">
              <h5 className="font-bold">Web Designer</h5>
              <p className="text-muted-foreground">
                <strong>Soft Company</strong> | <small>2000 - 2050</small>
              </p>
              <p className="text-muted-foreground">
                Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit
                amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd
                sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
              </p>
            </div>
            <div className="mb-8">
              <h5 className="font-bold">Web Designer</h5>
              <p className="text-muted-foreground">
                <strong>Soft Company</strong> | <small>2000 - 2050</small>
              </p>
              <p className="text-muted-foreground">
                Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit
                amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd
                sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
