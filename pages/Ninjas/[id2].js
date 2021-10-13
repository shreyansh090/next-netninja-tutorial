// export const getStaticPaths = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     // console.log(typeof data);
//         const paths = data.map(ninja => {
//             return{
//             params: {id: ninja.id.toString()}
//             }
//     }
//         );
//         return {
//             paths,
//             fallback: false
//         }
// }

// export const getStaticProps = async (context) => {
//     const id = context.params.id;
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//     const data = await res.json();
//     console.log(data);
//     return {
//         props: {ninja:data}
//     }
// }

export const getServerSideProps = async (context) => {
    const id = context.params.id2;
    console.log(context.params);
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    return {
        props:{ninja:data}
    }
}
const Details = ({ninja}) => {
    return (
        <div>
            {/* <h1>Details</h1> */}
            <h1>{ninja.name}</h1>
            <p>{ninja.email}</p>
{/*         
            <p>{ninja.address.city}</p> */}
        </div>
      );
}
 
export default Details;