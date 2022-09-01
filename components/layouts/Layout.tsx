import { FC, ReactNode } from "react";
import Head from "next/head";
import { Header } from '../ui';

interface Props {
	children: ReactNode
	title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>Pokemon App</title>
				<meta name="author" content="Erick Briones" />
				<meta
					name="description"
					content={`Información sobre el pokémon: ${title}`}
				/>
				<meta name="keywords" content={`${title}, pokémon, pokedex`} />
				<title>{title || 'PokemonApp'}</title>
			</Head>

			{/* Navbar */}
			<Header />

			<main style={{
				padding: '0 20px'
			}}>
				{children}
			</main>
		</>
	)
}
