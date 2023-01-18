import bcrypt from 'bcryptjs'
const data = {
    users: [
      {
        name: 'Jose',
        email: 'joligo94861@gmail.com',
        password: bcrypt.hashSync('12345'),
        isAdmin: true,
      },
      {
        name: 'Juan',
        email: 'juan@gmail.com',
        password: bcrypt.hashSync('12345'),
        isAdmin: false,
      },
    ],
    products: [
      {
          name: 'Nike Slim shirt',
          slug: 'nike-slim-shirt',
          category: 'Shirts',
          image: '/images/p1.jpg', //679px x 829px
          thumbnail: '/images/thumbnails/p1.gif',
          price: 30,
          countInStock: 10,
          brand: 'Nike',
          rating: 4.5,
          numReviews: 10,
          description: 'High quality shirt'
      },
      {
          name: 'Adidas Fit shirt',
          slug: 'adidas-fit-shirt',
          category: 'Shirts',
          image: '/images/p2.jpg',
          thumbnail: '/images/thumbnails/p2.gif',
          price: 20,
          countInStock: 20,
          brand: 'Adidas',
          rating: 4.2,
          numReviews: 10,
          description: 'High quality product'
      },
      {
          name: 'Nike Slim Pant',
          slug: 'nike-slim-pant',
          category: 'Pants',
          image: '/images/p3.jpg',
          thumbnail: '/images/thumbnails/p3.jpg',
          price: 25,
          countInStock: 15,
          brand: 'Nike',
          rating: 4.5,
          numReviews: 14,
          description: 'High quality shirt'
      },
      {
          name: 'Puma Fit Pant',
          slug: 'puma-slim-pant',
          category: 'Pants',
          image: '/images/p4.jpg',
          thumbnail: '/images/thumbnails/p4.jpg',
          price: 35,
          countInStock: 5,
          brand: 'Puma',
          rating: 4.5,
          numReviews: 10,
          description: 'High quality shirt'
      }
  ]
}

export default data