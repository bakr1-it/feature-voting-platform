<?php

namespace Database\Factories;

use App\Models\Feature;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Feature>
 */
class FeatureFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name"=>fake()->text(),
            "description"=>fake()->text(200),
            "user_id"=>User::first()->id,
        ];
    }
}
