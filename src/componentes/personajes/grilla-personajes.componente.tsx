import './grilla-personajes.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { fetchPersonajes } from '../../store/slices/personajesSlice'
import { TarjetaPersonaje } from './tarjeta-personaje.componente'
import { SingleCharacter } from '../../tipos/tipos'
import { useLocation } from 'react-router-dom'
import { Loading } from '../spinner/loading.component'

export const GrillaPersonajes: React.FC = () => {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootState) => state.favorite.favorites)
  const path = useLocation().pathname
  const personajes = useSelector((state: RootState) => state.personajes.personajes)
  const loading = useSelector((state: RootState) => state.personajes.loading)
  const error = useSelector((state: RootState) => state.personajes.error)

  const renderizar = path == '/' ? personajes : personajes.filter(personaje => favoritos.some(fav => fav.id === personaje.id))

  useEffect(() => {
    dispatch(fetchPersonajes())
  }, [])

  if (loading) {
    return (<div className="grilla-personajes"><Loading /></div>)
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="grilla-personajes">
      { renderizar.length > 0 ?
      renderizar.map((personaje: SingleCharacter) => (
        <TarjetaPersonaje key={personaje.id} {...personaje} />
        )) : 
        <div>Sin Favoritos</div>
      }
    </div>
  )
}