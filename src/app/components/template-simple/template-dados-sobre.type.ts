const destaqueDestaque: any = `style="color: white;"`;
export const dadosSobre = {
  description: `  
      <p>
          Meu nome é <span ${destaqueDestaque}>Claiver</span> , sou um pouco doido da cabeça e tenho
          <span ${destaqueDestaque}>24</span> anos.
        </p>
      <p>
          Sou programador full stack, apaixonado por tecnologia. Atualmente trabalho como
          <span ${destaqueDestaque}>Full Stack Developer</span> na
          <span ${destaqueDestaque}>FegIT</span> e tenho 2 anos de experiência com essas tecnologias: HTML,
          CSS,
          JavaScript, TypeScript,
          Angular, NodeJS, .Net, SQL Server, MongoDB, etc.
      </p>
    `,
  img: '../../../../assets/img/clai.jpg',
  bio: 'Me chamo Claiver, sou um pouco doido da cabeça',
  carreira: [
    {
      cargo: 'Full Stack Developer',
      empresa: 'FegIT',
      hrefEmpresa: 'http://www.fegit.com.br/',
      local: 'Barueri, SP',
      experiencia: 'Jan 2022 – Momento • 11 meses',
    },
    {
      cargo: 'Front-end Developer Junior',
      empresa: 'Manabi Technology',
      hrefEmpresa: 'https://manabitechnology.com/',
      local: 'Santana de Parnaíba, SP',
      experiencia: ' Jan 2021 – Jan 2022 • 1 ano',
    },
  ],
};

export const dadosWhoAmI = {
  nome: 'Claiver Araujo',
  cargo: 'Full Stack Developer',
  linkedin: 'https://www.linkedin.com/in/claiver-araujo-a87685149/',
};
