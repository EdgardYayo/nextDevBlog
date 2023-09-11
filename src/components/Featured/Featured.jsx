import React from 'react'
import Image from 'next/image'
import styles from "./Featured.module.css"

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, EdyDev here! </b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Ciudades Costeras de Europa: Joyas Marinas</h1>
          <p className={styles.postDesc}>Las ciudades europeas a orillas del mar son auténticas perlas, fusionando historia con horizontes acuáticos. Desde Barcelona en el Mediterráneo, hasta Ámsterdam en el Mar del Norte, estas urbes ofrecen una mezcla de cultura, arquitectura y paisajes marítimos inigualables. Un viaje por ellas es sumergirse en la esencia viva de Europa.</p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured