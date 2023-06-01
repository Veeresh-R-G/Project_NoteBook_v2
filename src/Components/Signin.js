import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { auth, Googleprovider, GithubProvider } from "../../src/firebase_config";
import { useEffect, useState, } from 'react';
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from "react-router";
import { colRef } from "../../src/firebase_config";
import { getDocs, addDoc, query, where } from "firebase/firestore";
import { toast } from "react-toastify";
const SignIn = () => {

    let [authGoogleDets, setGoogleDets] = useState({});
    console.log(authGoogleDets)
    let navigate = useNavigate();

    useEffect(()=>
    {   
        
        if (localStorage?.firstName !== undefined) {
            navigate(`/user/${localStorage.firstName}`)

            toast(`🦄 Welcome Back ${localStorage.getItem('Name')}` , 
                {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })   

            return;
        }

        toast.info("Please Sign In With Google to Continue", {
            position: "top-center",
            autoClose: 1300,
            hideProgressBar: false,
            closeOnClick: true,
            theme : "colored"
        })
    } , [navigate])
    


    const signInWithGitHub = () => {
        signInWithPopup(auth, GithubProvider).then((res) => {
            console.log(res);
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            // const credential = GithubAuthProvider.credentialFromResult(res);
            // if (credential) {
            //     const token = credential.accessToken;

            //     // The signed-in user info.
            //     const user = res.user;
            //     // ...
            //     setGithubDets(res.user)
            // }

        })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.customData.email;
                console.log(errorCode, errorMessage)
            })
    }

    const signInWithGoogle =  () => {



        signInWithPopup(auth, Googleprovider).then(async (res) => {
            // console.log(res);
            setGoogleDets(res._tokenResponse)
            console.log(res._tokenResponse);
            localStorage.setItem("Name", res._tokenResponse.displayName)
            localStorage.setItem("Photo", res._tokenResponse.photoUrl)
            localStorage.setItem("firstName", res._tokenResponse.firstName)
            localStorage.setItem("uuid", res._tokenResponse.localId)
            let myobj = {
                user: res._tokenResponse.firstName,
                uuid: res._tokenResponse.localId,
                email : res._tokenResponse.email,
                projects: []

            }

            const q = query(colRef, where('uuid', '==', res._tokenResponse.localId));
            const querySnapshot = await getDocs(q);
                       
            if(querySnapshot.size === 0)
            {
                addDoc(colRef, myobj).then((res) => {
                    toast.success("Logged In Successfully !!!" , 
                    {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                    localStorage.setItem("doc_id", res?._key?.path?.segments[1])
                }).catch((err) => {
    
                    toast.error("Error Logging In")
                    console.log(err)
                })
            }

            else{
                toast(`🦄 Welcome Back ${localStorage.getItem('Name')}` , 
                {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })   
            }
             
    
            navigate(`/user/${res._tokenResponse.firstName}`)
        
        }).catch((err) => {
            toast.error('Error Logging In with Google , Please Try Again !!!',
            {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            console.log(err)
        })
    }

    // console.log(authDets)
    return (
        <div className="text-center pt-10 px-9 lg:px-[300px]">
            <div className="signIn bg-white text-center rounded-xl pb-10">


                <h1 className="font-black text-2xl md:text-4xl text-[#4CAF50] pt-3 md:pt-5">Sign In</h1>

                <input type="text" placeholder="Username" className="border outline-none py-2 mt-7 rounded-md text-center" />
                <br />
                <br />
                <input type="password" placeholder="Password" className="border outline-none mt-1 py-2 rounded-md text-center" />
                <br />
                <button className="uppercase signInBut bg-gray-500 mb-10 rounded-md mt-4 py-2 px-5 text-white font-bold hover:bg-white border-2  hover:text-[#6B7280] hover:border-1 border-gray-400"
                    onClick={() => {
                        console.log("Hii")
                    }}>
                    Sign In</button>

                <div className="">
                    <hr className="h-1" />
                    <p className="font-bold">OR</p>
                    <hr className="h-1" />
                </div>


                <br />
                <div className="flex flex-col md:flex-row justify-evenly ">

                    <button onClick={signInWithGoogle}
                        className=" px-6 py-2 border-2 flex m-2 md:m-0
                     border-blue-600 text-blue-600 font-medium
                      text-xs md:text-base leading-tight uppercase
                        
                        focus:outline-none focus:ring-0 
                        transition duration-150 ease-in-outborder
                         rounded-full 

                         hover:bg-blue-600 hover:text-white
                         "> <h1 className="my-auto md:mr-6 mx-auto">Sign in With Google </h1><div><FcGoogle className="h-10 w-10 bg-white rounded-full" /></div></button>

                    <button  onClick={signInWithGitHub}

                        className=" px-6 py-2 border-2 flex
                        m-2 md:m-0
                     border-black text-black font-medium
                      text-xs md:text-base leading-tight uppercase
                        
                        focus:outline-none focus:ring-0 
                        transition duration-150 ease-in-outborder
                         rounded-full  hover:bg-black hover:text-white
                         ">
                        <h1 className="my-auto md:mr-6 mx-auto">Sign in With GitHub </h1><div><BsGithub className="h-10 w-10 hover:bg-black hover:text-white  rounded-full" /></div></button>
                </div>





            </div>
        </div>
    );
}

export default SignIn;