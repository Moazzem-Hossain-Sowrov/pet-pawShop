import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Profile = () => {

  const {setUser, user } = useContext(AuthContext)
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenForm = () => {
    setIsOpen(!isOpen)
  }

  const handleUpdate = (e) =>{
    e.preventDefault()
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    updateProfile(auth.currentUser, {
              displayName: name, photoURL: photoUrl
            }).then(() => {
              setUser({...user,photoURL:photoUrl,displayName:name})
              
            }).catch((error) => {
              console.log(error);
              
            })


  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
          <img src={user?.photoURL} />
        </div>
      </div>
      <p className="my-3">{user?.displayName}</p>
      <p>{user?.email}</p>
      <button onClick={handleOpenForm} className="btn my-3">Update Profile</button>

      {
        isOpen && (
          <form onSubmit={handleUpdate} className="fieldset">
        <label className="label">Name</label>
        <input defaultValue={user?.displayName} name="name" type="text" className="input" placeholder="Your Name" />
        <label className="label">PhotoURL</label>
        <input defaultValue={user?.photoURL} name="photoUrl" type="text" className="input" placeholder="Your Url" />
        
        <button className="btn btn-neutral mt-4">Update</button>
      </form>
        )
      }
    </div>
  )
}


export default Profile;