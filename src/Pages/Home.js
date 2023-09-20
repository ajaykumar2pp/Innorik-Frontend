import React from 'react'
import PoliticsImage from '../Images/ploitics.avif'
import RealImage from '../Images/real.avif'
import SportImage from '../Images/sports.avif'


const Home = () => {
  return (
    <>

      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={PoliticsImage} class="d-block w-100" alt="..." height="500" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={RealImage} className="d-block w-100" alt="..." height="500" />
          </div>
          <div className="carousel-item">
            <img src={SportImage} className="d-block w-100" alt="..." height="500" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* *******  some text */}
      <div className='mt-5 mb-5'>
        <h5 className="display-1 text-center">Discover Personalized</h5>
        <h5 className="display-1 text-center">News Articles</h5>
        <p className='h5 text-center mt-4'>
          Stay updated with relevant news based on your preferences. No more sifting through overwhelming articles
        </p>
      </div>

      {/* ********  Custom Card ********* */}
      <div classname="container-fluid">
        <div className="row mb-4 ">
          <div className="col-md-12">
            <h2 className="text-center text-primary">Personal News</h2>
          </div>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-md-3">
            <div className="card border-secondary">
              <div className="card-body">
                <h5 className="text-center"> Personlaized News Feed</h5>
                <p className='text-center'>Get the latest news articles based on your interests handpicked by our system using a public news API</p>
                <div className="d-flex justify-content-center align-items-center">
                  <a href="#" className="btn btn-primary">Learn more</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-secondary">
              <div className="card-body">
                <h5 className="text-center">Article Create</h5>
                <p className='text-center'>create articles of your interest to read later with our platform's article create feature</p>
                <div className="d-flex justify-content-center align-items-center">
                  <a href="#" className="btn btn-primary">Learn more</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-secondary">
              <div className="card-body">
                <h5 className="text-center"> Recommendation System</h5>
                <p classNameName='text-center'>
                  Our system recommended articles based on user's reading habits to kepp them informed and engaged
                </p>
                <div className="d-flex justify-content-center align-items-center">
                  <a href="#" className="btn btn-primary">Learn more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home