const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let appointments = [];

app.post('/addAppointment', (req, res) => {
  const { name, time } = req.body;
  appointments.push({ name, time });
  res.status(201).send('Agendamento criado com sucesso.');
});

app.get('/getAppointments', (req, res) => {
  res.json(appointments);
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
