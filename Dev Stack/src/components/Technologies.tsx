import { use, type Dispatch, type SetStateAction } from 'react';
import type { Technology } from '../technology';
import YourStack from './YourStack';
// import { toast } from "react-toastify";

interface TechnologiesProps {
    technologyPromise: Promise<Technology[]>;
    stack: Technology[];
    setStack: Dispatch<SetStateAction<Technology[]>>;
}

const Technologies = ({
    technologyPromise,
    stack,
    setStack
}: TechnologiesProps) => {

    const technologies = use(technologyPromise);

    const handleAddToStack = (technology: Technology) => {

        const isAdded = stack.some(
            (tech) => tech.id === technology.id
        );

        if (isAdded) {
            alert("This technology is already in your stack!");
            return;
        }

        const newStack = [...stack, technology];

        alert("Added to the stack");
        console.log(newStack);

        setStack(newStack);
    };

    return (
        <div className="container mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-10 mt-16">
            <div className="mb-8">
                <h2 className="text-3xl font-bold">
                    Explore the{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
                        Technologies
                    </span>
                </h2>
                <p className="text-gray-500 mt-2">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>
            <div className='grid grid-cols-1 lg: grid-cols-4 gap-8'>
                <div className='lg:col-span-3'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            technologies.map((technology) => {

                                const isAdded = stack.some(
                                    (tech) => tech.id === technology.id
                                );
                                return (
                                    <div
                                        key={technology.id}
                                        className="border border-gray-200 rounded-xl p-5 shadow-sm">
                                        <div className="flex items-center justify-between">

                                            <img
                                                src={technology.icon}
                                                alt={technology.name}
                                                className="w-7 h-7" />

                                            <div className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-500">
                                                {technology.badge}
                                            </div>

                                        </div>
                                        <h3 className="text-2xl font-bold mt-4 text-[#e94b6a]">
                                            {technology.name}
                                        </h3>
                                        <p className="text-gray-500 mt-2">
                                            {technology.description}
                                        </p>

                                        <div className="flex items-center justify-between mt-5 text-xs">
                                            <div className="text-[1rem] bg-gray-200 px-2 py-1 rounded">
                                                {technology.category}
                                            </div>

                                            <div className="text-[1rem] text-gray-500">
                                                {technology.difficulty}
                                            </div>

                                            <div className="text-[1rem] text-gray-600">
                                                ⭐ {technology.rating}
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleAddToStack(technology)}
                                            disabled={isAdded}
                                            className={`w-full mt-4 text-[1rem] py-3 rounded-md transition ${isAdded ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-[#d45b36] text-white hover:bg-[#fd683b]"}`}>
                                            {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                                        </button>
                                    </div>
                                );
                            })}
                    </div>
                </div>
                <div className='lg:col-span-1'>
                    <YourStack
                        stack={stack}
                        setStack={setStack}
                    >
                    </YourStack>
                </div>
            </div>
        </div>
    );
};

export default Technologies;