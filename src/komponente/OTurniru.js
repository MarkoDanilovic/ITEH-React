import TekstOTurniru from "./TekstOTurniru";

function OTurniru(){

   const tekst = "U igranoci GamePub koja se nalazi u tržnom centru Stadion na Voždovcu, odigraće se CS:GO turnir 23. i 24. aprila. Broj ekipa je ograničen na 16, odnosno bice 4 grupe po 4 tima. Ucesce kosta 50e, odnosno 6000 dinara. Mozete se prijaviti klikom na dugme ispod."

    return (
        <div>
            <TekstOTurniru tekst={tekst} />
        </div>
    )
}

export default OTurniru;