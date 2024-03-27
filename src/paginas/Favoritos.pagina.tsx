import { GrillaPersonajes } from "../componentes/personajes/grilla-personajes.componente"

export const PaginaFavoritos: React.FC = () => {
	return (
		<div className="container">
			<div className="actions">
				<h3>Personajes Favoritos</h3>
				<button className="danger">Test Button</button>
			</div>
			<GrillaPersonajes />
    </div>
	)
}