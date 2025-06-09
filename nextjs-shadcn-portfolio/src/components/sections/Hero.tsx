import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
// Typed text animation will be handled in a later step (JavaScript functionalities)

interface HeroProps {
  onPlayVideo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onPlayVideo }) => {
  const typedRoles = "BI Developer, Analytic Engineer, Data Analyst, Data Practitioner, Team Leadership"; // Placeholder for now

  return (
    <section id="home" className="bg-primary d-flex align-items-center py-5" style={{ minHeight: '100vh' }}>
      <div className="container mx-auto">
        <div className="row align-items-center"> {/* Using 'row' for Bootstrap-like structure, but this is Tailwind */}
          <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0"> {/* These col-* classes are not Tailwind by default */}
            <Image
              src="/img/profile.jpg"
              alt="Paul Barnabas"
              width={400}
              height={400}
              className="img-fluid w-100 rounded-circle shadow-sm" // rounded-circle is Bootstrap, Tailwind is rounded-full
              priority
            />
          </div>
          <div className="col-lg-7 text-center text-lg-left">
               <h3 className="text-white font-weight-normal mb-3">I&apos;m</h3>
            <h1 className="display-3 text-uppercase text-primary mb-2" style={{ WebkitTextStroke: '2px #ffffff' }}>Paul Barnabas</h1>
            {/* Typed text output will go here */}
            <div className="d-inline font-weight-lighter text-white h1">{typedRoles}</div>
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
              <Button
                variant="outline"
                size="lg"
                className="mr-5 text-white border-white hover:bg-white hover:text-primary" // Custom styling for outline button on dark bg
                asChild
              >
                <a href="https://www.linkedin.com/in/askpaulbarnabas/" target="_blank" rel="noopener noreferrer">Download CV</a>
              </Button>
              <Button
                variant="default" // This will be a white button on primary bg if theme is set up that way
                size="lg"
                onClick={onPlayVideo}
                className="bg-white text-primary hover:bg-gray-200" // Overriding default shadcn button variant style
              >
                Play Video {/* Original had a play icon, we'll use text for now */}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
