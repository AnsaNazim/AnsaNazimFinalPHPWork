<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Registration Form</title>
<meta name="keywords" content="example, JavaScript Form Validation, Sample registration form" />  
<meta name="description" content="This document is an example of JavaScript Form Validation using a sample registration form. " />
<link rel='stylesheet' href='js-form-validation.css' type='text/css' />  
<script src="sample-registration-form-validation.js"></script>  
</head>

<body onload="document.registration.userid.focus();">
<h1>Registration Form</h1>  
<p>Use tab keys to move from one input field to the next.</p>  
<form name='registration' onSubmit="return formValidation();">  
<ul>  
<li><label for="userid">User id:</label></li>  
<li><input type="text" name="userid" size="12" /></li>  
<li><label for="passid">Password:</label></li>  
<li><input type="password" name="passid" size="12" /></li>  
<li><label for="username">Name:</label></li>  
<li><input type="text" name="username" size="50" /></li>  
<li><label for="address">Address:</label></li>  
<li><input type="text" name="address" size="50" /></li>  
<li><label for="country">Country:</label></li>  
<li><select name="country">  
<option selected="" value="Default">(Please select a country)</option>  
<option value="AF">Australia</option>  
<option value="AL">Canada</option>  
<option value="DZ">India</option>  
<option value="AS">Russia</option>  
<option value="AD">USA</option>  
<option value="AD">Pakistan</option> 
</select></li>  
<li><label for="zip">ZIP Code:</label></li>  
<li><input type="text" name="zip" /></li>   
<li><label for="email">Email:</label></li>  
<li><input type="text" name="email" size="50" /></li>  
<li><label id="gender">Sex:</label></li>  
<li><input type="radio" name="msex" value="Male" /><span>Male</span></li>  
<li><input type="radio" name="fsex" value="Female" /><span>Female</span></li>  
<li><label id="Language">Language:</label></li>  
<li><input type="radio" name="elan" value="ELang" /><span>English</span></li>  
<li><input type="radio" name="neLan" value="NELang" /><span>Urdu</span></li>
<li><label id="religion">Religion:</label></li>  
<li><input type="radio" name="mus" value="mus" /><span>Muslim</span></li>  
<li><input type="radio" name="nonmus" value="Nmus" /><span>Non Muslim</span></li>  
<li><input type="submit" name="Submit" value="Submit" /></li>  
</ul>
</form>  
</body>
</html>
