import './filtros.css'

export const Filtros: React.FC = () => {
	return (
		<div className="filtros">
			<label htmlFor="nombre">Filtrar por nombre:</label>
			<input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" />
		</div>
	)
}