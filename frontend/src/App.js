//import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import React, { useState } from 'react'

function App() {

  const [selectOrig, setEstadoOrig] = useState();
  const [selectDest, setEstadoDest] = useState();


  // <div className='Pesquisa' type='hidden'>
  //   <p>Demonstre um exemplo do calculo do DIFAL de uma venda do estado do {selectOrig} para {selectDest} </p>
  // </div>

  const enviarEstados = (e) => {
    e.preventDefault();
    const valor = {
      selectOrig,
      selectDest
    }
    //const estado = document.getElementById(selectDest);
    console.log(valor.selectDest);
    axios.post('http://localhost:4000/fiscalGPT', {
      prompt: "Qual a formula do diferenical de aliquotas entre os estados de" + " "
        + valor.selectOrig + " " + "e" + " " + valor.selectDest
    })
      .then(response => {
        console.log(response);
        document.getElementById("resposta").value = response.data.completion;
      })
      .catch(erro => {
        console.log(erro);
      });
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
            <option value="Ceará"> Ceará - CE </option>,
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
        <div>
        <label>
          <p>Resultado da Pesquisa</p>
        <textarea name='respostas' id='resposta' disabled rows={30} cols={100}/>
        </label>
        </div>
      </form>
    </div>
  );
}

export default App;


