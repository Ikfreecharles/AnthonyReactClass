const SetCounter = (props) => {
   return (
      <div>
         <button onClick={() => props.handleIncrease()}>Increase</button>
         <button onClick={() => props.handleReset()}>Reset</button>
         <button onClick={() => props.handleDecrease()}>Decrease</button>
      </div>
   );
};

export default SetCounter;
