<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;




/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

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

Route::get('/login', function () {
    return Inertia::render("Login", []);
})->name('Login');

Route::get('/register', function () {
    return Inertia::render("Daftar", []);
})->name('Daftar');

Route::fallback(function () {
    return Inertia::render('not-found');
})->name('not-found');
