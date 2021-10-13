import styles from  '../../styles/Ninjas.module.css'
import Link from 'next/link'
export const getStaticProps = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json(); 
    // console.log(data);
    return{
        props :{ ninjas: data}
    }
}

const index = ({ninjas}) => {
    return (
    <div>
         <h1>Ninja List</h1>
         {ninjas.map( ninja => (
             <Link href = {`/Ninjas/${ninja.id}`} key = {ninja.id}>
                 <a className = {styles.single}>
                 <h3>{ninja.name}</h3>
                 </a>
             </Link>
         )
         )} 
    </div>);
}
 
export default index;