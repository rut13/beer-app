/***
 * Cant get this to work in ts so we'll use Java
 */
export const logger = (message) => {
    console.log(`Logger: ${message}`);
  };

export const simpleLogger = (message) => {
  console.log(`Logger: ${message}`);
};
  
  export const errorLogger = (errorMessage) => {
    console.error(`Error: Something went wrong`);
  };
  