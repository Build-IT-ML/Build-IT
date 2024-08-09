<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

class ParticipantProfileController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $role = auth()->user()->getRoleNames();
        $flash = Session::get('success');

        return Inertia::render('Participant/Profile', [
            'user' => $user,
            'role' => $role,
            'flash' => $flash
        ]);
    }

    public function edit()
    {
        $user = auth()->user();

        return Inertia::render('Participant/EditProfile', [
            'user' => $user
        ]);
    }

    public function update(Request $request)
    {
        $user = User::findOrFail(auth()->user()->id);

        $request->validate([
            'nim' => 'required|max:255|',
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|',
            'line' => 'required|max:255',
            'whatsapp' => 'required|max:255',
        ]);


        $user->update([
            'nim' => $request->nim,
            'name' => $request->name,
            'email' => $request->email,
            'line_id' => $request->line,
            'whatsapp_id' => $request->whatsapp,
        ]);

        Session::flash('success', 'Data berhasil diperbarui');

        return to_route('participant.profile');
    }
}
