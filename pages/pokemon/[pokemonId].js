import Image from "next/image"

import styles from "../../styles/Pokemon.module.css"

export const getStaticPaths = async() => {
    const res = await await fetch('https://pokeapi.co/api/v2/pokemon/?limit=40')
    const data = await res.json();

    const paths = data.results.map((pokemon,index)=>{
        return{
            params:{pokemonId: (index +1).toString()},
        }
    })

    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async (context) =>{
    const id = context.params.pokemonId
    const res = await await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json();
    return{
        props:{pokemon:data},
    }
}


export default function Pokemon({pokemon}){

    return(
        <div className={styles.container}>
             <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width="200"
        height="200"
        alt={pokemon.name}
        />
            <h1 className={styles.title}>{pokemon.name}</h1>
            <h3>Tipo:</h3>
            <div className={styles.types_Container}>
                {pokemon.types.map((item,index)=>(
                    <span key={index} className={`${styles.type} ${styles['type_'+item.type.name]}` }>{item.type.name}</span>
                ))}
            </div>
            <div className={styles.data_container}>
                <div className={styles.height}>
                    <h4>Altura:</h4>
                    <p>{pokemon.height * 10} cm</p>
                 </div>
                <div className={styles.weight}>
                <h4>Peso:</h4>
                    <p>{pokemon.weight / 10} kg</p>
                </div>
            </div>
        </div>
    )
}