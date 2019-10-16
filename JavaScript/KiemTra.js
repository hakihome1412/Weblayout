function kiemtrahoten()
{
	var reg;
	reg = /^([A-Z][a-z]*)+$/;
	
	var ok = reg.test(document.getElementById('hoten').value);
	
	if(!ok)
	{
		document.getElementById('showerrhoten').innerHTML = " Giá trị không hợp lệ !!!";
	}
	else
		document.getElementById('showerrhoten').innerHTML = "";
}

function kiemtraemail()
{
	var reg;
	reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	
	var ok = reg.test(document.getElementById('email').value);
	
	if(!ok)
	{
		document.getElementById('showerremail').innerHTML = " Giá trị không hợp lệ !!!";
	}
	else
		document.getElementById('showerremail').innerHTML = "";
}

function kiemtrasdt()
{
	var reg;
	reg = /^(09|01)\d{8,9}$/;
	
	var ok = reg.test(document.getElementById('sdt').value);
	
	if(!ok)
	{
		document.getElementById('showerrsdt').innerHTML = " Giá trị không hợp lệ !!!";
	}
	else
		document.getElementById('showerrsdt').innerHTML = "";
}
