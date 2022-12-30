import React from 'react'
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Requests';

const Home = () => {
  return (
    <div>
      <Main/>
      <Row rowID='1' title='Popular' fetchURL={requests.requestPopular} />
      <Row rowID='2' title='UpComing' fetchURL={requests.requestUpcoming} />
      <Row rowID='3' title='Trending' fetchURL={requests.requestTrending} />
      <Row rowID='4' title='MostLiked' fetchURL={requests.requestMostLiked} />
      <Row rowID='5' title='Tv-Shows' fetchURL={requests.requestTv} />
      <Row rowID='6' title='Latest' fetchURL={requests.requestLatest} />
    </div>
  )
}

export default Home;
