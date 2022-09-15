import {useState} from 'react';

function PrijavaForm(props){

    const [tim, setTim] = useState({
        naziv: '',
        kapiten: '',
        igrac1: '',
        igrac2: '',
        igrac3: '',
        igrac4: ''
    });


    return (
        <div>
            <div id="formaprijava">

                <div className="redforme">

                <div className="clan">
                <label class="a">Naziv tima</label>
                <input type="text"  className="form-control" value={tim.naziv} onChange={e => setTim({...tim, naziv: e.target.value})} />
                </div>

                </div>

                <div className="redforme">
                <div className="clan">
                <label class="a">Kapiten</label>
                <input type="text"  className="form-control" value={tim.kapiten} onChange={e => setTim({...tim, kapiten: e.target.value})} />
                </div>
                </div>

                <div className="redforme">
                <div className="clan">
                <label class="a">Igrač</label>
                <input type="text"  className="form-control" value={tim.igrac1} onChange={e => setTim({...tim, igrac1: e.target.value})}   />
                </div>

                </div>

                <div className="redforme">

                <div className="clan">
                <label class="a">Igrač</label>
                <input type="text"  className="form-control" value={tim.igrac2} onChange={e => setTim({...tim, igrac2: e.target.value})}  />
                </div>
                </div>

                <div className="redforme">
                <div className="clan">
                <label class="a">Igrač</label>
                <input type="text"  className="form-control" value={tim.igrac3} onChange={e => setTim({...tim, igrac3: e.target.value})}/>
                </div>
                </div>
                <div className="redforme">
                <div className="clan">
                <label  class="a">Igrač</label>
                <input type="text" className="form-control" value={tim.igrac4} onChange={e => setTim({...tim, igrac4: e.target.value})}/>
                </div>
                
                </div>
                <button onClick={() => props.prikaziPrijavu(tim)} className="btn btn-danger" id="btnprijavitim">Prijavi se</button>

            </div>
        </div>
    )
}

export default PrijavaForm;