<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Log;

class ParticipantSubmissionController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $role = auth()->user()->getRoleNames();

        return Inertia::render('Participant/Submission', [
            'user' => $user,
            'role' => $role
        ]);
    }

    public function submitAlprog(Request $request)
    {
        $user = User::findOrFail(auth()->user()->id);

        $request->validate([
            'alprog' => 'string|max:255|url',
        ]);

        $user->update([
            'tugas_alprog' => $request->alprog,
        ]);

        return to_route('participant.submissions');
    }

    public function submitBasis(Request $request)
    {
        $user = User::findOrFail(auth()->user()->id);

        $request->validate([
            'basis' => 'string|max:255|url',
        ]);

        $user->update([
            'tugas_basis' => $request->basis,
        ]);

        return to_route('participant.submissions');
    }

    public function submitJarkom(Request $request)
    {
        $user = User::findOrFail(auth()->user()->id);

        $request->validate([
            'jarkom' => 'string|max:255|url',
        ]);

        $user->update([
            'tugas_jarkom' => $request->jarkom,
        ]);

        return to_route('participant.submissions');
    }
}
