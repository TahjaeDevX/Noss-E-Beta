var misspellings = {
    " teh ": "the",
    " ur ": "you're",
    " u ": "you",
    " r ": "are",
    " 2 ": "to",
    " 4 ": "for",
    " thru ": "through",
    " alot ": "a lot",
    " gonna ": "going to",
    " wanna ": "want to",
    " gotta ": "got to",
    " nvm ": "nevermind",
    " btw ": "by the way",
    " imo ": "in my opinion",
    " fyi ": "for your information",
    " til ": "today i learned",
    " tbh ": "to be honest",
    " wtf ": "what the heck",
    " hi ": "hello",
    " howdy ": "hello",
    " greetings ": "hello",
    " salutations ": "hello",
    " hey ": "hello",
    " yo ": "hello",
    " bye ": "goodbye",
    " farewell ": "goodbye",
    " see you later ": "goodbye",
    " ciao ": "goodbye",
    " ta ta ": "goodbye",
    " later ": "goodbye",
    " see ya ": "goodbye",
    " thanks ": "thank you",
    " much obliged ": "thank you",
    " appreciate it ": "thank you",
    " you're welcome ": "you're welcome",
    " don't mention it ": "you're welcome",
    " no problem ": "you're welcome",
    " sorry ": "I apologize",
    " my bad ": "I apologize",
    " excuse me ": "I beg your pardon",
    " pardon me ": "I beg your pardon",
    " please ": "I request",
    " kindly ": "I request",
    " would you mind ": "I request",
    " may I ": "I request",
    " i'm ": "I am",
    " cya ": "goodbye"
  };

var chatbox = document.getElementById("TosAI");
var userinput = document.getElementById("userinput");

function send() {
    var message = userinput.value;
    userinput.value = "";
    var response = "I'm sorry, I don't understand.";
    if (message == "Hello") {
        response = "Hi there!";
    } else if (message == "How are you?") {
        response = "I'm doing well, thank you.";
    } else if (message == "Who are you?") {
        response = "I am Noss-E, an AI interface created by TahjaeDev, I can write stuff for you, but I am still in beta";
    } else if (message == "Make a Video")
        response = "Sorry I cant make a video yet."
    
    var messageElement = document.createElement("p");
    messageElement.innerHTML = "<strong>You:</strong> " + message;
    var responseElement = document.createElement("p");
    responseElement.innerHTML = "<strong>Noss-E:</strong> " + response;
    chatbox.appendChild(messageElement);
    chatbox.appendChild(responseElement);
    chatbox.scrollTop = chatbox.scrollHeight;
    
};
function typeWriter() {
  if (i < response.length) {
    responseElement.innerHTML += response.charAt(i);
    i++;
    setTimeout(typeWriter, 25);
 }
}
  typeWriter()
}
