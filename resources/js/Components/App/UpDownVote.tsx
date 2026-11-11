import { Feature } from "@/types";
import { useForm } from "@inertiajs/react";


export default function UpDownVote({feature}:{feature:Feature}) {


const upVoteForm= useForm({
    upvote:true
})
const DowmVoteForm= useForm({
    upvote:false
})

const toggleUpVote= (upVoteUp :boolean)=>{
if(feature.user_upVote && upVoteUp || feature.user_downVote && !upVoteUp){
    console.log("delete upvote");
    upVoteForm.delete(route("upvote.delete",feature.id));
}else{
let form = null;
if(upVoteUp)
    form=upVoteForm;
else
    form = DowmVoteForm;
        form.post(route("upvote.store", feature.id), {
            preserveScroll: true,
        });
}
}
    return (
    <div className="icon-upMove number flex flex-col items-center">
                                               <button onClick={()=> toggleUpVote(true)} className={`${feature.user_upVote ?"text-amber-600" :""}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12">
                                         <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                    </svg>

                                </button>
                                <span>
                                    {feature.up_votes_count}
                                </span>
                                <button onClick={()=>toggleUpVote(false)} className={`${feature.user_downVote ?"text-amber-600" :""}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12">
                                         <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>

                                </button>


                            </div>
  )
}
