import Head from "next/head";
import NavBar from "./NavBar";



export default function MainContainer({children}){
    return (    
        <>
        <Head>
            <link rel="shortcut icon" href="/images/favicon.ico" />
            <title>PokeDex</title>
        </Head>
        <NavBar/>
        <main className="main-container">{children}</main>
        </>    

        )
}