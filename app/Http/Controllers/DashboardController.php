<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $role = auth()->user()->getRoleNames();
        $akt21 = User::where('nim', 'like', '21%')->count();
        $akt22 = User::where('nim', 'like', '22%')->count();
        $akt23 = User::where('nim', 'like', '23%')->count();
        $akt24 = User::where('nim', 'like', '24%')->count();


        return Inertia::render('Dashboard', compact('user', 'role', 'akt21', 'akt22', 'akt23', 'akt24'));
    }
}
