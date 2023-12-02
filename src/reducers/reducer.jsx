import { useEffect, useReducer } from "react";

const TOGGLE_THEME = "TOGGLE_THEME";
const DATA_DENTISTS = "DATA_DENTISTS";
const ADD_FAVORITES = "ADD_FAVORITES";
const REMOVE_FAVORITES = "REMOVE_FAVORITES";
const DATA_DENTIST = "DATA_DENTIST";

const initialState = {
  theme: "light",
  dentist: {},
  dentists: [],
  favorites: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case DATA_DENTISTS:
      return {
        ...state,
        dentists: action.payload,
      };
    case DATA_DENTIST:
      return {
        ...state,
        dentist: action.payload,
      };
    case ADD_FAVORITES:
      const dentistFav = action.payload;
      const isAlreadyFavorited = state.favorites.some(
        (fav) => fav.id === dentistFav.id
      );
      if (!isAlreadyFavorited) {
        const updatedFavs = [...state.favorites, dentistFav];
        localStorage.setItem("favorites", JSON.stringify(updatedFavs));
        return {
          ...state,
          favorites: updatedFavs,
        };
      } else {
        return state;
      }
    case REMOVE_FAVORITES:
      const updatedFavorites = state.favorites.filter(
        (fav) => fav && fav.id !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return {
        ...state,
        favorites: updatedFavorites,
      };
    default:
      return state;
  }
};

const userHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.removeItem("favorites");
    };

    clearLocalStorage();

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        dispatch({ type: DATA_DENTISTS, payload: data });
      } catch (error) {
        console.log("Error al obtener los datos: ", error);
      }
    };

    fetchData();
  }, []);

  const fetchDetail = async (dentistId) => {
    try {
      const dentistDetailResponse = await fetch(
        `https://jsonplaceholder.typicode.com/users/${dentistId}`
      );
      const detailData = await dentistDetailResponse.json();
      dispatch({ type: DATA_DENTIST, payload: detailData });
    } catch (error) {
      console.log("Error al obtener detalles del dentista: ", error);
    }
  };

  return [state, dispatch, fetchDetail];
};

export {
  userHook,
  TOGGLE_THEME,
  ADD_FAVORITES,
  REMOVE_FAVORITES,
  DATA_DENTIST,
};
