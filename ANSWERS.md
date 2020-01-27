- Why would you use class component over function components (removing hooks from the question)?

   > Answer: Class components give you access to React's lifecycle methods, so they're able to handle state. Functional components are stateless so they're not able to handle their own state.


- Name three lifecycle methods and their purposes.

   > Answers: 

      1. **constructor:**
      The creation of the component, only runs once with the purpose of loading initial data, state & class methods
      2. **componentWillUnmount:**
      The last lifecycle method that runs before the component is destroyed.
      3. **render:**
      The only required lifecycle method. Runs anytime the component updates.

- What is the purpose of a custom hook?

   > Answer: Custom hooks are useful because they allow you to create reuseable stateful logic, which helps keep your code DRY.

- Why is it important to test our apps?

   > Answer: Writing tests for apps helps avoid unnecessary and undetected problems in your software as the codebase grows and increases in complexity over its lifetime.
