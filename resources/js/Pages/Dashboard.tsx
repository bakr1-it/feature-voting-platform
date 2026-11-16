import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />


                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
<div>
    <h2 className="text-xl font-semibold mb-2">
        Welcome to the Feature Request & Voting Platform!
    </h2>

    <p className="text-gray-400 leading-relaxed">
        Share your ideas, suggest new features, and help shape
        the future of the platform. Vote on feature requests,
        join discussions, and collaborate with the community
        to turn great ideas into reality.
    </p>
</div>                        </div>
                    </div>

        </AuthenticatedLayout>
    );
}
