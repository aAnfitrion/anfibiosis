import Head from 'next/head'
import Container from '../components/Container'
import MainPresentation from '../components/index/MainPresentation'
import Skills from '../components/index/Skills/Skills'
import Contact from '../components/index/Contact/Contact'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Anfibiosis - Inicio</title>
      </Head>
      <MainPresentation/>
      <Skills/>
      <Contact/>
    </Container>
  )
}
