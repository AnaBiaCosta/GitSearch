import React, { useState, useEffect } from 'react';
import { Main } from './App.style'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import UserCard from './components/UserCard'
import Footer from './components/Footer'

const App = ( ) => {
  const [user, setUser ] = useState({
    name: 'User Name',
    src: '../user.png',
    bio: 'A short description about the user',
    localization: 'undefined',
    repos: 0,
    followers: 0,
    following: 0
  })

  useEffect(() => {
    fetch('https://api.github.com/users/AnaBiaCosta')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        setUser({
          name: res.login,
          src: res.avatar_url,
          bio: res.bio,
          localization: res.location,
          repos: res.public_repos,
          followers: res.followers,
          following: res.following
        })
      })
  }, [])

  return (
    <>
    <Navbar />
    <Main>
      <SearchBar />
      <UserCard 
        name={user.name}
        src={user.src}
        bio={user.bio}
        localization={user.localization}
        repos={user.repos}
        followers={user.followers}
        following={user.following}
      />
    </Main>
    <Footer />
  </>

  )
}

export default App;
