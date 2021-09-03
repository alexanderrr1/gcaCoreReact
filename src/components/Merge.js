import React from "react";
import { Filter } from "./Filter";
import { Table, Button } from "react-bootstrap";
import {mergeData} from "../data/data";
import '../stylesheets/merge.css';



export const Merge = () => {
    return(
        <>
            <Filter/>
            <div id='table' className='container-shadow'>
                <Table striped bordered hover>
                        <thead>
                            <TableHead/>
                        </thead>
                        <tbody>
                            <TableBody/>
                        </tbody>
                </Table>
            </div>
        </>
    );
}

const TableHead = () => {
    return(
        <tr>
            <th>Id</th>
            <th>Nombre del merge</th>
            <th>Origen del merge</th>
            <th>Destino del merge</th>
            <th>Fecha del merge</th>
            <th>Estado del merge</th>
            <th>Última actualización del merge</th>
            <th>Comentarios del merge</th>
        </tr>
    );
}


const TableBody = () => {
    return mergeData.map( (merge) => (
        <tr key={`tr-${merge.id}`}>
            <td>{merge.id}</td>
            <td>{merge.name}</td>
            <td>{merge.origin}</td>
            <td>{merge.destiny}</td>
            <td>{merge.date}</td>
            <td>{merge.state}</td>
            <td>{merge.lastUpdate}</td>
            <td>{merge.comments}</td>
            <td>
                <Button variant={"info"}>Info</Button>{' '}
            </td>
        </tr>
    ));
}