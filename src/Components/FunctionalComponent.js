const FunctionalComponent = (props) => {
   // const [state, setState] = useState({
   //    name: "Anthony",
   //    age: 30,
   //    gender: "Male",
   //    nationality: "German",
   // });

   return (
      <div>
         <form>
            <input type="text" />
         </form>
         {props.state.age}
      </div>
   );
};

export default FunctionalComponent;
