const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment,fortuneTeller, optionsFunc,createMessage,deleteMessageFunc,updateMessageFunc} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get('/api/fortune', fortuneTeller);
app.get('/api/options/:value', optionsFunc);
app.post('/api/create_post', createMessage);
app.delete('/api/delete-message/:id', deleteMessageFunc);
app.put('/api/edit-message', updateMessageFunc);

app.listen(4000, () => console.log("Server running on 4000"));
