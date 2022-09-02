import { useState } from "react";

import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

import confetti from "canvas-confetti"

import { existInFavorites, getPokemonInfo, toggleFavorite } from "../../utils";
import { Pokemon, PokemonListResponse } from "../../interfaces";
import { Layout } from "../../components/layouts";
import { pokeApi } from "../../api";

interface Props {
	pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

	const [isInFavorites, setIsInFavorites] = useState(existInFavorites(pokemon.id))

	const capitalize = (name: string) => {
		return name.charAt(0).toUpperCase() + name.slice(1)
	}

	const handleOnToggle = () => {
		toggleFavorite(pokemon.id)
		setIsInFavorites(!isInFavorites)

		if (isInFavorites) return 

		confetti({
			zIndex: 999,
			particleCount: 100,
			spread: 160,
			angle: -100,
			origin: {
				x: 1,
				y: 0
			}
		})
	}


	return (
		<Layout title={`PokemonApp - ${capitalize(pokemon.name)}`}>
			<Grid.Container css={{ marginTop: '5px' }} gap={2}>
				<Grid xs={12} sm={4}>
					<Card 
						isHoverable 
						isPressable 
						css={{ padding: '30px' }}
					>
						<Card.Body>
							<Card.Image 
								src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
								alt={pokemon.name}
								width="100%"
								height={200}
							/>
						</Card.Body>
					</Card>
				</Grid>
				<Grid xs={12} sm={8}>
					<Card>
						<Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
							<Text h1 transform='capitalize'>{pokemon.name}</Text>
							<Button 
								auto
								ghost={isInFavorites ? false : true}
								color="gradient"
								onPress={handleOnToggle}
							>
								{isInFavorites ? 'En favoritos' : 'Guardar en favoritos'}
							</Button>
						</Card.Header>
						<Card.Body>
							<Text size={30}>Sprites:</Text>
							<Container direction='row' display='flex' gap={0}>
								<Image 
									src={pokemon.sprites.front_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image 
									src={pokemon.sprites.back_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image 
									src={pokemon.sprites.front_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image 
									src={pokemon.sprites.back_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
							</Container>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</Layout>
	)
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon`);

    const pokemons = data.results;

	return {
        paths: pokemons.map(p => ({
            params: { name: p.name }
        })),
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { name } = params as { name: string };

	return {
		props: {
			pokemon: await getPokemonInfo(name)
		}
	}
}

export default PokemonPage
