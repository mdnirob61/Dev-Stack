import { type Dispatch, type SetStateAction } from 'react';
import type { Technology } from '../technology';

interface YourStackProps {
    stack: Technology[];
    setStack: Dispatch<SetStateAction<Technology[]>>;
}

const YourStack = ({ stack, setStack }: YourStackProps) => {

    const handleRemoveFromStack = (id: string) => {
        const newStack = stack.filter((technology) => technology.id !== id);
        // console.log(newStack)
        setStack(newStack);
    }

    return (
        <div>
            <h2>Your Stack</h2>
            <p>
                {stack.length} Technology Selected
            </p>
            <div className='mt=5 space-y-3'>
                {
                    stack.map((technology) => (
                        <div className='flex items-center justify-between border border-gray-200 rounded-lg p-3'>
                            <div className='flex items-center gap-3'>
                                <img className='className="w-8 h-8"' src={technology.icon} alt={technology.name} />
                                <div>
                                    <h2 className='font-semibold'>{technology.name}</h2>
                                    <p className='text-xs text-gray-500'>{technology.category}</p>
                                </div>
                            </div>
                            <button onClick={() => handleRemoveFromStack(technology.id)}
                                className="text-gray-400 hover:text-red-500 text-4xl transition"
                            >
                                ×
                            </button>
                        </div>
                    ))
                }
            </div>
            <button
                onClick={() => setStack([])}
                className="w-full mt-5 border border-red-200 text-red-500 py-2 rounded-md hover:bg-red-50 transition"
            >
                Remove All
            </button>
        </div>
    );
};

export default YourStack;