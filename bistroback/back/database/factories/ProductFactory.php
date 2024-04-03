<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
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
            'title' => $this->faker->words(5, true),
            'image' => $this->faker->imageUrl(306, 230),
            'description' => $this->faker->text(70),
            'price' => $this->faker->randomFloat(2, 10, 100),
            'category_id' =>$this->faker->numberBetween(1, 4),
            'user_id' =>$this->faker->numberBetween(1, 8),
        ];
    }
}
