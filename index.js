const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Benvingut al servidor!');
});
app.get('/usuaris', (req, res) => {
    res.send("Llistat d'usuaris.")
});
app.post('/usuaris', (req, res) => {
    res.send('Nou usuari creat.')
});
app.put('/usuaris/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Usuari amb id ${id} actualitzat.`);
})
app.patch('/usuaris/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Usuari amb id ${id} parcialment actualitzat.`);
});
app.delete('/usuaris/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Usuari amb id ${id} eliminat.`);
});
app.get('/productes', (req, res) => {
    res.send(`Llistat amb productes.`);
});
app.post('/productes', (req, res) => {
    res.send('Producte nou afegit.');
});
app.put('/productes/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Producte amb id ${id} actualitzat.`);
});
app.delete('/productes/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Producte amb id ${id} eliminat.`);
});
app.get('/comandes', (req, res) => {
    res.send(`Llistat de comandes realitzades.`);
});
app.post('/comandes', (req, res) => {
    res.send(`Comanda nova creada.`);
});
app.patch('/comandes/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Comanda amb id ${id} actualitzada.`);
});
app.get('/serveis', (req, res) => {
    res.send(`Llistat de serveis.`);
});
app.post('/serveis', (req, res) => {
    res.send('Nou servei afegit');
});
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});