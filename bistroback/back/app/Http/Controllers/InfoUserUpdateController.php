<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class InfoUserUpdateController extends Controller
{
    public function user_info_updating(Request $request, $id)
    {
        $info = User::find($id);

        return $info->update([
            'name' => $request->name ?? $info->name,
            'phone' => $request->phone ?? $info->phone,
            'email' => $request->email ?? $info->email,
        ]);
    }
}
