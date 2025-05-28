import React from 'react';
import { motion } from 'framer-motion';


const CTASection: React.FC = () => {
  return (
    <motion.div
            initial={{ opacity: 0, x: -600 }} 
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
    <section className="bg-gradient-to-r from-gray-900 to-black text-white py-18">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
        <h3 className="text-xl md:text-2xl font-semibold">
          Quer trocar uma ideia ou conhecer mais do meu trabalho?
        </h3>
        <div className="flex gap-4 justify-center md:justify-end">
          <div>
          <a
            href="#contact" className="text-xl inline-block px-6 py-3 border hover:bg-white text-white hover:text-black rounded-full font-medium transition"
          >
            Entrar em contato
          </a>
        </div>
         <div>
          <a
            href="#projects" className="text-xl inline-block px-6 py-3 border hover:bg-white text-white hover:text-black rounded-full font-medium transition"
          >
            Ver projetos
          </a>
        </div>
        </div>
      </div>
    </section>
    </motion.div>
  );
};

export default CTASection;
