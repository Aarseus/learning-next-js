import { useRouter } from "next/router";

export const getStaticPaths=async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const users=await response.json()

    const paths=users.map(data=>{
        return {
            params:{
                userid:data.id.toString()
            }
        }
    })
    return{
        paths,
        fallback:false
    }
}
export const getStaticProps=async(context)=>{
  const id=context.params.userid
  const response=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
const userdata=await response.json()
  return {
    props:{
        userinfo:userdata
    }
  }
}


const Profile = ({userinfo}) => {

  return (
    <>
   <h3>Username: {userinfo.username}</h3>
   <h3>Name: <b> {userinfo.name}</b></h3>
   <h3>Address: <b>{userinfo.address.street},{userinfo.address.city}</b></h3>
   <h3>Phone: <b>{userinfo.phone}</b></h3>
   <h3>Company: <b>{userinfo.company.name}</b></h3>
   <h3>Website: <b>{userinfo.website}</b></h3>
    </>
  );
};

export default Profile;
