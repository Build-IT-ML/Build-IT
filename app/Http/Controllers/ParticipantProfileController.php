<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ParticipantProfileController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $role = auth()->user()->getRoleNames();

        return Inertia::render('Participant/Profile', [
            'user' => $user,
            'role' => $role
        ]);
    }
}
