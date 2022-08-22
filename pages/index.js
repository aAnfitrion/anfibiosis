import Head from 'next/head'
import Container from '../components/Container'
import MainPresentation from '../components/index/MainPresentation'
import Skills from '../components/index/Skills/Skills'

export default function Home() {
  return (
    <Container>
      <MainPresentation/>
      <Skills/>
    </Container>
  )
}
