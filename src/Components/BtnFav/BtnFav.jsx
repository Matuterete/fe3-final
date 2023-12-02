import React, { useState, useEffect } from 'react';
import { useContext } from '../../utils/Context';
import { ADD_FAVORITES, REMOVE_FAVORITES } from '../../reducers/reducer';
import '../styles/BtnFav.css';

const ButtonFav = ({ dentist }) => {
  const { state, dispatch } = useContext();
  const isFavInGlobalState = state.favorites.some(fav => fav.id === dentist.id);
  const [isFav, setIsFav] = useState(isFavInGlobalState);

  useEffect(() => {
    setIsFav(isFavInGlobalState);
  }, [isFavInGlobalState]);

  const handleFav = () => {
    if (isFav) {
      dispatch({ type: REMOVE_FAVORITES, payload: dentist.id });
    } else {
      dispatch({ type: ADD_FAVORITES, payload: dentist });
    }
  };

  return (
    <button onClick={handleFav} className="circle-button fav">
      {isFav ? "❤️" : "🤍"}
    </button>
  );
};

export default ButtonFav;
