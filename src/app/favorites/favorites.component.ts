// src/app/favorites/favorites.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favoriteEvents: any[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favoriteEvents = this.favoritesService.getFavorites();
  }

  removeFromFavorites(assetGuid: string): void {
    this.favoritesService.removeFavorite(assetGuid);
    this.loadFavorites(); // Recarga la lista tras eliminar
  }
}
