import { BaseSyntheticEvent, useState } from 'react';

import Layout from 'components/Layout';
import Input from 'components/Input';
import List from 'components/List';

import useMount from 'hooks/useMount';

import { BASE_URL } from 'config/constants';

import type { PlayerModel, PlayersState } from 'types';

const initialState = {
  players: [],
  favorites: [],
  searchResults: [],
};

function App() {
  const [{ players, favorites, searchResults }, setPlayers] = useState<PlayersState>(
    () => initialState,
  );
  const [bgColor, setBgColor] = useState('#fff');

  const [query, setQuery] = useState('');

  const handleChange = (event: BaseSyntheticEvent) => {
    const q = event.target.value.toLowerCase();

    setQuery(q);

    setPlayers(prev => ({
      ...prev,
      searchResults: q
        ? players.filter(player => player.first_name.toLocaleLowerCase().includes(q))
        : [],
    }));
  };

  useMount(async () => {
    const { data } = await (await fetch(BASE_URL)).json();
    setPlayers(prevPlayers => ({
      ...prevPlayers,
      players: data.map((p: PlayerModel) => ({ ...p, isFavorite: false })),
    }));
  });

  const handleAddFavorite = (player: PlayerModel) =>
    setPlayers(prev => ({
      ...prev,
      players: prev.players.filter(p => p.id !== player.id),
      favorites: [player, ...prev.favorites],
    }));

  const handleRemoveFavorite = (player: PlayerModel) =>
    setPlayers(prev => ({
      ...prev,
      players: [player, ...prev.players],
      favorites: prev.favorites.filter(p => p.id !== player.id),
    }));

  const handleChangeBGColor = (event: BaseSyntheticEvent) => setBgColor(event.target.value);

  return (
    <Layout>
      <List>
        <List.Item>
          <Input value={query} onChange={handleChange} />
        </List.Item>
        {(searchResults.length > 0 ? searchResults : players).map(player => (
          <List.Item key={player.id}>
            <h1>
              {player.first_name} {player.last_name}
            </h1>
            <div>position: {player.position}</div>
            <div>team: {player.team.name}</div>
            <button onClick={() => handleAddFavorite(player)}>Add to Favorites</button>
          </List.Item>
        ))}
      </List>
      <List color={bgColor}>
        <List.Item>
          <input
            type="color"
            id="head"
            name="head"
            value={bgColor}
            onChange={handleChangeBGColor}
          />
          <label htmlFor="head">Choose Background Color</label>
        </List.Item>
        {favorites.map(favorite => (
          <List.Item key={favorite.id}>
            <h1>
              {favorite.first_name} {favorite.last_name}
            </h1>
            <div>position: {favorite.position}</div>
            <div>team: {favorite.team.name}</div>
            <button onClick={() => handleRemoveFavorite(favorite)}>Remove from favorites</button>
          </List.Item>
        ))}
      </List>
    </Layout>
  );
}

export default App;
