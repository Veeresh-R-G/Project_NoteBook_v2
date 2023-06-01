import { useState } from "react";
import { doc , setDoc} from "firebase/firestore";
import { dataBase } from "../firebase_config";
import { toast } from "react-toastify";
const Form = ({ DATA }) => {


    const [host, setHost] = useState(false)
    const [data, setData] = useState({
        title: "",
        desc: "",
        gLink: "",
        hLink: ""
    })

    const handleChange = (e) => {
        if(e.target.name === "")
        {
            return;
        }
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = () => {

        

        DATA.push(data);
        const docRef = doc(dataBase ,"users" , localStorage.getItem("doc_id"));
        const newData = DATA;


        toast.promise(setDoc(docRef , {"projects" : newData} , {merge : true}) , 
            {
                pending : 'Adding Project',
                success : 'Project Added Successfully , Please Reload to the page to see the changes',
                error : 'Project was not added ',
            },
            {
                
                autoClose : 2000,
                theme: "colored"
            }
        )
        
    }
    return (
        <div className="flex justify-center items-center ">
            <div onChange={handleChange} className="signIn bg-white text-center rounded-xl mx-3 pb-10 w-full">


                <h1 className="font-black text-2xl text-gray-600 pt-3 md:pt-5">
                    <span className="underline">Project </span>
                    Details
                </h1>



                <input type="text" name="title" placeholder="Title" className="border outline-none py-2 mt-7 rounded-md text-center" />
                <br />
                <br />
                <textarea rows={3} cols={22} type="text" name="desc" placeholder="Description" className="border outline-none py-2  rounded-md text-center px-2" />
                <br />
                <br />
                <input type="text" name="gLink" placeholder="Github Link" className="border outline-none py-2  rounded-md text-center" />
                <br />
                <br />
                <input type="checkbox" id="" value={"Hosted ?"} onClick={() => { setHost(!host) }} /> Hosted ? <br />
                <input style={{ display: host ? "inline" : "none" }} name="hLink" type="text" placeholder="If Hosted The Link" className="border outline-none mt-1 py-2 rounded-md text-center" />
                <br />
                <button className="bg-[#52B69A] mb-5 rounded-md mt-4 py-2 px-5 text-white font-bold hover:bg-white border-2   hover:text-[#52B69A] hover:border-1 border-white hover:border-[#52B69A]" onClick={handleSubmit}>SUBMIT</button>


            </div>
        </div>
    );
}

export default Form;