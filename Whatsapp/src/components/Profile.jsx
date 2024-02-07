import React,{useState,useEffect} from 'react'
import axios from 'axios';
const Profile = () => {
    // const access_token = "878980880399-3pppau4mbmj3fqbbthk0f9khq2gk34hi.apps.googleusercontent.com"
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);


    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [user]
    );

    // log out function to log the user out of google and set the profile array to null

    return (
        <div>
            
            {profile &&
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                </div>
            }
        </div>
    );
}

export default Profile