import Hero from '../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className="container mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-10 mt-10 sm:mt-14 lg:mt-2">
            <div className=" flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-5">

                <div className="w-full lg:w-1/2">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-5 lg:mt-1 leading-tight">
                        Build Your Ideal
                        <br className="hidden sm:block" />
                        <span className=" bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>
                    <p className="text-gray-600 mt-5 sm:mt-7 text-base sm:text-[1.1rem] leading-6 sm:leading-7">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-8 sm:mt-10 lg:mt-14">
                        <button className="px-4 py-2 text-xs sm:text-sm text-white rounded-md bg-gradient-to-r from-orange-500 to-pink-500 cursor-pointer">
                            Explore Technologies
                        </button>
                        <button className="px-6 py-2 text-xs sm:text-sm border border-gray-200 rounded-md cursor-pointer">
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <img
                        src={Hero}
                        alt="Development Stack"
                        className="w-[280px] sm:w-[380px] md:w-[450px] lg:w-[550px] max-w-full h-auto" />
                </div>
            </div>
        </div>
    )
}

export default Banner