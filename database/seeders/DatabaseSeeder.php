<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Ramsey\Uuid\Uuid;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $uuid = Uuid::uuid4();

        // create roles
        Role::create(['name' => 'admin']);
        Role::create(['name' => 'participant']);

        $this->call([
            UserSeeder::class
        ]);

        User::factory(150)->create()->each(function ($users) {
            $users->assignRole('participant');
        });
    }
}
