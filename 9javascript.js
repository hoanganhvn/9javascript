// Start HW1
// function checkAge(age) {(age > 18) ? (true) : (confirm('Did parents allow you?'));}




// // Start HW2
// function min(a,b){
//     alert(Math.min(a,b));
// }
// min(5,6)




// // Start HW3
// ask = (question,yes,no) => {confirm(question) ? yes() : no()};
  
// ask("Do you agree?",() => alert("You agreed."),() => alert("You canceled the execution."));




// // Start HW4
checkUserName = () => {
    let userName = prompt("Username:");
    (userName == "admin") ? (checkPassword()) : (alert("I do not know you!!!"));
    
    function checkPassword(){
        let password = prompt("Password:");
        (password == "cafedev") ? (alert("Welcome!!!")) : ((typeof password === "string") ? alert("Wrong password") : (alert("Fail")));
    }
}
checkUserName();