import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage, WhenVisible } from '@inertiajs/react';
import { Feature } from '@/types';
import FeatureItems from '@/Components/App/FeatureItems';
import PrimaryButton from '@/Components/PrimaryButton';
import Toast from '@/Components/App/Toast';
import { useEffect, useState } from 'react';
export default function Index({features,canCreate,page}:{features:Feature[] ,canCreate:boolean,page:number}) {
    const {flash}=usePage().props;
    const [isShowToast,setIsShowToast]=useState(false);
useEffect(()=>{
    if(flash.success)
setIsShowToast(true);
},[flash.success]);

    return (
          <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Features" />
{flash.success && <Toast message={flash.success} isShow={isShowToast} setIsShow={()=>setIsShowToast(false)} />}
             <Link href={route("feature.create")}>

            {canCreate && <PrimaryButton className='my-4 mb-6'>Create New Feature</PrimaryButton>}
             </Link>


                    {features.map((f)=> <FeatureItems feature={f}/>)}

                    <WhenVisible
                     data={["features","page"]}
                     params={{
                        data:{page:page+1},
                        preserveUrl:true

                     }}
                      fallback={<div>Loading ...... </div>}
                      always
                      buffer={400}

                      >
<>
</>

                    </WhenVisible>


        </AuthenticatedLayout>
  )
}
