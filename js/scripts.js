var Tamagotchi = {
    initialize: function (name) {
      this.name = name;
      this.foodLevel= 10;
      this.sleepLevel= 10;
      this.activityLevel= 10;
    },
    timePasses: function () {
      this.foodLevel -= 1;
      this.sleepLevel -= 1;
      this.activityLevel -= 1;
    },
    isAlive: function () {
      return this.foodLevel >= 1;
    }
}

