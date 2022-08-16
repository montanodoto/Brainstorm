export type PlayerModel = {
  first_name: string;
  last_name: string;
  id: number;
  position: string;
  isFavorite: boolean;

  team: {
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    id: number;
    name: string;
  };
};

export type PlayersState = {
  players: PlayerModel[];
  favorites: PlayerModel[];
  searchResults: PlayerModel[];
};
