<?php

namespace App\Http\Resources;
use App\Enum\PermissionEnum;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AuthResource extends JsonResource
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
            "email"=>$this->email,
            "permissions"=>$this->getAllPermissions()->map(fn($premission)=>$premission->name),
            "role"=>$this->getRoleNames(),
        ];;
    }
}
