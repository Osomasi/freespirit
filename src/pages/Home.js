import React from 'react'
import logo from '../images/logo.jpg'
import categories from '../categories'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import './Home.css'





function Home() {


  return (
    <div>
        <img src={logo} alt='free spirit' className='home-banner' />
        <div className='featured-products-container container mt-4'>
            <h2>Last products</h2>
            {/* Last products here */}
            <div>
                <Link to="/category/all" style={{textAlign:"right", display:"block", textDecoration:"none"}}>
                    See more {">>"}
                    </Link>
            </div>
        {/* sale banner */}
        <div className='sale_banner--container mt-4'>
        <img src={logo} alt='free spirit' />
        </div>
            <div className='recent-products-container container mt-4'>
                <h2>categories</h2>
                    <Row>
                            {categories.map((category) =>(
                                <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
                                    <Col md={4}>
                                        <div style={{backgroundImage: `url(${category.img})`, gap:"10px"}} className="category-title">
                                            {category.name}
                                        </div>
                                    </Col>
                                </LinkContainer>
                            ))}
                    </Row>
            </div>
        </div>
    </div>
  )
}

export default Home