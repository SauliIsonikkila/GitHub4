var personalTrainingData = {
    km: 0
};

var personalTrainerApp = {
    run: function() { 
        var myData = {
            personalData: personalTrainingData,
            add : function(kmToDay) {
                this.personalData.km += kmToDay;
                var output = "My kilometers in total are " + this.personalData.km + " km.";
                return output;
            }
        }
        var dailyKm = Number(document.getElementById('km').value);
        document.getElementById('result').innerHTML = myData.add(dailyKm);
        document.getElementById('km').value = "";
    }
};


