import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProfilePhoto from '../../assets/Profile-photo.png';
import BrazilFlag from '../../assets/flags/BrazilFlag.tsx';
import EUAFlag from '../../assets/flags/EUAFlag.tsx';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <header className="bg-[#000c1b] dark:bg-gray-900 text-white px-6 py-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        {/* Perfil */}
        <div className="flex items-center gap-3">
          <div className="w-28 h-28 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mb-[-35px]">
            <img
              src={ProfilePhoto}
              alt="Foto de perfil"
              className="w-27 h-27 rounded-full object-cover border-2 border-[#71a0e3] z-10"
            />
          </div>
          <div className="hidden sm:flex flex-col text-white text-xl font-bold tracking-wider">
            <span>{t('developer')}</span>
            <span>Roberto Melo</span>
          </div>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 font-medium text-lg">
            <li><a href="/" className="hover:border-b-2 transition">{t('home')}</a></li>
            <li><a href="#about" className="hover:border-b-2  transition">{t('about')}</a></li>
            <li><a href="#projects" className="hover:border-b-2  transition">{t('projects')}</a></li>
            <li><a href="#skills" className="hover:border-b-2  transition">{t('skills')}</a></li>
            <li><a href="#contact" className="hover:border-b-2  transition">{t('contact')}</a></li>
          </ul>
        </nav>

        {/* Ações */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt')}
            className="text-sm text-black font-bold bg-white px-3 py-1 rounded hover:bg-[#3a4b63] hover:text-white transition flex items-center gap-1"
          >
            {i18n.language === 'pt' ? <EUAFlag className="w-5 h-5" /> : <BrazilFlag className="w-5 h-5" />}
            {i18n.language === 'pt' ? 'EN' : 'PT'}
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm text-black bg-white dark:bg-gray-800 dark:text-white px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          {/* Botão mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-white focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-[#000c1b] dark:bg-gray-900 text-white px-6 py-4">
          <ul className="flex flex-col space-y-4 text-lg">
            <li><a href="/" onClick={() => setMenuOpen(false)}>{t('home')}</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>{t('about')}</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>{t('projects')}</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>{t('skills')}</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>{t('contact')}</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
