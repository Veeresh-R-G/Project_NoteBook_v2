import { query, where, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Form from "../Components/Form";
import Post from "../Components/Post";
import { colRef } from "../firebase_config";
import { useNavigate } from "react-router";
import Loading from "../Components/Loading";
import { toast } from "react-toastify";
const User = () => {

    const navigate = useNavigate();
    const [Data, setData] = useState(null);
    const [dummyData , setDummy] = useState(null);
    useEffect(() => {
        const q = query(colRef , where("uuid" , "==" , localStorage.getItem("uuid")));
        getDocs(q).then((querySnapshot) => {
            
            querySnapshot.forEach((doc) => {
                localStorage.setItem("doc_id" , doc.id);
                setData(doc.data().projects.reverse());
                setDummy(doc.data().projects.reverse());
            });
        });
    }
    , [])

    const selectProjects = (e) => 
    {
        const projects = e.target.value;
        
        if(projects === 'All')
        {  
            setDummy(Data);
            return;
        }

        if(projects === 'r_5')
        {
            setDummy(Data.slice(0,5));
            return;
        }

        if(projects === 'r_10')
        {
            setDummy(Data.slice(0 , 10));
            return;
        }





    }

    const handleLogout = () => {
        toast.success('Logged Out Successfully !!!' , 
        {
            position: "top-right",
            autoClose: 1300,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
        localStorage.clear();
        navigate('/')
        
    }

    let photoUrl = localStorage.Photo;
    return (
        <div className="bg-[#52b69a] min-h-screen pt-5 px-1">
            <div className="bg-white flex justify-around py-3 mx-2 md:mx-40 mb-3 rounded-lg ">
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


            <div className="flex flex-col-reverse md:grid md:grid-cols-3 gap-3">
                <div className="md:col-span-2 ">
                    <div className="flex items-center justify-center">

                        {Data === null && <Loading/>}

                    </div>
                    
                    {dummyData?.length === 0 ? 
                    <>
                        <div className="bg-white rounded-xl text-center text-[#52b69a] font-semibold mt-4">
                            Add your First Project Now !!!
                        </div>
                    </> :
                    <>
                    <div>
                        <div>
                            <select onChange={selectProjects} className="border-2 outline-none text-[#1a5b43] font-semibold border-[#52b69a] rounded-md px-2 py-1 mt-3 " name="filter" id="filter">
                                <option value="All">All</option>
                                <option value="r_5">Recent 5</option>
                                <option value="r_10">Recent 10</option>
                            </select>    
                        </div>

                    </div>
                    {dummyData?.map((item , ind) => {
                            return (
                                <Post key={ind} id={ind + 1} title={item?.title} gLink={item?.gLink} hLink={item?.hLink} desc={item?.desc} />
                            )
                            })
                        }
                    </>
                    }
            
                </div>
                <div className="md:col-span-1 mt-5 md:mt-14 ">
                    <Form DATA={Data} />
                </div>
            </div>
        </div>
    );
}

export default User;