import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import BgSkills from '../../assets/bg-parallax-skills.png';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const data = {
  labels: ['React', 'NestJS', 'MongoDB', 'TailwindCSS', 'Git'],
  datasets: [
    {
      label: 'Nível de Conhecimento',
      data: [90, 70, 80, 85, 95],
      backgroundColor: 'rgba(38, 55, 123, 0.6)',
      borderColor: 'rgba(38, 55, 123, 1)',
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // ← permite controlar altura manualmente
  plugins: {
    legend: {
      labels: {
        color: '#ffffff',
        font: {
          size: 14,
          weight: 'bold',
        },
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#ffffff',
        font: {
          size: 18,
          weight: '700',
        },
      },
      grid: {
        color: 'rgba(255,255,255,0.1)',
      },
    },
    y: {
      beginAtZero: true,
      max: 100,
      ticks: {
        color: '#ffffff',
        stepSize: 20,
        font: {
          size: 14,
        },
      },
      grid: {
        color: 'rgba(255,255,255,0.1)',
      },
    },
  },
};

const SkillsSection: React.FC = () => {
  return (
    <section
      id='skills'
      className="text-white py-16 px-6 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${BgSkills})` }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Minhas Skills</h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 mb-12">
          {/* Cards de skills se houverem no futuro */}
        </div>

        <div className="mt-12 w-full max-w-full overflow-x-auto">
          <div className="w-full max-w-[800px] mx-auto h-[400px] sm:h-[500px]">
            <Bar data={data} options={options} />
          </div>
        </div>

        <div className="mt-10">
          <a
            href="https://www.linkedin.com/in/robertofmelo/"
            target="_blank"
            className="inline-block px-6 py-3 border hover:bg-white text-xl text-white hover:text-black rounded-full font-medium transition"
          >
            Saiba mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
