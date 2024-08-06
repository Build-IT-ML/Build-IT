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

    public function update(Request $request)
    {
        $user = User::findOrFail(auth()->user()->id);

        $request->validate([
            'jarkom' => 'string|max:255|url|nullable',
            'alprog' => 'string|max:255|url|nullable',
            'basisdata' => 'string|max:255|url|nullable',
        ]);


        $user->update([
            'tugas_jarkom' => $request->jarkom,
            'tugas_alprog' => $request->alprog,
            'tugas_basis' => $request->basisdata,
        ]);

        Session::flash('success', 'Kamu Berhasil Registrasi Akun, Sekaligus Build IT 😃.');

        return to_route('participant.submissions');
    }
}
