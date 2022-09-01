/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { Container, Image, Text } from "@nextui-org/react";

export const NoFavorites = () => {

	const [number, setNumber] = useState(1)

	useEffect(() => {
		const getRandomNumber = () => {
				let randomNumber: number = Math.floor(Math.random() * 100);
				if (randomNumber === 0) {
					randomNumber++ 
				}
				setNumber(randomNumber)
		}
		getRandomNumber()
	}, [])

	return (
		<Container
				 css={{
					display: 'flex',
					flexDirection:'column',
					height: 'calc(100vh - 100px)',
					alignItems: 'center',
					justifyContent: 'center',
					alignSelf: 'center'
				}}
			>
				<Text h1>No hay favoritos</Text>
				{
				}
				<Image 
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${number}.svg`}
					width={250}
					height={250}
					css={{ opacity: 0.25 }}
				/>
			</Container>
  )
}
