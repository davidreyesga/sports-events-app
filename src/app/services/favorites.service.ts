import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private localStorageKey = 'FAVORITE_EVENTS';

  constructor() {}

  /**
   * Obtiene la lista de eventos favoritos desde Local Storage.
   */
  getFavorites(): any[] {
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data) : [];
  }

  /**
   * Agrega un nuevo evento a la lista de favoritos.
   * Verifica que no exista ya en la lista.
   */
  addFavorite(event: any): void {
    const favorites = this.getFavorites();
    const exists = favorites.some((fav) => fav.assetGuid === event.assetGuid);
    if (!exists) {
      favorites.push(event);
      localStorage.setItem(this.localStorageKey, JSON.stringify(favorites));
    }
  }

  /**
   * Elimina un evento de la lista de favoritos según su assetGuid.
   */
  removeFavorite(eventGuid: string): void {
    const favorites = this.getFavorites();
    const updated = favorites.filter((fav) => fav.assetGuid !== eventGuid);
    localStorage.setItem(this.localStorageKey, JSON.stringify(updated));
  }

  /**
   * Verifica si un evento está en la lista de favoritos.
   */
  isFavorite(eventGuid: string): boolean {
    const favorites = this.getFavorites();
    return favorites.some((fav) => fav.assetGuid === eventGuid);
  }
}
