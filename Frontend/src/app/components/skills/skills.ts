import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
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
