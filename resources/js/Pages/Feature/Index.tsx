import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Feature, PaginateData } from '@/types';
import FeatureItems from '@/Components/App/FeatureItems';
import PrimaryButton from '@/Components/PrimaryButton';
export default function Index({features}:{features:PaginateData<Feature>}) {
  return (
          <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Features" />
             <Link href={route("feature.create")}>

             <PrimaryButton className='my-4 mb-6'>Create New Feature</PrimaryButton>
             </Link>


                    {features.data.map((f)=> <FeatureItems feature={f}/>)}


        </AuthenticatedLayout>
  )
}
