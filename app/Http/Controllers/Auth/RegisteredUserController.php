<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Exception;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Facades\Session;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register', []);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'nim' => 'required|max:10|unique:' . User::class,
                'name' => 'required|string|max:255',
                'email' => 'required|string|email|max:255|unique:' . User::class,
                'line' => 'required|max:255',
                'whatsapp' => 'required|max:255',
                'password' => ['required', 'min:8', 'confirmed', Rules\Password::defaults()]
            ]);

            $user = User::create([
                'id' => Uuid::uuid4(),
                'nim' => $request->nim,
                'name' => $request->name,
                'email' => $request->email,
                'line_id' => $request->line,
                'whatsapp_id' => $request->whatsapp,
                'password' => Hash::make($request->password),
            ]);

            $user->assignRole('participant');

            event(new Registered($user));

            Auth::login($user);

            Session::flash('success', 'Kamu Berhasil Registrasi Akun, Sekaligus Build IT 😃.');

            return to_route('dashboard');
        } catch (\Exception $e) {
            Session::flash('error', 'An error occurred while registering the user.');

            return redirect()->back()->withInput();
        }
    }
}
