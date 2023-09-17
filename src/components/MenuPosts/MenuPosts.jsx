import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './MenuPosts.module.css'
import mockData from '@/utils/menuPostData' 

const MenuPosts = ({ withImage }) => {

  return (
    <div className={styles.items}>
      {mockData && mockData.map((item, index) => {
        return (
          <Link key={index} className={styles.item} href={`/blog?cat=${item.category.toLowerCase()}`}>
          { withImage && (<div className={styles.imageContainer}>
            <Image className={styles.image} src="/p1.jpeg" alt="" fill/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles[item.category.toLowerCase()]}`}>
              {item.category}
            </span>
            <h3 className={styles.postTitle}>
              {item.description}
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>{item.user} - </span>
              <span className={styles.date}>{item.date}</span>
            </div>
          </div>
        </Link>
        )
      }) }
      
        {/* <Link className={styles.item} href={"/"}>
          { withImage && (<div className={styles.imageContainer}>
            <Image className={styles.image} src="/p1.jpeg" alt="" fill/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe - </span>
              <span className={styles.date}>10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link className={styles.item} href={"/"}>
          { withImage && (<div className={styles.imageContainer}>
            <Image className={styles.image} src="/p1.jpeg" alt="" fill/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe - </span>
              <span className={styles.date}>10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link className={styles.item} href={"/"}>
          { withImage && (<div className={styles.imageContainer}>
            <Image className={styles.image} src="/p1.jpeg" alt="" fill/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>
              Food
            </span>
            <h3 className={styles.postTitle}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe - </span>
              <span className={styles.date}>10.03.2023</span>
            </div>
          </div>
        </Link> */}
      </div>
  )
}

export default MenuPosts