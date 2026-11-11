import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Feature } from '@/types';
import UpDownVote from '@/Components/App/UpDownVote';
export default function show({feature}:{feature:Feature}) {


    return (
          <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title={"feature "+ '-' +feature.name }    />

  <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 mb-4">
                        <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8">
                        <UpDownVote feature={feature}/>
                            <div className="info-feature space-y-4">
                               <h1>
                                {feature.name}
                                </h1>

                                <p>{ feature.description }</p>

                            </div>


                        </div>
                    </div>


        </AuthenticatedLayout>
  )
}
