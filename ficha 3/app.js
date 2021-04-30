function started(){
    console.log("Started Download");
}

function update() {
    for (i = 1; i <= 100; i++) {
      console.log(i + '% of Download');
    }
}

function completed(){
    console.log("Completed Download")
}

function performDownload() {
    started();
    update();
    completed();
}

performDownload(started,update,completed);

var ArrayUtilsModule = require('./ArrayUtils.js')
console.log(ArrayUtilsModule.max)