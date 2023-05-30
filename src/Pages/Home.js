const Home = () => {

    return (
        <div className="home my-auto md:py-10 md:mx-10 pt-12 mx-auto rounded-md flex justify-center text-center items-center ">
            <div className="shadow-xl bg-white rounded-lg w-3/4 lg:w-1/2 pb-5 text-center ">

                <h1 className="font-black text-gray-500 text-3xl md:text-4xl mb-3 pt-3">Welcome to Project Book</h1>
                <p>A place to store your projects built by you <span className="font-semibold">FOR YOU 🚀</span> </p>
                <p className="lg:mb-10 uppercase my-2 text-lg md:text-2xl font-bold text-[#3B82F6]">Tech Stack Used</p>

                <div className="mx-1 lg:mx-20 grid grid-cols-2 border-b-2 border-l-2 border-r-2 lg:border-l-0 lg:border-r-0 mb-10 border-green-500 items-center md:text-xl">
                    <p className="my-2"><span className="uppercase font-bold">Backend :</span> Firestore  </p>
                    <img className="h-12 w-10 md:ml-7" src="https://seeklogo.com/images/F/firestore-logo-3828671CC5-seeklogo.com.png" alt="" />
                </div>

                <div className="mx-1 lg:mx-20 grid grid-cols-2 border-b-2 border-l-2 border-r-2 lg:border-l-0 lg:border-r-0 border-green-500 md:mt-3 md:text-xl">
                    <p className=" text-center my-2"><span className="uppercase font-bold ">Frontend :</span>  ReactJs </p>
                    <img className="text-center animate-spin delay-1000 h-11 w-12 ml-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" alt="" />
                </div>

                <div className="mx-1 buttons flex flex-col items-center justify-center">

                    <a className="decoration-none" href=""></a>
                    <a className="decoration-none" href=""></a>
                    <button className="uppercase mx-2 lg:w-1/3 bg-blue-500 rounded-md mt-14 py-2 px-5 text-white font-bold hover:bg-white border-2  hover:text-[#6B7280] hover:border-1 border-gray-400"><a href="https://github.com/Veeresh-R-G/Projects-NoteBook-V2">Check Github Repo ➡️</a> </button>
                    <button className="uppercase mx-2 lg:w-1/3 bg-emerald-500 rounded-md mt-4 py-2 px-5 text-white font-bold hover:bg-white border-2  hover:text-[#6B7280] hover:border-1 border-gray-400"><a href="/login">Check Project here ➡️</a> </button>
                </div>
            </div>
        </div>
    );
}

export default Home;