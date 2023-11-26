# fluent-v8-search-react-test-libary-issue

This repository is a minimal reproduction of an issue with the `onSearch` callback from "@fluentui/react" `SearchBox` that shows that when testing with react testing library the `onSearch` prop doesn't react to the enter key, while a regular `onKeyUp` does.

## Running the tests

1. Clone the repository
2. Run the following to install dependencies:

   ```
   npm install
   ```

3. Run the following command to run the tests:
   ```
   npm run test
   ```

After doing this you will see that the test that is using `onKeyPress` passes, while the other doesn't.

![Alt text](<CleanShot 2023-11-27 at 09.59.11.png>)
