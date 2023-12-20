//import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'



function App() {

  const [selectOrig, setEstadoOrig] = useState();
  const [selectDest, setEstadoDest] = useState();



  const enviarEstados = (e) => {
    e.preventDefault();
    const valor = {
      selectOrig,
      selectDest
    }

    console.log(valor.selectDest);
    axios.post('http://localhost:4000/fiscalGPT', {
      prompt: "Exemplifique com valores a formula do diferenical de aliquotas, entre os estados de"
        + " "
        + valor.selectOrig
        + " "
        + "e"
        + " "
        + valor.selectDest
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



    <div className="FormularioDifal"
      style={{
        margin: 'auto',
        width: 768,
        backgroundColor: "whitesmoke",
        padding: 12,
        borderRadius: 8
      }}
    >

      <h3>CONSULTE O DIFAL-
        <small class="text-muted">
          Diferencial de Alíquota do ICMS (Imposto Sobre Circulação de Mercadorias e Serviços)
        </small>
        
      </h3><br />

      <form onSubmit={enviarEstados}>

        <h4>Estado de Origem</h4>
        <div className='cabecalhoOrigem' >

          <div class="form-floating">

            <select
              class="form-select mb-3"
              name="selectOrig"
              id="eO"
              value={selectOrig}
              onChange={valorOrig => setEstadoOrig(valorOrig.target.value)}>

              <option selected></option>
              <option value="Acre" label='Acre - (AC)'></option>,
              <option value="Alagoas" label='Alagoas - (AL)'></option>
              <option value="Amapá" label='Amapá - (AP)'> </option>,
              <option value="Amazonas" label='Amazonas - (AM) '> </option>,
              <option value="Bahia" label='Bahia - (BA)'> </option>,
              <option value="Ceará" label='Ceará - (CE)'> </option>,
              <option value="Distrito Federal" label='Distrito Federal - (DF)'></option>,
              <option value="Espírito Santo" label='Espírito Santo - (ES)'></option>,
              <option value="Goiás" label='Goiás - (GO)'></option>,
              <option value="Maranhão" label='Maranhão - (MA)'>  </option>,
              <option value="Mato Grosso" label='Mato Grosso - (MT)'> </option>,
              <option value="Mato Grosso do Sul" label='Mato Grosso do Sul - (MS)'></option>,
              <option value="Minas Gerais" label='Minas Gerais - (MG)'> </option>,
              <option value="Pará" label='Pará - (PA)'></option>,
              <option value="Paraíba" label='Paraíba - (PB)'> </option>,
              <option value="Paraná" label='Paraná - (PR)'></option>,
              <option value="Pernambuco" label='Pernambuco - (PE)'></option>,
              <option value="Piauí" label='Piauí - (PI)'></option>,
              <option value="Rio de Janeiro " label='Rio de Janeiro - (RJ)'> </option>,
              <option value="Rio Grande do Norte" label='Rio Grande do Norte - (RN)'> </option>,
              <option value="Rio Grande do Sul" label='Rio Grande do Sul - (RS)'> </option>,
              <option value="Rondônia" label='Rondônia - (RO)'> </option>,
              <option value="Roraima " label='Roraima - (RR)'>  </option>,
              <option value="Santa Catarina" label='Santa Catarina - (SC)'>  </option>,
              <option value="São Paulo" label='São Paulo - (SP)'>  </option>,
              <option value="Sergipe" label='Sergipe - (SE) '> </option>,
              <option value="Tocantins" label='Tocantins - (TO) '> </option>

            </select>
            <label for="eO">Selecione o Estado de Origem</label>

            <br />

          </div>
        </div>

        <div className="cabecalhoDest">
          <h4>Estado de Destino</h4>

          <div class="form-floating">

            <select class="form-select" id='eS' aria-label='Exemplo'
              name="selectDest"
              value={selectDest}
              onChange={valorDest => setEstadoDest(valorDest.target.value)}>

              <option selected></option>
              <option value="Acre" label='Acre - (AC)'></option>,
              <option value="Alagoas" label='Alagoas - (AL)'></option>
              <option value="Amapá" label='Amapá - (AP)'> </option>,
              <option value="Amazonas" label='Amazonas - (AM) '> </option>,
              <option value="Bahia" label='Bahia - (BA)'> </option>,
              <option value="Ceará" label='Ceará - (CE)'> </option>,
              <option value="Distrito Federal" label='Distrito Federal - (DF)'></option>,
              <option value="Espírito Santo" label='Espírito Santo - (ES)'></option>,
              <option value="Goiás" label='Goiás - (GO)'></option>,
              <option value="Maranhão" label='Maranhão - (MA)'>  </option>,
              <option value="Mato Grosso" label='Mato Grosso - (MT)'> </option>,
              <option value="Mato Grosso do Sul" label='Mato Grosso do Sul - (MS)'></option>,
              <option value="Minas Gerais" label='Minas Gerais - (MG)'> </option>,
              <option value="Pará" label='Pará - (PA)'></option>,
              <option value="Paraíba" label='Paraíba - (PB)'> </option>,
              <option value="Paraná" label='Paraná - (PR)'></option>,
              <option value="Pernambuco" label='Pernambuco - (PE)'></option>,
              <option value="Piauí" label='Piauí - (PI)'></option>,
              <option value="Rio de Janeiro " label='Rio de Janeiro - (RJ)'> </option>,
              <option value="Rio Grande do Norte" label='Rio Grande do Norte - (RN)'> </option>,
              <option value="Rio Grande do Sul" label='Rio Grande do Sul - (RS)'> </option>,
              <option value="Rondônia" label='Rondônia - (RO)'> </option>,
              <option value="Roraima " label='Roraima - (RR)'>  </option>,
              <option value="Santa Catarina" label='Santa Catarina - (SC)'>  </option>,
              <option value="São Paulo" label='São Paulo - (SP)'>  </option>,
              <option value="Sergipe" label='Sergipe - (SE) '> </option>,
              <option value="Tocantins" label='Tocantins - (TO) '> </option>
            </select>
            <label for="eS">Selecione o Estado de Destino</label><br /><br />
          </div>
        </div>

        <button class="btn btn-primary btn-lg" type="submit">
          <i class="fa-solid fa-sharp fa-paper-plane fa-fade">
          </i> Consultar</button>
        <br /><br />

        <div className="form text-danger border">
          <textarea class="form-control form-control-sm mb-3" name='respostas' id='resposta'
            disabled rows={19} cols={0} ></textarea>
          <p class="text-sm-end">Resposta gerada pelo <a href="https://chat.openai.com/chat" >ChatGPT - OpenAI</a></p>
        </div>
      </form>
    </div>
  );
}

export default App;


