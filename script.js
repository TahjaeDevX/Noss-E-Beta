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
    } else if (message == "What's your name?") {
        response = "My name is TosAI. Made By TahjaeDev";
    } else if (message == "Who are you?")
        response = "I am TosAI, an AI interface created by TahjaeDev, I can write stuff for you, but I am still in beta";
    } else if (message == "Make a Video")
        response = "Sorry I cant make a video yet.";
    
    var messageElement = document.createElement("p");
    messageElement.innerHTML = "<strong>You:</strong> " + message;
    var responseElement = document.createElement("p");
    responseElement.innerHTML = "<strong>TosAI:</strong> " + response;
    chatbox.appendChild(messageElement);
    chatbox.appendChild(responseElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}
