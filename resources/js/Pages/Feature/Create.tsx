import TeaxtAreaInput from '@/Components/App/TeaxtAreaInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { SyntheticEvent } from 'react';
export default function Create() {
    const {data,setData,processing , post , errors}= useForm({
        name:"",
        description:""
    })
    const handelSubmitForm = (ev:SyntheticEvent)=>{
    ev.preventDefault();
    post(route("feature.store",data),{
        preserveScroll:true
    })
    }

  return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Create New Feature "    />

  <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 mb-4">
                        <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8">
      <form action="" onSubmit={handelSubmitForm} method="post" className='w-full'>
                                      <div>
                                           <InputLabel htmlFor="name" value="Name" />

                                           <TextInput
                                               id="name"
                                               className="mt-1 block w-full"
                                               value={data.name}
                                               onChange={(e) => setData('name', e.target.value)}
                                               required
                                               isFocused
                                               autoComplete="name"
                                           />

                                           <InputError className="mt-2" message={errors.name} />
                                       </div>
                                      <div className='my-6'>
                                           <InputLabel htmlFor="Description" value="Description" />

                                           <TeaxtAreaInput
                                               id="name"
                                               className="mt-1 block w-full"
                                               value={data.description}
                                               row={4}
                                               onChange={(e) => setData('description', e.target.value)}

                                           />

                                           <InputError className="mt-2" message={errors.description} />
                                       </div>
                                          <PrimaryButton disabled={processing}>Create</PrimaryButton>
      </form>
                    </div>
                    </div>


        </AuthenticatedLayout>
  )
}
