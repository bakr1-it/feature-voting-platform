import { Feature } from "@/types";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import UpDownVote from "./UpDownVote";


export default function FeatureItems({feature}:{feature:Feature}) {
    const [isShowMore,setIsShowMore]= useState(false);
    function toggleShowMore(){
        setIsShowMore(!isShowMore);

    }

    return (
         <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 mb-4">
                        <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8">
                        <UpDownVote feature={feature}/>
                            <div className="info-feature space-y-4">
                                <Link href={route("feature.show",feature)}>
                                {feature.name}
                                </Link>
                                {feature.description?.length > 200 && (
                                    <>
<p>{isShowMore ? feature.description : feature.description.slice(0,100) + "...."}</p>
                                <button onClick={toggleShowMore} className="text-amber-500 cursor-pointer capitalize hover:text-amber-300">
                                    {isShowMore ?"read less" :"read more"}
                                </button>

                                    </>

                                )}
                                {feature.description?.length < 200 &&  <p>{feature.description}</p> }
                            </div>


                        </div>
                    </div>
  )
}
