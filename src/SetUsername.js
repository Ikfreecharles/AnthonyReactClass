const SetUsername = (props) => {
   return <input type="text" onChange={(e) => props.handleChange(e)} />;
};

export default SetUsername;
