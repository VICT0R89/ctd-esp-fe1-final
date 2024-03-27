import './tarjeta-episodio.css';
import { SingleEpisodio } from '../../tipos/tipos'

export const TarjetaEpisodio: React.FC<SingleEpisodio> = ({
	id, name, air_date, episode, characters, url, created
}) => {
	return (
		<div className="tarjeta-episodio" data-track={id} >
			<h4>{name}</h4>
			<div>
				<span>{episode}</span>
				<span>Lanzado el: {air_date}</span>
			</div>
    </div>
	)
}