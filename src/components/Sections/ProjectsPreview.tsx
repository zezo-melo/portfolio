import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import framer motion
import { motion } from 'framer-motion';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'; // Import autoplay styles

// import required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'; // Add Autoplay module

import ProjetoGrymDiary from '../../assets/grym-diary-project.png';
import ProjetoClothStore from '../../assets/cloth-store-project.png';
import ProjetoLPItau from '../../assets/itau-project.png';
import LojaPalazzoBaby from '../../assets/loja-palazzo-baby.png';
import bgProjects from '../../assets/bg-parallax-projects.png';


const projects = [
  {
    title: 'Loja - Palazzo Baby - Freela',
    image: LojaPalazzoBaby,
    link: 'https://www.palazzobaby.com.br/',
  },
  {
    title: 'Diário Digital - Grym Diary',
    image: ProjetoGrymDiary,
    link: 'https://grymdiary.vercel.app/',
  },
  {
    title: 'Loja de roupas - Cloth Store',
    image: ProjetoClothStore,
    link: 'https://clothstore-zz.vercel.app/',
  },
  {
    title: (
      <>
        Landing Page - Itaú <br /> Projeto de estudo
      </>
    ),
    image: ProjetoLPItau,
    link: 'https://landing-page-react-next-bice.vercel.app/',
  },
  // Adicione mais projetos aqui se quiser
];

const ProjectsPreview: React.FC = () => {
  return (
      <section
          id="projects"
          className="bg-fixed bg-cover bg-center text-white py-16 px-6"
          style={{ backgroundImage: `url(${bgProjects})` }}
        >
      <motion.div
            initial={{ opacity: 0, x: 0 }} 
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Meus Projetos</h2>
        <h3 className="text-xl mb-12">Clique para acessar o projeto no ar!</h3>

        {/* Relative container for Swiper and custom navigation */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]} // Include Autoplay
            spaceBetween={30}
            slidesPerView={1}
            loop={true} // Enable infinite loop
            autoplay={{
              delay: 3000, // Delay between transitions (in ms)
              disableOnInteraction: false, // Autoplay will not be disabled after user interactions
              pauseOnMouseEnter: true, // Pause autoplay on mouse hover
            }}
            pagination={{ clickable: true, el: '.swiper-pagination-custom' }} // Use custom pagination element
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }} // Use custom navigation elements
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group block rounded-xl overflow-hidden shadow-lg h-52" // Fixed height for consistency
                >
                  <img
                    src={project.image}
                    alt={typeof project.title === 'string' ? project.title : 'Project image'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
                    <h3 className="text-xl font-semibold text-center">{project.title}</h3>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows (Positioned like reference) */}
          <div className="swiper-button-prev-custom absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer p-2">
            {/* You can use an SVG icon or text here. Example with text: */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white ml-[-30px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </div>
          <div className="swiper-button-next-custom absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer p-2">
            {/* You can use an SVG icon or text here. Example with text: */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-white mr-[-30px]">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>

          

        </div>

        <div className="mt-10">
          <a
            href="https://github.com/zezo-melo?tab=repositories" target='_blank'
            className="inline-block px-6 py-3 border hover:bg-white text-white hover:text-black text-xl rounded-full font-medium transition"
          >
            Veja mais projetos
          </a>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default ProjectsPreview;

