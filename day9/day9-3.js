//Thay thế các Function bằng các Arrow function
ask = (question, yes, no) => (confirm(question)) ? yes() : no();
ask(
    "Do you agree?",
    () =>  alert("You agrees."),
    () =>  alert("You canceled the execution.")
);    
