import React, {useEffect, useState} from 'react'
import {db} from '../firebase'
import {collection, doc, onSnapshot, query} from 'firebase/firestore'

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
            <h2>Manillas disponibles:</h2>
        </div>
    )
    }

export default Producto

