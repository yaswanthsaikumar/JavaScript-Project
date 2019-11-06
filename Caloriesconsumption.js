function inputCaloriesByDay(day)
{
    switch(day)
    {
        case 'monday':
        return 3500;
        break;
        case 'tuesday':
        return 1500;
        break;
        case 'wednesday':
        return 5000;
        break;
        case 'thursday':
        return 1000;
        break;
        case 'friday':
        return 1200;
        break;
        case 'saturdy':
        return 900;
        break;
        case 'sunday':
        return 100;
        break;
        default:
            return "Enter correct day";
    }
}
function getTotalCalories()
{
    var total=inputCaloriesByDay('monday')+inputCaloriesByDay('tuesday')+inputCaloriesByDay('wednesday')+inputCaloriesByDay('thursday')+inputCaloriesByDay('friday')+inputCaloriesByDay('saturday')+inputCaloriesByDay('sunday');
    return total;
}
function idealCalories()
{
    var Ideal=1000;
    return Ideal*7;
}
function  Healthy()
{
    if(getTotalCalories()===idealCalories())
    {
        return "your good";
    }
    if(getTotalCalories()>idealCalories())
    {
        return "take less";
    }
    if(getTotalCalories()<idealCalories())
    {
        return "take more";
    }
}
console.log(Healthy());