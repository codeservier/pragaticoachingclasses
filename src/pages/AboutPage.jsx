import React, { useEffect, useState } from "react";
import SingleBanner from "../components/banner/SingleBanner";
import image from "../assets/concept8.png";
import image1 from "../assets/c2.jpg";
import image2 from "../assets/c5.jpg";
import image3 from "../assets/c6.jpg";
import mission from "../assets/complete-the-mission.svg";
import TopInstructorCard from "../components/card/TopInstructorCard";
import Loader from "../components/loader/Loader";
const AboutPage = () => {
  const [loading, setLoading] = useState(true);
  const cardsData = [
    {
      title: "Fred Louis",
      description: "To aim for Equity and inclusivity in Education",
      image: image1,
    },
    {
      title: "Fred Louis",
      description: "To reach learners in every corner of the country",
      image: image2,
    },
    {
      title: "Fred Louis",
      description: "To build abusiness sustainability",
      image: image3,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="min-h-[80vh] flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <>
          <section className="bg-[#f5f5dc] mb-8">
            <div className="max-w-screen-xl mx-auto px-6 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 ">
                <div className=" py-12 pr-8">
                  <h1 className="text-4xl mb-5 font-sans">The Mignite Story</h1>
                  <p className="text-[#800020]   font-bold text-xl ">
                    Started in the year 2024, Mignite is one of the largest
                    edtech platforms in India providing education to more than
                    10 million users.
                  </p>
                  <p className="text-[#800020] mb-10 font-bold text-xl ">
                    To allow every child to realize his/her dream, live up to
                    their true potential and be their lifelong learning partner.
                  </p>

                  <span className="  border border-[#5e1920] text-2xl  hover:bg-gray-400 hover:border-gray-600 p-4 rounded cursor-pointer">
                    Register Now
                  </span>
                </div>
                <div>
                  <SingleBanner image={image} />
                </div>
              </div>
            </div>
          </section>
          <section className="bg-[#f5f5dc] py-10 mb-8">
            <div className="container mx-auto p-4 my-4">
              <h1 className="text-4xl text-center font-medium text-[#800020] text-400  mb-4">
                Our Mission
              </h1>
              <div className="max-w-screen-xl mx-auto px-6 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 ">
                  <div className=" py-12 pr-8">
                    <p className="text-[#800020] font-bold text-xl ">
                      Mignite is the result of a continual effort to
                      exponentially increase the employability of every Indian,
                      irrespective of their socioeconomic status. With
                      accessibility and affordability being the support
                      structure of high-quality, industry-relevant courses,
                      Mignite aims to empower professionals and students alike
                      to either jumpstart their careers or leverage existing
                      skills with new, future-driven upgrades that will help
                      them realise their full potential.
                    </p>
                  </div>
                  <div>
                    <SingleBanner image={mission} />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-[#f5f5dc] py-10 mb-8">
            <div className="container mx-auto p-4 my-4">
              <h1 className="text-4xl font-medium text-[#800020] text-400  mb-8">
                Our Vision
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cardsData.map((card, index) => (
                  <TopInstructorCard
                    key={index}
                    // title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default AboutPage;
