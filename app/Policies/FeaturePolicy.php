<?php

namespace App\Policies;

use App\Enum\PermissionEnum;
use App\Models\Feature;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class FeaturePolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Feature $feature): bool
    {
        return true;
    }

    /**
     * Determine whether the user can create models.
     */
    public function comment(User $user , Feature $feature){
 return $user->id == $feature->user_id || $user->can(PermissionEnum::ManageComments->value);
    }
    public function create(User $user): bool
    {
        return $user->can(PermissionEnum::ManageFeatures->value);
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Feature $feature): bool
    {
        return $user->id == $feature->user_id || $user->can(PermissionEnum::ManageFeatures->value);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Feature $feature): bool
    {
        return $user->id == $feature->user_id || $user->can(PermissionEnum::ManageFeatures->value);
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Feature $feature): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Feature $feature): bool
    {
        return false;
    }
}
