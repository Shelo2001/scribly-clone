<?php

namespace App\Http\Controllers;

use App\Mail\HelloMail;
use App\Models\SendMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SendMailController extends Controller
{
    public function sendAndSaveEmail(Request $request){
        $attr = $request->validate([
            'name' => 'required',
            'email' => 'required|unique:send_mails,email',
            'heard_about_us' => 'required',
            'description' => 'required',
        ]);

        $email = SendMail::create([
            'name' => $attr['name'],
            'heard_about_us' =>$attr['heard_about_us'],
            'email' => $attr['email'],
            'description' => $attr['description'],
        ]);

        Mail::to($attr['email'])->send(new HelloMail());
        return response(['success' => true]);
    }
}
