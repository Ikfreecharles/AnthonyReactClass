const Navbar = (props) => {
   console.log(props);
   return (
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
         <ul style={{ display: "flex", listStyle: "none" }}>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
         </ul>
         <p>{props.username}</p>
      </nav>
   );
};

export default Navbar;
