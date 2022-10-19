import Link from "next/link";


export default function NotFound(){
    return(
        <>
            <h1>Pagina não encontrada</h1>
            <Link href={"/"}><a>Volta para Home</a></Link>
        </>
    )

};