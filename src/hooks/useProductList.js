const useProductList = () => {
  const fakeProductsList = [
    {
      id: '1',
      productPhotoUrl: 'https://placehold.co/310x210?text=Imagen',
      listPrice: '250.000,00',
      discountedPrice: '200.000,00',
      discountPercentage: 20,
      expirationDate: '2021-02-08',
      description: 'Esta es un tarjeta de producto de prueba.',
      colors: ['azul', 'blanco', 'negro'],
      groupCapacity: 10,
      subscriptorsNumber: 8,
      occupancyPercentage: 80
    },
    {
      id: '2',
      productPhotoUrl: 'https://placehold.co/310x210?text=Imagen',
      listPrice: '250.000,00',
      discountedPrice: '200.000,00',
      discountPercentage: 20,
      expirationDate: '2021-02-15',
      description: 'Esta es un tarjeta de producto de prueba.',
      colors: ['azul', 'blanco', 'negro'],
      groupCapacity: 10,
      subscriptorsNumber: 8,
      occupancyPercentage: 80
    },
    {
      id: '3',
      productPhotoUrl: 'https://placehold.co/310x210?text=Imagen',
      listPrice: '250.000,00',
      discountedPrice: '200.000,00',
      discountPercentage: 20,
      expirationDate: '2021-02-11',
      description: 'Esta es un tarjeta de producto de prueba.',
      colors: ['azul', 'blanco', 'negro'],
      groupCapacity: 10,
      subscriptorsNumber: 8,
      occupancyPercentage: 80
    },
    {
      id: '4',
      productPhotoUrl: 'https://placehold.co/310x210?text=Imagen',
      listPrice: '250.000,00',
      discountedPrice: '200.000,00',
      discountPercentage: 20,
      expirationDate: '2021-02-09',
      description: 'Esta es un tarjeta de producto de prueba.',
      colors: ['azul', 'blanco', 'negro'],
      groupCapacity: 10,
      subscriptorsNumber: 8,
      occupancyPercentage: 80
    }
  ]

  return fakeProductsList
}

export default useProductList
