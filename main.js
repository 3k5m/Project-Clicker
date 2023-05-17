var ver = "1.2.1";
var i=0;
var game = {
  update: ver,
  projects: 0,
  items: {
    perClick: 1,
    perClickCost: 10,
    friends: 0,
    friendCost: 10,
    scientists: 0,
    scientistCost: 1000,
    replicators: 0,
    replicatorCost: 1000000,
    alexs: 0,
    alexCost: 2000000
  },  
  upgrades: {
    friends: 0,
    friendCost: 100,
    perClick: 0,
    perClickCost: 50,
    CR: 0,
    CRCost: 25000000,
    Rep: 0,
    RepCost: 1000000000
  },
  prestige: {
    prestiges: 1,
    prestigeCost: 100000
  }
};
var savetime = 15;
var savegame = JSON.parse(localStorage.getItem("ProjectMakerSave"));
if (savegame !== null) {
  //if (savegame.update == ver) {
    game = savegame;
  //}
}

function Reset() {
  game = {
    update: ver,
    projects: 0,
    items: {
      perClick: 1,
      perClickCost: 10,
      friends: 0,
      friendCost: 10,
      scientists: 0,
      scientistCost: 1000,
      replicators: 0,
      replicatorCost: 1000000,
      alexs: 0,
      alexCost: 2000000
    },  
    upgrades: {
      friends: 0,
      friendCost: 100,
      perClick: 0,
      perClickCost: 50,
      CR: 0,
      CRCost: 25000000,
      Rep: 0,
      RepCost: 1000000000
    },
    prestige: {
      prestiges: 1,
      prestigeCost: 100000
    }
  };
}

function logB(x, y) {
  return Math.log(y) / Math.log(x);
}

function switchTo(Name) {
  var hide = document.getElementById("upgrades");
  hide.style.display = "none";
  hide = document.getElementById("items");
  hide.style.display = "none";
  hide = document.getElementById("prestige");
  hide.style.display = "none";
  hide = document.getElementById("prestigeUpgrades");
  hide.style.display = "none";
  document.getElementById(Name).style.display = "block";
}

function Click() {
  game.projects += game.items.perClick * game.prestige.prestiges;
  if(game.upgrades.perClick >= 1){
    game.projects += game.items.perClick * (Math.pow(2, game.upgrades.perClick)) * game.prestige.prestiges;
  }
}

function buy(item, amount) {
  switch(item){
    case "PerClick":
      if(game.projects>=game.items.perClickCost*amount){
        for(i=1;i<=amount;i++){
          game.items.perClick += 1;
          game.projects -= game.items.perClickCost;
          game.items.perClickCost = Math.ceil(game.items.perClickCost * 1.1);
        }
      }else{
        document.getElementById("CloneB").className = "buyable_button_red";
        setTimeout(function(){ document.getElementById("CloneB").className = "buyable_button"; }, 300);
      }
      break;
    case "Friend":
      console.log("You have no friends lmfao");
      if(game.projects>=game.items.friendCost){
        game.items.friends += 1;
        game.projects -= game.items.friendCost;
        game.items.friendCost = Math.ceil(game.items.friendCost * 1.1);
      }else{
        document.getElementById("FriendB").className = "buyable_button_red";
        setTimeout(function(){ document.getElementById("FriendB").className = "buyable_button"; }, 300);
      }
      break;
    case "Scientist":
      console.log("You have no intelligence lmfao");
      if(game.projects>=game.items.scientistCost){
        game.items.scientists += 1;
        game.projects -= game.items.scientistCost;
        game.items.scientistCost = Math.ceil(game.items.scientistCost * 1.1);
      }else{
        document.getElementById("ScientistB").className = "buyable_button_red";
        setTimeout(function(){ document.getElementById("ScientistB").className = "buyable_button"; }, 300);
      }
      break;
    case "Replicator":
      if(game.projects>=game.items.replicatorCost){
        game.items.replicators += 1;
        game.projects -= game.items.replicatorCost;
        game.items.replicatorCost = Math.ceil(game.items.replicatorCost * 2);
      }else{
        document.getElementById("ReplicatorB").className = "buyable_button_red";
        setTimeout(function(){ document.getElementById("ReplicatorB").className = "buyable_button"; }, 300);
      }
      break;
    case "Alex":
      if(game.projects>=game.items.alexCost){
        game.items.alexs += 1;
        game.projects -= game.items.alexCost;
        game.items.alexCost = Math.ceil(game.items.alexCost * 1.1);
      }else{
        document.getElementById("AlexB").className = "buyable_button_red";
        setTimeout(function(){ document.getElementById("AlexB").className = "buyable_button"; }, 300);
      }
      break;
    case "UpFriend":
      if(game.projects>=game.upgrades.friendCost){
        game.upgrades.friends += 1;
        game.projects -= game.upgrades.friendCost;
        game.upgrades.friendCost = Math.ceil(game.upgrades.friendCost * 1.1);
      }else{
        document.getElementById("UpFriendB").className = "buyable_button_red";
        setTimeout(function(){ document.getElementById("UpFriendB").className = "buyable_button"; }, 300);
      }
      break;
    case "UpClick":
      if(game.projects>=game.upgrades.perClickCost){
        game.upgrades.perClick += 1;
        game.projects -= game.upgrades.perClickCost;
        game.upgrades.perClickCost = Math.ceil(game.upgrades.perClickCost * 50);
      }else{
        document.getElementById("UpPerClickB").className = "buyable_button_red";
        setTimeout(function(){ document.getElementById("UpPerClickB").className = "buyable_button"; }, 300);
      }
      break;
    case "UpCR":
      if(game.projects>=game.upgrades.CRCost){
        game.upgrades.CR += 1;
        game.projects -= game.upgrades.CRCost;
        game.upgrades.CRCost = Math.ceil(game.upgrades.CRCost * 500);
      }else{
        document.getElementById("UpCRB").className = "buyable_button_red";
        setTimeout(function(){ document.getElementById("UpCRB").className = "buyable_button"; }, 300);
      }
      break;
    case "UpRep":
      if(game.projects>=game.upgrades.RepCost){
        game.upgrades.Rep += 1;
        game.projects -= game.upgrades.RepCost;
        game.upgrades.RepCost = Math.ceil(game.upgrades.RepCost * 12);
      }else{
        document.getElementById("UpRepB").className = "buyable_button_red";
        setTimeout(function(){ document.getElementById("UpRepB").className = "buyable_button"; }, 300);
      }
      break;
  }
}

