import './Detalle.css'
import React from 'react'
import { useParams } from 'react-router-dom'
import { BotonFavorito } from '../componentes/botones/boton-favorito.componente'
import { RootState } from '../store/store'
import { useSelector } from 'react-redux'
import { SingleCharacter } from '../tipos/tipos'
import { BotonVolver } from '../componentes/botones/boton-volver.componente'
import { Loading } from '../componentes/spinner/loading.component'

export const PaginaDetalle: React.FC = () => {

  const {id} = useParams()	
  const favoritos = useSelector((state: RootState) => state.favorite.favorites)
  const character: SingleCharacter | undefined = useSelector(
    (state: RootState) => state.personajes.personajes.find(personaje => personaje.id === Number(id))
  )
	
  if (!character) {
    return <Loading />
  }

  const esFavorito = favoritos.some(fav => fav.id === Number(id))
  return (
    <div className="container">
      <div className='detalle-title'>
        <h3>{character.name}</h3>
        <BotonVolver />
      </div>
      <div className={'detalle'}>
        <div className={'detalle-header'}>
          <img src={character.image} alt={character.name} />
          <div className={'detalle-header-texto'}>
            <p>{character.name}</p>
            <p>Planeta: {character.origin.name}</p>
            <p>Genero: {character.gender}</p>
          </div>
          <BotonFavorito esFavorito={esFavorito} id={character.id} />
        </div>
      </div>
      <h4>Lista de episodios donde apareció el personaje</h4>
      <div className={'episodios-grilla'}></div>
    </div>
  );
};
