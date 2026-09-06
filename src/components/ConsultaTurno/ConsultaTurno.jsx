import FichaDeTurno from "../FichaDeTurno/FichaDeTurno";

function ConsultaTurnos() {
  return (
    <div>
      <FichaDeTurno cargando={true} />
      <FichaDeTurno error={true} />
      <FichaDeTurno turno={null} />
      <FichaDeTurno turno={{
        paciente: "Ceferino Ruiz",
        hora: "09:30",
        urgente: true,
        observaciones: "Traer estudios previos",
        sesiones: 4
      }} />
      <FichaDeTurno turno={{
        paciente: "Ana Gómez",
        hora: "10:00",
        urgente: false,
        observaciones: "",
        sesiones: 0
      }} />
    </div>
  );
}

export default ConsultaTurnos;
