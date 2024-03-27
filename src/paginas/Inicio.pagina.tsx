import {Filtros} from "../componentes/personajes/filtros.componente"
import {GrillaPersonajes} from "../componentes/personajes/grilla-personajes.componente"
import {Paginacion} from "../componentes/paginacion/paginacion.componente"
import { Encabezado } from "../componentes/layout/encabezado.componente"

export const PaginaInicio: React.FC = () => {
	return (
		<div className="container">
			<Encabezado />
			<div className="actions">
				<h3>Catálogo de Personajes</h3>
				<button className="danger">Test Button</button>
			</div>
			<Filtros />
			<Paginacion />
			<GrillaPersonajes />
			<Paginacion />
    </div>
	)
}
