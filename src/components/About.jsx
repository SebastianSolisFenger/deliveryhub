import React from 'react';
import aboutImage from '../assets/images/about-image.png';

const About = () => {
  return (
    <div className="bg-white">
      <div className="p-24 grid grid-cols-2">
        <div className="">
          <h2 className="text-2xl font-medium">About Us</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            autem, non aspernatur dolores eveniet exercitationem debitis,
            reiciendis quia, recusandae nemo sed ea tempore illum laborum
            quaerat accusantium doloremque nisi. Perferendis! Vero assumenda
            quisquam perferendis aliquid quo. Assumenda modi labore reiciendis
            aliquid facere praesentium voluptatem libero neque, molestiae
            impedit, voluptate totam ex quam nihil unde. Ex tempora voluptatibus
            debitis perferendis veritatis? Voluptatem laborum officiis error
            ratione, placeat ab impedit velit dolore reprehenderit at nihil.
          </p>
        </div>
        {/* IMAGE CONTAINER BELOW */}
        <div className="flex items-center justify-center">
          <img
            src={aboutImage}
            alt="about us"
            className="w-[400px] h-[400px] object-cover"
          />
        </div>
        {/* IMAGE CONTAINER UP */}
      </div>
    </div>
  );
};

export default About;
