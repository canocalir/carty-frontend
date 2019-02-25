import React from 'react';
import './RecValue.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const RecValue = props => {
    function renderData() {
        
        return props.concepts.map(item => (
            
            <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.value}</TableCell>
            </TableRow>
            
        )
        )
    } 
        return props.concepts.length > 0 &&  ( 
            <div className='tables center'>
            <div className='rec bw1 belowform shadow-5'>
            <Paper>
            <Table>
            <TableHead>
                <TableCell>Ingredients</TableCell>
                <TableCell>Prediction Value</TableCell>
            </TableHead>
            <TableBody>
            {renderData()}
            </TableBody>
            </Table>
            </Paper>
        
            </div>
            </div>
        )
    }

export default RecValue;