<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;
use GuzzleHttp\Cookie\CookieJar;
use View;
use Validator;
use Session;
use Carbon;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __construct()
    {
    }

    public function index(Request $request) {
        if ($request->isMethod('post')) {
            $data = '';

            if ($request->get('__submit') == '1') {
                if ($request->get('CRED_GRADE') == 'POOR') {
                    return redirect('thanks');
                } else {
                    $client = new \GuzzleHttp\Client(['cookies' => true]);
                    $result = $client->post('https://www.leadpointdelivery.com/18710/direct.ilp', [
                        'form_params' => $request->all()
                    ]);
                    $data = $result->getBody();
                    $data = $request->all();
                    return redirect('confirmation');
                }
            } else {
                $data = $request->all();
            }

            return response()->json([
                'result' => '',
                'data' => $data
            ]);
        } else {
             // Get request geolocation
            $ip = $request->ip();
            $captureTime = Carbon\Carbon::now()->toDateTimeString();
            $location = \Location::get($ip);
            $zip = $location->zipCode;

            $data['zip'] = $zip;
            $data['ipAddress'] = $ip;
            $data['captureTime'] = $captureTime;

            return view('index', $data);
        }

    }
}


