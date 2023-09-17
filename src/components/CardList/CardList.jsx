import React from 'react'
import styles from "./CardList.module.css"
import Pagination from '../Pagination/Pagination'
import Card from '../Card/Card'
import mockData from '@/utils/cardListData'

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
          {mockData && mockData.map((item, index) => {
            return (
              <Card 
               key={index}
               image={item.image}
               description={item.description}
               date={item.date}
               category={item.category}
               title={item.title} 
              />
            )
          })}
      </div>
      <Pagination/>
    </div>
  )
}

export default CardList