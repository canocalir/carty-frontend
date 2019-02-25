import React from 'react';
import './ImageLinkForm.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typist from 'react-typist';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (

        <div >
            
            <div className='center'>
            <div className='pa2 ba ma4 bw1 br3 form shadow-5'>
            <Typist className='f3'>
                {'Paste an image URL to see the magic!'}
            </Typist>
            <br/>
                <TextField id="standard-search" 
                className='f4 pa2 w-70 center' 
                type="search" 
                onChange={onInputChange}/>
                <br/>
                <br/>
                <Button variant="contained" 
                color="secondary"
                onClick={onButtonSubmit}
                className='w-30 grow f4 link ph3 pv2 dib white'>Detect</Button>
            </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;