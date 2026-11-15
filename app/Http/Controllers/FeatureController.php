<?php

namespace App\Http\Controllers;

use App\Http\Resources\FeatureResource;
use App\Http\Resources\UsersResource;
use App\Models\Feature;
use App\Models\Upvotes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;


class FeatureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $currentUserId=Auth::id();


        $features =Feature::orderByDesc("id")
        ->withCount(["upVotes"=>function ($query){
            $query->select(DB::raw("SUM(CASE WHEN upvote=1 THEN 1 else -1 END)"));

        }])->withExists([
            "upVotes as user_upVote"=>function ($query) use ($currentUserId){
            $query->where("user_id",$currentUserId)
            ->where("upvote",1);


        } , "upVotes as user_downVote"=>function ($query) use ($currentUserId){
            $query->where("user_id",$currentUserId)
            ->where("upvote",0);


        } ] )


        ->paginate();

        return Inertia::render("Feature/Index",[
            "features"=>FeatureResource::collection($features),
            "canCreate"=>$request->user()?->can("create",Feature::class) ?? false
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Feature/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Gate::authorize("create",Feature::class);
       $data= $request->validate([
            "name"=>["string","required","min:1"],
            "description"=>["nullable","string"],
        ]);
        $data["user_id"]=Auth::id();
        $created= Feature::create($data);
        if($created)
return Inertia::render("Feature/create");
            }

    /**
     * Display the specified resource.
     */
    public function show(Feature $feature)
    {
        $currentUserId=Auth::id();
        $feature->user_upVote= Upvotes::where("feature_id",$feature->id)
        ->where("user_id",$currentUserId)
        ->where("upvote",1)->first();
        $feature->user_downVote= Upvotes::where("feature_id",$feature->id)
        ->where("user_id",$currentUserId)
        ->where("upvote",0)->first();
        $feature->up_votes_count= Upvotes::where('feature_id', $feature->id)
            ->sum(DB::raw('CASE WHEN upvote = 1 THEN 1 ELSE -1 END'));

        return Inertia::render("Feature/Show",[
            "feature"=>new FeatureResource($feature),
            "comments"=>$feature->comments()->latest()->with("user")->get()->map(fn($comment)=>[
                "id"=>$comment->id,
                "comment"=>$comment->comment,
                "created_at"=>$comment->created_at->diffForHumans(),
                "user"=> new UsersResource($comment->user),
            ])

        ]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Feature $feature)
    {
           return Inertia::render("Feature/Edit",["feature"=>new FeatureResource($feature)]);


    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Feature $feature)
    {
        Gate::authorize("update",$feature);
           $data= $request->validate([
            "name"=>["string","required","min:1"],
            "description"=>["nullable","string"],
        ]);

       $updated=  $feature->update($data);
        return response()->json(["update"=>"success"],204);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Feature $feature)
    {
        Gate::authorize("delete",$feature);
        $deleted= $feature->delete();
        if($deleted)
            return to_route("feature.index")->with("success","delete feature is success");



    }
}
