import React from 'react'
import styles from './Card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({image, category, title, description, date}) => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image className={styles.image} src={image} alt='' fill />
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>{date} - </span>
                <span className={`${styles.category} ${styles[category.toLowerCase()]}`}>{category}</span>
            </div>
            <Link href={"/"}>
                <h1>{title}</h1>
            </Link>
            <p className={styles.desc}>{description}</p>
            <Link className={styles.link} href={"/"}>Read More</Link>
        </div>
    </div>
  )
}

export default Card