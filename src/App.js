import { ToastContainer } from "react-toastify";
import SignIn from "./Components/Signin";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import User from "./Pages/User";
import 'react-toastify/dist/ReactToastify.css';
function App() {

  // const [docs, setDocs] = useState([]);

  // useEffect(() => {

  //   getDocs(colRef)
  //     .then((data) => {
  //       setDocs(data.docs.map((doc) => ({ ...doc.data() })))
  //     })
  //     .catch((err) => {
  //       console.log('Errrror !!!! : ', err);
  //     })
  // }, [])

  // console.log(docs[0].details[0].title);
  return (
    <div className="bg-gray-300 min-h-screen">
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<SignIn />}></Route>
          <Route path="/user/:name" element={<User />}></Route>
          {/* <Route path="/test" element={<Test />}></Route> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  )
}

export default App;
