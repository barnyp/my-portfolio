"use client";

import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Qualification from '@/components/sections/Qualification';
import Skills from '@/components/sections/Skills';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import VideoModal from '@/components/shared/VideoModal';

export default function HomePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false);
  const videoSrc = "https://www.youtube.com/embed/DWRcNpR6Kdc";

  const openVideoModal = () => setIsVideoModalOpen(true);

  return (
    <Layout>
      <Hero onPlayVideo={openVideoModal} />
      <About />
      <Qualification />
      <Skills />
      <Services />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
      <VideoModal
        isOpen={isVideoModalOpen}
        onOpenChange={setIsVideoModalOpen}
        videoSrc={videoSrc}
      />
    </Layout>
  );
}
