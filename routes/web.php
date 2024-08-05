<?php

use App\Http\Controllers\AdminParticipantsController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ParticipantProfileController;
use App\Http\Controllers\ParticipantSubmissionController;
use GuzzleHttp\Middleware;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth'])->name('dashboard');
Route::get('/participant-profile', [ParticipantProfileController::class, 'index'])->middleware(['auth'])->name('participant.profile');
Route::get('/participant-submissions', [ParticipantSubmissionController::class, 'index'])->middleware(['auth'])->name('participant.submissions');
Route::put('/participant-submissions', [ParticipantSubmissionController::class, 'update'])->middleware(['auth'])->name('participant.addsubmissions');
Route::resource('participants', AdminParticipantsController::class)->middleware(['auth']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('guest')->group(function () {
    Route::get('/', function () {
        return Inertia::render("Welcome", []);
    })->name('Welcome');

    Route::get('/modul/alprog', function () {
        return Inertia::render("Modul/Alprog", []);
    })->name('Modul.Alprog');

    Route::get('/modul/basisdata', function () {
        return Inertia::render("Modul/BasisData", []);
    })->name('Modul.BasisData');

    Route::get('/modul/jarkom', function () {
        return Inertia::render("Modul/Jarkom", []);
    })->name('Modul.Jarkom');
});

Route::fallback(function () {
    return Inertia::render('not-found');
})->name('not-found');

require __DIR__ . '/auth.php';
