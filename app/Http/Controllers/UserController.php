<?php

namespace App\Http\Controllers;

use App\Enum\RoleEnum;
use App\Http\Resources\AuthResource;
use App\Http\Resources\UsersResource;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function index(){
        return Inertia::render("user/Index",[
            "users"=> AuthResource::collection(User::with(["roles","permissions"])->get())->collection->toArray()
        ]);

    }
    public function edit(User $user){
        return Inertia::render("user/Edit",["user"=> new AuthResource($user) , "roles" =>Role::all(), "roleLabels"=>RoleEnum::labels()]);


    }
    public function update(Request $request, User $user)
    {
        $data = $request->validate([
            'roles' => ['required', 'array'],
        ]);

        $user->syncRoles($data['roles']);

        return back()->with('success', 'Roles updated successfully for user is ' . $user->name);
    }

}
