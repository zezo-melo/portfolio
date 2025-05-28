import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import {
  Code,
  Lightbulb,
  UserCheck,
  Activity,
  Layers,
  GitBranch,
  Database,
  Terminal,
  Cpu,

} from 'lucide-react'; // Adicionando ícones de Git, Database, Terminal, etc.

const qualities = [
  {
    icon: <Code size={40} />,
    label: 'Clean Code',
  },
  {
    icon: <Lightbulb size={40} />,
    label: 'Criatividade',
  },
  {
    icon: <UserCheck size={40} />,
    label: 'Responsável',
  },
  {
    icon: <Activity size={40} />,
    label: 'Proatividade',
  },
  {
    icon: <Layers size={40} />,
    label: 'Organização',
  },
];

const technologies = [
  {
    icon: <Cpu size={40} />,
    label: 'React',
  },
  {
    icon: <Terminal size={40} />,
    label: 'Node.js',
  },
  {
    icon: <Code size={40} />,
    label: 'TailwindCSS',
  },
  {
    icon: <Database size={40} />,
    label: 'MongoDB',
  },
  {
    icon: <GitBranch size={40} />,
    label: 'Git/GitHub',
  },
  {
    icon: <Terminal size={40} />,
    label: 'Express',
  },  
  {
    icon: <Cpu size={40} />,
    label: 'Wordpress',
  },  
  {
    icon: <Terminal size={40} />,
    label: 'HTML',
  },  
  {
    icon: <Code size={40} />,
    label: 'CSS',
  },  
  {
    icon: <Cpu size={40} />,
    label: 'JS',
  },  
];

const AboutPreviewCarousel = () => {
  return (
    <section id="about" className="bg-gray-800 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Sobre mim</h2>
        <p className="text-xl sm:text-xl font-md mb-10">
        Sou desenvolvedor web com 5 anos de experiência, focado em front-end. Já desenvolvi, participei e liderei diversos projetos, propondo soluções com tecnologias variadas. Atualmente, estou me aprofundando em back-end para atuar como desenvolvedor fullstack.
        </p>

        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          loop
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {/* Qualidades */}
          {qualities.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center justify-center gap-3 p-6 bg-gray-700 rounded-xl h-40 mx-4 shadow-md">
                <div className="rounded-xl w-20 h-20 flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-lg font-medium">{item.label}</span>
              </div>
            </SwiperSlide>
          ))}

          {/* Tecnologias */}
          {technologies.map((tech, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center justify-center gap-3 p-6 bg-gray-700 rounded-xl h-40 mx-4 shadow-md">
                <div className="rounded-xl w-20 h-20 flex items-center justify-center">
                  {tech.icon}
                </div>
                <span className="text-lg font-medium">{tech.label}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-10">
          <a
            href="https://www.linkedin.com/in/robertofmelo/" target='_blank'
            className="inline-block px-6 py-3 border hover:bg-white text-xl text-white hover:text-black rounded-full font-medium transition"
          >
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutPreviewCarousel;
