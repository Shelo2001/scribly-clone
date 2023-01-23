<?php

namespace App\Http\Controllers;

use App\Models\BuyerInfo;
use Illuminate\Http\Request;

class BuyerInfoController extends Controller
{
    public function saveBuyerInfo(Request $request ){
        $attr = $request->validate([
            'name' => 'required',
            'surname' => 'required',
            'email' => 'required',
            'country' => 'required',
            'price' => 'required',
            'address' => 'required',
            'city' => 'required',
            'state' => 'required',
            'postal_code' => 'required',
        ]);

        $email = BuyerInfo::create([
            'name' => $attr['name'],
            'surname' =>$attr['surname'],
            'email' => $attr['email'],
            'country' => $attr['country'],
            'price' => $attr['price'],
            'address' => $attr['address'],
            'city' => $attr['city'],
            'state' => $attr['state'],
            'postal_code' => $attr['postal_code'],
        ]);

        return response([
            "success" => true,
        ],200);

    }

}
