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

    public function validateZip(Request $request) {
        $zip = $request->get('zip');
        $data = $this->getLocationData($zip);
        return response()->json([
            'fieldValues' => $data
        ]);
    }

    public function saveLead($params) {
        \DB::table('leads')->insert(
            [
            'product' => $params['PRODUCT'],
            'prop_desc' => $params['PROP_DESC'],
            'cred_grade' => $params['CRED_GRADE'],
            'spec_home' => $params['SPEC_HOME'],
            'purchase_contract' => $params['PURCHASE_CONTRACT'],
            'prop_purp' => $params['PROP_PURP'],
            'est_val' => $params['EST_VAL'],
            'bal_one' => $params['BAL_ONE'],
            'mtg_one_int' => $params['MTG_ONE_INT'],
            'down_pmt' => $params['DOWN_PMT'],
            'loan_type' => $params['LOAN_TYPE'],
            'mtg_two' => $params['MTG_TWO'],
            'bal_two' => $params['BAL_TWO'],
            'mtg_two_int' => $params['MTG_TWO_INT'],
            'add_cash' => $params['ADD_CASH'],
            'fha_bank_foreclosure' => $params['FHA_BANK_FORECLOSURE'],
            'annual_verifiable_income' => $params['ANNUAL_VERIFIABLE_INCOME'],
            'num_mortgage_lates' => $params['NUM_MORTGAGE_LATES'],
            'va_status' => $params['VA_STATUS'],
            'address' => $params['ADDRESS'],
            'zip' => $params['ZIP'],
            'fname' => $params['FNAME'],
            'lname' => $params['LNAME'],
            'email' => $params['EMAIL'],
            'pri_phone' => $params['PRI_PHONE'],
            'newsletter' => $params['NEWSLETTER'],
            'capture_time' => $params['capture_time']
            ]
        );
    }

    public function index(Request $request) {
        if ($request->isMethod('post')) {
            $data = '';

            if ($request->get('__submit') == '1') {
                $params = $request->all();
                $zip = $params['ZIP'];
                $location = $this->getLocationData($zip);
                $params['PRI_PHON'] = $params['PRI_PHONE-p1'].$params['PRI_PHONE-p2'].$params['PRI_PHONE-p3'];
                $params['CITY'] = $location["CITY"];
                $params['STATE'] = $location["STATE"];
                $params['PROP_ST'] = $location["STATE"];

                // Persist the lead to the database
                $this->saveLead($params);

                if ($request->get('CRED_GRADE') == 'POOR') {
                    return redirect('thanks');
                } else {
                    $client = new \GuzzleHttp\Client(['cookies' => true]);
                    $result = $client->post('https://www.leadpointdelivery.com/18710/direct.ilp', [
                         'form_params' => $params
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
            $captureTime = Carbon\Carbon::now()->format('m/d/Y H:i');
            $location = \Location::get($ip);
            $zip = $location->zipCode;
            $state = $location->regionName;
            $country = $location->countryName;
            $city = $location->cityName;

            $data['zip'] = $zip;
            $data['city'] = $city;
            $data['state'] = $state;
            $data['country'] = $country;
            $data['ipAddress'] = $ip;
            $data['captureTime'] = $captureTime;

            return view('index', $data);
        }
    }

    function getLocationData($zip) {
        $city = "";
        $state = "";
        $country = "";

        if ($zip != null) {
            $url = "http://maps.googleapis.com/maps/api/geocode/json?address=" . $zip . "&sensor=true";
            $address_info = file_get_contents($url);
            $json = json_decode($address_info);


            if (count($json->results) > 0) {
                //break up the components
                $arrComponents = $json->results[0]->address_components;

                foreach($arrComponents as $index=>$component) {
                    $type = $component->types[0];

                    if ($city == "" && ($type == "sublocality_level_1" || $type == "locality") ) {
                        $city = trim($component->long_name);
                    }
                    if ($state == "" && $type=="administrative_area_level_1") {
                        $state = trim($component->short_name);
                    }
                    if ($country == "" && $type=="country") {
                        $country = trim($component->long_name);
                    }
                    if ($city != "" && $state != "" && $country != "") {
                        //we're done
                        break;
                    }
                }
            }
        }
        // Build the output
        $data['ZIP'] = $zip;
        $data['SLIDE-CHANGE'] = 'true';
        $data['CITY'] = $city;
        $data['COUNTRY'] = $country;
        $data['VIEWTYPE'] = 'FULL';
        $data['SLIDEINDEX'] = '9';
        $data['SLIDEGROUP'] = '';
        $data['POSTCODE'] = $zip;
        $data['ESTPRG'] = '1';
        $data['STATE'] = $state;
        $data['FORMFLOWCONFIGID'] = "962";

        return $data;
    }
}


