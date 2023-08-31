import { VscGithubInverted } from "react-icons/vsc";
import { AiOutlineLink } from "react-icons/ai";

const Post = ({ id,title, hLink, gLink, desc }) => {

    return (

        <div className="bg-white w-full px-13 posts rounded-lg my-4 px-3" key={id + 1}>

            <h1 className="text-xl md:text-4xl font-semibold">{title}</h1>
            <p className="text-base md:text-lg mt-2 text-gray-500">{desc}</p>

            <div className="mt-5">
                <div className="flex">
                    {gLink !== "" && gLink !== null && 
                          <div className="pr-10">

                                <div className="flex">
        
                                    <p className="text-base md:text-lg mr-2">GitHub </p>
                                    <a href={gLink}>
                                        <span className="my-auto"><VscGithubInverted className=" h-5 w-5" /></span>
                                    </a>
                                    
                                </div>

                            </div>    
                    } 
                    {hLink !== "" && hLink !== null && 
                        <div className="mr-10">
                            <div className="flex">
                                <p className="text-base md:text-lg pr-2">Website </p>
                                <a href={hLink}>
                                    <span className="my-auto"><AiOutlineLink className=" h-5 w-5" /></span>
                                </a>
                            </div>

                        </div>    
                    }
                </div>
            </div>
        </div>
    );
}

export default Post;
