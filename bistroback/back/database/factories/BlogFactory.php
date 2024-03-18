<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blog>
 */
class BlogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = \Faker\Factory::create();

        return [
            //
            'title' => $faker->dateTime()->format('d-m-Y H:i:s'),
            'image' => $faker->imageUrl(306, 230),
            'description' => $faker->text(40),
            'user_id' => $faker->numberBetween(1, 10)

        ];
    }
}
