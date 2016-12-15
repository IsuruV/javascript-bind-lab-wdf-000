const app = "I don't do much.";

var digitalClock = {
  time: Math.round(Date.now() / 1000),
  startTicking(){
    return setInterval(() => this.time++, 1000);
  }
}

var censor = (word,str) => {
  return str.replace(new RegExp(word, 'g'), "BLEEP");
}

var drugsCensor = (str) => {
  return str.replace(new RegExp('drugs', 'g'), "BLEEP");
}

var violenceCensor = (str) => {
  return str.replace(new RegExp('violence', 'g'), "BLEEP");
}
