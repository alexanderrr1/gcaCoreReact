import React from "react";
import axios from 'axios';
import { library } from "@fontawesome/fontawesome-free";
import { Filter } from "./Filter";
import { Table, Button } from "react-bootstrap";
import '../stylesheets/merge.css';
import { useState, useEffect } from "react";
import { NavLink } from "react-bootstrap";

const getData = async () => {
    const {data} = await axios.get('data.json'); 
    const info = data.map( merge => {
        /* return {
            id: merge._id.$oid,
            user: merge.user.name,
            project: merge.project.name
        } */
        return {...merge}
    })
    return info;
}   

export const Merge = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });
 
    useEffect(() => {
        getData().then( data => {
            setState({
                data: data,
                loading: false
            })
        })
    }, []);

    return(
        <>
            <div id='table' className='container-shadow'>
                <Table striped bordered hover>
                        <thead>
                            <TableHead />
                        </thead>
                        <tbody>
                            <TableBody state={state.data}/> 
                        </tbody>
                </Table>
            </div>
        </>
    );
}

const TableHead = () => {
    return (
        <tr>
            <th>Id</th>
            <th>Nombre del Usuario</th>
            <th>Origen del projecto</th>
            <th>Destino del repositorio</th>
            <th>Fecha del atributos</th>
            <th>Estado del merge</th>
            <th>Última actualización del merge</th>
            <th>Branch Origen</th>
            <th>Branch Destino</th>
            <th>Versión</th>
            <th></th>
        </tr>
    );
}

const TableBody = ({state}) => {
    console.log(state);
    return state.map( (merge) => (
        // <tr key={`tr-${merge.id}`}>
        //     <td>{merge._id}</td>
        //     <td>{merge.user.name}</td>
        //     <td>{merge.}</td>
        //     <td>{merge.project.name}</td>
        //     <td>{merge.repository.name}</td>
        //     <td>{merge.attributes.id}</td>
        //     <td>{merge.__v}</td>
        //     <td>
        //         <Button variant={"info"}>Info</Button>{' '}
        //     </td>
        // </tr>
        <tr key={`tr-${merge._id.$oid}`}>
            <td>{merge._id.$oid}</td>
            <td>{merge.user.name}</td>
            <td>{merge.project.name}</td>
            <td>{merge.repository.name}</td>
            <td>{merge.attributes.id}</td>
            <td>{merge.attributes.merge_status}</td>
            <td>{merge.attributes.updated_at.$date}</td>
            <td>{merge.attributes.source_branch}</td>
            <td>{merge.attributes.target_branch}</td>
            <td>{merge.__v}</td>
            <td><NavLink to="">Ojito</NavLink></td>
        </tr>
    ));
}