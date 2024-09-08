

export class Phone{
    protected isOn:boolean;
    protected battery:number;



constructor(isOn:boolean=true, battery:number=100){
    this.isOn=isOn;
    this.battery=battery;
}

// Returns the current state of the phone.
getOnOff():string{
    return this.isOn ? "ON" : "OFF";
}

//Toggles the power 
togglePower():void{
    this.isOn = !this.isOn;
}

//returns battery level
getBattery():number{
    return this.battery;
}

//send message 
sendMessage():string{
    if(this.isOn === true && this.getBattery() >= 1){
        return "Message sent";
    }else{
        return "We can't send the message";
    }
}

//Make a call
makeCall():string{
    if(this.isOn === true && this.getBattery() >=1){
        return "Calling....";
    }else{
        return "We can't make the call";
    }
}

}