import { useState, useEffect } from 'react';

import { NoFavorites, Favorites } from '../../components/ui';
import { Layout } from "../../components/layouts";
import { pokemons } from '../../utils';

const FavoritesPage = () => {

	const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])
	
	useEffect(() => {
		setFavoritePokemons(pokemons)
	}, [])

	return (
		<Layout
			title="PokemonApp - Favoritos"
		>
			{
				favoritePokemons.length === 0 
				? ( <NoFavorites /> )
				: ( <Favorites pokemons={favoritePokemons} /> )
			}
		</Layout>
	)
}

export default FavoritesPage
