import React from 'react'
import Card from '../Card'
import IMAGES from '../../images/Images'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ShoesCatalog() {

  const shoes = useSelector((state) => state.shoes.value);
  
  return (
    <>
    <Navbar />
    <div className='catalog-image'>
      <img src={IMAGES.image7} alt="" />
    </div>
    <section className='card-section'>
      {shoes.map((shoe) => {
        return (
          <Link to={`/shoe/${shoe.id}`} key={shoe.id}>
            <Card
            key={shoe.id}
            title={shoe.title}
            price={shoe.price}
            imgURL={shoe.imgURL}
            >
            </Card>
          </Link>
        )
      })}
    </section>
    <Footer />
    </>
  )
}

export default ShoesCatalog





