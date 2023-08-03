import { Link } from "react-router-dom";

export default function NotFoud() {
  return (
    <div>
        <h2>Page not found!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta optio quisquam iusto magni fugit! Doloremque eligendi, repellendus saepe itaque non provident accusantium, perferendis voluptatibus dolores illum animi nesciunt atque culpa!</p>
    
        <p>Go to the <Link to="/">Homepage</Link></p>
    </div>
  )
}
