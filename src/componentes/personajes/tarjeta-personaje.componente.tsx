import './tarjeta-personaje.css'
import { BotonFavorito } from '../botones/boton-favorito.componente'
import { SingleCharacter } from '../../tipos/tipos'
import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const TarjetaPersonaje: React.FC<SingleCharacter> = ({id, name, image}) => {
	const favoritos = useSelector((state: RootState) => state.favorite.favorites)
	const esFavorito = favoritos.some(fav => fav.id === id)
	return (
		<div className="tarjeta-personaje">
			<Link to={`/detalle/${id}`}>
				<img src={image} alt={name} />
			</Link>
			<div className="tarjeta-personaje-body">
				<Link to={`/detalle/${id}`}>
					<span>{ name }</span>
				</Link>
				<BotonFavorito esFavorito={esFavorito} id={id} />
			</div>
		</div>
	)
}
