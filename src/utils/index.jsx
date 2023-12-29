import Ballon from '../assets/balloon.svg';
import Guitar from '../assets/guitar.svg';
import Workshop from '../assets/workshop.svg';
import Teatro from '../assets/teatro.svg';
import Carousel from '../assets/carousel.svg';
import Hallowen from '../assets/hallowen.svg';
import Podium from '../assets/podium.svg';
import Festas from '../assets/festas.svg';
import Esporte from '../assets/exercise.svg';
import Hamburger from '../assets/hamburger.svg';
import Praying from '../assets/praying.svg';

export default {
  categoryInfo: [
    {
      icon: Guitar,
      label: 'Festas e Shows',
    },
    {
      icon: Ballon,
      label: 'Passeios e Tour',
    },
    {
      icon: Workshop,
      label: 'Cursos e Workshops',
    },
    {
      icon: Teatro,
      label: 'Teatros e Espetáculos',
    },
    {
      icon: Carousel,
      label: 'Infantil',
    },
    {
      icon: Hallowen,
      label: 'Hallowen',
    },
    {
      icon: Podium,
      label: 'Congressos e Palestras',
    },
    {
      icon: Festas,
      label: 'Réveillon 2024',
    },
    {
      icon: Esporte,
      label: 'Esporte',
    },
    {
      icon: Hamburger,
      label: 'Gastronomia',
    },
    {
      icon: Praying,
      label: 'Religião e Espiritualidade',
    },
  ],

  formatCurrency: (value) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value),
};
