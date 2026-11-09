<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    use HasFactory;
    public $timestamps = false;
protected $fillable = ["name","user_id","upvote","description"];
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
