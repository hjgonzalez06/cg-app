import React from 'react'

import homepageBanner from '../../assets/Banner-homepage.png'
import classes from './styles.module.scss'

const Banner = () => {
  return (
    <div className={classes.banner}>
      <img className={classes.bannerImg} src={homepageBanner} alt='' role='presentation' />
    </div>
  )
}

export default Banner
