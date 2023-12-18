require('dotenv').config();

//LEITURA DA CHAVE PELO CONSOLE LOG
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
console.log(OPENAI_API_KEY);

//OBEJTO CONTRUTOR DO OPENAI
const {OpenAI} = require('openai');
const openai = new OpenAI(OPENAI_API_KEY);

//IMPORTANDO O OPENAI
const express = require('express');
const cors = require('cors');
const app= express();
app.use(express.json());
app.use(cors());



//O POST ESTÁ DEFINIDO COMO fiscalGPT
app.post('/fiscalGPT',async(req,res)=>{
    const {prompt} = req.body;
    console.log(prompt)
    const model='gpt-3.5-turbo';
    const role ='user';
    const max_tokens=1000;

    //COMUNICAÇÃO COM O CHATGPT
    const completion = await openai.chat.completions.create({
        messages:[{role: role, content: prompt}],
        model: model,
        max_tokens: max_tokens
    });
    res.json({completion: completion.choices[0].message.content});

// DEVOLUÇÃO DO PROMPT
//    res.json({seuPrompt: prompt});
})

//SERVIDOR EM EXECUÇÃO NA PORTA 4000
const PORT=4000
app.listen(PORT,()=> console.log(` BackEnd em execução na PORTA ${PORT}`));