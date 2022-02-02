//модуль 7.3 ,ответ на первое задание

let computer = {
  brand: "Lenovo",
  cpu: "i7",
  price: 12000,
};

const prop = Object.create(computer);

prop.andGame = "avengers";
function action() {
  for (let key in prop) {
    if (prop.hasOwnProperty(key)) {
      console.log(key, prop[key]);
    }
  }
}

action();
//модуль 7.3 ответ на второе задание
let shuma = {
  fear: "str",
};

function action(key, obj) {
  return obj.hasOwnProperty(key);
}

action("fear", { fear: "str" });

//модуль 7.3 ответ на 3 задание
function emptyObject() {
  let nullObject = Object.create(null);
  return nullObject;
}

let newNullObject = emptyObject();

console.log(newNullObject);
//ответ на 4 задание (модуль 7)
function Device(amperage, voltage = 220) {
  this.power = amperage * voltage;
  this.isEnabled = false;

  this.on = function () {
    this.isEnabled = true;
  };
  this.off = function () {
    this.isEnabled = false;
  };
}

function TV() {
  Device.apply(this, arguments);
  this.channel = 1;
  this.setChannel = function (channel) {
    if (this.isEnabled) {
      this.channel = channel;
    }
  };
}

function Xbox() {
  Device.apply(this, arguments);
  this.isEnabled = false;
  this.hdmi = null;
  this.isGameRun = false;

  this.connectHdmi = function (hdmi) {
    this.hdmi = hdmi;
  };

  this.playGame = function () {
    if (this.isEnabled) {
      this.isGameRun = true;
    }
  };

  this.stopGame = function () {
    this.isGameRun = false;
  };
  this.off = function () {
    this.stopGame();
    this.isEnabled = false;
  };
}

//ответ на 5 задание (модуль 7)

class Device {
  constructor(amperage, voltage = 220) {
    this.power = amperage * voltage;
    this.isEnabled = false;
  }
  on() {
    this.isEnabled = true;
  }

  off() {
    this.isEnabled = false;
  }
}
class TV extends Device {
  constructor(amperage, voltage) {
    super(amperage, voltage);
    this.channel = 1;
  }
  setChannel(channel) {
    if (this.isEnabled) {
      this.channel = channel;
    }
  }
}

class Xbox extends Device {
  constructor(amperage, voltage) {
    super(amperage, voltage);
    this.isEnabled = false;
    this.hdmi = null;
    this.isGameRun = false;
  }
  connectHdmi(hdmi) {
    this.hdmi = hdmi;
  }
  playGame() {
    if (this.isEnabled) {
      this.isGameRun = true;
    }
  }

  stopGame() {
    this.isGameRun = false;
  }
  off() {
    this.stopGame();
    this.isEnabled = false;
  }
}
