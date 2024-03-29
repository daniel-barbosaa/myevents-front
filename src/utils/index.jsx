import Ballon from '/balloon.svg';
import Guitar from '/guitar.svg';
import Workshop from '/workshop.svg';
import Teatro from '/teatro.svg';
import Carousel from '/carousel.svg';
import Hallowen from '/hallowen.svg';
import Podium from '/podium.svg';
import Festas from '/festas.svg';
import Esporte from '/exercise.svg';
import Hamburger from '/hamburger.svg';
import Praying from '/praying.svg';

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
