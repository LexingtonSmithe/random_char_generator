var exports = module.exports = {};

exports.getRandomInt = function(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


exports.rollStatDie = function(howMany, ofWhatDie, forWhatStat){
    min = Math.ceil(1);
    max = Math.floor(ofWhatDie);
    var arr = [];
    for(var i = 0; i < howMany; i++){
        arr.push(Math.floor(Math.random() * (max - min)) + min);
    }
    var pos = arr.indexOf(Math.min.apply(Math, arr));
    arr.splice(pos, 1);
    total = arr.reduce(add, 0);
    function add(a, b) {
        return a + b;
    }
    console.log("Rolled: " + arr + " Total: " + total + " For: " + forWhatStat)
    return total
}

exports.rollDie = function(howMany, ofWhatDie){
    min = Math.ceil(1);
    max = Math.floor(ofWhatDie);
    for(var i = 0; i < howMany; i++){
        total += (Math.floor(Math.random() * (max - min)) + min);
    }
    return total
}
