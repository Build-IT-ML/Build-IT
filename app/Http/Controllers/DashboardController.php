<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $role = auth()->user()->getRoleNames();

        return Inertia::render('Dashboard', [
            'user' => $user,
            'role' => $role
        ]);
    }
}
