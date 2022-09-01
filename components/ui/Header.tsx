import Image from "next/image";
import NextLink from "next/link"

import {
	Navbar,
	Link,
	Text
} from "@nextui-org/react";
import { FC } from "react";

export const Header: FC = () => {
	return (
		<Navbar isBordered>
			<Navbar.Brand>
				<NextLink href="/" passHref>
					<Link css={{ userSelect: 'none' }}>
						<Image 
							src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
							alt="Icono de la App"
							width={40}
							height={40}
							/>
						<Text h3 color="white" css={{ margin: 0 }}>Pokémon</Text>
					</Link>
				</NextLink>
			</Navbar.Brand>
			<Navbar.Content>
				<NextLink href="/favorites" passHref>
					<Navbar.Link>
						Favoritos
					</Navbar.Link>
				</NextLink>
			</Navbar.Content>
		</Navbar>
	)
}
