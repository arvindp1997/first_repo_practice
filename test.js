function convertTemp1(tempValue,Unit){
    var ans = (Unit == 'K')? (273.15+tempValue):((Unit =='C') ?(tempValue-273.15) :NULL);
    return ans;
  
    }
    
    console.log(convertTemp1(35, 'K'));
    console.log(convertTemp1(308, 'C'));


    //constructor function
function Student(firstName, lastName, rollNo, sex,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.rollNo = rollNo;
    this.sex = sex;
    this.dob = new Date(dob);

    this.getBirthYear = function() {
        return this.dob.getFullYear();
        }
        
        this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
        }
        
        this.getAge = function() {
            return  (new Date() - this.dob)/(31536000000); //converting total miliseconds to years
        }
    }
    
    //Instantiate object
    const student1 = new Student('aravind','pandit',123,'M','03-24-1997');
    const student2 = new Student('abhishek','pandit',456,'M','03-24-1994');

  (student1.getAge()> student2.getAge())? console.log(student1.getFullName()) : console.log(student2.getFullName());

  function Check_eligible(min_age){
     (student1.getAge() >= min_age)?console.log('student is eligible'):console.log('student not eligible');
  }

  Check_eligible(22);
  

  let count=0;
  class User{

    constructor(username, email, password,membershipactivetilldate  ){
      this.username = username;
      this.email =email;
      this.password = password;
      this.membershipactivetilldate = new Date();
   }
   
    
    setOnRegistrattionMembership(){
        var someDate = this.membershipactivetilldate;
        var numberOfDaysToAdd = 31;
        someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 

    }


    renewMembership(type){
        var someDate = this.membershipactivetilldate;
        var numberOfDaysToAdd=(type == 'standard')? 31:(type == 'yearly')?356:0;
        someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
       
    }
     static countUsers(){
     console.log(`there are ${count} users registered` );
   }
   
     register(){
         count++;
       console.log(this.username + ' is now registered');
   }
   
   }
   
   let bob = new User('bob','bob@gmail.com','12345');
   let alice = new User('alice','alice@gmail.com','12345');
   bob.register();
   alice.register();
   User.countUsers();
   bob.setOnRegistrattionMembership();
console.log(bob.membershipactivetilldate);
bob.renewMembership('standard');
console.log(bob.membershipactivetilldate);
bob.renewMembership('yearly');
console.log(bob.membershipactivetilldate);

   class Member extends User {

    constructor(username, email, password,memberPackage){
       super(username, email, password);
       this.package =memberPackage;   
   }
   
      getPackage(){
       console.log(this.username + ' is subscribed to ' + this.package);
   }
   
   }
   
   let mike = new Member('mike','mike@gmail.com','12345','standard pkg');
   mike.getPackage();
   mike.register();


   var myDate = new Date();

console.log(myDate);

var myPastDate = new Date(1545,11,2,10,30,15);
var myFutureDate = new Date(2515,0,31,10,30,15);

console.log(myPastDate);
console.log(myFutureDate);



var someDate = new Date();
var numberOfDaysToAdd = 31;
someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 

console.log(someDate);