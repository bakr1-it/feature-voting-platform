import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Comments, Feature } from '@/types';
import UpDownVote from '@/Components/App/UpDownVote';
import CommentItems from '@/Components/App/CommentItems';
import CommentCreateForm from '@/Components/App/CommentCreateForm';
export default function show({feature , comments}:{feature:Feature,comments:Comments[]}) {


    return (
          <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title={"feature "+ '-' +feature.name }    />

  <div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
        <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8">
          <UpDownVote feature={feature} />
          <div className="flex-1">
            <h2 className="text-2xl mb-2">{feature.name}</h2>
            <p>{feature.description}</p>

            {feature.can.comment && <>
              <CommentCreateForm feature={feature} />
            {comments && <div className="mt-8">
              {comments.map(comment => (
                  <CommentItems comment={comment} key={comment.id} />
                ))}
            </div>}
                </>}
          </div>
        </div>
      </div>

        </AuthenticatedLayout>
  )
}
