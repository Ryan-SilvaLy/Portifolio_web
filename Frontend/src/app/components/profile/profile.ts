import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  currentIndex = signal(0);
  totalProjects = 3;

  nextProject() {
    this.currentIndex.set((this.currentIndex() + 1) % this.totalProjects);
  }

  prevProject() {
    this.currentIndex.set(
      (this.currentIndex() - 1 + this.totalProjects) % this.totalProjects
    );
  }

  goToProject(index: number) {
    this.currentIndex.set(index);
  }
}