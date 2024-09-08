# Phone POO Project

This project is a simple demonstration of object-oriented programming (OOP) concepts in TypeScript, using different types of phones and their functionalities.

## Project Overview

The project includes three main classes:

1. **Phone**: 
   - Basic phone functionalities such as turning the phone on/off, checking the battery, making a call, and sending a message.

2. **PhoneWithCamera** (inherits from Phone):
   - Adds the ability to take pictures, which reduces the battery by 5%.

3. **PhoneWithRadio** (composition with Phone):
   - Adds functionality for a radio, allowing the user to check the current frequency and change it within a specific range (88.0 MHz to 108.0 MHz).

## Features

- **Toggle the phone power**: Turn the phone ON or OFF.
- **Make calls**: Place a call if the phone is ON and has sufficient battery.
- **Send messages**: Send a message if the phone is ON and has at least 1% battery.
- **Take pictures**: Use the phone with a camera to take a picture, which reduces the battery by 5%.
- **Check battery level**: Check the current battery percentage of the phone.
- **Use the radio**: Check the current frequency of the radio and change it within the valid range (88.0 MHz to 108.0 MHz).

## How to Use

1. Clone the repository.
2. Run the project using `ts-node` to execute the main file:
   ```bash
   ts-node ./main.ts
