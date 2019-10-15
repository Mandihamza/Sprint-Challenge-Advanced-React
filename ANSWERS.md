- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components give you access to React's lifecycle methods so they're able to handle state. Functional components are stateless so they're not able to handle their own state.


- [ ] Name three lifecycle methods and their purposes.

- constructor - 
    creation of the component, only runs once with the purpose of loading initial data, state & class methods
- componentWillUnmount - 
    last lifecycle method that runs before the component is destroyed.
- render - 
    the only required lifecycle method. Runs anytime the component updates.

- [ ] What is the purpose of a custom hook?

Custom hooks are useful because they allow you to create reuseable stateful logic, which helps keep your code DRY.

- [ ] Why is it important to test our apps?

Writing tests for apps helps avoid unnecessary and undetected problems in your software as the codebase grows and increases in complexity over its lifetime.
