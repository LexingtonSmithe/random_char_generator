var exports = module.exports = {};

exports.getRandomInt = function(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


exports.rollStatDice = function(){
    let howMany = 4;
    let min = 1;
    let max = 6;
    let statArray = [];

    for(j = 0; j < 6; j++){
      let singleStat = [];
      for(var i = 0; i < howMany; i++){
          singleStat.push(Math.floor(Math.random() * max) + min);
      }
      let pos = singleStat.indexOf(Math.min.apply(Math, singleStat));
      let lowest = singleStat[pos]
      //console.log("Rolled: " + singleStat)
      singleStat.splice(pos, 1);
      let total = singleStat.reduce((a,b)=>(a+b), 0);
      //console.log("Removed Lowest: " + lowest + " Total: " + total);
      statArray.push(total)
    }
    console.log("Available Stats: " + statArray.sort((a,b)=>b-a));
    return statArray
}

exports.rollDie = function(howMany, ofWhatDie){
    min = Math.ceil(1);
    max = Math.floor(ofWhatDie);
    var total = 0;
    for(var i = 0; i < howMany; i++){
        total += (Math.floor(Math.random() * max) + min);
    }
    return total
}
