


 import {  onAuthStateChanged, signOut } from "firebase/auth";
 import { useDispatch, useSelector } from "react-redux";
 import { useNavigate } from "react-router-dom";
 import { auth } from "../utils/firebase";
import { useEffect } from "react";
import {addUser, removeUser} from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

 const Header = () => {

  const dispatch=useDispatch();
   const navigate = useNavigate();
   const user = useSelector((store) => store.user);
   const handleSignOut = () => {
     signOut(auth)
       .then(() => {
       })

       .catch((error) => {
        navigate("/error");
       });
  };

     
   useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmount.

    return () => unsubscribe();
  }, []);

  const handleGptSearch=()=>{
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  }
   return (
     <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
       <img
         className="w-44"
         src={LOGO}
         alt="logo"
       />
       {user && (
         <div className="flex p-2">
         <select className="p-2 m-2 bg-gray-900 text-white rounded-lg">
          {SUPPORTED_LANGUAGES.map((lang)=>(
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))

          }
         </select>
         <button className="py-2 mx-4 my-2 px-4 bg-purple-800 text-white rounded-lg" onClick={handleGptSearch}>GPT Search</button>
           { <img className="w-12 h-12" alt="user" src={user?.photoURL} /> }
           <button onClick={handleSignOut} className="font-bold text-white ">
           (Sign Out)
          </button>
        </div>
       )}
     </div>
   );
 };
 export default Header;
