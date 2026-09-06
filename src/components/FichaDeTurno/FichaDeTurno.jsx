import estilos from './FichaDeTurno.module.css';

function FichaDeTurno({ cargando, error, turno }) {
  if (cargando) return <p>Cargando turno...</p>;
  if (error) return <p>Error al cargar el turno.</p>;
  if (!turno) return <p>Sin turno disponible.</p>;

  const clasesContenedor = [
    estilos.ficha,
    turno.urgente && estilos.urgente
  ].filter(Boolean).join(' ');

  return (
    <article className={clasesContenedor}>
      <h3 className={turno.urgente ? estilos.tituloUrgente : estilos.titulo}>
        {turno.paciente} - {turno.hora}
      </h3>

      <p className={`${estilos.hora} ${turno.urgente ? estilos.resaltada : ''}`}>
        {turno.hora}
      </p>

      {turno.urgente && <span className={estilos.badge}>Urgente</span>}
      <p>{turno.observaciones ?? "Sin observaciones"}</p>
      <p>Sesiones: {turno.sesiones}</p>
    </article>
  );
}

export default FichaDeTurno;
