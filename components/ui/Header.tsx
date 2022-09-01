import Image from "next/image";

import {
	Navbar,
	Button,
	Link,
	Text,
	Card,
	Radio,
	useTheme,
	Spacer
} from "@nextui-org/react";

export const Header = () => {

	const { theme, isDark } = useTheme();

	return (
		<Navbar isBordered>
			<Navbar.Brand>
				<Image 
				src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
				alt="Icono de la App"
				width={40}
				height={40}
				/>
				<Text h3 color="white" css={{ margin: 0 }}>Pokémon</Text>
			</Navbar.Brand>
			<Navbar.Content>
				<Navbar.Link href="#">
					Favoritos
				</Navbar.Link>
			</Navbar.Content>
		</Navbar>
	)
}
