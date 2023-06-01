import React, {useEffect, useState} from 'react'
import {db} from '../firebase'
import {collection, doc, onSnapshot, query} from 'firebase/firestore'

const [dijes, setDijes] = useState([]);
const [materialSeleccionado, setMaterialSeleccionado] = useState('');
const [dijeSeleccionado, setDijeSeleccionado] = useState('');
const [tipoSeleccionado, setTipoSeleccionado] = useState('');
const [pagoSeleccionado, setPagoSeleccionado] = useState('');
const [opcionesSeleccionadas, setOpcionesSeleccionadas] = useState('');

const Producto = () => {

    useEffect(() => {
        const obtenerDijes = async() => {
            try{ await onSnapshot(
                collection(db, 'manillas'), (query) =>{
                    setDijes(query.docs.map((doc) => ({...doc.data(), id:doc.id})))
                })
            }catch(error){
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
            
            <h1>MANILLAS LA BALLENA AZUL</h1>
            <hr/>
            <img src="https://cdnx.jumpseller.com/urbenmood/image/6850674/PS3493_Manilla_Pulsera_Hombres_Vintage_Cuero_Gancho_Marron_20cm.png?1684679556" alt="Manilla cuero" width="300" height="200"/>
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
        </div>
    )
    }

export default Producto