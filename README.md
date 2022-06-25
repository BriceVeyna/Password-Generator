# Password-Generator
This application can be used to generate random passwords based on specified input criteria.

## Description
This project takes the static base for a webpage to generate random passwords and adds the javascript needed to make it interactive. The site prompts the user with queries about the desired length of password and type of characters to include (lower case, upper case, numbers, and special characters). It then generates a random password based on the user inputs and displays it.

## Deployed Application
[Password-Generator](https://briceveyna.github.io/Password-Generator/)

## Usage
There were many javascript operations demonstrated throughout the course of this project that interact to produce the end product. Some of these include the prompt, confirm, and alert methods to display dialog boxes. These methods, such as the one shown below:

![Confirm](./Confirm_Character_Type.png)

can be used to display a message to the user and gather information from them in response. Another useful tool is also on display, as the user respose is displayed to the console for developer feedback as to the functionality of the program. Boundary condition checks are also another neccessary component in an application such as this. In the below example, an alert message is sent to the user if no character types are selected and the function is looped back to the start. If there is at least one, it is allowed to continue.

![Check Loop](./Character_Type_Check_Loop.png)

The actual random number generation is accomplished by applying a random number operation to the length of an array containing the character types set up in the confirm statements. This number is then used to select a character type array. A similar process is done for subsequently pulling a value from that array to be used as the final character value.

![Random Number Generation](./Random_Number_Character_Type.png)

## Technology Used
JavaScript

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Developer Information
[LinkedIn](https://www.linkedin.com/in/brice-veyna/)
[Portfolio](https://briceveyna.github.io/Portfolio/)