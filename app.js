'use strict';
let ID =999;
const employee1 = {
    "Employee ID" :function () {
       ID++
       return ID ;
    //if the unique id number BY USING RANDOM NUMBER
    // let ID = Math.floor(Math.random()*(9999-1000+1)) +1000;''
    // return ID;
    },
    "Employee Name" : "Ghazi Samer",
    "Employee department" : "Administration	",
    "Employee level" : "Senior",
    "Image URL" :"https://images.wisegeek.com/man-at-computer-on-phone.jpg" ,
    "Employee salary" : function(){
        let salary;
        switch (this["Employee level"]){
            
        case "Senior":
         salary = Math.floor(Math.random () *(2000-1500+1))+1500;
        break;
        case "Mid-Senior":
         salary = Math.floor(Math.random () *(1500-1000+1))+1000;
        break;
        case "Junior":
         salary = Math.floor(Math.random () *(1000-500+1))+500;
        break;
        }
        let netSalary = Math.floor(salary - salary * 7.5/100) ;
         return netSalary;

    } 
}

const employee2 = {
    "Employee ID" :function () {
       ID++
       return ID ;
        //if the unique id number BY USING RANDOM NUMBER
    // let ID = Math.floor(Math.random()*(9999-1000+1)) +1000;''
    // return ID;
    },
    "Employee Name" : "Lana Ali	",
    "Employee department" : "Finance",
    "Employee level" : "Senior",
    "Image URL" :"https://www.virginiamedia.com/wp-content/uploads/sites/5/2018/11/women-financial-planning.jpg" ,
    "Employee salary" : function(){
        let salary;
        switch (this["Employee level"]){
            
        case "Senior":
         salary = Math.floor(Math.random () *(2000-1500+1))+1500;
        break;
        case "Mid-Senior":
         salary = Math.floor(Math.random () *(1500-1000+1))+1000;
        break;
        case "Junior":
         salary = Math.floor(Math.random () *(1000-500+1))+500;
        break;
        }
        let netSalary = Math.floor(salary - salary * 7.5/100) ;
         return netSalary;

    } 
}
const employee3 = {
    "Employee ID" :function () {
       ID++
       return ID ;
     //if the unique id number BY USING RANDOM NUMBER
    // let ID = Math.floor(Math.random()*(9999-1000+1)) +1000;''
    // return ID;
    },
    "Employee Name" : "Tamara Ayoub	",
    "Employee department" : "Marketing",
    "Employee level" : "Senior",
    "Image URL" :"https://th.bing.com/th/id/R.c6186955e04e29f382cfc45d2b698e70?rik=6TWKIQMDhKFBxw&riu=http%3a%2f%2fbestbusinesscommunity.com%2fwp-content%2fuploads%2f2018%2f01%2fDigital-Marketing-Agency-in-Tirupur.jpg&ehk=Br11DiVojnvyuX4QaG9BbUx9cgJNBB%2bKyYmD%2f1TqnG0%3d&risl=&pid=ImgRaw&r=0" ,
    "Employee salary" : function(){
        let salary;
        switch (this["Employee level"]){
            
        case "Senior":
         salary = Math.floor(Math.random () *(2000-1500+1))+1500;
        break;
        case "Mid-Senior":
         salary = Math.floor(Math.random () *(1500-1000+1))+1000;
        break;
        case "Junior":
         salary = Math.floor(Math.random () *(1000-500+1))+500;
        break;
        }
        let netSalary = Math.floor(salary - salary * 7.5/100) ;
         return netSalary;
    } 
}
const employee4 = {
    "Employee ID" :function () {
       ID++
       return ID ;
     //if the unique id number BY USING RANDOM NUMBER
    // let ID = Math.floor(Math.random()*(9999-1000+1)) +1000;''
    // return ID;
    },
    "Employee Name" : "Safi Walid	",
    "Employee department" : "Administration	",
    "Employee level" : "Mid-Senior",
    "Image URL" :"https://thumbs.dreamstime.com/z/personal-administration-handsome-man-doing-his-such-as-taxes-paying-bills-checking-his-finances-kitchen-table-33704826.jpg" ,
    "Employee salary" : function(){
        let salary;
        switch (this["Employee level"]){
            
        case "Senior":
         salary = Math.floor(Math.random () *(2000-1500+1))+1500;
        break;
        case "Mid-Senior":
         salary = Math.floor(Math.random () *(1500-1000+1))+1000;
        break;
        case "Junior":
         salary = Math.floor(Math.random () *(1000-500+1))+500;
        break;
        }
        let netSalary = Math.floor(salary - salary * 7.5/100) ;
         return netSalary;
    } 
}
const employee5 = {
    "Employee ID" :function () {
       ID++
       return ID ;
     //if the unique id number BY USING RANDOM NUMBER
    // let ID = Math.floor(Math.random()*(9999-1000+1)) +1000;''
    // return ID;
    },
    "Employee Name" : "Omar Zaid",
    "Employee department" : "Development	",
    "Employee level" : "Senior",
    "Image URL" :"https://media.istockphoto.com/photos/software-programming-bearded-man-working-on-computer-in-it-office-at-picture-id1143979354" ,
    "Employee salary" : function(){
        let salary;
        switch (this["Employee level"]){
            
        case "Senior":
         salary = Math.floor(Math.random () *(2000-1500+1))+1500;
        break;
        case "Mid-Senior":
         salary = Math.floor(Math.random () *(1500-1000+1))+1000;
        break;
        case "Junior":
         salary = Math.floor(Math.random () *(1000-500+1))+500;
        break;
        }
        let netSalary = Math.floor(salary - salary * 7.5/100) ;
         return netSalary;

    } 
}
const employee6 = {
    "Employee ID" :function () {
       ID++
       return ID ;
        //if the unique id number BY USING RANDOM NUMBER
    // let ID = Math.floor(Math.random()*(9999-1000+1)) +1000;''
    // return ID;
    },
    "Employee Name" : "Rana Saleh",
    "Employee department" : "Development	",
    "Employee level" : "Junior",
    "Image URL" :"https://www.management-qualifizierung.de/_Resources/Persistent/3/5/3/4/3534d53fc82e80645bdada1f61ac8ecd988fc2d1/Wirtschaftsfachwirt%20IHK%20Aufstiegsfortbildung%20-848x444.jpg" ,
    "Employee salary" : function(){
        let salary;
        switch (this["Employee level"]){
            
        case "Senior":
         salary = Math.floor(Math.random () *(2000-1500+1))+1500;
        break;
        case "Mid-Senior":
         salary = Math.floor(Math.random () *(1500-1000+1))+1000;
        break;
        case "Junior":
         salary = Math.floor(Math.random () *(1000-500+1))+500;
        break;
        }
        let netSalary = Math.floor(salary - salary * 7.5/100) ;
         return netSalary;
    } 
}

