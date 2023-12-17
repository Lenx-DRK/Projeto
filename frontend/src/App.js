//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {

  const [selectOrig] = useState(9);
  const [selectDest] = useState(2);
  const enviarEstados = e =>{
    e.preventDefault();
    alert("Botão")
  }

  return (
    <div className="cabecalhoOrig">
      <h1>Estado de Origem</h1>

      <form onSubmit={enviarEstados}>

        <div className="estOrig">



          <label>Estado de Origem: </label>

          <select name="selectOrig" value={selectOrig}>

            <option value="">ESTADO DE ORIGEM</option>
            <option value="1">Acre - AC</option>,
            <option value="2">Alagoas - AL</option>
            <option value="3"> Amapá - AP </option>,
            <option value="4"> Amazonas - AM </option>,
            <option value="5"> Bahia - BA </option>,
            <option value="6"> Ceará CE </option>,
            <option value="7"> Distrito Federal - DF </option>,
            <option value="8"> Espírito Santo - ES </option>,
            <option value="9"> Goiás - GO </option>,
            <option value="10"> Maranhão - MA </option>,
            <option value="11"> Mato Grosso - MT </option>,
            <option value="12"> Mato Grosso do Sul - MS </option>,
            <option value="13"> Minas Gerais - MG </option>,
            <option value="14"> Pará - PA </option>,
            <option value="15"> Paraíba - PB </option>,
            <option value="16"> Paraná - PR </option>,
            <option value="17"> Pernambuco - PE </option>,
            <option value="18"> Piauí - PI </option>,
            <option value="19"> Rio de Janeiro - RJ </option>,
            <option value="20"> Rio Grande do Norte - RN</option>,
            <option value="21"> Rio Grande do Sul - RS</option>,
            <option value="22"> Rondônia - RO </option>,
            <option value="23"> Roraima - RR </option>,
            <option value="24"> Santa Catarina - SC </option>,
            <option value="25"> São Paulo - SP </option>,
            <option value="26"> Sergipe - SE </option>,
            <option value="27"> Tocantins - TO </option>

          </select>


          <div className="cabecalhoDest">
            <h1>Estado de Destino</h1>

            <div className="estDest">

              <label>Estado de Destino: </label>

              <select name="selectDest" value={selectDest}>

                <option value="">ESTADO DE ORIGEM</option>
                <option value="1">Acre - AC</option>,
                <option value="2">Alagoas - AL</option>
                <option value="3"> Amapá - AP </option>,
                <option value="4"> Amazonas - AM </option>,
                <option value="5"> Bahia - BA </option>,
                <option value="6"> Ceará CE </option>,
                <option value="7"> Distrito Federal - DF </option>,
                <option value="8"> Espírito Santo - ES </option>,
                <option value="9"> Goiás - GO </option>,
                <option value="10"> Maranhão - MA </option>,
                <option value="11"> Mato Grosso - MT </option>,
                <option value="12"> Mato Grosso do Sul - MS </option>,
                <option value="13"> Minas Gerais - MG </option>,
                <option value="14"> Pará - PA </option>,
                <option value="15"> Paraíba - PB </option>,
                <option value="16"> Paraná - PR </option>,
                <option value="17"> Pernambuco - PE </option>,
                <option value="18"> Piauí - PI </option>,
                <option value="19"> Rio de Janeiro - RJ </option>,
                <option value="20"> Rio Grande do Norte - RN</option>,
                <option value="21"> Rio Grande do Sul - RS</option>,
                <option value="22"> Rondônia - RO </option>,
                <option value="23"> Roraima - RR </option>,
                <option value="24"> Santa Catarina - SC </option>,
                <option value="25"> São Paulo - SP </option>,
                <option value="26"> Sergipe - SE </option>,
                <option value="27"> Tocantins - TO </option>

              </select><br/><br/>
            </div>
          </div>
        </div>
        <button type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;


