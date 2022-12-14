import React from 'react'
import Row from './Row';
import requests from '../backend/requests';
import Baner from './Baner';
import Nav from './Nav';
function Home() {
  return (
    <div>
           <Nav/>
      <Baner/>
      <Row title="Netflix Orignals" 
      isLargeRow
      fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumantaries} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  )
}

export default Home
