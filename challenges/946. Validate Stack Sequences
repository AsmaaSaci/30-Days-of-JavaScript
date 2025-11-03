const validateStackSequences = (pushed, popped) => {
  let stack = [];
  let i = 0;
  for (let num of pushed) {
    stack.push(num); // we are pushing the number to the stack
    console.log(stack);
    while (stack.length > 0 && stack[stack.length - 1] === popped[i]) {
      // if the last element of the stack is equal to the popped element
      stack.pop(); // we are popping the element

      i++; // we are incrementing the index of the popped element
    }
  }
  return stack.length === 0; // if the stack is empty then we have a valid sequence
};
