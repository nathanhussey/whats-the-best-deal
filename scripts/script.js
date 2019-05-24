//measures multiplier are calculated in terms of kg.
const kg = 1
const g = 1000
const mg = 1000000
const lbs = 2.205
//measures multiplier are calculated in terms of L.
const L = 1
const mL = 1000
const oz = 33.814

let getResultButton = document.getElementById("resultButton");

let displayResult = document.getElementById("displayResult")

//checks if kg and L unit groups are being compared
function unitCheck(unit1, unit2) {
	groupKg = ["kg","g","mg","lbs"]
	groupL = ["L","mL","oz"]
	unit1Group = groupL;
	unit2Group = groupL;
	for (let i = 0; i< groupKg.length;i++){
		if (unit1 === groupKg[i]){
			unit1Group = groupKg;
			break;
			
		} 
		else {}
		
	}
	for (let i = 0; i< groupKg.length;i++){
		if (unit2 === groupKg[i]){
			unit2Group = groupKg;
			break;
		} 
		else {}
	}
	if (unit1Group !== unit2Group){
		displayResult.innerText = "Sorry you can not compare these two measurements.Change unit of measurement.";
		return false;
	}else{return true;}
}

function calculateValue(price,quant,unit) {
	switch (unit){
		case "kg":
			return (quant*kg)/price;
		case "g":
			return (quant/g)/price;
		case "mg":
			return (quant/mg)/price;
		case "lbs":
			return (quant/lbs)/price;
		case "L":
			return (quant*L)/price;
		case "mL":
			return (quant/ml)/price;
		case "oz":
			return (quant/oz)/price;

	}
}

function bestDeal(item1,item2) {
	if (item1 > item2){
		displayResult.innerText ="item1 is the better deal";		
	}
	else if(item2 > item1) {
		displayResult.innerText = "item2 is the better deal";			

	} 
	else{displayResult.innerText = "both deals are the same"}
}

function getResult(){
	getResultButton.addEventListener("click",function(event){
		let item1Unit = document.getElementById("item1Unit");
		let item2Unit = document.getElementById("item2Unit");

		let item1Cost = document.getElementById("item1Cost").value; 
		let item2Cost = document.getElementById("item2Cost").value;

		let item1Quant = document.getElementById("item1Quant").value;
		let item2Quant = document.getElementById("item2Quant").value;
		let selectedUnit1 = item1Unit.options[item1Unit.selectedIndex].text;
		let selectedUnit2 = item2Unit.options[item2Unit.selectedIndex].text;
		unitChecked = unitCheck(selectedUnit1,selectedUnit2)
		if (unitChecked === true){
			item1 = calculateValue(item1Cost,item1Quant,selectedUnit1);
			item2 = calculateValue(item2Cost,item2Quant,selectedUnit2);
			bestDeal(item1,item2);
		} else{}
		
		event.stopPropagation();
	});

}
getResult()


























