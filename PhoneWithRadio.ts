import { Phone } from "./Phone";

export class PhoneWithRadio {
    private currentFrequency: number;
    private phone: Phone;

    constructor(phone: Phone) {
        this.currentFrequency = 99.9;
        this.phone = phone;
    }

//Return the radio frequency
    getCurrentFrequency(): number {
        return this.currentFrequency;
    }

//Change the radio frequency by 0.1 and resets to 88.0 if it exceeds 108.0
    changeFrequency(): number {
        if (this.phone.getOnOff() === "ON" && this.phone.getBattery() >= 1) {
            let newFrequency: number = this.currentFrequency + 0.1;

            if (newFrequency > 108.0) {
                newFrequency = 88.0;
            }

            this.currentFrequency = newFrequency;
            return this.currentFrequency;
        }
        return this.currentFrequency;


    }
}