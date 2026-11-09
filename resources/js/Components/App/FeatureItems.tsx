import { Feature } from "@/types";
import { useState } from "react";


export default function FeatureItems({feature}:{feature:Feature}) {
    const [isShowMore,setIsShowMore]= useState(false);
    function toggleShowMore(){
        setIsShowMore(!isShowMore);

    }

    return (
         <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 mb-4">
                        <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8">
                            <div className="icon-upMove number flex flex-col items-center">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12">
                                         <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                    </svg>

                                </button>
                                <span>
                                    12
                                </span>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12">
                                         <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>

                                </button>

                            </div>
                            <div className="info-feature space-y-4">
                                <h1>{feature.name}</h1>
                                <p>{isShowMore ? feature.description : feature.description.slice(0,100) + "...."}</p>
                                <button onClick={toggleShowMore} className="text-amber-500 cursor-pointer capitalize hover:text-amber-300">
                                    {isShowMore ?"read less" :"read more"}
                                </button>
                            </div>


                        </div>
                    </div>
  )
}
