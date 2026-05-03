import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  estoqueIndex = signal(0);
  rotasIndex = signal(0);

  estoqueProjects: Project[] = [
    {
      id: 1,
      title: 'Sistema de Controle de Estoque',
      description: 'Sistema completo para gerenciamento de estoque e movimentação de itens.',
      image: '/img/alo_controle/estoque.png',
    },
    {
      id: 2,
      title: 'Dashboard de Controle',
      description: 'Painel de controle com visualização de dados.',
      image: '/img/alo_controle/controle.png',
    },
    {
      id: 3,
      title: 'Dashboard Analytics',
      description: 'Dashboard completo com gráficos e métricas.',
      image: '/img/alo_controle/dashboard.png',
    },
    {
      id: 4,
      title: 'Sistema de Pedidos',
      description: 'Gerenciador de pedidos com integração de estoque.',
      image: '/img/alo_controle/pedidos.png',
    },
  ];

  rotasProjects: Project[] = [
    {
      id: 1,
      title: 'Sistema de Rotas',
      description: 'Controle de rotas e acompanhamento de entregas.',
      image: '/img/startboy/clientes.png',
    },
    {
      id: 2,
      title: 'Lançamento de Notas',
      description: 'Tela para registrar e controlar notas fiscais.',
      image: '/img/startboy/pagamentos.png',
    },
    {
      id: 3,
      title: 'Controle de Entregas',
      description: 'Acompanhamento das entregas realizadas.',
      image: '/img/startboy/painel.png',
    },
  
  ];

  nextEstoque() {
    this.estoqueIndex.set((this.estoqueIndex() + 1) % this.estoqueProjects.length);
  }

  prevEstoque() {
    this.estoqueIndex.set(
      (this.estoqueIndex() - 1 + this.estoqueProjects.length) % this.estoqueProjects.length
    );
  }

  goToEstoque(index: number) {
    this.estoqueIndex.set(index);
  }

  nextRotas() {
    this.rotasIndex.set((this.rotasIndex() + 1) % this.rotasProjects.length);
  }

  prevRotas() {
    this.rotasIndex.set(
      (this.rotasIndex() - 1 + this.rotasProjects.length) % this.rotasProjects.length
    );
  }

  goToRotas(index: number) {
    this.rotasIndex.set(index);
  }
}