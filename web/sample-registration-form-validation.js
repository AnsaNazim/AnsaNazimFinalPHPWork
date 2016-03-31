function formValidation()  {  
	var uid = document.registration.userid;  
	var passid = document.registration.passid;  
	var uname = document.registration.username;  
	var uadd = document.registration.address;  
	var ucountry = document.registration.country;  
	var uzip = document.registration.zip;  
	var uemail = document.registration.email;  
	var umsex = document.registration.msex;  
	var ufsex = document.registration.fsex; 
	var uelan = document.registration.elan;
	var uneLan = document.registration.neLan;
	var umus = document.registration.mus;
	var unonmus = document.registration.nonmus;
	if(userid_validation(uid,5,12))  {  
		if(passid_validation(passid,7,12))  {  
			if(allLetter(uname))  {  
				if(alphanumeric(uadd))  {   
					if(countryselect(ucountry))  {  
						if(allnumeric(uzip))  {  
							if(ValidateEmail(uemail))  {  
								if(validsex(umsex,ufsex))  { 
								   if(validlang(uelan,uneLan)){
									   if(validmus(umus,unonmus)) {
									   }
								   }
								}  
							}  
					   }  
				   }   
				}  
			}  
		}  
	}  
	return false; 
} 

function userid_validation(uid,x,y)  {  
	var uid_len = uid.value.length;  
	if (uid_len == 0 || uid_len >= y || uid_len < x)  {  
		alert("User Id should not be empty or length be between "+x+" to "+y);  
		uid.focus();  
		return false;  
	}  
	return true;  
}  

function passid_validation(passid,x,y)  {  
	var passid_len = passid.value.length;  
	if (passid_len == 0 ||passid_len >= y || passid_len < x)  {  
		alert("Password should not be empty or length be between "+x+" to "+y);  
		passid.focus();  
		return false;  
	}  
	return true;  
} 
 
function allLetter(uname)  {   
	var letters = /^[A-Za-z]+$/;  
	if(uname.value.match(letters))  {  
	return true;  
	}  
	else  {  
		alert('Username must have alphabet characters only');  
		uname.focus();  
		return false;  
	}  
}
  
function alphanumeric(uadd)  {   
	var letters = /^[0-9a-zA-Z]+$/;  
	if(uadd.value.match(letters))  {  
	return true;  
	}  
	else  {  
		alert('User address must have alphanumeric characters only');  
		uadd.focus();  
		return false;  
	}  
}
  
function countryselect(ucountry)  {  
	if(ucountry.value == "Default")  {  
		alert('Select your country from the list');  
		ucountry.focus();  
		return false;  
	}  
	else  {  
	return true;  
	}  
}  

function allnumeric(uzip)  {   
	var numbers = /^[0-9]+$/;  
	if(uzip.value.match(numbers))  {  
	return true;  
	}  
	else  {  
		alert('ZIP code must have numeric characters only');  
		uzip.focus();  
		return false;  
	}  
} 
 
function ValidateEmail(uemail)  {  
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(uemail.value.match(mailformat))  {  
	return true;  
	}  
	else  {  
		alert("You have entered an invalid email address!");  
		uemail.focus();  
		return false;  
	}  
}

function validsex(umsex,ufsex)  {  
	x=0;    
	if(umsex.checked)   {  
		x++;  
	}
    if(ufsex.checked)  {  
		x++;   
	}  
	if(x==0)  {  
		alert('Select Male/Female');  
		umsex.focus();  
		return false;  
	} 
	else  {  
		return true;  
	}   
}

function validlang(uelan,uneLan)  {  
	x=0;    
	if(uelan.checked)   {  
		x++;  
	}
    if(uneLan.checked)  {  
		x++;   
	}  
	if(x==0)  {  
		alert('Select Language');  
		uelan.focus();  
		return false;  
	}  
	else  {  
		return true;  
	}
}

function validmus(umus,unonmus)  {  
	x=0;    
	if(umus.checked)   {  
		x++;  
	}
    if(unonmus.checked)  {  
		x++;   
	}  
	if(x==0)  {  
		alert('Select Religion');  
		umus.focus();  
		return false;  
	}  
	else  {  
		alert('Form Succesfully Submitted');  
		window.location.reload()  
		return true;  
	}  
}