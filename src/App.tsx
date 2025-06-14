import './App.scss'
import { Route, Routes } from 'react-router'
import NowPlayingPage from './Page/NowPlaying/NowPlaying'
import Header from './Components/Header/Header'
import TopRatedPage from './Page/TopRated/TopRated'
import SearchResultPage from './Page/SearchResult/SearchResult'
import MovieDetailPage from './Page/MovieDetail/MovieDetail'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<NowPlayingPage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/search" element={<SearchResultPage />} />
        <Route path="/movie" element={<MovieDetailPage />} />
        <Route path="*" element={<p>Wrong address</p>} />
      </Routes>
      <p className='footer'>Copyright ©2025 All rights reserved | Made with by Manh Quang.</p>
    </>
  )
}

export default App
