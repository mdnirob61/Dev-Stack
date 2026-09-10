import { Suspense, useState } from 'react';
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import type { Technology } from './technology';
import Technologies from './components/Technologies';


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
    </>
  )
}

export default App
