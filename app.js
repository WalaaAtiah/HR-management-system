'use strict';

let ID=999;
function Employee (name,department,level,image){
this.idNumber ;
this.name =name;
this.department=department;
this.level=level;
this.image=image;
this.net;
Employee.all.push(this)
}

Employee.all=[]

Employee.prototype.employeeID =function () {
    ID++
    this.idNumber=ID;
   
}

Employee.prototype.salary = function(){
    let salary;
    switch (this.level){
        
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
     this.net= netSalary;
}


let employee1 =new Employee("Ghazi Samer" ,"Administration" ,"Senior" ,"https://images.wisegeek.com/man-at-computer-on-phone.jpg");
let employee2 =new Employee("Lana Ali" ,"Finance" ,"Senior" ,"https://www.virginiamedia.com/wp-content/uploads/sites/5/2018/11/women-financial-planning.jpg");
let employee3 =new Employee("Tamara Ayoub" ,"Marketing" ,"Senior" ,"https://th.bing.com/th/id/R.c6186955e04e29f382cfc45d2b698e70?rik=6TWKIQMDhKFBxw&riu=http%3a%2f%2fbestbusinesscommunity.com%2fwp-content%2fuploads%2f2018%2f01%2fDigital-Marketing-Agency-in-Tirupur.jpg&ehk=Br11DiVojnvyuX4QaG9BbUx9cgJNBB%2bKyYmD%2f1TqnG0%3d&risl=&pid=ImgRaw&r=0");
let employee4 =new Employee("Safi Walid" ,"Administration" ,"Mid-Senior" ,"https://thumbs.dreamstime.com/z/personal-administration-handsome-man-doing-his-such-as-taxes-paying-bills-checking-his-finances-kitchen-table-33704826.jpg");
let employee5 =new Employee("Omar Zaid" ,"Development" ,"Senior" ,"https://media.istockphoto.com/photos/software-programming-bearded-man-working-on-computer-in-it-office-at-picture-id1143979354");
let employee6 =new Employee("Rana Saleh" ,"Development" ,"Junior" ,"https://www.management-qualifizierung.de/_Resources/Persistent/3/5/3/4/3534d53fc82e80645bdada1f61ac8ecd988fc2d1/Wirtschaftsfachwirt%20IHK%20Aufstiegsfortbildung%20-848x444.jpg");
let employee7 =new Employee("Hadi Ahmad" ,"Finance" ,"Mid-Senior" ,"https://th.bing.com/th/id/OIP.N1zD2UpPeD6CHqKG1b5J2gHaE0?pid=ImgDet&rs=1");





Employee.prototype.render = function(){
    document.write(`<h2 style=font-size:30px> Employee ID : ${this .idNumber}</h2>`);
    document.write(`<h2 style=font-size:30px> Employee ID : ${this .level}</h2>`);
    document.write(`<h2 style=font-size:30px> Employee name : ${this .name}</h2>`);
    document.write(`<h2 style=font-size:30px> Department : ${this.department}</h2>`);
    document.write(`<h2 style=font-size:30px> Employee salary : ${this.net}</h2>`);
    document.write(`<h2 style=font-size:30px> --------------------------------------------------</h2>`);
    document.write(`<br>`);

}



for(let i=0;i<Employee.all.length;i++){
    Employee.all[i].employeeID();
    Employee.all[i].salary();
    Employee.all[i].render();
}











