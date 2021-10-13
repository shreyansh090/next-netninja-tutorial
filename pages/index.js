import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Home</title>
      <meta name = "heywords" content = "ninja" />
    </Head>
    <div className = {styles.title}>
       <h1>Home Page</h1>
      <p className = {styles.text}>
       lorem ipsum here are multiple modules with names that only differ in casing.     
This can lead to unexpected behavior when compiling on a filesystem with other case-semantic.
    </p>
    </div>
    </>
  )
}
