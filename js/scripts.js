var Tamagotchi = {
    initialize: function (name) {
      this.name = name;
      this.foodLevel= 10;
      this.sleepLevel= 10;
      this.activityLevel= 10;
    },
    timePasses: function () {
      this.foodLevel -= parseInt((Math.random() * 4) +1);
      this.sleepLevel -= parseInt((Math.random() * 4) +1);
      this.activityLevel -= parseInt((Math.random() * 4) +1);
    },
    isAlive: function () {
      return this.foodLevel >= 1;
    }
}

$(document).ready(function() {
  var currentPet;
  $("form#get-name").submit(function (event) {
    event.preventDefault();
    var inputtedName = $("input#pet-name").val();
    var myPet = Object.create(Tamagotchi);
    myPet.initialize(inputtedName);
    currentPet = myPet;

    $(".name-of-pet").text(currentPet.name);
    $("#hunger-level").text(currentPet.foodLevel);
    $("#tired-level").text(currentPet.sleepLevel);
    $("#abandonment-level").text(currentPet.activityLevel);
    $("input#pet-name").val("");
  });

  $("button#feed-pet").click(function () {
    $("#hunger-level").text(currentPet.foodLevel += 1);
  });

  $("button#play-pet").click(function () {
    $("#abandonment-level").text(currentPet.activityLevel += 1);
  });

  $("button#sleep-pet").click(function () {
    $("#tired-level").text(currentPet.sleepLevel += 1);
  });

  $("button#check-pet").click(function () {
      currentPet.timePasses();
       if (currentPet.isAlive()) {
        $("#hunger-level").text(currentPet.foodLevel);
        $("#abandonment-level").text(currentPet.activityLevel);
        $("#tired-level").text(currentPet.sleepLevel);
        $("#show-levels").show();
       } else {
        $("#show-levels").hide();
        $("#pet-care").hide();
        $("#create-pet").hide();
        $("#dead-pet").show();
       }
  });

  $("#start-a-new-pet").click(function () {
    document.location.reload();
  });
});

