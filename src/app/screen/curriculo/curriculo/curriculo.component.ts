import { SobreController } from 'src/app/core/controllers/usuario/sobre.controller copy';

import { Component, HostListener, OnInit } from '@angular/core';
import { ScreenService } from 'src/app/core/services/screen.service';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['../../../../assets/styles/screens/_curriculo.css'],
})
export class CurriculoComponent implements OnInit {
  curriculo: any[] = [];
  mobile: boolean = false;
  hdResolution: boolean = false;

  constructor(
    private screenService: ScreenService,
    private sobreController: SobreController
  ) {}

  ngOnInit(): void {
    this.getCurriculo();
    this.onResize(event);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.mobile = this.screenService.mobileScreen();
    this.hdResolution = this.screenService.hdResolution();
  }

  getCurriculo = () => {
    this.curriculo = [
      {
        title: 'OBJETIVO',
        description: 'Pleno.Net Development / Angular2 a 13 / NodeJS',
      },
      {
        title: 'RESUMO DE CONHECIMENTOS',
        description: ` ·NET Framework, .NET Core, C#, Angular 2 a 13, HTML5, CSS 3, SCSS ,NodeJS;
         ·Arquitetura DDD (DomainDriven Design), TDD, WebAPI, WebService,
         ·WindowsServices, Microservices, WebSocket;
         ·Banco de Dados MongoDB e SQL Server;
         ·GitLab (repositório e deploy automático);
         ·Test com Jest (NodeJs) e XUnit (C#);
         ·AWS: CloudFormation, CodeDeploy, S3 e EC2;
         ·Devops: GitLab e AWS;
         `,
      },
      {
        title: 'FORMAÇÃO ACADÊMICA',
        period: '08/2022 - 07/2024',
        description: ` Tecnólogo em Analise e Desenvolvimento de Sistemas 
        UNIP - Universidade Paulista
        `,
      },
      {
        title: 'EXPERIÊNCIA PROFISSIONAL',
        professionalExperience: [
          {
            office: 'Desenvolvedor de Sistemas fullstack ',
            company: 'Fegit 01/2022',
            description: ` C#, .NET Core , Entity Framework Core, Angular 7 a 13, NodeJS, HTML 5, CSS3;
            MongoDB, SQL Server,MySQL;
            AWS com CodeDeploy, CloudFormation, Lambda;
            Testes com Jest e SuperTest (NodeJS) e XUnit (.Net);
            Git;
            `,
          },
          {
            office: 'Desenvolvedor de Front-end Junior ',
            company: 'Manabi Technology 01/2021 - 01/2022',
            description: ` Angular 7 a 13, HTML 5, CSS3, React Native;
            `,
          },
        ],
      },
      {
        title: 'IDIOMAS',
        period: 'Inglês',
        description: ` Básico
        `,
      },
    ];
  };
}
