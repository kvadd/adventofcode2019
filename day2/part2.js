// Memory
const inputs = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,9,19,23,1,13,23,27,1,5,27,31,2,31,6,35,1,35,5,39,1,9,39,43,1,43,5,47,1,47,5,51,2,10,51,55,1,5,55,59,1,59,5,63,2,63,9,67,1,67,5,71,2,9,71,75,1,75,5,79,1,10,79,83,1,83,10,87,1,10,87,91,1,6,91,95,2,95,6,99,2,99,9,103,1,103,6,107,1,13,107,111,1,13,111,115,2,115,9,119,1,119,6,123,2,9,123,127,1,127,5,131,1,131,5,135,1,135,5,139,2,10,139,143,2,143,10,147,1,147,5,151,1,151,2,155,1,155,13,0,99,2,14,0,0];
let memory = [];

const OPERATIONS = {
    1: (param1, param2) => param1 + param2, // Addition
    2: (param1, param2) => param1 * param2, // Multiplication
};

function reverseEngineer() {
    let noun = 0;
    let verb = 0;
    let result = 0;
    const target = 19690720;
    let output = 0;

    while(noun <= 99) {
        while(verb <= 99) {
            memory = inputs.map(int => int);

            memory[1] = noun;
            memory[2] = verb;

            result = runComputer();
            
            if (result === target) {
                output = 100 * noun + verb;
                
                break;
            }

            verb++;
        }

        verb = 0;
        noun++;
    }

    return output;
}

function runComputer() {
    let result = 0;
    let address = 0;

    while(memory[address] !== 99) {
        result = compute(memory, memory[address], memory[address + 1], memory[address + 2], memory[address + 3]);
        address += 4;
    }

    return result;
}

function compute(memory, optcode, param1, param2, param3) {
    const operation = OPERATIONS[optcode];
    const output = operation(memory[param1], memory[param2]);

    // Write to memory
    memory[param3] = output;

    return output;
}


console.log(reverseEngineer());