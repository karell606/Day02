displayThisText ("The variable value is") + (input_var)
if (Number.isInteger(input_var)) {
	displayThisText("Its type is integer")
 } else if (Number.isFinite(input_var)) {
 	displayThisText("its type is float")
 } else {
 	displayThisText ("Its type is" + typeof input_var) 
	}
if (input_var ==42) {
	displayThisText("It is the meaning of life");
  }
