import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Feature, PaginateData } from '@/types';
import FeatureItems from '@/Components/App/FeatureItems';
export default function Index({features}:{features:PaginateData<Feature>}) {
  return (
          <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />


                    {features.data.map((f)=> <FeatureItems feature={f}/>)}

      
        </AuthenticatedLayout>
  )
}
