import Hero from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className='flex justify-between container mx-auto border-2'>
            <div className='flex flex-col'>
                <h1 className='text-5xl font-bold mt-14'>Build Your Ideal<br></br>
                    <span> Development Stack </span></h1>
                <p className='text-[]'>Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.</p>
                <div>
                    <button>Explore Technologies</button>
                    <button>Learn More</button>
                </div>
            </div>
            <img src={Hero} alt="" />
        </div>
    );
};

export default Banner;