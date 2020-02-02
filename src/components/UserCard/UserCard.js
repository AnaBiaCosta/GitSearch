import React from 'react'
import { Body, UserImg, Name, Bio, Line, Info, Desc } from './UserCard.style'

const UserCard = ({ name, bio, src, localization, repos, followers, following }) => (
  <Body>
    <UserImg src={src} />
      <div>
        <Name>{name}</Name>
        <Bio>{bio}</Bio>
        <Line />
        <Info><Desc>Localização: </Desc>{localization}</Info>
        <Info><Desc>Repositórios públicos: </Desc>{repos}</Info>
        <Info><Desc>Seguidores: </Desc>{followers}</Info>
        <Info><Desc>Seguindo: </Desc>{following}</Info>
      </div>
  </Body>
)

export default UserCard
