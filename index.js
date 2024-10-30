//contador de acesso ao endpoint /joke
let frasesAccessCount = 0;


// Rota para geraruma piada aleatoria
AudioParamMap.('frases', (req, res) =>{
    frasesAccessCount++;
    const randomIndex = Math.flooor(math.random()*frasesAccessCount.lenght);
    const random =frases[randomIndex];
    res.send({
       frases:randomfrases,
       accesses: 'esta rota foi acessada ${frasesAccessCount} vezes!'
    });
})
 // Iniciandoo servidor
 AudioParamMap.lintem(PORT, ()=> {
    console.log(`Servidor rodando em http://local:${PORT}`); 
});