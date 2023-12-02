import React, { useEffect, useState } from "react";
import { useContext } from "../utils/context";
import Card from "../Components/Card";


const Favs = () => {
  const { state } = useContext();

  const [uniqueFavs, setUniqueFavs] = useState(state.favorites);

  useEffect(() => {
    setUniqueFavs(state.favorites);
  }, [state.favorites]);

  return (
    <div>
      <h1>Favoritos</h1>
      {(!uniqueFavs || uniqueFavs.length === 0) ? (
        <p className="Detail NotFound">You don't have favorite dentists</p>
      ) : (
        <div className="card-grid">
          {uniqueFavs.map((fav) => (
            <Card dentist={fav} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favs;