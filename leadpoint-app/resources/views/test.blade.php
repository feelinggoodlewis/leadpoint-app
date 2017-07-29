

<!-- Copyright SecureRights 2005 v08.23 -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<!-- Copyright SecureRights 2005 v08.23 -->
<title>Mortgage</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<meta http-equiv="pragma" content="no-cache">


<script type="text/javascript" src="https://www.data3001.com/js/forms/basic_form_utils.js" defer="defer"></script>
<script type="text/javascript" src="https://www.data3001.com/js/forms/new_home_utils.js" defer="defer"></script>
<script type="text/javascript" src="https://www.data3001.com/js/forms/multi_prod_form.js" defer="defer"></script>

<style>
body { font-family:Arial, Helvetica, sans-serif;}

.TableLeft{
	background-color:#EEEEFF;
	padding-left: 10px;
	font-size: 12px;
    color: #000000;
	padding-top: 7px;
	padding-bottom: 5px;}
.TableRight{
	background-color:#EEEEFF;
	padding-right: 10px;
	font-size: 12px;
    color: #000000;
	padding-top: 5px;
	padding-bottom: 5px;}
.TableEmpty{
	background-color:#EEEEFF;
	padding-right: 0px;
	text-align: right;
	vertical-align: top;
}

.Nested{
	font-size: 12px;
    color: #000000;}


.SectionHeader {
            font-weight: bold;
            color: #FFFFFF;
            background-color: #3366CC;
            padding: 4px 10px 6px;
            font-size: 12px;

}
.FormLabel {
            font-size: 12px;
            color: #000000;
            background-color: #EEEEFF;
            padding-top: 5px;
            padding-right: 5px;
            padding-bottom: 5px;
            padding-left: 10px;
}
.FormInput {
            font-size: 12px;
            color: #000000;
            padding-right: 0px;
            text-align: left;
			width:160px;

}
.FormInputShort {
            font-size: 12px;
            color: #000000;
            padding-right: 0px;
            text-align: left;
			width:65px;

}

.SubmitRow {
            font-size: 12px;
            color: #000000;
            background-color: #EEEEFF;
            padding-top: 5px;
            padding-right: 5px;
            padding-bottom: 5px;
            padding-left: 10px;
            vertical-align: top;
            font-weight: normal;
            text-align: center;

}
.style1 {
	font-size: 10px;
	font-family: Arial, Helvetica, sans-serif;
	background-color: #EEEEFF;
}
.FootNote{
	padding-top:10px;
	padding-bottom:16px;
	font:10px Arial, Verdana, sans-serif;
	color:#666666;
	text-align:left;
	}

.style2 {
	font-size: 10px;
	font-family: Arial, Helvetica, sans-serif;
	background-color: #FFFFFF;
}
</style>
<script language="JavaScript" type="text/JavaScript">
<!--
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
//-->
</script>
</head>

<body>
<form action="https://www.data3001.com/18709/go.ilp" method="POST" class="" onSubmit="return validateForm(this)" name="loanform">
  <table width="470" border="0" cellpadding="0" cellspacing="0" class="FormBorder">
    <!-- required field -->
    <input type="hidden" name="aid" value="41091">
    <!-- optional field for http redirects after processing -->
    <input type="hidden" name="url" value="">

    <input type="hidden" name="SR_TOKEN">
    <tr>
      <td>&nbsp;</td>
      <td><!-- header area starts here -->
        <table width="100%" border="0" cellpadding="0" cellspacing="0">

          <tr>
            <td width="470" height="68"><div align="center"><img src="https://www.data3001.com/images/forms/header3.gif" width="470" height="90"></div></td>
          </tr>
          <tr>
            <td align="right" valign="middle" nowrap><span class="style2">Powered by SecureRights</span> <a href="javascript:;" onClick="MM_openBrWindow('http://www.securerights.org','','scrollbars=yes,width=800,height=500')"><img src="https://www.data3001.com/images/forms/lock_03.gif" width="23" height="27" border="0" align="absmiddle"></a></td>
          </tr>
        </table>
        <!-- header area ends here -->
        <table width="100%" border="0" cellpadding="0" cellspacing="0">

          <tr>
            <td height="24" colspan="2" class="SectionHeader">Tell Us About Your Loan Needs </td>
          </tr>
          <tr>
            <td width="287" class="TableLeft">What type of loan do you need?</td>
            <td width="170" class="TableRight"><!-- This dropdown is the trigger for what is shown below. By default show Option GEN_MORT.
                    If user select home purchase, dynamically show Option NEWHOME only, and hide Option GEN_MORT.
                    For other other choices in this dropdown, use Option GEN_MORT.-->
			 <select name="PRODUCT" class="FormInput" id="PRODUCT" onChange="showLoanFields(this)">
                <option selected value="PP_REFI">Refinance</option>
                <option value="PP_NEWHOME">Purchase Home</option>
                <option value="PP_DEBTCON">Debt Consolidation</option>
                <option value="PP_HOME_EQUITY">Home Equity</option>
              </select>            </td>
          </tr>
          <tr class="SectionHeader">
            <td height="24" colspan="2" class="SectionHeader"> Tell Us About Your Property </td>
          </tr>
          <tr class="TableColor">
            <td class="TableLeft">Where is the property located?</td>
            <td class="TableRight"><select name="PROP_ST" class="FormInput">
                <option value="" selected>Property State ?</option>
                <option value="AL"> Alabama</option>
                <option value="AK"> Alaska</option>
                <option value="AZ"> Arizona</option>
                <option value="AR"> Arkansas</option>
                <option value="CA"> California</option>
                <option value="CO"> Colorado</option>
                <option value="CT"> Connecticut</option>
                <option value="DE"> Delaware</option>
                <option value="DC"> District of Columbia</option>
                <option value="FL"> Florida</option>
                <option value="GA"> Georgia</option>
                <option value="HI"> Hawaii</option>
                <option value="IA"> Iowa</option>
                <option value="ID"> Idaho</option>
                <option value="IL"> Illinois</option>
                <option value="IN"> Indiana</option>
                <option value="KS"> Kansas</option>
                <option value="KY"> Kentucky</option>
                <option value="LA"> Louisiana</option>
                <option value="ME"> Maine</option>
                <option value="MD"> Maryland</option>
                <option value="MA"> Massachusetts</option>
                <option value="MI"> Michigan</option>
                <option value="MN"> Minnesota</option>
                <option value="MO"> Missouri</option>
                <option value="MS"> Mississippi</option>
                <option value="MT"> Montana</option>
                <option value="NE"> Nebraska</option>
                <option value="NV"> Nevada</option>
                <option value="NH"> New Hampshire</option>
                <option value="NJ"> New Jersey</option>
                <option value="NM"> New Mexico</option>
                <option value="NY"> New York</option>
                <option value="NC"> North Carolina</option>
                <option value="ND"> North Dakota</option>
                <option value="OH"> Ohio</option>
                <option value="OK"> Oklahoma</option>
                <option value="OR"> Oregon</option>
                <option value="PA"> Pennsylvania</option>
                <option value="RI"> Rhode Island</option>
                <option value="SC"> South Carolina</option>
                <option value="SD"> South Dakota</option>
                <option value="TN"> Tennessee</option>
                <option value="TX"> Texas</option>
                <option value="UT"> Utah</option>
                <option value="VT"> Vermont</option>
                <option value="VA"> Virginia</option>
                <option value="WA"> Washington</option>
                <option value="WV"> West Virginia</option>
                <option value="WI"> Wisconsin</option>
                <option value="WY"> Wyoming</option>
            </select></td>
          </tr>
		 <TBODY id="pzipFields">
          <tr class="TableColor">
            <td class="TableLeft">Property ZIP code </td>
            <td class="TableRight"><input name="PROP_ZIP" onKeyUp="filterInteger(this);" type="text" class="FormInputShort" id="PROP_ZIP"></td>
          </tr>
		 </TBODY>

		 <TBODY id="pareaCodeFields" style="display:none;">
          <tr class="TableColor">
            <td class="TableLeft">Property area code </td>
            <td class="TableRight"><input name="PROP_AREA" type="text" class="FormInputShort" id="PROP_AREA"></td>
          </tr>
		 </TBODY>

          <tr class="TableColor">
            <td valign="top" class="TableLeft">
				<table width="100%"  border="0" cellpadding="0" cellspacing="0" class="Nested">
					<tr>
					  <td width="95%" align="left">Home description</td>
					  <td width="5%" align="right"> </td>
					</tr>
				</table>			</td>
            <td nowrap class="TableRight"><select name="PROP_DESC" class="FormInput" id="select2">
                <option selected value="single_fam">Single Family</option>
                <option value="multi_fam">Multi Family</option>
                <option value="townhouse">Town House</option>
                <option value="condo">Condo</option>
            	</select>

<table width="100%"  border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td valign="top"><span class="style1">(No mobile or manufactured homes)</span> </td>
              </tr>
            </table>

			</td>
          </tr>

		 <TBODY id="pyearFields">
          <tr class="TableColor">
            <td class="TableLeft">Purchase year </td>
            <td nowrap class="TableRight"><select name="PURCHASE_YEAR" class="FormInput" id="PURCHASE_YEAR">
      <option value="" selected>Purchase Year ?</option>
			<option value="2007">2007</option>
			<option value="2006">2006</option>
			<option value="2005">2005</option>
			<option value="2004">2004</option>
			<option value="2003">2003</option>
			<option value="2002">2002</option>
			<option value="2001">2001</option>
			<option value="2000">2000</option>
			<option value="1999">1999</option>
			<option value="1997">1997</option>
			<option value="1996">1996</option>
			<option value="1995">1995</option>
			<option value="1994">1994</option>
			<option value="1993">1993</option>
			<option value="1992">1992</option>
			<option value="1991">1991</option>
			<option value="1990">1990</option>
			<option value="1989">1989</option>
			<option value="1988">1988</option>
			<option value="1987">1987</option>
			<option value="1986">1986</option>
			<option value="1985">1985</option>
			<option value="1984">1984</option>
			<option value="1983">1983</option>
			<option value="1982">1982</option>
			<option value="1981">1981</option>
			<option value="1980">1980</option>
			<option value="1979">1979</option>
			<option value="1978">1978</option>
			<option value="1977">1977</option>
			<option value="1976">1976</option>
			<option value="1975">1975</option>
			<option value="1974">1974</option>
			<option value="1973">1973</option>
			<option value="1972">1972</option>
			<option value="1971">1971</option>
			<option value="1970">1970</option>
			<option value="1969">1969</option>
			<option value="1968">1968</option>
			<option value="1967">1967</option>
			<option value="1966">1966</option>
			<option value="1965">1965</option>
			<option value="1964">1964</option>
			<option value="1963">1963</option>
			<option value="1962">1962</option>
			<option value="1961">1961</option>
			<option value="1960">1960</option>
			<option value="1959">1959</option>
			<option value="1958">1958</option>
			<option value="1957">1957</option>
			<option value="1956">1956</option>
			<option value="1955">1955</option>
			<option value="1954">1954</option>
			<option value="1953">1953</option>
			<option value="1952">1952</option>
			<option value="1951">1951</option>
			<option value="1950">1950</option>
			<option value="1949">1949</option>
			<option value="1948">1948</option>
			<option value="1947">1947</option>
			<option value="1946">1946</option>
			<option value="1945">1945</option>
            </select></td>
          </tr>
		 </TBODY>
          <tr class="TableColor">
            <td class="TableLeft">Property use </td>
            <td nowrap class="TableRight">
			                          <select name="PROP_PURP" class="FormInput" id="PROP_PURP">
                            <option value="primary" selected>Primary Residence</option>
                            <option value="secondary_vactn">Second or Vacation Home</option>
                            <option value="investment">Investment Property</option>
                        </select>&nbsp;</td>
          </tr>
	 <TBODY id="whenbuyFields" style="display:none;">
          <tr class="TableColor">
            <td class="TableLeft">When are you likely to buy a home?</td>
            <td nowrap class="TableRight"><select name="BUY_TIMEFRAME" class="FormInput" id="BUY_TIMEFRAME">
            	<option value="" selected>Time to Purchase ?</option>
            	<option value="immediately">Immediately</option>
              <option value="30_days">30 Days</option>
              <option value="60_days">60 Days</option>
              <option value="90_days">90 Days</option>
              <option value="no_time_constraint">No Time Constraint</option>
            </select></td>
          </tr>
	</TBODY>
	<TBODY id="foundhomeFields" style="display:none;">
          <tr class="TableColor">
            <td class="TableLeft">Have you found a home? </td>
            <td nowrap class="TableRight">
              <input type="radio" name="SPEC_HOME" value="yes" id="SPEC_YES"  onClick="showElement('contractFields');"><label for="SPEC_YES">Yes</label>
              <input type="radio" name="SPEC_HOME" value="no" id="SPEC_NO"  checked onClick="hideElement('contractFields');"><label for="SPEC_NO">No</label>
			</td>
          </tr>

          <tr class="TableColor" id="contractFields" style="display:none;">
            <td class="TableLeft">Do you have a signed contract to buy your home? </td>
            <td nowrap class="TableRight">
				<input type="radio" name="PURCHASE_CONTRACT" value="yes" id="RP_YES"><label for="RP_YES">Yes</label>
              	<input type="radio" name="PURCHASE_CONTRACT" value="no" id="RP_NO"><label for="RP_NO">No</label>
			</td>
          </tr>
          <tr class="TableColor">
            <td class="TableLeft">Do you have a real estate agent?</td>
            <td nowrap class="TableRight">
				<input type="radio" name="AGENT_FOUND" id="AGENT_YES" value="yes" checked onClick="showElement('agentFields');"><label for="AGENT_YES">Yes</label>
           		<input type="radio" name="AGENT_FOUND" id="AGENT_NO" value="no" onClick="hideElement('agentFields');"><label for="AGENT_NO">No</label>
			</td>
          </tr>
	</TBODY>
	<TBODY id="agentFields" style="display: none;">
          <tr class="TableColor">
            <td class="TableLeft">Agent name </td>
            <td nowrap class="TableRight">
				<input name="AGENT_NAME" type="text" class="FormInput" id="AGENT_NAME">
			</td>
          </tr>
          <tr class="TableColor">
            <td class="TableLeft">Agent phone </td>
            <td nowrap class="TableRight"><input name="AGENT_PHONE" type="text" class="FormInput" id="AGENT_PHONE"></td>
          </tr>
          <tr class="TableColor">
            <td valign="top" class="TableLeft">

<table width="100%"  border="0" cellpadding="0" cellspacing="0" class="Nested">
                <tr>
                  <td width="95%" align="left">Agent company</td>
                  <td width="5%" align="right"> </td>
                </tr>
            </table>			</td>
            <td nowrap class="TableRight"><input name="AGENT_COMPANY" type="text" class="FormInput" id="AGENT_COMPANY">
			<table width="100%"  border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td valign="top"><span class="style1">(example: Prudential, Remax)</span> </td>
              </tr>
            </table>
			</td>
          </tr>
	  </TBODY>
          <tr class="TableColor">
            <td colspan="2" class="SectionHeader">Tell Us About Your Loan </td>
          </tr>
	 <TBODY id="purpFields">
          <tr class="TableColor">
            <td class="TableLeft">Purpose of loan </td>
            <td nowrap class="TableRight"><select name="LOAN_PURP" class="FormInput" id="LOAN_PURP">
            	<option value="" selected>Loan Purpose ?</option>
            	<option value="lower_payment">Lower Monthly Payment</option>
              <option value="lower_rate">Lower Interest Rate</option>
              <option value="change_terms">Change Terms</option>
              <option value="pay_off_debt">Pay Off Debt</option>
              <option value="make_improvements">Make Home Improvements</option>
              <option value="take_out_cash">Take Out Cash</option>
            </select></td>
          </tr>
	</TBODY>
          <tr class="TableColor">
            <td class="TableLeft"><table width="100%"  border="0" cellpadding="0" cellspacing="0" class="Nested">
                <tr>
                  <td width="95%" align="left">Estimated home value </td>
                  <td width="5%" align="right">$</td>
                </tr>
            </table></td>
			<td nowrap class="TableRight">
			<!-- onChange="updateDownPaymentSelectBox(this.form.down_payment_select, this);" -->

			<select name="EST_VAL"  class="FormInput"
				onChange="limit(getInteger(this.options[this.selectedIndex].value), this.form.BAL_ONE);
						limit(getInteger(this.options[this.selectedIndex].value) - getInteger(this.form.BAL_ONE.options[this.form.BAL_ONE.selectedIndex].value), this.form.BAL_TWO);
						limit((getInteger(this.options[this.selectedIndex].value)*1.05) - getInteger(this.form.BAL_ONE.options[this.form.BAL_ONE.selectedIndex].value) - getInteger(this.form.BAL_TWO.options[this.form.BAL_TWO.selectedIndex].value), this.form.ADD_CASH); updateDownPaymentSelectBox(this.form.DOWN_PMT_PERCENT, this);">
                <option value="" selected>Estimated Home Value ?</option>
                <option value="77500">75,000 - 80,000</option>
                <option value="82500">80,001 - 85,000</option>
                <option value="87500">85,001 - 90,000</option>
                <option value="92500">90,001 - 95,000</option>
                <option value="97500">95,001 - 100,000</option>
                <option value="102500">100,001 - 105,000</option>
                <option value="107500">105,001 - 110,000</option>
                <option value="112500">110,001 - 115,000</option>
                <option value="117500">115,001 - 120,000</option>
                <option value="122500">120,001 - 125,000</option>
                <option value="127500">125,001 - 130,000</option>
                <option value="132500">130,001 - 135,000</option>
                <option value="137500">135,001 - 140,000</option>
                <option value="142500">140,001 - 145,000</option>
                <option value="147500">145,001 - 150,000</option>
                <option value="152500">150,001 - 155,000</option>
                <option value="157500">155,001 - 160,000</option>
                <option value="162500">160,001 - 165,000</option>
                <option value="167500">165,001 - 170,000</option>
                <option value="172500">170,001 - 175,000</option>
                <option value="177500">175,001 - 180,000</option>
                <option value="182500">180,001 - 185,000</option>
                <option value="187500">185,001 - 190,000</option>
                <option value="192500">190,001 - 195,000</option>
                <option value="197500">195,001 - 200,000</option>
                <option value="205000">200,001 - 210,000</option>
                <option value="215000">210,001 - 220,000</option>
                <option value="225000">220,001 - 230,000</option>
                <option value="235000">230,001 - 240,000</option>
                <option value="245000">240,001 - 250,000</option>
                <option value="255000">250,001 - 260,000</option>
                <option value="265000">260,001 - 270,000</option>
                <option value="275000">270,001 - 280,000</option>
                <option value="285000">280,001 - 290,000</option>
                <option value="295000">290,001 - 300,000</option>
                <option value="305000">300,001 - 310,000</option>
                <option value="315000">310,001 - 320,000</option>
                <option value="325000">320,001 - 330,000</option>
                <option value="335000">330,001 - 340,000</option>
                <option value="345000">340,001 - 350,000</option>
                <option value="355000">350,001 - 360,000</option>
                <option value="365000">360,001 - 370,000</option>
                <option value="375000">370,001 - 380,000</option>
                <option value="385000">380,001 - 390,000</option>
                <option value="395000">390,001 - 400,000</option>
                <option value="410000">400,001 - 420,000</option>
                <option value="430000">420,001 - 440,000</option>
                <option value="450000">440,001 - 460,000</option>
                <option value="470000">460,001 - 480,000</option>
                <option value="490000">480,001 - 500,000</option>
                <option value="510000">500,001 - 520,000</option>
                <option value="530000">520,001 - 540,000</option>
                <option value="550000">540,001 - 560,000</option>
                <option value="570000">560,001 - 580,000</option>
                <option value="590000">580,001 - 600,000</option>
                <option value="610000">600,001 - 620,000</option>
                <option value="630000">620,001 - 640,000</option>
                <option value="650000">640,001 - 660,000</option>
                <option value="670000">660,001 - 680,000</option>
                <option value="690000">680,001 - 700,000</option>
                <option value="710000">700,001 - 720,000</option>
                <option value="730000">720,001 - 740,000</option>
                <option value="750000">740,001 - 760,000</option>
                <option value="770000">760,001 - 780,000</option>
                <option value="790000">780,001 - 800,000</option>
                <option value="810000">800,001 - 820,000</option>
                <option value="830000">820,001 - 840,000</option>
                <option value="850000">840,001 - 860,000</option>
                <option value="870000">860,001 - 880,000</option>
                <option value="890000">880,001 - 900,000</option>
                <option value="910000">900,001 - 920,000</option>
                <option value="930000">920,001 - 940,000</option>
                <option value="950000">940,001 - 960,000</option>
                <option value="970000">960,001 - 980,000</option>
                <option value="990000">980,001 - 1,000,000</option>
                <option value="1000001">Over 1,000,000</option>
            </select></td>
          </tr>
	<TBODY id="dpmtFields" style="display:none;">
          <tr class="TableColor">
            <td class="TableLeft">

			<table width="100%"  border="0" cellpadding="0" cellspacing="0" class="Nested">
                <tr>
                  <td align="left">Down payment amount </td>
                  <td width="5%" align="right"> </td>
                </tr>
            </table>

			</td>
            <td nowrap class="TableRight"><select name="DOWN_PMT_PERCENT" class="FormInput" id="select4" onChange="doDownPaymentSelectBoxLogic(this);">
                            <option value="" selected>Down Payment Amount</option>
                            <option value="0">0%</option>
                            <option value="10">10%</option>
                            <option value="15">15%</option>
                            <option value="20">20%</option>
                            <option value="25">25%</option>
                            <option value="30">30%</option>
                            <option value="35">35%</option>
                            <option value="40">40%</option>
                            <option value="45">45%</option>
                            <option value="50">50%</option>
                            <option value="55">55%</option>
                            <option value="60">60%</option>
                            <option value="65">65%</option>
                            <option value="70">70%</option>
                            <option value="75">75%</option>
                            <option value="80">80%</option>
                            <option value="85">85%</option>
                            <option value="90">90%</option>
                            <option value="95">95%</option>
                            <option value="100">100%</option>
                            <option value="other">Other</option>
                    </select>
                    <span id="otherDownPaymentBlock" style="display: none;">
             <br>$<input name="down_payment_other" type="text" id="DOWN_PMT_OTHER" onKeyUp="filterIntegerAddCommas(this); void(this.form.DOWN_PMT.value = getInteger(this.value));" value="" size="10" maxlength="9">
             .00
                   <input type="hidden" name="DOWN_PMT" value="">&nbsp;</td>
          </tr>
	</TBODY>

	<TBODY id="balanceFields">
          <tr class="TableColor">
            <td class="TableLeft"><table width="100%"  border="0" cellpadding="0" cellspacing="0" class="Nested">
                <tr>
                  <td align="left">First mortgage balance</td>
                  <td width="5%" align="right">$</td>
                </tr>
            </table></td>
            <td nowrap class="TableRight"><select name="BAL_ONE" class="FormInput" id="select4"
			onChange="limit(getInteger(this.form.EST_VAL.options[this.form.EST_VAL.selectedIndex].value) - getInteger(this.options[this.selectedIndex].value), this.form.BAL_TWO); limit((getInteger(this.form.EST_VAL.options[this.form.EST_VAL.selectedIndex].value)*1.05) - getInteger(this.form.BAL_ONE.options[this.form.BAL_ONE.selectedIndex].value) - getInteger(this.form.BAL_TWO.options[this.form.BAL_TWO.selectedIndex].value), this.form.ADD_CASH); balTwoEmptyCheck(this.form.BAL_TWO);">
                <option value="" selected>First Balance ?</option>
                <option value="52500">50,000 - 55,000</option>
                <option value="57500">55,001 - 60,000</option>
                <option value="62500">60,001 - 65,000</option>
                <option value="67500">65,001 - 70,000</option>
                <option value="72500">70,001 - 75,000</option>
                <option value="77500">75,001 - 80,000</option>
                <option value="82500">80,001 - 85,000</option>
                <option value="87500">85,001 - 90,000</option>
                <option value="92500">90,001 - 95,000</option>
                <option value="97500">95,001 - 100,000</option>
                <option value="102500">100,001 - 105,000</option>
                <option value="107500">105,001 - 110,000</option>
                <option value="112500">110,001 - 115,000</option>
                <option value="117500">115,001 - 120,000</option>
                <option value="122500">120,001 - 125,000</option>
                <option value="127500">125,001 - 130,000</option>
                <option value="132500">130,001 - 135,000</option>
                <option value="137500">135,001 - 140,000</option>
                <option value="142500">140,001 - 145,000</option>
                <option value="147500">145,001 - 150,000</option>
                <option value="152500">150,001 - 155,000</option>
                <option value="157500">155,001 - 160,000</option>
                <option value="162500">160,001 - 165,000</option>
                <option value="167500">165,001 - 170,000</option>
                <option value="172500">170,001 - 175,000</option>
                <option value="177500">175,001 - 180,000</option>
                <option value="182500">180,001 - 185,000</option>
                <option value="187500">185,001 - 190,000</option>
                <option value="192500">190,001 - 195,000</option>
                <option value="197500">195,001 - 200,000</option>
                <option value="205000">200,001 - 210,000</option>
                <option value="215000">210,001 - 220,000</option>
                <option value="225000">220,001 - 230,000</option>
                <option value="235000">230,001 - 240,000</option>
                <option value="245000">240,001 - 250,000</option>
                <option value="255000">250,001 - 260,000</option>
                <option value="265000">260,001 - 270,000</option>
                <option value="275000">270,001 - 280,000</option>
                <option value="285000">280,001 - 290,000</option>
                <option value="295000">290,001 - 300,000</option>
                <option value="305000">300,001 - 310,000</option>
                <option value="315000">310,001 - 320,000</option>
                <option value="325000">320,001 - 330,000</option>
                <option value="335000">330,001 - 340,000</option>
                <option value="345000">340,001 - 350,000</option>
                <option value="355000">350,001 - 360,000</option>
                <option value="365000">360,001 - 370,000</option>
                <option value="375000">370,001 - 380,000</option>
                <option value="385000">380,001 - 390,000</option>
                <option value="395000">390,001 - 400,000</option>
                <option value="410000">400,001 - 420,000</option>
                <option value="430000">420,001 - 440,000</option>
                <option value="450000">440,001 - 460,000</option>
                <option value="470000">460,001 - 480,000</option>
                <option value="490000">480,001 - 500,000</option>
                <option value="510000">500,001 - 520,000</option>
                <option value="530000">520,001 - 540,000</option>
                <option value="550000">540,001 - 560,000</option>
                <option value="570000">560,001 - 580,000</option>
                <option value="590000">580,001 - 600,000</option>
                <option value="610000">600,001 - 620,000</option>
                <option value="630000">620,001 - 640,000</option>
                <option value="650000">640,001 - 660,000</option>
                <option value="670000">660,001 - 680,000</option>
                <option value="690000">680,001 - 700,000</option>
                <option value="710000">700,001 - 720,000</option>
                <option value="730000">720,001 - 740,000</option>
                <option value="750000">740,001 - 760,000</option>
                <option value="770000">760,001 - 780,000</option>
                <option value="790000">780,001 - 800,000</option>
                <option value="810000">800,001 - 820,000</option>
                <option value="830000">820,001 - 840,000</option>
                <option value="850000">840,001 - 860,000</option>
                <option value="870000">860,001 - 880,000</option>
                <option value="890000">880,001 - 900,000</option>
                <option value="910000">900,001 - 920,000</option>
                <option value="930000">920,001 - 940,000</option>
                <option value="950000">940,001 - 960,000</option>
                <option value="970000">960,001 - 980,000</option>
                <option value="990000">980,001 - 1,000,000</option>
                <option value="1250000">1,000,000+</option>
                <option value="1750000">1,500,000+</option>
                <option value="2250000">2,000,000+</option>
            </select></td>
          </tr>
          <tr class="TableColor">
            <td class="TableLeft">First mortgage interest rate</td>
            <td align="left" nowrap class="TableRight"><select name="MTG_ONE_INT" class="FormInputShort" id="select5">
                <option value="" selected>Select</option>
                <option value="3">3.00</option>
                <option value="3.25">3.25</option>
                <option value="3.5">3.50</option>
                <option value="3.75">3.75</option>
                <option value="4">4.00</option>
                <option value="4.25">4.25</option>
                <option value="4.5">4.50</option>
                <option value="4.75">4.75</option>
                <option value="5">5.00</option>
                <option value="5.25">5.25</option>
                <option value="5.5">5.50</option>
                <option value="5.75">5.75</option>
                <option value="6">6.00</option>
                <option value="6.25">6.25</option>
                <option value="6.5">6.50</option>
                <option value="6.75">6.75</option>
                <option value="7">7.00</option>
                <option value="7.25">7.25</option>
                <option value="7.5">7.50</option>
                <option value="7.75">7.75</option>
                <option value="8">8.00</option>
                <option value="8.25">8.25</option>
                <option value="8.5">8.50</option>
                <option value="8.75">8.75</option>
                <option value="9">9.00</option>
                <option value="9.25">9.25</option>
                <option value="9.5">9.50</option>
                <option value="9.75">9.75</option>
                <option value="10">10.00</option>
                <option value="10.25">10.25</option>
                <option value="10.5">10.50</option>
                <option value="10.75">10.75</option>
                <option value="11">11+</option>
              </select>
            % </td>
          </tr>
	</TBODY>
          <tr class="TableColor">
            <td class="TableLeft" nowrap><span id="existingRate">Existing</span><span id="desiredRate" style="display:none;">Desired</span> rate type</td>
            <td nowrap class="TableRight"><select name="LOAN_TYPE" class="FormInput">
            	<option value="fixed" selected>Fixed Rate</option>
            	<option value="adjustable">Adjustable Rate</option>
              <option value="fixed_or_adjustable">I Don't Know</option>
            </select></td>
          </tr>
	<TBODY id="secmtgquestionFields">
          <tr class="TableColor">
            <td height="24" class="TableLeft">Do you have a second mortgage?</td>
            <td align="left" nowrap class="TableRight">
              <input type="radio" name="MTG_TWO" value="yes" id="MTG_TWO_YES" onClick="showElement('secondMortgageFields');"><label for="MTG_TWO_YES">Yes</label>
              <input type="radio" name="MTG_TWO" value="no" id="MTG_TWO_NO" onClick="hideElement('secondMortgageFields');" checked ><label for="MTG_TWO_NO">No</label>
			</td>
          </tr>
	  </TBODY>
	  <TBODY id="secondMortgageFields" style="display: none;">
          <tr class="TableColor">
              <td class="TableLeft"><table width="100%"  border="0" cellpadding="0" cellspacing="0" class="Nested">
                <tr>
                  <td align="left">Second mortgage balance</td>
                  <td width="5%" align="right">$</td>
                </tr>
            </table></td>
            <td class="TableRight">
				<select name="BAL_TWO" class="FormInput"
							onChange="limit((getInteger(this.form.EST_VAL.options[this.form.EST_VAL.selectedIndex].value)*1.05) - getInteger(this.form.BAL_ONE.options[this.form.BAL_ONE.selectedIndex].value) - getInteger(this.form.BAL_TWO.options[this.form.BAL_TWO.selectedIndex].value), this.form.ADD_CASH);">
                              <option value="0" selected>Second Balance ?</option>
                              <option value="2500">1 - 5,000</option>
                              <option value="7500">5,001 - 10,000</option>
                              <option value="12500">10,001 - 15,000</option>
                              <option value="17500">15,001 - 20,000</option>
                              <option value="22500">20,001 - 25,000</option>
                              <option value="27500">25,001 - 30,000</option>
                              <option value="32500">30,001 - 35,000</option>
                              <option value="37500">35,001 - 40,000</option>
                              <option value="42500">40,001 - 45,000</option>
                              <option value="47500">45,001 - 50,000</option>
                              <option value="52500">50,001 - 55,000</option>
                              <option value="57500">55,001 - 60,000</option>
                              <option value="62500">60,001 - 65,000</option>
                              <option value="67500">65,001 - 70,000</option>
                              <option value="72500">70,001 - 75,000</option>
                              <option value="77500">75,001 - 80,000</option>
                              <option value="82500">80,001 - 85,000</option>
                              <option value="87500">85,001 - 90,000</option>
                              <option value="92500">90,001 - 95,000</option>
                              <option value="97500">95,001 - 100,000</option>
                              <option value="102500">100,001 - 105,000</option>
                              <option value="107500">105,001 - 110,000</option>
                              <option value="112500">110,001 - 115,000</option>
                              <option value="117500">115,001 - 120,000</option>
                              <option value="122500">120,001 - 125,000</option>
                              <option value="127500">125,001 - 130,000</option>
                              <option value="132500">130,001 - 135,000</option>
                              <option value="137500">135,001 - 140,000</option>
                              <option value="142500">140,001 - 145,000</option>
                              <option value="147500">145,001 - 150,000</option>
                              <option value="152500">150,001 - 155,000</option>
                              <option value="157500">155,001 - 160,000</option>
                              <option value="162500">160,001 - 165,000</option>
                              <option value="167500">165,001 - 170,000</option>
                              <option value="172500">170,001 - 175,000</option>
                              <option value="177500">175,001 - 180,000</option>
                              <option value="182500">180,001 - 185,000</option>
                              <option value="187500">185,001 - 190,000</option>
                              <option value="192500">190,001 - 195,000</option>
                              <option value="197500">195,001 - 200,000</option>
                              <option value="200001">Over 200,000</option>
                    </select>&nbsp;</td>
          </tr>
          <tr class="TableColor">
            <td height="33" class="TableLeft">Second mortgage interest rate </td>
            <td class="TableRight"><select name="MTG_TWO_INT" class="FormInputShort" id="select5">
                            <option value="" selected>Select</option>
                            <option value="3">3.00</option>
                            <option value="3.25">3.25</option>
                            <option value="3.5">3.50</option>
                            <option value="3.75">3.75</option>
                            <option value="4">4.00</option>
                            <option value="4.25">4.25</option>
                            <option value="4.5">4.50</option>
                            <option value="4.75">4.75</option>
                            <option value="5">5.00</option>
                            <option value="5.25">5.25</option>
                            <option value="5.5">5.50</option>
                            <option value="5.75">5.75</option>
                            <option value="6">6.00</option>
                            <option value="6.25">6.25</option>
                            <option value="6.5">6.50</option>
                            <option value="6.75">6.75</option>
                            <option value="7">7.00</option>
                            <option value="7.25">7.25</option>
                            <option value="7.5">7.50</option>
                            <option value="7.75">7.75</option>
                            <option value="8">8.00</option>
                            <option value="8.25">8.25</option>
                            <option value="8.5">8.50</option>
                            <option value="8.75">8.75</option>
                            <option value="9">9.00</option>
                            <option value="9.25">9.25</option>
                            <option value="9.5">9.50</option>
                            <option value="9.75">9.75</option>
                            <option value="10">10.00</option>
                            <option value="10.25">10.25</option>
                            <option value="10.5">10.50</option>
                            <option value="10.75">10.75</option>
                            <option value="11">11+</option>
                          </select><span class="TableRight">
            % </span>&nbsp;
			</td>
          </tr>
	  </TBODY>
	  <TBODY id="addcashFields">
          <tr class="TableColor">
            <td valign="top" nowrap class="TableLeft">
				<table width="100%"  border="0" cellpadding="0" cellspacing="0" class="Nested">
                <tr>
                  <td align="left" nowrap>
					  <span id="addcashRefi">How much additional cash would you like<br> to borrow?</span>
					  <span id="addcashEquity" style="display:none;">How much cash do you want for your<br> equity loan?</span>
					  <span id="addcashDebtcon" style="display:none;">How much debt do you wish to consolidate?</span>
				  </td>
                  <td align="right" nowrap>$</td>
                </tr>
            </table></td>
            <td class="TableRight"><select name="ADD_CASH" class="FormInput" id="select4">
              <option value="" selected>Additional Cash?</option>
              <option value="0">0</option>
              <option value="2500">1 - 5,000</option>
              <option value="7500">5,001 - 10,000</option>
              <option value="12500">10,001 - 15,000</option>
              <option value="17500">15,001 - 20,000</option>
              <option value="22500">20,001 - 25,000</option>
              <option value="27500">25,001 - 30,000</option>
              <option value="32500">30,001 - 35,000</option>
              <option value="37500">35,001 - 40,000</option>
              <option value="42500">40,001 - 45,000</option>
              <option value="47500">45,001 - 50,000</option>
              <option value="52500">50,001 - 55,000</option>
              <option value="57500">55,001 - 60,000</option>
              <option value="62500">60,001 - 65,000</option>
              <option value="67500">65,001 - 70,000</option>
              <option value="72500">70,001 - 75,000</option>
              <option value="77500">75,001 - 80,000</option>
              <option value="82500">80,001 - 85,000</option>
              <option value="87500">85,001 - 90,000</option>
              <option value="92500">90,001 - 95,000</option>
              <option value="97500">95,001 - 100,000</option>
              <option value="102500">100,001 - 105,000</option>
              <option value="107500">105,001 - 110,000</option>
              <option value="112500">110,001 - 115,000</option>
              <option value="117500">115,001 - 120,000</option>
              <option value="122500">120,001 - 125,000</option>
              <option value="127500">125,001 - 130,000</option>
              <option value="132500">130,001 - 135,000</option>
              <option value="137500">135,001 - 140,000</option>
              <option value="142500">140,001 - 145,000</option>
              <option value="147500">145,001 - 150,000</option>
              <option value="152500">150,001 - 155,000</option>
              <option value="157500">155,001 - 160,000</option>
              <option value="162500">160,001 - 165,000</option>
              <option value="167500">165,001 - 170,000</option>
              <option value="172500">170,001 - 175,000</option>
              <option value="177500">175,001 - 180,000</option>
              <option value="182500">180,001 - 185,000</option>
              <option value="187500">185,001 - 190,000</option>
              <option value="192500">190,001 - 195,000</option>
              <option value="197500">195,001 - 200,000</option>
              <option value="205000">200,001 - 210,000</option>
              <option value="215000">210,001 - 220,000</option>
              <option value="225000">220,001 - 230,000</option>
              <option value="235000">230,001 - 240,000</option>
              <option value="245000">240,001 - 250,000</option>
              <option value="255000">250,001 - 260,000</option>
              <option value="265000">260,001 - 270,000</option>
              <option value="275000">270,001 - 280,000</option>
              <option value="285000">280,001 - 290,000</option>
              <option value="295000">290,001 - 300,000</option>
              <option value="305000">300,001 - 310,000</option>
              <option value="315000">310,001 - 320,000</option>
              <option value="325000">320,001 - 330,000</option>
              <option value="335000">330,001 - 340,000</option>
              <option value="345000">340,001 - 350,000</option>
              <option value="355000">350,001 - 360,000</option>
              <option value="365000">360,001 - 370,000</option>
              <option value="375000">370,001 - 380,000</option>
              <option value="385000">380,001 - 390,000</option>
              <option value="395000">390,001 - 400,000</option>
              <option value="410000">400,001 - 420,000</option>
              <option value="430000">420,001 - 440,000</option>
              <option value="450000">440,001 - 460,000</option>
              <option value="470000">460,001 - 480,000</option>
              <option value="490000">480,001 - 500,000</option>
              <option value="510000">500,001 - 520,000</option>
              <option value="530000">520,001 - 540,000</option>
              <option value="550000">540,001 - 560,000</option>
              <option value="570000">560,001 - 580,000</option>
              <option value="590000">580,001 - 600,000</option>
              <option value="610000">600,001 - 620,000</option>
              <option value="630000">620,001 - 640,000</option>
              <option value="650000">640,001 - 660,000</option>
              <option value="670000">660,001 - 680,000</option>
              <option value="690000">680,001 - 700,000</option>
              <option value="710000">700,001 - 720,000</option>
              <option value="730000">720,001 - 740,000</option>
              <option value="750000">740,001 - 760,000</option>
              <option value="770000">760,001 - 780,000</option>
              <option value="790000">780,001 - 800,000</option>
              <option value="810000">800,001 - 820,000</option>
              <option value="830000">820,001 - 840,000</option>
              <option value="850000">840,001 - 860,000</option>
              <option value="870000">860,001 - 880,000</option>
              <option value="890000">880,001 - 900,000</option>
              <option value="910000">900,001 - 920,000</option>
              <option value="930000">920,001 - 940,000</option>
              <option value="950000">940,001 - 960,000</option>
              <option value="970000">960,001 - 980,000</option>
              <option value="990000">980,001 - 1,000,000</option>
              <option value="1250000">1,000,000+</option>
              <option value="1750000">1,500,000+</option>
              <option value="2250000">2,000,000+</option>
            </select>
</td>
          </tr>
	</TBODY>
        </table>
        <!-- Start GEN_MORT, and the default displayed -->





<table width="100%" border="0" cellpadding="0" cellspacing="0">


          <tr class="SectionHeader">
            <td height="24" colspan="2" class="SectionHeader"> Tell Us About Your Personal Finances </td>
          </tr>
          <tr class="TableColor">
            <td width="287" nowrap class="TableLeft">Credit status </td>
            <td width="170" colspan="-1" class="TableRight">
              <select name="CRED_GRADE" class="FormInput">
                <option value="excellent">Excellent</option>
                <option selected value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
            </select></td>
          </tr>
          <tr class="TableColor">
            <td nowrap class="TableLeft"><table width="100%"  border="0" cellpadding="0" cellspacing="0" class="Nested">
                <tr>
                  <td width="95%" td align="left">Annual income</td>
                  <td width="5%" td align="right">$</td>
                </tr>
            </table></td>
            <td colspan="-1" class="TableRight"><select name="INCOME" class="FormInput" id="select45">
                <option value="" selected>Income ?</option>
                <option value="25000">Less than 30,000</option>
                <option value="37500">30,000 &ndash; 44,999</option>
                <option value="52500">45,000 &ndash; 59,999</option>
                <option value="67500">60,000 &ndash; 74,999</option>
                <option value="82500">75,000 &ndash; 89,999</option>
                <option value="97500">90,000 &ndash; 104,999</option>
                <option value="112500">105,000 &ndash; 120,000</option>
                <option value="135000">Over 120,000</option>
            </select></td>
          </tr>
          <tr class="TableColor">
            <td nowrap class="TableLeft">Occupational status</td>
            <td colspan="-1" class="TableRight"><select name="OCC_STAT" class="FormInput">
                <option selected value="employed">Employed</option>
                <option value="self_emp">Self Employed</option>
                <option value="retired">Retired</option>
                <option value="unemployed">Not Employed</option>
            </select></td>
          </tr>
          <tr class="TableColor">
            <td nowrap class="TableLeft">Have you ever declared bankruptcy?</td>
            <td colspan="-1" class="TableRight"><select name="BKCY" class="FormInput" id="select2">
            	<option value="no" selected>No/Not in Past 7 Years</option>
            	<option value="years5_7">5 &ndash; 7 Years Ago</option>
            	<option value="years2_5">2 &ndash; 5 Years Ago</option>
            	<option value="years1_2">1 &ndash; 2 Years Ago</option>
            	<option value="less_1yr">Less Than 12 Months Ago</option>
            </select></td>
          </tr>
          <tr class="TableColor">
            <td nowrap class="TableLeft" valign="top">
				<table width="100%"  border="0" cellpadding="0" cellspacing="0" class="Nested">
					<tr>
					  <td width="95%" td align="left">Monthly debt payments</td>
					  <td width="5%" td align="right">$</td>
					</tr>
            	</table>
			</td>
            <td colspan="-1" class="TableRight"><select name="MIN_PAY" class="FormInput">
                <option value="" selected>Monthly Debt ?</option>
                <option value="125">0 - 249</option>
                <option value="375">250 - 499</option>
                <option value="625">500 - 749</option>
                <option value="875">750 - 1,000</option>
                <option value="1250">Over 1,000</option>
            </select>

                <table width="100%"  border="0" cellspacing="0" cellpadding="0">
                	<tr>
                		<td valign="top"><span class="style1">(do not include housing)</span> </td>
                		</tr>
                	</table></td>
          </tr>
	<TBODY id="ftbFields" style="display:none;">
          <tr class="TableColor">
            <td nowrap class="TableLeft">Are you a first time buyer? </td>
            <td colspan="-1" class="TableRight">
              <input type="radio" name="FIRST_BUYER" value="yes" id="FB_YES"  ><label for="FB_YES">Yes</label>
              <input type="radio" name="FIRST_BUYER" value="no" id="FB_NO"  checked ><label for="FB_NO">No</label>
			</td>
          </tr>
	</TBODY>
        </table>

        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td colspan="2" class="SectionHeader">Your Contact Information </td>
          </tr>

		  <tr class="TableColor">
            <td width="287" nowrap class="TableLeft">First name<span class="FormInput">
            </span><br>
            </td>
            <td width="170" class="TableRight"><input name="FNAME" type="text" class="FormInput" value=""></td>
          </tr>
          <tr class="TableColor">
            <td nowrap class="TableLeft">Last name<br>
            </td>
            <td class="TableRight"><input name="LNAME" type="text" class="FormInput" value=""  >
            </td>
          </tr>
          <tr class="TableColor">
            <td nowrap class="TableLeft">Street address<br>
            </td>
            <td class="TableRight"><input name="ADDRESS" type="text" class="FormInput" value=""  >
            </td>
          </tr>
          <tr class="TableColor">
            <td nowrap class="TableLeft">City<br>
            </td>
            <td class="TableRight"><input name="CITY" type="text" class="FormInput" value=""  >
            </td>
          </tr>
          <tr class="TableColor">
            <td nowrap class="TableLeft">State<br>
            </td>
            <td class="TableRight"><select name="STATE" class="FormInput">
                <option value="" selected>Contact State ?</option>
                <option value="AL"> Alabama</option>
                <option value="AK"> Alaska</option>
                <option value="AZ"> Arizona</option>
                <option value="AR"> Arkansas</option>
                <option value="CA"> California</option>
                <option value="CO"> Colorado</option>
                <option value="CT"> Connecticut</option>
                <option value="DE"> Delaware</option>
                <option value="DC"> District of Columbia</option>
                <option value="FL"> Florida</option>
                <option value="GA"> Georgia</option>
                <option value="HI"> Hawaii</option>
                <option value="IA"> Iowa</option>
                <option value="ID"> Idaho</option>
                <option value="IL"> Illinois</option>
                <option value="IN"> Indiana</option>
                <option value="KS"> Kansas</option>
                <option value="KY"> Kentucky</option>
                <option value="LA"> Louisiana</option>
                <option value="ME"> Maine</option>
                <option value="MD"> Maryland</option>
                <option value="MA"> Massachusetts</option>
                <option value="MI"> Michigan</option>
                <option value="MN"> Minnesota</option>
                <option value="MO"> Missouri</option>
                <option value="MS"> Mississippi</option>
                <option value="MT"> Montana</option>
                <option value="NE"> Nebraska</option>
                <option value="NV"> Nevada</option>
                <option value="NH"> New Hampshire</option>
                <option value="NJ"> New Jersey</option>
                <option value="NM"> New Mexico</option>
                <option value="NY"> New York</option>
                <option value="NC"> North Carolina</option>
                <option value="ND"> North Dakota</option>
                <option value="OH"> Ohio</option>
                <option value="OK"> Oklahoma</option>
                <option value="OR"> Oregon</option>
                <option value="PA"> Pennsylvania</option>
                <option value="RI"> Rhode Island</option>
                <option value="SC"> South Carolina</option>
                <option value="SD"> South Dakota</option>
                <option value="TN"> Tennessee</option>
                <option value="TX"> Texas</option>
                <option value="UT"> Utah</option>
                <option value="VT"> Vermont</option>
                <option value="VA"> Virginia</option>
                <option value="WA"> Washington</option>
                <option value="WV"> West Virginia</option>
                <option value="WI"> Wisconsin</option>
                <option value="WY"> Wyoming</option>
              </select>
            </td>
          </tr>
          <tr class="TableColor">
            <td nowrap class="TableLeft">Zip<br>
            </td>
            <td class="TableRight"><input name="ZIP" type="text" onKeyUp="filterInteger(this);" class="FormInputShort" value=""  >
            </td>
          </tr>
          <tr class="TableColor">
            <td nowrap class="TableLeft">Email</td>
            <td class="TableRight"><input name="EMAIL" type="text" class="FormInput" value=""  ></td>
          </tr>
          <tr class="TableColor">
            <td nowrap class="TableLeft">Primary phone<br>
            </td>
            <td class="TableRight"><input name="PRI_PHON" type="text" class="FormInput" value=""  >
            </td>
          </tr>
          <tr class="TableColor">
            <td nowrap class="TableLeft">Secondary phone<br>
            </td>
            <td class="TableRight"><input name="SEC_PHON" type="text" class="FormInput" value=""  >
            </td>
          </tr>
          <tr class="TableColor">
            <td nowrap class="TableLeft">Best contact time<br>
            </td>
            <td class="TableRight"><select name="PREF_CALLTIME" class="FormInput">
                <option selected value="MORNING_PRIMARY">Morning on Primary</option>
                <option value="AFTERNOON_PRIMARY">Afternoon on Primary</option>
                <option value="EVENING_PRIMARY">Evening on Primary</option>
                <option value="MORNING_SECONDARY">Morning on Secondary</option>
                <option value="AFTERNOON_SECONDARY">Afternoon on Secondary</option>
                <option value="EVENING_SECONDARY">Evening on Secondary</option>
              </select>
            </td>
          </tr>
          <tr align="center" bgcolor="#EEEEEE">
            <td colspan="2"><table width="100%"  border="0" cellspacing="0" cellpadding="5">
                  <tr>
                    <td class="style1"><div id="srDisclosure"> </div></td>
                  </tr>
                </table></td>
          </tr>
          <tr>
            <td colspan="2" class="SubmitRow"><input name="_p1" type="image" src="https://www.data3001.com/images/forms/button_orange_getquotes.gif"  height="33" border="0">
            </td>
          </tr>
          <tr align="center" bgcolor="#EEEEFF">
            <td colspan="2"><script language="JavaScript">SecureRightsLogo();</script></td>
          </tr>
        </table>
</td>
      <td>&nbsp;</td>
    </tr>
  </table>
<script>
window.onload=function(){
showLoanFields(document.getElementById('PRODUCT'))
}
</script>
</form>
<!--Place this script between </form> and </body>--> <script> dataLayer = [{ 'a': '41091', 'i': '18709' }]; </script> <noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-KCMVZ6" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-KCMVZ6');</script> <!--end SR tag-->
</body>
</html>
