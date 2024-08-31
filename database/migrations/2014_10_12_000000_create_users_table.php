<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->uuid("id")->primary();
            $table->string('nim', 10)->unique();
            $table->string('name', 120);
            $table->string('email', 120)->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password', 100);
            $table->string('line_id', 120);
            $table->string('whatsapp_id', 120);
            $table->enum('status', ['Terverifikasi', 'Belum Terverifikasi', 'Ditolak'])->default('Belum Terverifikasi');
            $table->string('kelompok')->nullable();
            $table->string('tugas_alprog')->nullable();
            $table->string('tugas_basis')->nullable();
            $table->string('tugas_jarkom')->nullable();
            $table->enum('kelulusan', ['Lulus', 'Belum Lulus', 'Tidak Lulus'])->default('Belum Lulus');
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
