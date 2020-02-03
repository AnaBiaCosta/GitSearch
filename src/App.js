import React, { useState, useEffect } from 'react';
import { Main, Container, PrincipalTitle, Title, Input, Button } from './App.style'
import Navbar from './components/Navbar'
// import SearchBar from './components/SearchBar'
import UserCard from './components/UserCard'
import Footer from './components/Footer'

const search = (value, setUser ) => {
  fetch(`https://api.github.com/users/${value}`)
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
}

const App = () => {
  const [user, setUser ] = useState({
    name: 'User Name',
    src: '../user.png',
    bio: 'A short description about the user',
    localization: 'undefined',
    repos: 0,
    followers: 0,
    following: 0
})

const [value, setValue] = useState(null)
 
return (
  <>
    <Navbar />
    <Main>
      <PrincipalTitle>
        Git<Title>Search</Title>
      </PrincipalTitle>

      <Container>
        <Input onKeyUp={({target}) => setValue(target.value)}/>
        <Button onClick={() => search(value, setUser)}><img src='../search.png'/></Button>
      </Container>

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
