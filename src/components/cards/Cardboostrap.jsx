import React from 'react'

import styles from './Cardboostrap.module.css'

export default function Cardboostrap({nom_barber, img_perfil, cut_styles, entry_hour, finish_hour, id_barber}) {
  return (
    <div className={styles.ContainerCard}>
    <div className="accordion" id={`accordion-${id_barber}`}>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button 
            className="accordion-button collapsed" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target={`#collapse-${id_barber}`}
            aria-expanded="false" 
            aria-controls={`collapse-${id_barber}`}
          >
            {nom_barber}
          </button>
        </h2>
        <div 
          id={`collapse-${id_barber}`} 
          className="accordion-collapse collapse" 
          data-bs-parent={`#accordion-${id_barber}`}
        >
          <div className="accordion-body">
            <img src={img_perfil} alt={nom_barber} className={styles.imgBarber} />
            <div>
              <strong>Horarios de atencion:</strong>
                <li style={{listStyle:'none'}}>Desde: {entry_hour} hasta {finish_hour}</li>
              <strong>Cortes y estilos disponibles:</strong>
              <ul style={{display: 'flex',flexDirection:'column', gap: '20px'}}>
                {cut_styles.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>      
      </div>
    </div>
    </div>
  )
}
