<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\auth_request\RegistrationRequest;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class AuthController extends Controller
{

    public function login(LoginRequest $request)
    {
        $user_validation = auth()->attempt($request->validated());
        if (!$user_validation) {
            return response()->json([
                'status' => 'failed'
            ]);
        }

        $user = Auth::user();
        $token = $user->createToken('token')->plainTextToken;
        $cookie = cookie('jwt', $token, 60 * 24); // 1 day

        return response([
            'access_token' => $token,
            'user' => $user
        ])->withCookie($cookie);
    }

    public function register(RegistrationRequest $request)
    {


        $user = User::create($request->validated());

        if ($user) {
            return response()->json([
                'user' => $user,
            ]);
        } else {

            return response()->jason([
                'status' => 'failed'
            ]);
        }
    }
    public function getusers()
    {


        $users  = User::all();
        $context = [
            'data' => $users
        ];

        return $context;
    }
}
