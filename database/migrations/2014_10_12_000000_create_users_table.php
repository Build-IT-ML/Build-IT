<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->uuid("id")->primary();
            $table->string('nim', 10);
            $table->string('name', 120);
            $table->string('email', 120)->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password', 100);
            $table->string('line_id', 120);
            $table->string('whatsaap_id', 120);
            $table->string('kelompok');
            $table->string('tugas_alprog_link');
            $table->string('tugas_tugas_basis');
            $table->string('tugas_tugas_jarkom');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
