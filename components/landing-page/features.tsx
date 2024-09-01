import React from "react";

interface FeatureProps {
  gif: string;
  heading: string;
  description: string;
  reverse?: boolean;
}

const Feature: React.FC<FeatureProps> = ({
  gif,
  heading,
  description,
  reverse,
}) => {
  return (
    <div
      className={`bg-white flex items-center ${reverse ? "flex-row-reverse " : "gap-4"} mb-10`}
    >
      <img src={gif} alt={heading} className='h-auto w-1/2' />
      <div className='w-1/2 px-4'>
        <h2 className='mb-2 text-2xl font-bold'>{heading}</h2>
        <p className='hidden pr-[30%] text-gray-600 sm:block'>{description}</p>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      gif: "https://www.mgravish.com/wp-content/uploads/2022/01/Where-teams-____-together.gif",
      heading: "Seamless Teamwork",
      description: "Experience effortless collaboration with our multi-cursor feature, allowing your entire team to work together on the same design in real-time. No more waiting for feedback—see your team's changes live and keep the creative flow uninterrupted.",
    },
    {
      gif: "https://www.mgravish.com/wp-content/uploads/2020/06/Name-Duplicator-v2b.gif",
      heading: " Design Together, Anytime",
      description: "Our multi-cursor environment brings your team’s cursors to life, letting you see who’s working on what. Whether brainstorming or refining details, multiple users can edit simultaneously, enhancing productivity and fostering collaboration like never before.",
      reverse: true,
    },
    {
      gif: "https://www.mgravish.com/wp-content/uploads/2020/07/Sketch.gif",
      heading: "Create Shapes with Ease",
      description: "Quickly bring your ideas to life with our intuitive shape creation tools. Drag, drop, and manipulate a variety of shapes with smooth animations that make the design process fast and fun. Perfect for creating complex designs in seconds.",
    },
    {
      gif: "https://www.mgravish.com/wp-content/uploads/2020/06/Contraints.gif",
      heading: "Smart Constraints, Responsive Design",
      description:
        " Set constraints and watch your elements adjust dynamically as you resize or scale. This feature ensures that your design remains responsive and visually appealing across different devices and screen sizes, maintaining pixel-perfect precision.",
      reverse: true,
    },
    {
      gif: "https://www.mgravish.com/wp-content/uploads/2022/01/02b_Easing_Curves_What_s_New_Gif_Alt.gif",
      heading: "From Complexity to Simplicity",
      description: " Our platform helps you navigate the emotional journey of design with ease. Witness the smooth transformation from chaotic concepts to polished designs, symbolized by the transition from a sad to a happy face. It's design made delightful!",
    },
  ];

  return (
    <div className="w-full bg-white">
      <div className='container mx-auto p-6 bg-white w-full'>
      {features.map((feature, index) => (
        <Feature
          key={index}
          gif={feature.gif}
          heading={feature.heading}
          description={feature.description}
          reverse={feature.reverse}
        />
      ))}
    </div>
    </div>
    
  );
};

export default Features;
