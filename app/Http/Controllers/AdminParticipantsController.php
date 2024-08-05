<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResourceShared;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class AdminParticipantsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();
        $role = auth()->user()->getRoleNames();
        $participants = UserResourceShared::collection(User::role('participant')->get());

        return Inertia::render('Admin/Participants', compact('user', 'role', 'participants'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'nim' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'whatsapp_id' => 'required|string|max:255',
            'line_id' => 'required|string|max:255',
            'status' => 'required|string|in:Terverifikasi,Belum Terverifikasi,Ditolak',
            'kelompok' => 'nullable|string|max:255',
        ]);

        $participant = User::findOrFail($id);

        $participant->update([
            'nim' => $request->nim,
            'name' => $request->name,
            'email' => $request->email,
            'whatsapp_id' => $request->whatsapp_id,
            'line_id' => $request->line_id,
            'status' => $request->status,
            'kelompok' => $request->kelompok,
        ]);

        return to_route('participants.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $participant = User::findOrFail($id);
        DB::table('model_has_permissions')->where('model_id', $participant->id)->where('model_type', 'App\Models\User')->delete();
        $participant->delete();
        return to_route('participants.index');
    }
}
