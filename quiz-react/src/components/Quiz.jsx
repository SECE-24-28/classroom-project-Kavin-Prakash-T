import { useState } from "react";
import questions from "../assets/data";

const Quiz = () => {

    const [...data] = questions

    const [index,setIndex]=useState(0)

    const moveNext=()=>{
        index<9 ? setIndex(index+1):null
    }

    return (
        <>
            <div className="flex items-center h-screen bg-slate-700 text-white">
                <div className="mx-auto p-15 bg-slate-600 shadow-lg w-[400px] h-[550px] sm:w-[490px] sm:rounded-2xl flex flex-col items-center justify-center">
                    <div>
                        <h1 className="font-bold text-2xl">Simple JS Quiz</h1>
                        <p className="text-gray-300 mt-1 mb-5">Question {index+1} of {data.length}</p>
                        <h6 className="mb-8 font-semibold">{data[index].text}</h6>
                        <div>
                            <button className="block w-full text-left bg-slate-500 px-4 py-2 rounded-lg mb-4 hover:bg-slate-400">{data[index].options[0]}</button>
                            <button className="block w-full text-left bg-slate-500 px-4 py-2 rounded-lg mb-4 hover:bg-slate-400">{data[index].options[1]}</button>
                            <button className="block w-full text-left bg-slate-500 px-4 py-2 rounded-lg mb-4 hover:bg-slate-400">{data[index].options[2]}</button>
                            <button className="block w-full text-left bg-slate-500 px-4 py-2 rounded-lg mb-4 hover:bg-slate-400">{data[index].options[3]}</button>
                        </div>
                        <div className="mt-10 flex justify-end">
                            <button onClick={moveNext} className="bg-teal-500 px-4 py-2 rounded-full hover:bg-teal-600 hover:ease-out hover:duration-300">
                                Next
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center w-full" id="scorecard">
                        <div className=""></div>
                        <div></div>

                        <button className="bg-blue-500 px-3 py-1 rounded-full hover:bg-blue-600 hover:ease-out hover:duration-300 hidden mt-5">
                            Reattempt Quiz
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quiz;