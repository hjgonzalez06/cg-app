import deepWater from '../assets/product-imgs/deep-water.svg'
import telephoneHeadphones from '../assets/product-imgs/telephone-headphones.svg'
import boxedWater from '../assets/product-imgs/boxed-water.svg'
import smirnoffIce from '../assets/product-imgs/smirnoff-ice.svg'

const useProductList = () => {
  const fakeProductsList = [
    {
      id: '1',
      productPhotoUrl: deepWater,
      listPrice: '$450',
      discountedPrice: '$350',
      discountPercentage: '20%',
      expirationDate: '2021-02-08',
      description: 'Esta es un tarjeta de producto de prueba.',
      colors: ['azul', 'blanco', 'negro'],
      groupCapacity: 10,
      subscriptorsNumber: 8,
      occupancyPercentage: '80%'
    },
    {
      id: '2',
      productPhotoUrl: telephoneHeadphones,
      listPrice: '$6.640',
      discountedPrice: '$3.950',
      discountPercentage: '20%',
      expirationDate: '2021-02-15',
      description: 'Esta es un tarjeta de producto de prueba.',
      colors: ['azul', 'blanco', 'negro'],
      groupCapacity: 10,
      subscriptorsNumber: 8,
      occupancyPercentage: '80%'
    },
    {
      id: '3',
      productPhotoUrl: boxedWater,
      listPrice: '$1.250',
      discountedPrice: '$875',
      discountPercentage: '20%',
      expirationDate: '2021-02-11',
      description: 'Esta es un tarjeta de producto de prueba.',
      colors: ['azul', 'blanco', 'negro'],
      groupCapacity: 10,
      subscriptorsNumber: 8,
      occupancyPercentage: '80%'
    },
    {
      id: '4',
      productPhotoUrl: smirnoffIce,
      listPrice: '$950',
      discountedPrice: '$670',
      discountPercentage: '20%',
      expirationDate: '2021-02-09',
      description: 'Esta es un tarjeta de producto de prueba.',
      colors: ['azul', 'blanco', 'negro'],
      groupCapacity: 10,
      subscriptorsNumber: 8,
      occupancyPercentage: '80%'
    }
  ]

  return fakeProductsList
}

export default useProductList
