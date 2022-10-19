import Image from "next/image";
import styles from "../../styles/About.module.css"

export default function About() {
    return (
      <div className={styles.about}>
        

        <h2>Projeto Desenvolvido utilizando Next com a api do <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">PokéApi</a></h2>        

        <h2>Repositorio do projeto no meu <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">GitHub</a></h2>
        
        <Image src="/images/Pokemon.svg" height="400" width="500" alt="logo"/>

      </div>
    )
  }