<?php

namespace App\Http\Controllers;

use App\Enum\PermissionEnum;
use App\Models\Comment;
use App\Models\Feature;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class CommentController extends Controller
{


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request,Feature $feature)
    {
        Gate::authorize("comment",$feature);
       $data=  $request->validate([
            "comment"=>["required","string"]
        ]);
$data["feature_id"]=$feature->id;
$data["user_id"]=Auth::id();
Comment::create($data);
return back();


    }

    public function destroy(Comment $comment)
    {
        if($comment->user_id !== Auth::id() && !Auth::user()?->can(PermissionEnum::ManageFeatures->value)){
            abort(403);
        }
        $comment->delete();
        return back();


    }

}
