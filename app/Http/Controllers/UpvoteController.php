<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use App\Models\Upvotes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UpvoteController extends Controller
{
    /**
     * Display a listing of the resource.
     */


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request,Feature $feature)
    {
        $data= $request->validate([
            "upvote"=>["required","boolean"]
        ]);
        $data["user_id"]=Auth::id();
$feature->upVotes()->updateOrCreate(["user_id"=>Auth::id() ],["upvote"=>$data["upvote"]]);

        return back();


    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Feature $feature)
    {
        $feature->upVotes()->where("user_id",Auth::id())->delete();
        return back();

    }
}
