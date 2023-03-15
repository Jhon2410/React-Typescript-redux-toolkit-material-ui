// middleware/loggerMiddleware.ts
const loggerMiddleware = (store : any) => (next : any) => (action : any) => {
    console.log('Action:', action);
    const result = next(action);
    console.log('New state:', store.getState());
    return result;
  };
  
  export default loggerMiddleware;
  