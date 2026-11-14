<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FeatureResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"=>$this->id,
            "name"=>$this->name,
            "description"=>$this->description,
            "user"=>new UsersResource($this->user),
            "up_votes_count"=>$this->up_votes_count ?? 0,
            "user_upVote"=>$this->user_upVote,
            "user_downVote"=>$this->user_downVote,
            "can"=>[
                "update"=>$request->user()?->can("update",$this->resource) ?? false,
                "delete"=>$request->user()?->can("delete",$this->resource) ?? false,
                "comment"=>$request->user()?->can("comment",$this->resource) ?? false,
            ],



        ];
    }
}
