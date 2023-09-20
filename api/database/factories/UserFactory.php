<?php

namespace Database\Factories;

use App\Models\Role;
use App\Models\Roles;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $nombres = $this->faker->firstName;
        $apellidos = $this->faker->lastName;
        $email = $this->faker->unique()->safeEmail;
        $identificacion = $this->faker->unique()->numerify('##########'); // Genera un número de 10 dígitos
        return [
            'name' => $nombres,
            'apellidos' => $apellidos,
            'email' => $email,
            'identificacion' => $identificacion,
            'estados' => $this->faker->randomElement([1, 2]),
            'email_verified_at' => now(),
            'password' => bcrypt('password'), // Puedes establecer una contraseña fija o generar una aleatoria
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
