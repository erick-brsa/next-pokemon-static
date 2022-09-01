import React, { FC } from "react"
import { Grid } from "@nextui-org/react"

import { FavoriteCardPokemon } from "../pokemon"

interface Props {
	pokemons: number[]
}

export const Favorites: FC<Props> = ({ pokemons }) => {
	return (
		<Grid>
			<Grid.Container gap={2} direction="row" justify="flex-start">
				{pokemons.map((id) => (
					<FavoriteCardPokemon key={id} id={id} />
				))}
			</Grid.Container>
		</Grid>
	)
}
