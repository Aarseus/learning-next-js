import Head from "next/head";
import Link from "next/link";
import styles from '../styles/First.module.css'
const First = () => {
    return ( 
        <>
        <Head>
            <title>first page</title>
        </Head>
        <h1 className={styles.demo}>
            this is new</h1>

            <Link href={'/second'}><a>Second</a></Link>
        </>
     );
}
 
export default First;