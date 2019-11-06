function getuserChoice(userInput){
    userInput=userInput.toLowerCase();
    if(userInput==='beer' || userInput==='human' || userInput==='gun')
    {
        return  userInput;
    }
    else
    {
        return "ENter a valid input";
    }
}
function getComputerChoice()
{
    var Choice=Math.floor(Math.random()*3 );
    if(Choice===0)
    {
        return 'beer';
    }
    if(Choice===1)
    {
        return 'human';
    }
    else
    {
        return 'gun';
    }
}
function Determinewinner(userChoice,ComputerChoice)
{
    if(userChoice==ComputerChoice)
    {
        return "It is tie";
    }
    if(userChoice=="beer")
    {
        if(ComputerChoice=="gun")
        {
            return 'You have been shot by a gun';
        } else {
            return 'You have mauled a human';
        }
    }
    if (userChoice === 'human') {

        if (computerChoice === 'bear') {
            return 'You have been mauled by a bear';
        } else {
            return 'You have disarmed a gun';
        }
    }
    if (userChoice === 'gun')
    {

        if (computerChoice === 'human') {
            return 'Your gun has been disarmed';
        } else {
            return 'You have shot a bear';
        }
    }
}
function playGAme()
{
    var input = prompt("Enter beer or human or gun");

    //getuserChoice(prompt);
    //getComputerChoice();
    console.log(Determinewinner(getuserChoice(input),getComputerChoice()));
}
playGAme();