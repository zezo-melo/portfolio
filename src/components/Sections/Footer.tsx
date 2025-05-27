import React from 'react';
import { FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#101828] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h3 className="text-2xl font-semibold mb-6">Entre em contato</h3>
        <div className="flex gap-6 mb-4">
          <a
            href="https://wa.me/556191885343"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-green-400 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:robertomello404@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-red-500 transition"
          >
            <IoMailOutline />
          </a>
          <a
            href="https://linkedin.com/in/robertomelo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-500 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/zezo-melo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>
        </div>
        <p className="text-sm text-center mt-4 mb-6">Siga-me nas redes sociais!</p>

        <div className="text-center text-sl mt-6">
          <p>© {new Date().getFullYear()} Roberto Melo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
