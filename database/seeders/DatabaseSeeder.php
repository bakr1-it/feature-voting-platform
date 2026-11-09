<?php

namespace Database\Seeders;

use App\Enum\PermissionEnum;
use App\Enum\RoleEnum;
use App\Models\Feature;
use App\Models\User;
use Database\Factories\FeatureFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $roleAdmin = Role::create(["name"=>RoleEnum::Admin->value]);
        $roleCommenter = Role::create(["name"=>RoleEnum::Commenter->value]);
        $roleUser = Role::create(["name"=>RoleEnum::User->value]);
        $permissionUpDownMove= Permission::create(["name"=>PermissionEnum::UpvoteDownvote->value]);
        $permissionManageUsers= Permission::create(["name"=>PermissionEnum::ManageUsers->value]);
        $permissionManageComments= Permission::create(["name"=>PermissionEnum::ManageComments->value]);
        $permissionManageFeatures= Permission::create(["name"=>PermissionEnum::ManageFeatures->value]);
        $roleUser->syncPermissions([$permissionUpDownMove]);
        $roleCommenter->syncPermissions([$permissionUpDownMove,$permissionManageComments]);
        $roleAdmin->syncPermissions([$permissionUpDownMove,$permissionManageComments,$permissionManageFeatures,$permissionManageUsers]);






        User::factory()->create([
            'name' => ' User',
            'email' => 'user@gmail.com',
        ])->assignRole($roleUser);
        User::factory()->create([
            'name' => ' commenter',
            'email' => 'commenter@gmail.com',
        ])->assignRole($roleCommenter);
        User::factory()->create([
            'name' => ' admin',
            'email' => 'admin@gmail.com',
        ])->assignRole($roleAdmin);
        Feature::factory(100)->create();
    }
}
