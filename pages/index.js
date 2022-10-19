import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import Card from '../components/card'


export async function getStaticProps(){
  const res = await await fetch('https://pokeapi.co/api/v2/pokemon/?limit=40')
  const data = await res.json();
  

  data.results.forEach((item,index) => {
    item.id = index +1
  });

  return{
    props:{
      pokemons: data.results
    }
  }

}

export default function Home({pokemons}) {
  

  return (
    
      <>
      <div className={styles.title_Container}>
     <Image src="/images/pokeball.png" height="100" width="100" alt="logo"/>
     <h1 className={styles.title}>PokeDex</h1>
     </div>
     <div className={styles.pokemon_container}>     
    
     {pokemons.map((pokemon)=>(
      <Card key={pokemon.id} pokemon={pokemon}/>
    ) )}
     
     </div>
     </>
    
  )
}
