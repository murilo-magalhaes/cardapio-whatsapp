export interface ITestimonial {
  id: string;
  name: string;
  message: string;
  img_url: string;
  rank: number;
}

const testimonialsMock: ITestimonial[] = [
  {
    id: '1',
    name: 'Diego Pereira',
    message:
      'Muito bom, recomendo demais! Comida muito bem feita pelo chefe, atendimento dentro dos parâmetros e boa comunicação com o cliente.',
    rank: 4.5,
    img_url: '/assets/images/diego.jpg',
  },
  {
    id: '2',
    name: 'Laila Milhomens',
    message:
      'Um jantar perfeito do começo ao fim. Comida, experiência, serviço... foi tão maravilhoso que fomos dois dias seguidos - fato inédito para mim em uma viagem.',
    rank: 5.0,
    img_url: '/assets/images/ana.jpg',
  },
  {
    id: '3',
    name: 'Murilo Magalhães',
    message:
      'A comida estava excelente e o serviço gentil nos surpreendeu! Dica: reserve umas 3 horas para ter uma experiência incrível.',
    rank: 4.0,
    img_url: '/assets/images/joao.jpg',
  },
];

export default testimonialsMock;
