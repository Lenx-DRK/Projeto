require('dotenv').config()

//OBEJTO CONTRUTOR DO OPENAI
const {OpenAI} = require('openai')

//IMPORTANDO O OPENAI
const express = require('express')
const app= express()
app.use(express.json())

const OPENAI_API_KEY = process.env.OPENAI_API_KEY
console.log(OPENAI_API_KEY)

//O POST ESTÁ DEFINIDO COMO fiscalGPT
app.post('/fiscalGPT',(req,res)=>{
    res.send('OK')
})

const PORT=4000
app.listen(PORT,()=> console.log(`Em execução na PORTA ${PORT}`))