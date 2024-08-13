import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
// import JSONPretty from "react-json-pretty";
 
const Profile = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: "https://dev-rznll6sngfx50spg.us.auth0.com/api/v2/",
            // scope: " read:users read:current_user read:user_idp_tokens ",
          },
        });
        console.log(accessToken);
        const userDetailsByUrl = `https://dev-rznll6sngfx50spg.us.auth0.com/api/v2/users/${user.sub}`;
        await fetch(userDetailsByUrl, {
          headers: {
            Authorization: `bearer ${accessToken}`,
          },
        })
          .then((req) => req.json())
          .then((res) => {
            console.log(res);
            setUserMetadata(res);
          });
      } catch (e) {
        console.log(e.message);
      }
    };
    getUserMetadata();
  },[getAccessTokenSilently, user?.sub]);

  return (
    //    isAuthenticated?(
    <>
    {/* <h3>{user.name}</h3> */}
      {userMetadata ? (
        <div>
          <img
            src={userMetadata.picture}
            alt={user.name}
            height={100}
            width={100}
          />
          <h3>Name- "{userMetadata.name}"</h3>
          <p>Email Id- "{userMetadata.email}"</p>
          <p>NickName- "{userMetadata.nickname}"</p>
          <p>User-Id- "{userMetadata.user_id}"</p>
        </div>
      ) : (
        "NO DATA PRESENT"
      )}

      {/* <JSONPretty data={user}/> */}
      {/* {JSON.stringify(user,null,2)} */}
      {/* // </div>):(<></>) */}
    </>
  );
};
export default Profile;
