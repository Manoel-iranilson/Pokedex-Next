import Link from "next/link";
import styles from '../styles/404.module.css'

export default function NotFound(){
    return(
        <>
            <div className={styles.notFound}>
            <h1>Pagina não encontrada</h1>
            <Link href={"/"}><a className={styles.btn}>Volta para Home</a></Link>
            </div>
        </>
    )

};