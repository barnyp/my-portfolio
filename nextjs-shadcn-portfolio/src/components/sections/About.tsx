import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container mx-auto">
        <div className="relative flex flex-col items-center justify-center mb-5">
          <h1 className="text-8xl md:text-9xl text-uppercase text-white opacity-25" style={{ WebkitTextStroke: '1px #dee2e6' }}>About</h1>
          <h1 className="absolute text-4xl md:text-5xl text-uppercase text-primary">About Me</h1>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 pb-4 pb-lg-0">
            <Image
              src="/img/about.jpg"
              alt="About Paul Barnabas"
              width={500}
              height={500}
              className="img-fluid rounded w-100"
            />
          </div>
          <div className="col-lg-7">
            <h3 className="mb-4 text-xl font-semibold">Data Professional & BI Architect</h3>
            <p className="mb-4 text-gray-700">
                Experienced Data Professional and BI Architect with a strong background in data management,
                analytics, and business intelligence solutions. Specializes in designing scalable data architectures,
                implementing advanced analytics strategies, and empowering businesses with actionable insights.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-3">
              <div className="py-2"><h6>Name: <span className="font-normal text-gray-600">Paul Barnabas</span></h6></div>
              <div className="py-2"><h6>Birthday: <span className="font-normal text-gray-600">January 19</span></h6></div>
              <div className="py-2"><h6>Degree: <span className="font-normal text-gray-600">Degree</span></h6></div>
              <div className="py-2"><h6>Experience: <span className="font-normal text-gray-600">10 Years</span></h6></div>
              <div className="py-2"><h6>Phone: <span className="font-normal text-gray-600">+234 803 775 4613</span></h6></div>
              <div className="py-2"><h6>Email: <span className="font-normal text-gray-600">paul.barnabas@outlook.com</span></h6></div>
            </div>
            <Button variant="outline" className="mr-4">Hire Me</Button>
            <Button variant="default" asChild>
             <a href="https://www.linkedin.com/in/askpaulbarnabas/" target="_blank" rel="noopener noreferrer">Learn More</a>
            </Button> {/* Re-added this button */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
