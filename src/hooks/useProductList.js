import Product1 from '../assets/product-imgs/Product1.svg'
import Product2 from '../assets/product-imgs/Product2.svg'
import Product3 from '../assets/product-imgs/Product3.svg'
import Product4 from '../assets/product-imgs/Product4.svg'

const useProductList = () => {
  const fakeProductsList = [
    {
      id: '1',
      productPhotoUrl: Product1,
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
      productPhotoUrl: Product2,
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
      productPhotoUrl: Product3,
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
      productPhotoUrl: Product4,
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
