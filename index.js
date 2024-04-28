function shout(string) {
    return string.toUpperCase();
}

console.log(shout("i love pizza"));

function whisper(string) {
    return string.toLowerCase();
}

console.log(whisper("MEATBALLS"));

function logShout(string){
    console.log(string.toUpperCase());
}

logShout("hamburgers");

function logWhisper(string){
    console.log(string.toLowerCase());
}

logWhisper("FRENCH FRIES");

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()){
        return "I can't hear you!"; }
    else if (string === string.toUpperCase()){
        return "YES INDEED!" }
    else if (string === "Let's have dinner together!"){
        return "I would love to!"
    }


}

console.log(sayHiToHeadphonedRoommate("hello"));

console.log(sayHiToHeadphonedRoommate("HELLO"));

console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));

