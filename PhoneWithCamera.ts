import { Phone } from "./Phone";

export class PhoneWithCamera extends Phone{

    constructor(){
        super();
    }

//Take a picture
takePicture():number{
    if(this.isOn === true && this.getBattery() >= 5){
        this.battery = this.getBattery() -5;
        return this.battery;
    }else{
        return this.getBattery();
    }

    
}
}