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

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __construct()
    {
    }

    public function index(Request $request) {
        // Get request geolocation
        $ip = $request->ip();
        $location = \Location::get($ip);
        $zip = $location->zipCode;

        if ($request->isMethod('post')) {
            $data = '';

            if ($request->get('__submit') == '1') {
                $client = new \GuzzleHttp\Client(['cookies' => true]);
                $result = $client->post('https://www.leadpointdelivery.com/18710/direct.ilp', [
                     'form_params' => $request->all()
                ]);
                $data = $result->getBody();
                $data = $request->all();
            } else {
                $data = $request->all();
            }

            // Fetch the jobs
            /*
            $result = $client->post('https://svc.beyond.com/api/v1.0/'.$partner.'/jobs/search', [
                'form_params' => [
                    'aff' => $affiliateId,
                    'k' => $keywords,
                    'ps' => $count,
                    'l' => $zip
                ]
            ]);*/



            return response()->json([
                'result' => '',
                'data' => $data
            ]);
        }
    }
}


