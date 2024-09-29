function greeting(greetingHandler) {
    greetingHandler;
}

function greetingHandler(name) {
    console.log("Good Morning", name);
}

greeting(greetingHandler("John"))
greeting(greetingHandler("Roman"))