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
				<title>{title || 'PokemonApp'}</title>
				<meta name="author" content="Erick Briones" />
				<meta name="description"content={`Información sobre el pokémon: ${title}`} />
				<meta name="keywords" content={`${title}, pokémon, pokedex`} />
				<meta property="og:title" content={`Información sobre ${ title }`} />
				<meta property="og:description" content={`Esta es la página sobre ${ title }`} />
				<meta property="og:image" content={`https://pokemon-app.erick-briones.com/img/banner.png`} />
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
