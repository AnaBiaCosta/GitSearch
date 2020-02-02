import React from 'react'
import { Body } from './Main.style'
import SearchBar from '../SearchBar'
import UserCard from '../UserCard'

// const Main = ( name, src, bio, localization, repos, followers, following ) => (
const Main = () => (
  <Body>
    <SearchBar />
    <UserCard />
  </Body>
)

export default Main
