import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}

interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
}

interface SocialLink {
  name: string;
  icon: string;
  url: string;
  color: string;
}

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  name = signal('Ryan Silva');
  title = signal('Full Stack Developer');
  description = signal(
    'Desenvolvedor full stack apaixonado por criar soluções web modernas e inovadoras. Experiência em Angular, TypeScript, Node.js e muito mais.'
  );
  profileImage = signal('assets/profile.jpg');

  // Seções de conteúdo
  presentation = signal({
    title: '🧑‍💻 Apresentação',
    content: 'Olá, sou o Dev Ryan Silva, tenho 22 anos e sou natural do Maranhão. Sempre tive afinidade com tecnologia e curiosidade para entender como tudo funcionava, o que fez minha paixão pela área crescer ao longo do tempo. Atualmente estou cursando Análise e Desenvolvimento de Sistemas na UNISUAM Bonsucesso, e estou muito feliz por estar no meu último ano desse curso que gosto tanto. Ao mesmo tempo, entendo que é preciso sair da zona de conforto para conquistar algo maior, e estou focado em evoluir profissionalmente e construir soluções que gerem impacto real.'
  });

  skills_content = signal({
    title: '🚀 Habilidades',
    content: 'Atuo como Desenvolvedor Full Stack Júnior, com experiência prática no desenvolvimento de sistemas web completos, desde a interface até a lógica de negócio e integração com banco de dados. Já desenvolvi soluções voltadas para controle de estoque, movimentação de itens, portaria e organização de processos internos, sempre buscando resolver problemas reais do dia a dia. Tenho conhecimento em tecnologias como PHP, Python, Node.js, Angular, Django e Laravel, além de trabalhar com APIs REST e bancos de dados como PostgreSQL e SQLite. Também possuo experiência com integração de sistemas, estruturação de projetos e melhoria de fluxos operacionais, mantendo sempre o foco em desempenho, organização e escalabilidade.'
  });

  // Carrossel de Projetos
  projects = signal<Project[]>([
    {
      id: 1,
      title: 'Portfólio Web',
      description: 'Aplicação modern em Angular com design responsivo e interativo.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'HTML'],
      link: '#',
      image: 'assets/project1.jpg',
    },
    {
      id: 2,
      title: 'Dashboard Admin',
      description: 'Painel administrativo com gráficos e gerenciamento de dados em tempo real.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express'],
      link: '#',
      image: 'assets/project2.jpg',
    },
    {
      id: 3,
      title: 'E-commerce App',
      description: 'Plataforma de comércio eletrônico com carrinho de compras e pagamento integrado.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: '#',
      image: 'assets/project3.jpg',
    },
  ]);

  currentIndex = signal(0);

  // Skills
  skills = signal<Skill[]>([
    // Frontend
    { name: 'Angular', icon: 'devicon-angular-plain colored', category: 'frontend' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored', category: 'frontend' },
    { name: 'HTML5', icon: 'devicon-html5-plain colored', category: 'frontend' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored', category: 'frontend' },
    { name: 'SCSS', icon: 'devicon-sass-original colored', category: 'frontend' },
    { name: 'React', icon: 'devicon-react-plain colored', category: 'frontend' },

    // Backend
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored', category: 'backend' },
    { name: 'Express', icon: 'devicon-express-original colored', category: 'backend' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored', category: 'backend' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored', category: 'backend' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored', category: 'backend' },
    { name: 'Firebase', icon: 'devicon-firebase-plain colored', category: 'backend' },

    // Tools
    { name: 'Git', icon: 'devicon-git-plain colored', category: 'tools' },
    { name: 'GitHub', icon: 'devicon-github-original colored', category: 'tools' },
    { name: 'VS Code', icon: 'devicon-vscode-plain colored', category: 'tools' },
    { name: 'Docker', icon: 'devicon-docker-plain colored', category: 'tools' },
  ]);

  // Social Links
  socialLinks = signal<SocialLink[]>([
    {
      name: 'GitHub',
      icon: 'bi bi-github',
      url: 'https://github.com/ryansilva',
      color: '#333',
    },
    {
      name: 'LinkedIn',
      icon: 'bi bi-linkedin',
      url: 'https://linkedin.com/in/ryansilva',
      color: '#0A66C2',
    },
    {
      name: 'Twitter',
      icon: 'bi bi-twitter-x',
      url: 'https://twitter.com/ryansilva',
      color: '#000',
    },
    {
      name: 'Email',
      icon: 'bi bi-envelope',
      url: 'mailto:ryan@example.com',
      color: '#EA4335',
    },
  ]);

  // Métodos do carrossel
  nextProject() {
    this.currentIndex.set((this.currentIndex() + 1) % this.projects().length);
  }

  prevProject() {
    this.currentIndex.set(
      (this.currentIndex() - 1 + this.projects().length) % this.projects().length
    );
  }

  get currentProject(): Project {
    return this.projects()[this.currentIndex()];
  }

  // Getters para skills por categoria
  get frontendSkills() {
    return this.skills().filter((s) => s.category === 'frontend');
  }

  get backendSkills() {
    return this.skills().filter((s) => s.category === 'backend');
  }

  get toolsSkills() {
    return this.skills().filter((s) => s.category === 'tools');
  }
}
