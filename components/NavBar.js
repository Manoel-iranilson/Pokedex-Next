import Image from "next/image";
import Link from "next/link";
import styles from "../styles/NavBar.module.css"


export default function NavBar(){
    return (
        <nav className={styles.NavBar}>
                <div className={styles.logo} >
                      <Image src="/images/favicon.ico" height="30" width="30" alt="logo"/>
                        <h1>PokeDex</h1>
                </div>
                <ul className={styles.link_items} >
                <li>  <Link href="/"><a>Home</a></Link></li>
                <li>  <Link href="/about"><a>Sobre</a></Link></li>
                </ul>
        </nav>
        )
}