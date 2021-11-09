import React, { useEffect, useState } from 'react';
import './App.scss';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
  Button
} from '@mui/material';
import data from './custom-membs.json';

function App() {
  const [age, setAge] = useState('');
  const [appointments, setAppointments] = useState('');
  const [apptsArray, setApptsArray] = useState([]);
  const [price, setPrice] = useState("$0");

  useEffect(() => {
    if((apptsArray.length !== 0)){
      setAppointments(apptsArray[0].id);
    }
  }, [apptsArray]);

  useEffect(() => {
    let x = data.types.find((value) => value.type === age);
    
    switch (true) {
      case (age === "Individual"): {
        let y = x.dates.map((val) => { return val });
        setApptsArray(y);
      }
        break;
      case (age === "Primera Vez"): {
        let y = x.dates.map((val) => { return val });
        setApptsArray(y);
      }
        break;
      case (age === "Membresia Personal"): {
        let y = x.dates.map((val) => { return val });
        setApptsArray(y);
      }
        break;
      case (age === "Membresia Personal Plus"): {
        let y = x.dates.map((val) => { return val });
        setApptsArray(y);
      }
        break;
      default:
        break;
    }
  }, [age]);
  
  useEffect(() => {
    if (appointments !== undefined) {
      let p = apptsArray.find((value) => value.id === appointments);
      
      if(p !== undefined) {
        setPrice(p.price);
        // setPrice("$0");
      } 
    }
  }, [appointments, apptsArray]);

  const handleChange = (event) => {    
    setAge(event.target.value);
  }
  
  const handleChangeConsultas = (event) => {
    setAppointments(event.target.value);
  }

  return (
    <div className="main-container">
      <div className="header-app">
        <h3>Membresías Personalizadas</h3>
      </div>
      <div className="app">
        <Grid direction="row" justifyContent="center" alignItems="center" spacing={4} xs={12} md={6} className="padd-4 border-right">
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="membership-select-label">Seleccione Membresía</InputLabel>
              {data.types ? 
                <Select
                  labelId="membership-select-label"
                  id="membership-select"
                  value={age}
                  label="Seleccione Membresía"
                  onChange={handleChange}
                  className="mb-2"
                >
                  {data.types.map((value, id) => {
                    return(
                      <MenuItem key={id} value={value.type}>{value.type}</MenuItem>
                    )
                  })}
                </Select>
              :
                ''}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="consultas-select-label"># de Consultas</InputLabel>
              <Select
                labelId="consultas-select-label"
                id="consultas-select"
                value={appointments}
                label="# de Consultas"
                onChange={handleChangeConsultas}
              >
                {apptsArray.map((value, id) => {
                  return (
                    <MenuItem key={id} value={value.id}>{value.id}</MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid direction="row" justifyContent="center" alignItems="center" spacing={2} xs={12} md={6} className="padd-4">
          <Grid item xs={10} md={4} className="container-center price-container">
            <p className="price">{price}</p>
            <Button variant="contained" href="https://eucalyptusmed.com/mockup-new-design/">¡Contrata ahora!</Button>
          </Grid>
        </Grid> 
      </div>
    </div>
  );
}

export default App;
