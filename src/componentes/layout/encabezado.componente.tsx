import { Link } from "react-router-dom";
import './encabezado.css';

export const Encabezado: React.FC = () => {
	return (
		<header>
			<div>
				<div>
					<h2>Examen Final de Frontend IV</h2>
				</div>
				<nav>
					<ul>
						<li><Link to="/">Inicio</Link></li>
						<li><Link to="/favoritos">Favoritos</Link></li>
					</ul>
				</nav>
			</div>
		</header>
	)
}