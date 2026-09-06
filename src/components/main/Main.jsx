import React from 'react'

import Cardboostrap from '../cards/Cardboostrap'

import styles from './Main.module.css'

export default function Main() {
  return (
    <div className={styles.contenido}>
        <h2> Sistema de Gestion de Barbería</h2>
        <p className={styles.descripcion}>
        Esta plataforma optimiza la administración de turnos, gestión de profesionales 
        y disponibilidad de estilos de corte en tiempo real. Permite mejorar la experiencia 
        de los clientes y organizar de manera eficiente los horarios de atención de cada barbero.
        </p>
        <h3>Profesionales activos</h3>
        <section>
        <Cardboostrap 
        nom_barber={"Marquitos Navaja"} 
        img_perfil ={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBwI7jH4wyS9-oBZzEmAriAF66vDVkSoIihgxEQ7DlKg&s=10"} 
        alt={"Foto del Barbero"} 
        cut_styles={['Muler','Militar','Desmechado','Tintura']} 
        entry_hour={'16:00'} finish_hour={'22:00'} id_barber={1}
        />
        <Cardboostrap 
        nom_barber={"Tano Il Figaro"} 
        img_perfil={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEk3z91zly-XlZR4PjA--AwOg5Rsp-aQ3hEFVic-tW4QR7BoFRzH9acEZ5&s=10"} 
        alt={"Foto del Barbero"} 
        cut_styles={['Muler','Militar','Barba']} 
        entry_hour={'16:00'} 
        finish_hour={'22:00'} 
        id_barber={2}
        />
        <Cardboostrap 
        nom_barber={"Ruben Orlando"} 
        img_perfil={"https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/09/06095826/Ruben-orlando-27.jpg"} 
        alt={"Foto del Barbero"} 
        cut_styles={['Muler','Militar','Barba','FreeStyle','Classic']} 
        entry_hour={'16:00'} 
        finish_hour={'22:00'} 
        id_barber={3}
        />
      </section>
    </div>
  )
}
