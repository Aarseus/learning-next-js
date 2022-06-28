import Link from 'next/link'
export const getStaticProps= async ()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const userdata= await response.json()
 return {
    props: {users:userdata}
     
 }
  
 
}


const Users = ({users}) => {

    



    return (  
        <>
        {users.map(user=>{
            return <Link href={`/users/${user.id}`}><a><h3 key={user.id}>{user.username}</h3></a></Link>
        })}
        
        </>
    );
}
 
export default Users;