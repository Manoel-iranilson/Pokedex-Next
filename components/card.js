import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Card.module.css"

export default function Card({pokemon}){

return(
    <div className={styles.card}>
        <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
        />

        <h2 className={styles.title}> {pokemon.name}</h2>
        <Link href={`/pokemon/${pokemon.id}`}>
        <a className={styles.btn}>Detalhes</a>
        </Link>

    </div>
)

}