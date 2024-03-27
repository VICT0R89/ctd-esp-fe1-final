import './boton-favorito.css'
import { useDispatch } from 'react-redux'
import { addToFavorites, removeFavorites } from '../../store/slices/favoriteSlice'
import { BotonFavoritoProps } from '../../tipos/tipos'

export const BotonFavorito: React.FC<BotonFavoritoProps> = ({ esFavorito, id }) => {
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {    
    if (esFavorito) {
      dispatch(removeFavorites({ esFavorito, id }))
    } else {
      dispatch(addToFavorites({ esFavorito, id }))
    }
  };

  const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png";

  return (
    <div className="boton-favorito" onClick={handleFavoriteClick}>
      <img src={src} alt="favorito" />
    </div>
  );
};
