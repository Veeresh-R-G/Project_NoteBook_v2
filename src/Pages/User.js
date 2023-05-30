import { query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Form from "../Components/Form";
import Post from "../Components/Post";
import { colRef } from "../firebase_config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
const User = () => {

    const navigate = useNavigate();
    const [Data, setData] = useState([]);
    useEffect(() => {

        
        // console.log(localStorage.getItem("doc_id"))
        const q = query(colRef , where("uuid" , "==" , localStorage.getItem("uuid")));
        getDocs(q).then((querySnapshot) => {
            
            querySnapshot.forEach((doc) => {
                localStorage.setItem("doc_id" , doc.id);
                console.log("here : " , doc.id);
                // console.log(doc.data());
                setData(doc.data().projects);
            });
        });
        // const getRecords = async () => {
        //     const data = await getDocs(colRef);
        //     setData(data.docs.map((doc) => ({ ...doc.data() })))
        // }

        // getRecords();
    }
        , [])

    const handleLogout = () => {
        //clear the entire localstorage

        localStorage.clear();
        navigate('/')
        
    }

    let photoUrl = localStorage.Photo;

    console.log(Data);
    return (
        <div className="bg-[#52b69a] min-h-screen pt-5 px-1">
            <div className="bg-white flex justify-around py-3 mx-40 mb-3 rounded-lg ">
                <div>
                    <h1 className="text-xl font-semibold text-[#359a7d]  flex items-center ">Hello,
                        {localStorage.Name}
                    </h1>
                    <button onClick={handleLogout} className="px-6 mt-2 rounded-xl ml-5 hover:bg-[#52b69a] hover:text-white py-1 text-center items-center justify-center flex text-[#52b69a] font-semibold border-2 border-[#53b69a] ">
                        Logout
                    </button>
                </div>

                <div className="border-4 border-[#52b69a] p-1 rounded-full">
                    <img src={photoUrl} alt="" className="rounded-full w-16 h-16" />
                </div>



            </div>
            <div className="hidden md:grid md:grid-cols-3 gap-3">
                <div className="md:col-span-2 ">
                    {JSON.stringify(Data)}
                    {Data.length === 0 ? 
                    <>
                        <div className="bg-white rounded-xl text-center text-[#52b69a] font-semibold mt-4">
                            No Projects Posted
                        </div>
                    </> :
                    <>
                    {Data.map((item , ind) => {
                        return (
                            <Post key={ind} id={ind + 1} title={item?.title} gLink={item?.gLink} hLink={item?.hLink} desc={item?.desc} />
                        )
                    })
                    }
                    </>
                    }
                    {/* <Post title={"Title - 1"} gLink={"https://www.google.com"} hLink={"https://www.google.com"} desc={"Hello this is the description"} />
                    <Post title={"Title - 1"} gLink={"https://www.google.com"} hLink={"https://www.google.com"} desc={"Hello this is the description"} />
                    <Post title={"Title - 1"} gLink={"https://www.google.com"} hLink={"https://www.google.com"} desc={"Hello this is the description"} /> */}
                </div>
                <div className="md:col-span-1 mt-10 ">
                    <Form DATA={Data} />
                </div>
            </div>
        </div>
    );
}

export default User;