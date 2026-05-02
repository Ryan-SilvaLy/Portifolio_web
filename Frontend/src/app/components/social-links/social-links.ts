import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialLink {
  name: string;
  icon: string;
  url: string;
  color: string;
}

@Component({
  selector: 'app-social-links',
  imports: [CommonModule],
  templateUrl: './social-links.html',
  styleUrl: './social-links.scss',
})
export class SocialLinks {
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
}
