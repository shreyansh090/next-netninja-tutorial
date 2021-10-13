import Link from "next/link";
const Navbar = () => {
    return  (
    <nav>
        <div className = "name">
         <h1>Ninja List</h1>
        </div>    
            <Link href = "/"><a>Home</a></Link>
            <Link href = "/about"><a>about</a></Link>
            <Link href = "/Ninjas"><a>Ninja List</a></Link>
    </nav>
     );
}
 
export default Navbar;