import React from 'react';
import { Progress } from '@/components/ui/progress'; // Import shadcn Progress

interface SkillItemProps {
  name: string;
  percentage: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, percentage }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1"> {/* Tailwind: flex, justify-between */}
      <h6 className="font-semibold">{name}</h6> {/* Tailwind: font-semibold */}
      <h6 className="font-semibold">{percentage}%</h6> {/* Tailwind: font-semibold */}
    </div>
    {/* Using h-2 for a slimmer progress bar, rounded-sm for slight rounding if not default from Progress component style */}
    <Progress value={percentage} className="h-2 rounded-sm" />
  </div>
);

const Skills = () => {
  const skillsCol1 = [
    { name: "HTML", percentage: 95 },
    { name: "CSS", percentage: 85 },
    { name: "PHP", percentage: 90 },
  ];
  const skillsCol2 = [
    { name: "Javascript", percentage: 90 },
    { name: "Angular JS", percentage: 95 },
    { name: "Wordpress", percentage: 85 },
  ];

  return (
    <section id="skill" className="py-16">
      <div className="container mx-auto px-4"> {/* Added px-4 for container padding */}
        {/* Heading structure from original site */}
        <div className="relative flex flex-col items-center justify-content-center mb-10">
          <h1 className="text-8xl md:text-9xl uppercase text-gray-200 dark:text-gray-700" style={{ WebkitTextStroke: '1px #dee2e6' }}>Skills</h1> {/* Adjusted for better visibility */}
          <h1 className="absolute text-4xl md:text-5xl uppercase text-primary">My Skills</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4"> {/* Tailwind grid, adjusted gap */}
          <div> {/* Column 1 */}
            {skillsCol1.map((skill, index) => (
              <SkillItem key={`skill1-${index}`} {...skill} />
            ))}
          </div>
          <div> {/* Column 2 */}
            {skillsCol2.map((skill, index) => (
              <SkillItem key={`skill2-${index}`} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
