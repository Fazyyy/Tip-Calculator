function calculateTip() {

    //Grab data from dopdown list
    var serviceLevel = document.getElementById ("serviceDrop");
    //Grab input for Level of service provided from the data
    var serviceLevelSelected = serviceLevel.options[serviceLevel.selectedIndex].value;
    //% values for tip
    var tipLevels = ["20","15","10","5"];
    //Grab nth value from above array
    var selectedTipLevel = tipLevels[(serviceLevelSelected - 1)];
    //Get input for number of people
    var noOfPeople = document.getElementById("peopleAmountInput").value;
    //Get input for cost of meal
    var totalCost = document.getElementById("totalCost").value;
    //Calculate tip
    var totalTip = ((totalCost / 100) * selectedTipLevel);
    //If more than 5 people, increase tip by £1
    if (noOfPeople >= 5) {
        totalTip++;
    }

    //Calculate tip per person and round up to 10p
    var indTip = Math.round( (totalTip / noOfPeople) * 10 ) / 10;
    
    //Output values
    document.getElementById("peopleAmount").innerHTML = noOfPeople;
    document.getElementById("totalTip").innerHTML = totalTip.toFixed(2);
    document.getElementById("tipPer").innerHTML = indTip.toFixed(2);
  }


  