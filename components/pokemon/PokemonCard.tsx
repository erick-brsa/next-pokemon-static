import { FC } from 'react';
import { Grid, Card, Row, Text } from '@nextui-org/react';
import NextLink from 'next/link';

import { SmallPokemon } from '../../interfaces';
import { useRouter } from 'next/router';

interface Props {
	pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
	const router = useRouter();

	const handleOnClick = () => {
		router.push(`/name/${pokemon.name}`);
	};

	return (
		<Grid xs={6} sm={3} md={2} key={pokemon.id}>
			<NextLink href={`/name/${pokemon.name}`}>
				<Card
					isHoverable
					isPressable
					// onPress={handleOnClick}
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
			</NextLink>
		</Grid>
	);
};
