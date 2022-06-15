// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching( driver, named){
    return (driver.filter(driver=> driver.toLowerCase() === named.toLowerCase()))
}
function fuzzyMatch(driver, Named) {
    return (driver.filter(driver=>driver.toLowerCase().indexOf(Named.toLowerCase())===0))
    
}function matchName(driver ,Name) {
    return (driver.filter(driver=>driver.name===Name))
}