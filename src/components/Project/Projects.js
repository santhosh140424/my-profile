import React from "react";
import "./Projects.css";
import { title } from "framer-motion/client";

const photos = [
  {
    src: "https://res.cloudinary.com/bowett/image/upload/c_scale,w_800/v1591525809/codepen/rodion-kutsaev-0VGG7cqTwCo-unsplash.jpg",
    alt: "Photo by Rodion Kutsaev on Unsplash",
    title: "Photo by Rodion Kutsaev on Unsplash",
    description: "A beautiful landscape",
  },
  {
    src: "https://res.cloudinary.com/bowett/image/upload/c_scale,w_800/v1591525808/codepen/carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg",
    alt: "Photo by Carl Heyerdahl on Unsplash",
    title: "Photo by Carl Heyerdahl on Unsplash",
    description: "A serene beach scene",
  },
  {
    src: "https://cdn.intuji.com/2022/08/Software-development-digital-transformation_comp-scaled-1.jpeg",
    alt: "Photo by Jonatan Pie on Unsplash",
    title: "Photo by Jonatan Pie on Unsplash",
    description: "A bustling cityscape",
  },
  {
    src: "https://res.cloudinary.com/bowett/image/upload/c_scale,w_800,h_533/v1591525806/codepen/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg",
    alt: "Photo by Glenn Carstens-Peters on Unsplash",
    title: "Photo by Glenn Carstens-Peters on Unsplash",
    description: "A majestic mountain range",
  },
  {
    src: "https://res.cloudinary.com/bowett/image/upload/c_scale,w_800,h_533/v1591525806/codepen/ales-nesetril-Im7lZjxeLhg-unsplash.jpg",
    alt: "Photo by Ales Nesetril on Unsplash",
    title: "Photo by Ales Nesetril on Unsplash",
    description: "A tranquil forest path",
  },
  {
    src: "https://res.cloudinary.com/bowett/image/upload/c_scale,h_533,w_800/v1591525805/codepen/farzad-nazifi-p-xSl33Wxyc-unsplash.jpg",
    alt: "Photo by Farzad Nazifi on Unsplash",
    title: "Photo by Farzad Nazifi on Unsplash",
    description: "A stunning desert landscape",
  },
  {
    src: "https://res.cloudinary.com/bowett/image/upload/c_scale,h_533,w_800/v1591525805/codepen/jeff-sheldon-9dI3g8owHiI-unsplash.jpg",
    alt: "Photo by Jeff Sheldon on Unsplash",
    title: "Photo by Jeff Sheldon on Unsplash",
    description: "A vibrant sunset over the ocean",
  },
  {
    src: "https://res.cloudinary.com/bowett/image/upload/c_scale,w_800/v1591525804/codepen/edho-pratama-T6fDN60bMWY-unsplash.jpg",
    alt: "Photo by Edho Pratama on Unsplash",
    title: "Photo by Edho Pratama on Unsplash",
    description: "A peaceful lakeside view",
  },
  {
    src: "https://res.cloudinary.com/bowett/image/upload/c_scale,h_533,w_800/v1591525803/codepen/green-chameleon-WvuTnXz1hSc-unsplash.jpg",
    alt: "Photo by Green Chameleon on Unsplash",
    title: "Photo by Green Chameleon on Unsplash",
    description: "A colorful hot air balloon festival",
  },
];

const ProjectShowcase = () => {
  return (
    <section id="profile" className="projects-section">
      <h2 className="text-3xl font-bold text-center my-8 text-white relative">
        Check Out Some of My Work
      </h2>

      <ul className="photo-showcase grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 container mx-auto p-4">
        {photos.map((photo, index) => (
          <li key={index} className="list-none">
            <figure className="photo">
              <img src={photo.src} alt={photo.alt} />
              <figcaption>
                <h3>{photo.title}</h3>
                <p>{photo.description}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectShowcase;
