<?php

use App\Enum\RoleEnum;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FeatureController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UpvoteController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::redirect("/","dashboard",301);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource("feature",FeatureController::class);
    Route::post("upvotedUpDown/{feature}",[UpvoteController::class,"store"])->name("upvote.store");
    Route::delete("upvotedUpDown/delete/{feature}",[UpvoteController::class,"destroy"])->name("upvote.delete");
    Route::post("comment/create/{feature}",[CommentController::class,"store"])->name("comment.store");
    Route::delete("comment/{comment}/delete",[CommentController::class,"destroy"])->name("comment.destroy");

    Route::middleware("role:". RoleEnum::Admin->value)
    ->as("user.")
    ->prefix("/user")
    ->group(function (){
        Route::get("/",[UserController::class,"index"])->name("index");
        Route::get("/{user}/edit",[UserController::class,"edit"])->name("edit");
        Route::put("/{user}/update",[UserController::class,"update"])->name("update");

    });




});

require __DIR__.'/auth.php';
