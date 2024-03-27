
export const BotonVolver = () => {
  const handleVolver = () => {
    window.history.back()
  }
  return (
    <div className="back-btn" onClick={handleVolver}>VOLVER</div>
  )
}