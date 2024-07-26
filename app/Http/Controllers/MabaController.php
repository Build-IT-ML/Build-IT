<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Resources\UserResourceShared;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Session;


class MabaController extends Controller
{
    public function index(): Response
    {

        $user = Auth::user();
        return Inertia::render('Maba/Dashboard', [
            'user' => UserResourceShared::collection(User::findOrFail($user)),
            'flash' => [
                'success' => Session::get('success'),
                'error' => Session::get('error')
            ]
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    public function store(UserRequest $request)
    {
        try {
            $validatedData = $request->validated();

            User::create([
                'nim' => $validatedData['nim'],
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'password' => Hash::make($validatedData['password']),
                'line_id' => $validatedData['line_id'],
                'whatsaap_id' => $validatedData['whatsaap_id'],
            ]);

            Session::flash('success', 'Kamu Berhasil Registrasi Akun, Sekaligus Build IT 😃.');

            return to_route('maba.dashboard');
        } catch (\Exception $e) {
            Session::flash('error', 'An error occurred while registering the user.');

            return redirect()->back()->withInput();
        }
    }

}
