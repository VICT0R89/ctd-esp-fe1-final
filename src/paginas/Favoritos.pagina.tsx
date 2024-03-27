import { GrillaPersonajes } from "../componentes/personajes/grilla-personajes.componente"
import { BotonVolver } from "../componentes/botones/boton-volver.componente"

export const PaginaFavoritos: React.FC = () => {
	return (
		<div className="container">
			<div className="actions">
				<h3>Personajes Favoritos</h3>
				<BotonVolver />
			</div>
			<GrillaPersonajes />
    </div>
	)
}