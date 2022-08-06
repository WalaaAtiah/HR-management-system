'use strict';

let ID=999;
function Employee (name,department,level,image){
this.idNumber ;
this.name =name;
this.department=department;
this.level=level;
this.image=image;
this.net;
this.num;
Employee.all.push(this)
}

Employee.all=[]

Employee.prototype.employeeID =function () {
    ID++
    this.idNumber=ID;
    this.num=ID-1000;
   
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


let employee1 =new Employee("Ghazi Samer" ,"Administration" ,"Senior" ,"/img/Ghazi.jpg");
let employee2 =new Employee("Lana Ali" ,"Finance" ,"Senior" ,"/img/Lana.jpg");
let employee3 =new Employee("Tamara Ayoub" ,"Marketing" ,"Senior" ,"/img/Tamara.jpg");
let employee4 =new Employee("Safi Walid" ,"Administration" ,"Mid-Senior" ,"/img/Safi.jpg");
let employee5 =new Employee("Omar Zaid" ,"Development" ,"Senior" ,"/img/Omar.jpg");
let employee6 =new Employee("Rana Saleh" ,"Development" ,"Junior" ,"/img/Rana.jpg");
let employee7 =new Employee("Hadi Ahmad" ,"Finance" ,"Mid-Senior" ,"/img/Hadi.jpg");




const main=document.getElementsByTagName('main');
Employee.prototype.render = function(){
    const divEl = document.createElement('div');
    
    main[0].appendChild(divEl);

    const imgEl = document.createElement('img');
    imgEl.src = this.image;
    imgEl.alt = this.name;

    divEl.appendChild(imgEl);
    imgEl.className="design";
    const pEl = document.createElement('p');
    pEl.textContent = `Name  : ${this.name} -ID: ${this.idNumber}`;
    divEl.appendChild(pEl);
    const pE2 = document.createElement('p');
    pE2.textContent = `Deperatment :${this.department} -Level :${this.level}`;
    divEl.appendChild(pE2);
    const pE3 = document.createElement('p');
    pE3.textContent = `${this.net}`;
    divEl.appendChild(pE3);
}



for(let i=0;i<Employee.all.length;i++){
    Employee.all[i].employeeID();
    Employee.all[i].salary();
    Employee.all[i].render();
}











