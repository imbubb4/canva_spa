import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useFavoritesStore = create(
    persist(
        (set) => ({
  favorites: [],
  addFavorite: (card) => 
    set((state) => {
        if(state.favorites.some((fav) => fav.id === card.id)) return state
        return {
            favorites: [...state.favorites, card], }
    }),
  removeFavorite: (id) => 
    set((state) => ({
      favorites: state.favorites.filter((fav) => fav.id !== id),
    })),
}),
{
    name: 'favorites-storage', 
}
    )
)

export default useFavoritesStore