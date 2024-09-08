import { Phone } from "./Phone";
import { PhoneWithCamera } from "./PhoneWithCamera";
import { PhoneWithRadio } from "./PhoneWithRadio";

// Create objects
const myFirstPhone = new Phone();
const myPhoneWithCamera = new PhoneWithCamera();
const myPhoneWithRadio = new PhoneWithRadio(myFirstPhone);

//Phone basic functionalities
console.log("\n===Basic Phone===");

// Turn Phone ON/OFF
myFirstPhone.togglePower();
console.log(`The phone is ${myFirstPhone.getOnOff()}`);

myFirstPhone.togglePower();
console.log(`The phone is ${myFirstPhone.getOnOff()}`);

// Check the battery and make a call
console.log(`The phone battery is ${myFirstPhone.getBattery()}%`);
console.log(myFirstPhone.makeCall());

// Try sending a message
console.log(myFirstPhone.sendMessage());

//Phone With Camera funtionalities
console.log("\n===Phone With Camera===");

// Take a picture and show the remaining battery
console.log(`Picture taken, battery is now ${myPhoneWithCamera.takePicture()}%`);
console.log(`Picture taken, battery is now ${myPhoneWithCamera.takePicture()}%`);

// Turn the phone with camera OFF
myPhoneWithCamera.togglePower();
console.log(`The phone with camera is ${myPhoneWithCamera.getOnOff()}`);

// Phone with Radio functionalities
console.log("\n=== Phone with Radio ===");

// Turn the phone with radio ON
myPhoneWithCamera.togglePower();
console.log(`The phone with radio is ${myPhoneWithCamera.getOnOff()}`);

// Check the current frequency
console.log(`Current frequency: ${myPhoneWithRadio.getCurrentFrequency()} MHz`);

// Change the frequency and show the updated value
console.log(`New frequency: ${myPhoneWithRadio.changeFrequency()} MHz`);
console.log(`Updated frequency: ${myPhoneWithRadio.getCurrentFrequency()} MHz`);


