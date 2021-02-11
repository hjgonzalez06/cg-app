import React from 'react'

import peopleHoldingHands from '../../assets/banner-icons/people-holding-hands.svg'
import bannerBackground from '../../assets/banner-icons/wave.svg'
import circlesWithArrow from '../../assets/banner-icons/arrow-circles.svg'
import buyersGroup from '../../assets/banner-icons/buyers-group.svg'
import socials from '../../assets/banner-icons/socials.svg'
import boxInHand from '../../assets/banner-icons/box-hand.svg'
import classes from './styles.module.scss'

const Banner = () => {
  return (
    <div className={classes.bannerContainer}>
      <img src={peopleHoldingHands} alt='' role='presentation' />
      <img src={bannerBackground} alt='' role='presentation' />
      <p>¡Hay equipo!</p>
      <p>¿Cómo funciona?</p>
      <div className={classes.bannerInfo}>
        <img src={circlesWithArrow} alt='' role='presentation'/>
        <p>Elegí el producto que más te guste</p>
        <img src={buyersGroup} alt='' role='presentation'/>
        <p>Sumate al grupo de compra</p>
        <img src={socials} alt='' role='presentation'/>
        <p>Compartí y sumá más compradores para completar el grupo y obtener el descuento</p>
        <img src={boxInHand} alt='' role='presentation'/>
        <p>Una vez completo, tu compra se hace efectiva y recibís el producto en tu casa</p>
      </div>
    </div>
  )
}

export default Banner
