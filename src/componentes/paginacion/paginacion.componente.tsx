import './paginacion.css';

export const Paginacion: React.FC = () => {
	return (
		<div className="paginacion">
			<button disabled={true} className={"primary"}>Anterior</button>
			<button disabled={false} className={"primary"}>Siguiente</button>
    </div>
	)
}
