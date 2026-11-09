<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
protected $fillable = ["name","user_id","description"];
public function comments(){
    return $this->hasMany(Comment::class);
}
public function user(){
    return $this->belongsTo(User::class);
}
public function upVotes(){
    return $this->hasMany(Upvotes::class);

}

}
