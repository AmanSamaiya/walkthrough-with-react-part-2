import { useState } from "react";

export default function Incdec() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center h-[100vh] bg-rose-500 flex-col gap-10">
      <p className="text-white font-bold text-5xl">{count}</p>
      <div className="flex gap-10 mt-10">
      <button className=" bg-white rounded text-center px-8 py-4 font-bold text-xl" onClick={()=>{setCount(count+1)}}>Increment</button>
      
      <button className=" bg-white rounded text-center px-8 py-4 font-bold text-xl" onClick={()=>{setCount(count-1)}}>Decrement</button>
      </div>
    
    </div>
  );
}
