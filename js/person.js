function person(){
    this.firstName = 'firstName';
    this.lastName = 'lastName';
}

person.prototype.setFirstName = function(firstName){
    this.firstName = firstName;
}

person.prototype.setLastName = function(lastName){
    this.lastName = lastName;
}

person.prototype.getFirstName = function(){
    return this.firstName;
}

person.prototype.getLastName = function(){
    return this.lastName;
}

person.prototype.getFullName = function(){
    return this.getFirstName() + ' ' +  this.getLastName();
}

person.prototype.display = function(){
    if (this.displayFn){
       this.displayFn();
    }else{
        console.log(this.getFullName());
    }
}

person.prototype.setDisplayFn = function(displayFn){
    this.displayFn = displayFn;
}