const employee7 = {
    "Employee ID" :function () {
       ID++
       return ID ;
     //if the unique id number BY USING RANDOM NUMBER
    // let ID = Math.floor(Math.random()*(9999-1000+1)) +1000;''
    // return ID;
    },
    "Employee Name" : "Hadi Ahmad",
    "Employee department" : "Finance	",
    "Employee level" : "Mid-Senior",
    "Image URL" :"https://th.bing.com/th/id/OIP.N1zD2UpPeD6CHqKG1b5J2gHaE0?pid=ImgDet&rs=1" ,
    "Employee salary" : function(){
        let salary;
        switch (this["Employee level"]){
            
        case "Senior":
         salary = Math.floor(Math.random () *(2000-1500+1))+1500;
        break;
        case "Mid-Senior":
         salary = Math.floor(Math.random () *(1500-1000+1))+1000;
        break;
        case "Junior":
         salary = Math.floor(Math.random () *(1000-500+1))+500;
        break;
        }
        let netSalary = Math.floor(salary - salary * 7.5/100) ;
         return netSalary;

    } 
}
console.log ("Employee name :  " ,employee1["Employee Name"])
console.log ("Employee salary :  " ,employee1["Employee salary"]())
console.log("")
console.log ("Employee name :  " ,employee2["Employee Name"])
console.log ("Employee salary :  " ,employee2["Employee salary"]())
console.log("")
console.log ("Employee name :  " ,employee3["Employee Name"])
console.log ("Employee salary :  " ,employee3["Employee salary"]())
console.log("")
console.log ("Employee name :  " ,employee4["Employee Name"])
console.log ("Employee salary :  " ,employee4["Employee salary"]())
console.log("")
console.log ("Employee name :  " ,employee5["Employee Name"])
console.log ("Employee salary :  " ,employee5["Employee salary"]())
console.log("")
console.log ("Employee name :  " ,employee6["Employee Name"])
console.log ("Employee salary :  " ,employee6["Employee salary"]())
console.log("")
console.log ("Employee name :  " ,employee7["Employee Name"])
console.log ("Employee salary :  " ,employee7["Employee salary"]())
console.log("")



















