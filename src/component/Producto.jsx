import React from 'react'
import { useState, useEffect } from 'react';
import {db} from '../firebase'
import {collection, doc, onSnapshot, query} from 'firebase/firestore'

const Producto = () => {

const [dijes, setDijes] = useState([]);
const [materialSeleccionado, setMaterialSeleccionado] = useState('');
const [dijeSeleccionado, setDijeSeleccionado] = useState('');
const [tipoSeleccionado, setTipoSeleccionado] = useState('');
const [pagoSeleccionado, setPagoSeleccionado] = useState('');
const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState('');

    useEffect(() => {
        const obtenerDijes = async() => {
            try{ await onSnapshot(
                collection(db, 'manillas'), (query) =>{
                    setDijes(query.docs.map((doc) => ({...doc.data(), id:doc.id})))
                })
            }catch(e){
            console.log(e)
            }
        }
        obtenerDijes();
     }, [])


    useEffect(() => {
        const opciones = `${materialSeleccionado} ${dijeSeleccionado} ${tipoSeleccionado} ${pagoSeleccionado}`;
        setOpcionesSeleccionadas(opciones);
    }, [materialSeleccionado, dijeSeleccionado, tipoSeleccionado, pagoSeleccionado]);

    return (
        <div>

            <div style={{ display: 'flex' }}></div>
            
            <h1 style={{textAlign: 'center'}}>BALLENA AZUL STORE</h1>
            <hr/>
            <img src="https://cdn.shopify.com/s/files/1/0710/2477/1391/products/manillarustica_grande.jpg?v=1675646400" alt="Manilla cuero" width="300" height="200" style={{textAlign:"center"}}/>
            <hr/> 
            <label for="mate">Material:</label>
            <select id="mate" onChange={(e) => setMaterialSeleccionado(e.target.value)}>
            <option value="vac"> - </option>
            <option value="c">Cuero</option>
            <option value="k">Cuerda</option>
            </select>
            <hr/>
            <label for="dije">Dije:</label>
            <select id="dije" onChange={(e) => setDijeSeleccionado(e.target.value)}>
            <option value="vac"> - </option>
            <option value="a">Ancla</option>
            <option value="m">Martillo</option>
            </select>
            <hr/>
            <label for="tipo">Tipo:</label>
            <select id="tipo" onChange={(e) => setTipoSeleccionado(e.target.value)}>
            <option value="vac"> - </option>
            <option value="o">Oro</option>
            <option value="or">Oro rosado</option>
            <option value="p">Plata</option>
            <option value="n">Niquel</option>
            </select>
            <hr/>
            <label for="pago">Metodo de pago:</label>
            <select id="pago" onChange={(e) => setPagoSeleccionado(e.target.value)}>
            <option value="vac"> - </option>
            <option value="d">Dolares</option>
            <option value="p">Pesos</option>
            </select>

            <ul className="list-group">
                    {  
                        dijes.map(item =>(
                            <div className="list-group-item" key={item.id}>
                                <h1 className="lead">{item[opcionesSeleccionadas]}</h1>
                            </div>
                        ))   
                    }        
            </ul> 

        </div>
    )
    }

export default Producto