import React from 'react';
import HOSlogo from './hoslogo.svg';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import '@fontsource/roboto';

const Form = () => {
    return (    
    <Container maxWidth="sm">
        <section className="App">
        <img src={HOSlogo} alt="Heritage of Scotland Logo" width="300" height="150"></img>
        <Typography
        variant="h3"
        className=""

        >HOS 007 Staff Discount Tracker</Typography>
        <form className="" noValidate autoComplete="off">
            <TextField 
                id="standard-basic" 
                label="Barcode*" 
                inputProps="required"
                type="number"
                fullWidth
                />
            <TextField 
                id="standard-basic" 
                label="Date*" 
                inputProps="required"
                fullWidth
                type="date"
                />
            <TextField 
                id="standard-basic" 
                label="Time of Sale *" 
                inputProps="required"
                fullWidth
                type="time"
                />
            <TextField 
                id="standard-basic" 
                label="Staff who bought the items*" 
                inputProps="required"
                fullWidth
                type="text"
                />
            <TextField 
                id="standard-basic" 
                label="Till Operator *" 
                inputProps="required"
                fullWidth
                type="text"
                />
            <TextField 
                id="standard-basic" 
                label="Discount Type *" 
                inputProps="required"
                fullWidth
                type="text"
                />
            <TextField 
                id="standard-basic" 
                label="Discount Percent (%) *" 
                InputProps={{
                    startAdornment: <InputAdornment position="start">%</InputAdornment>,
                  }}
                fullWidth
                type="text"
                />
            <TextField 
                id="standard-basic" 
                label="Discounted Value *" 
                InputProps={{
                    startAdornment: <InputAdornment position="start">£</InputAdornment>,
                  }}
                fullWidth
                type="text"
                />
            <TextField 
                id="standard-basic" 
                label="Actual Price *" 
                InputProps={{
                    startAdornment: <InputAdornment position="start">£</InputAdornment>,
                  }}
                fullWidth
                type="text"
                />
            <TextField 
                id="standard-basic" 
                label="Final Value *" 
                InputProps={{
                    startAdornment: <InputAdornment position="start">£</InputAdornment>,
                  }}
                fullWidth
                type="text"
                />
             <TextField 
                id="standard-basic" 
                label="Comments" 
                fullWidth
                type="text"
                />
            <hr/>
            <Button 
            size="large"
            href="#" 
            onClick={() =>alert('hello')} 
            variant="contained" 
            color="primary"
            type="submit"
            >Submit Discount</Button>
        </form>
        </section>
    </Container>
    )
}

export default Form;


