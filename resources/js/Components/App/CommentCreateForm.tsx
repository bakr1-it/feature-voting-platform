import { Feature } from "@/types";
import PrimaryButton from "../PrimaryButton";
import TeaxtAreaInput from "./TeaxtAreaInput";
import { useForm } from "@inertiajs/react";

export default function CommentCreateForm({feature}:{feature:Feature}) {
    const {data,setData,post,processing,reset} = useForm({
        comment:""
    })
    const createComment= (ev:React.SyntheticEvent<HTMLFormElement>)=>{
ev.preventDefault();
        if(data.comment.length <=0)return;
        post(route("comment.store",feature),{
            preserveScroll:true,
            preserveState:true,
            onSuccess : ()=>reset("comment")
        })
    }
  return (
    <form  className="flex items-center py-2 rounded-lg gap-4 bg-gray-50 dark:bg-gray-800 mb-4" onSubmit={createComment} >
      <TeaxtAreaInput
      value={data.comment}
      onChange={e=>setData("comment",e.target.value)}
        row={1}
        className="mt-1 block w-full"
        placeholder="Your comment"
      />
      <PrimaryButton disabled={processing} >Comment</PrimaryButton>
    </form>
  )
}
