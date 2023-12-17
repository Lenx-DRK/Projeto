//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {

  const [selectOrig, setEstadoOrig] = useState();
  const [selectDest, setEstadoDest] = useState();

  const enviarEstados = e => {
    e.preventDefault();
    alert("Os estados selecionados são:" + selectOrig + selectDest);
  }

  return (
    <div className="cabecalhoOrig">
      <h1>Estado de Origem</h1>

      <form onSubmit={enviarEstados}>

        <div className="estOrig">



          <label>Estado de Origem: </label>

          <select name="selectOrig" value={selectOrig} onChange={valorOrig => setEstadoOrig(valorOrig.target.value)}>

            <option value="">ESTADO DE ORIGEM</option>
            <option value="Acre" label='Acre - (AC)'></option>,
            <option value="Alagoas" label='Alagoas - AL'></option>
            <option value="Amapá"> Amapá - AP </option>,
            <option value="Amazonas"> Amazonas - AM </option>,
            <option value="Bahia"> Bahia - BA </option>,
            <option value="Ceará"> Ceará CE </option>,
            <option value="Distrito Federal"> Distrito Federal - DF </option>,
            <option value="Espírito Santo"> Espírito Santo - ES </option>,
            <option value="Goiás"> Goiás - GO </option>,
            <option value="Maranhão"> Maranhão - MA </option>,
            <option value="Mato Grosso"> Mato Grosso - MT </option>,
            <option value="Mato Grosso do Sul"> Mato Grosso do Sul - MS </option>,
            <option value="Minas Gerais"> Minas Gerais - MG </option>,
            <option value="Pará"> Pará - PA </option>,
            <option value="Paraíba"> Paraíba - PB </option>,
            <option value="Paraná"> Paraná - PR </option>,
            <option value="Pernambuco"> Pernambuco - PE </option>,
            <option value="Piauí"> Piauí - PI </option>,
            <option value="Rio de Janeiro "> Rio de Janeiro - RJ </option>,
            <option value="Rio Grande do Norte"> Rio Grande do Norte - RN</option>,
            <option value="io Grande do Sul"> Rio Grande do Sul - RS</option>,
            <option value="Rondônia"> Rondônia - RO </option>,
            <option value="Roraima "> Roraima - RR </option>,
            <option value="Santa Catarina"> Santa Catarina - SC </option>,
            <option value="São Paulo"> São Paulo - SP </option>,
            <option value="Sergipe"> Sergipe - SE </option>,
            <option value="Tocantins"> Tocantins - TO </option>

          </select>


          <div className="cabecalhoDest">
            <h1>Estado de Destino</h1>

            <div className="estDest">

              <label>Estado de Destino: </label>

              <select name="selectDest" value={selectDest} onChange={valorDest => setEstadoDest(valorDest.target.value)}>

                <option value="">ESTADO DE DESTINO</option>
                <option value="Acre" label='Acre - (AC)'></option>,
                <option value="Alagoas" label='Alagoas - AL'></option>
                <option value="Amapá"> Amapá - AP </option>,
                <option value="Amazonas"> Amazonas - AM </option>,
                <option value="Bahia"> Bahia - BA </option>,
                <option value="Ceará"> Ceará CE </option>,
                <option value="Distrito Federal"> Distrito Federal - DF </option>,
                <option value="Espírito Santo"> Espírito Santo - ES </option>,
                <option value="Goiás"> Goiás - GO </option>,
                <option value="Maranhão"> Maranhão - MA </option>,
                <option value="Mato Grosso"> Mato Grosso - MT </option>,
                <option value="Mato Grosso do Sul"> Mato Grosso do Sul - MS </option>,
                <option value="Minas Gerais"> Minas Gerais - MG </option>,
                <option value="Pará"> Pará - PA </option>,
                <option value="Paraíba"> Paraíba - PB </option>,
                <option value="Paraná"> Paraná - PR </option>,
                <option value="Pernambuco"> Pernambuco - PE </option>,
                <option value="Piauí"> Piauí - PI </option>,
                <option value="Rio de Janeiro "> Rio de Janeiro - RJ </option>,
                <option value="Rio Grande do Norte"> Rio Grande do Norte - RN</option>,
                <option value="io Grande do Sul"> Rio Grande do Sul - RS</option>,
                <option value="Rondônia"> Rondônia - RO </option>,
                <option value="Roraima "> Roraima - RR </option>,
                <option value="Santa Catarina"> Santa Catarina - SC </option>,
                <option value="São Paulo"> São Paulo - SP </option>,
                <option value="Sergipe"> Sergipe - SE </option>,
                <option value="Tocantins"> Tocantins - TO </option>

              </select><br /><br />
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

