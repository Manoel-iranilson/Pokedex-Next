import Link from "next/link";
import styles from "../styles/NavBar.module.css"

export default function NavBar(){
    return (
                <ul className={styles.NavBar}>
                <li>  <Link href="/products"><a>produtos</a></Link></li>
                <li>  <Link href="/about"><a>Sobre</a></Link></li>
                <li>  <Link href="/"><a>Home</a></Link></li>
                </ul>

        )
}