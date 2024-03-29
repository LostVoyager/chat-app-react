import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, `${displayName + new Date().getTime()}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName: displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch {
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            name=""
            id=""
            placeholder="display name"
          />
          <input required type="email" name="" id="" placeholder="email" />
          <input
            required
            type="password"
            name=""
            id=""
            placeholder="password"
          />
          <input
            required
            type="file"
            style={{ display: "none" }}
            name=""
            id="file"
          />
          <label htmlFor="file">
            <img src={Add} alt="" srcSet="" />
            <span>Add an avatar</span>
          </label>
          <button disabled={loading}>Sign Up</button>
          {loading && <span>Signing up...</span>}
          {err && <span>Something went wrong. Please try again later.</span>}
        </form>
        <p>
          Already registered? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}
