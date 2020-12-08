// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Head from "next/head";
import Layout from "../components/Layout";
import "./style.scss"

export default function Home() {
    return (
        <div className="App">
            <Head>
                <title>GigVid</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" type="image/x-icon" href="/logo/favicon.ico" />
            </Head>
            <Layout/>
        </div>)
}
