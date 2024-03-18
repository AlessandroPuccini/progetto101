import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import IMAGES from '../../images/Images'
import Card from '../Card';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function WomanCatalog() {

    const shoes = useSelector((state) => state.shoes.value);
    
  return (
    <>
    <Navbar />
    <main>
    <div className='catalog-image' >
     <img src={IMAGES.image8} alt='woman'/>
    </div>
    <section className='card-section'>
      {shoes.filter((shoe) => shoe.woman).map((shoe) => {
        return (
         <Link to={`/progetto101/shoe/${shoe.id}`} key={shoe.id}>
            <Card 
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
    </main>
    <Footer/>
      
    </>
  )
}

export default WomanCatalog
