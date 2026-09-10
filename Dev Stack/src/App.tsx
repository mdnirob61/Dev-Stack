import { Suspense, useState } from 'react';
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import type { Technology } from './technology';
import Technologies from './components/Technologies';
import Footer from './components/Footer';
import YourStack from './components/YourStack';
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


const technologyFetch = async (): Promise<Technology[]> => {
  const res = await fetch("/technology.json");
  const data = await res.json();
  return data;
}

function App() {
  const [technologyPromise] = useState(() => technologyFetch());
  // console.log(technologyPromise);

  const [stack, setStack] = useState<Technology[]>([])

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<p className='text-5xl font-bold text-center'>Loading Technologies...</p>}>
        <Technologies
          technologyPromise={technologyPromise}
          stack={stack}
          setStack={setStack}
        />
      </Suspense>
      <YourStack stack={stack} setStack={setStack}></YourStack>
      {/* <ToastContainer aria-label="Notifications" /> */}
      <Footer></Footer>
    </>
  )
}

export default App
