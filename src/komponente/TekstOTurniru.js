import {Link} from 'react-router-dom';

function TekstOTurniru(props){
    return (
        <div>

            <img id="slikaoturniru" src="https://helloworld.rs/public/media/2021/01/slika-turnira-672x372.png" />

            <p id="tekstoturniru">
                {props.tekst}
            </p>

           <Link to={"/prijava"}><button className="btn btn-danger" id="btnekipa">Prijavi ekipu</button></Link>

        </div>
    )
}

export default TekstOTurniru;