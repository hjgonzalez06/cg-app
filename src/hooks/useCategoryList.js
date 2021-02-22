const useCategoryList = () => {
  const fakeCategoryList = {
    '¡Última chance!': {
      productIds: ['1', '2', '3', '4'],
      featuredProductId: ''
    },
    'Los más populares': {
      productIds: ['1', '2', '3', '4'],
      featuredProductId: ''
    },
    'Compra en dúo': {
      productIds: ['1', '2', '3'],
      featuredProductId: '1'
    },
    'Grupos pequeños': {
      productIds: ['1', '2', '3'],
      featuredProductId: '1'
    },
    'Grupos grandes': {
      productIds: ['1', '2', '3'],
      featuredProductId: '1'
    }
  }

  return fakeCategoryList
}

export default useCategoryList
