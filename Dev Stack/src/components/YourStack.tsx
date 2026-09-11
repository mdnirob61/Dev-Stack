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
        <div className='border border-gray-200 rounded-xl p-5 shadow-sm max-w-90'>
            <h2 className='text-[#0F172A] text-2xl font-bold'>Your Stack</h2>
            <p className='text-[#94A3B8]'>
                {stack.length > 0 ? `${stack.length} Technology Selected` : 'No technologies selected yet'}
            </p>
            <div className='mt-5 space-y-3'>
                {
                    stack.map((technology) => (
                        <div key={technology.id} className='flex items-center justify-between border border-gray-200 rounded-lg p-3'>
                            <div className='flex items-center gap-3'>
                                <img className='w-8 h-8' src={technology.icon} alt={technology.name} />
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