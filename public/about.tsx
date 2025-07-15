import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time'
    },
    {
      icon: <Palette size={24} />,
      title: 'Design First',
      description: 'Creating intuitive user experiences with pixel-perfect attention to detail'
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance',
      description: 'Building fast, optimized applications that deliver exceptional user experiences'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate developer focused on creating beautiful, functional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey in web development began during my computer science studies, where I 
              discovered my passion for creating beautiful, functional applications. Since then, 
              I've been dedicated to learning and building projects that showcase modern web 
              development practices and user-centered design.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in full-stack development with React, Node.js, and modern web technologies. 
              My approach combines technical expertise with design thinking to create solutions that 
              are not only functional but also delightful to use.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or enjoying the great outdoors with my camera.
            </p>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg text-blue-600">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
