import { FC } from "react"
import { Grid, Card, Row, Text } from "@nextui-org/react"

import { SmallPokemon } from "../../interfaces"
import { useRouter } from "next/router"

interface Props {
	pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

	const router = useRouter()

	const HandleOnClick = () => {
		router.push(`/pokemon/${pokemon.id}`)
	} 

	return (
		<Grid xs={6} sm={3} md={2} key={pokemon.id}>
			<Card 
				isHoverable 
				isPressable
				onClick={HandleOnClick}
			>
				<Card.Body css={{ p: 1 }}>
					<Card.Image src={pokemon.img} width="100%" />
				</Card.Body>
				<Card.Footer>
					<Row justify="space-between">
						<Text transform="capitalize">{pokemon.name}</Text>
						<Text>#{pokemon.id}</Text>
					</Row>
				</Card.Footer>
			</Card>
		</Grid>
	)
}
