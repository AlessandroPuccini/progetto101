import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Card from '../Card'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import IMAGES from '../../images/Images'

function ManCatalog() {


    const shoes = useSelector((state) => state.shoes.value);

  return (
    <>
      <Navbar/>
      <div className='catalog-image'>
        <img src={IMAGES.image9} alt="man" /> 
    </div>
    <section className='card-section'>
      {shoes.filter((shoe) => !shoe.woman).map((shoe) => {
        return (
          <Link to={`/progetto101/shoe/${shoe.id}`} key={shoe.id}>
            <Card
            key={shoe.id}
            title={shoe.title}
            price={shoe.price}
            imgURL={shoe.imgURL}
            woman={shoe.woman}
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

export default ManCatalog
