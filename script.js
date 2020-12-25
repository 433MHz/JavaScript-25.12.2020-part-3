function show()
	{
	var firstValue = document.getElementById("textField1").value;
	var secondValue = document.getElementById("textField2").value;
	var result;

	if(isNaN(firstValue) || isNaN(secondValue)){
		result = "value is not a number";
	}
	else{
		if(secondValue > firstValue){
			for (var i = firstValue; i <= secondValue; i++) {
				if(result == null){
					result = i;
				}
				else{
				result = result + " " + i;
				}
			}
		}
		else{
			result = "first value must be lesser than second";
		}
	}

	document.getElementById("result").innerHTML = result;
	}