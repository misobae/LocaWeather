import FavoriteButton from "./favorite/FavoriteButton";
import FavoriteList from "./favorite/FavoriteList";

import { Wrap } from "../styles/Favorite.styled";

function Favorite() {
  return (
    <Wrap>
      <FavoriteList />
      <FavoriteButton />
    </Wrap>
  )
}

export default Favorite;