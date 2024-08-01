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


        $user = User::create([
            'id' =>  $uuid->toString(),
            'nim' => 'admin1',
            'name' => 'admin1',
            'email' => 'admin1@gmail.com',
            'line_id' => 'admin1',
            'whatsapp_id' => 'admin1',
            'password' => "password"
        ]);

        $user->assignRole('admin');

        $user = User::create([
            'id' =>  $uuid->toString(),
            'nim' => 'admin2',
            'name' => 'admin2',
            'email' => 'admin2@gmail.com',
            'line_id' => 'admin2',
            'whatsapp_id' => 'admin2',
            'password' => "password"
        ]);

        $user->assignRole('admin');

        $user = User::create([
            'id' =>  $uuid->toString(),
            'nim' => 'pengguna1',
            'name' => 'pengguna1',
            'email' => 'pengguna1@gmail.com',
            'line_id' => 'pengguna1',
            'whatsapp_id' => 'pengguna1',
            'password' => "password",
            'kelompok' => '2',
            'status' => 'Terverifikasi'
        ]);

        $user->assignRole('participant');

        User::factory(150)->create()->each(function ($users) {
            $users->assignRole('participant');
        });
    }
}
