import { useRouter } from "next/router";
const Profile = () => {
  const router = useRouter();
  const { userid } = router.query;
  return (
    <>
      <h1>{userid}</h1>
      This is the other users page
    </>
  );
};

export default Profile;
