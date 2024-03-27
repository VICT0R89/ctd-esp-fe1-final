import './grilla-personajes.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { fetchPersonajes } from '../../store/slices/personajesSlice'
import { TarjetaPersonaje } from './tarjeta-personaje.componente'
import { SingleCharacter } from '../../tipos/tipos'

export const GrillaPersonajes: React.FC = () => {
  const dispatch = useDispatch()
  const personajes = useSelector((state: RootState) => state.personajes.personajes)
  const loading = useSelector((state: RootState) => state.personajes.loading)
  const error = useSelector((state: RootState) => state.personajes.error)

  useEffect(() => {
    dispatch(fetchPersonajes())
  }, [])

  if (loading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="grilla-personajes">
      {personajes.map((personaje: SingleCharacter) => (
        <TarjetaPersonaje key={personaje.id} {...personaje} />
      ))}
    </div>
  )
}