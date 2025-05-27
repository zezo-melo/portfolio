import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          home: 'Home',
          about: 'About',
          projects: 'My Projects',
          skills: 'Skills',
          contact: 'Contact',
          developer: 'Developer'
        },
      },
      pt: {
        translation: {
          home: 'Início',
          about: 'Sobre mim',
          projects: 'Meus Projetos',
          skills: 'Habilidades',
          contact: 'Contato',
          developer: 'Desenvolvedor'
        },
      },
    },
  });

export default i18n;