function Prestige() {
  if(game.projects>=game.prestige.prestigeCost){
    game.prestige.prestiges *= 2;
    
    game.prestige.prestigeCost = Math.ceil(game.prestige.prestigeCost * 10);
    game.projects = 0;
    game.items = {
      perClick: 1,
      perClickCost: 10,
      friends: 0,
      friendCost: 10,
      scientists: 0,
      scientistCost: 1000,
      replicators: 0,
      replicatorCost: 1000000,
      alexs: 0,
      alexCost: 2000000
    };
    game.upgrades = {
      friends: 0,
      friendCost: 100,
      perClick: 0,
      perClickCost: 50,
      CR: 0,
      CRCost: 25000000,
      Rep: 0,
      RepCost: 1000000000
    };
    
  }else{
    document.getElementById("prestigeB").className = "prestige_button_red";
    setTimeout(function(){ document.getElementById("prestigeB").className = "prestige_button"; }, 300);
  }
}

function Loop() {
  game.projects += game.items.friends * game.prestige.prestiges;
  game.projects += game.items.friends * game.upgrades.friends * game.prestige.prestiges;
  game.projects += game.items.scientists * 100 * game.prestige.prestiges;
  game.projects += game.items.alexs * 69420 * game.prestige.prestiges;
  game.projects += game.items.alexs * 69420 * game.prestige.prestiges * (Math.pow(2, game.upgrades.CR));
  if(game.items.replicators >= 1){
    game.projects = game.projects + Math.round(Math.ceil(game.projects * 0.0001 * game.items.replicators) * Math.round(logB(10, game.prestige.prestiges)+1) * (1+game.upgrades.Rep*0.05));
  }
  document.getElementById("savetimer").innerHTML = "Game saving in " + savetime;
  savetime --;
  if(savetime == 0) {
    localStorage.setItem("ProjectMakerSave", JSON.stringify(game));
    document.getElementById("savetimer").innerHTML = "Game saved!";
    savetime = 15;
  }
}

function upd() {
  document.getElementById("projects").innerHTML = new Intl.NumberFormat().format(game.projects) + " Projects Finished";
  document.getElementById("friends").innerHTML = new Intl.NumberFormat().format(game.items.friends);
  document.getElementById("scientists").innerHTML = new Intl.NumberFormat().format(game.items.scientists);
  document.getElementById("clones").innerHTML = new Intl.NumberFormat().format(game.items.perClick - 1) + " ";
  document.getElementById("replicators").innerHTML = new Intl.NumberFormat().format(game.items.replicators);
  document.getElementById("alexs").innerHTML = new Intl.NumberFormat().format(game.items.alexs);
  
  document.getElementById("ScientistCost").innerHTML = new Intl.NumberFormat().format(game.items.scientistCost) + " Projects";
  document.getElementById("CloneCost").innerHTML = new Intl.NumberFormat().format(game.items.perClickCost) + " Projects";
  document.getElementById("FriendCost").innerHTML = new Intl.NumberFormat().format(game.items.friendCost) + " Projects";
  document.getElementById("ReplicatorCost").innerHTML = new Intl.NumberFormat().format(game.items.replicatorCost) + " Projects";
  document.getElementById("AlexCost").innerHTML = new Intl.NumberFormat().format(game.items.alexCost) + " Projects";
  
  document.getElementById("UpFriends").innerHTML = new Intl.NumberFormat().format(game.upgrades.friends);
  document.getElementById("UpFriendCost").innerHTML = new Intl.NumberFormat().format(game.upgrades.friendCost) + " Projects";
  document.getElementById("UpPerClick").innerHTML =new Intl.NumberFormat().format( game.upgrades.perClick);
  document.getElementById("UpPerClickCost").innerHTML = new Intl.NumberFormat().format(game.upgrades.perClickCost) + " Projects";
  document.getElementById("UpCR").innerHTML = new Intl.NumberFormat().format(game.upgrades.CR);
  document.getElementById("UpCRCost").innerHTML = new Intl.NumberFormat().format(game.upgrades.CRCost) + " Projects";
  document.getElementById("UpRep").innerHTML = new Intl.NumberFormat().format(game.upgrades.Rep);
  document.getElementById("UpRepCost").innerHTML = new Intl.NumberFormat().format(game.upgrades.RepCost) + " Projects";
  
  document.getElementById("prestigeCost").innerHTML =  "Requires " + new Intl.NumberFormat().format(game.projects) + "/" + new Intl.NumberFormat().format(game.prestige.prestigeCost) + " Projects";
  document.getElementById("curPrestige").innerHTML = "Current multiplier: " + new Intl.NumberFormat().format(game.prestige.prestiges);
  document.getElementById("log").innerHTML = "Replicator multiplier: " + new Intl.NumberFormat().format(Math.round(logB(10, game.prestige.prestiges)+1));
}

var update = window.setInterval(function() {
  upd();
}, 10);

var mainGameLoop = window.setInterval(function() {
  Loop();
}, 1000);
