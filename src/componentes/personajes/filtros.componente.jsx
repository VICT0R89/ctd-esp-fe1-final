import './filtros.css'

export const Filtros = () => {
	return (
		<div className="filtros">
			<label for="nombre">Filtrar por nombre:</label>
			<input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" />
		</div>
	)
}