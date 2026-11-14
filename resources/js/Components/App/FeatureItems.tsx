import { Feature } from "@/types";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import UpDownVote from "./UpDownVote";
import FeatureActionsDropdown from "./FeatureActionsDropdown";


export default function FeatureItems({feature}:{feature:Feature}) {
    const [isShowMore,setIsShowMore]= useState(false);
    function toggleShowMore(){
        setIsShowMore(!isShowMore);

    }

    return (
         <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 mb-4">
                        <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8">
                        <UpDownVote feature={feature}/>
                            <div className="info-feature space-y-4 flex-1">
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
                           {feature.can.comment &&
                                  <div className="py-4">
            <Link prefetch href={route('feature.show', feature)}
                  className="inline-flex gap-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Comments
            </Link>
          </div>
                }
        </div>
        <div>
            {feature.can.delete && <FeatureActionsDropdown feature={feature} /> }


                            </div>

                        </div>

                    </div>
  )
}
