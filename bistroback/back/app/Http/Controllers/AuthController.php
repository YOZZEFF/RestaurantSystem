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
        $token = auth()->attempt($request->validated());
        if ($token) {
            return $this->responseWithToken($token, auth()->user());
        } else {
            return response()->json([
                'status' => 'failed'
            ] );
        }
    }

    public function register(RegistrationRequest $request)
    {


        $user = User::create($request->validated());

        if ($user) {
            $token = auth()->login($user);
            return $this->responseWithToken($token, $user);
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
    public function responseWithToken($token, $user)
    {
        return response()->json([
            'user' => $user,
            'access_token' => $token,
            'type' => 'bearer'
        ]);

    }
}
