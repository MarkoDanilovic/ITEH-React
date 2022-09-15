import { Link } from "react-router-dom";

function Pocetna(){
    return (
        <div>
                <Link to={"/oturniru"}>
                <img id="slikahome" src="https://rur.rs/wp-content/uploads/2018/11/csgo.png" alt="logoturnira" />
                </Link>
        </div>
    )
}

export default Pocetna;