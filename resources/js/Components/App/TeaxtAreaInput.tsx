 import {
  forwardRef,
    TextareaHTMLAttributes,
    useRef,

} from 'react';

export default forwardRef(function TeaxtAreaInput(
    {

        className = '',
        row=6,
        ...props
    }: TextareaHTMLAttributes<HTMLTextAreaElement> & { row:number },
    ref,
) {
    const localRef = useRef<HTMLTextAreaElement>(null);




    return (
        <textarea
            {...props}
            rows={row}

            className={
                'rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 ' +
                className
            }
            ref={localRef}
        />
    );
});
