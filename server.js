const express=require("express")
const cors=require("cors")
const app=express()
require('dotenv').config()
console.log(process.env)

app.use(cors(
  { origin: "*" }
));

app.use(express.json())



const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey:process.env.API_KEY;
});
const openai = new OpenAIApi(configuration);


app.post("/completions",async(req,res)=>{
  try{
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      message:[{role:"user",
      content:"Create a SQL request to"+ req.body.message}]
    });
    res.send(completion.data.choices[0].message)
  }catch(error){
    console.error(error);
  }

})

app.post("/chat",async(req,res)=>{
  try{
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "How are you",
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
    });
    console.log(response);
  }
  catch(error){
    console.error(error)
  }
})

app.post("/images",async (req,res)=>{

  try{
    const response = await openai.createImage({
      prompt: req.body.message,
      n: 4,
      size: "1024x1024",
    });

    console.log(response.data.data);
    res.send(response.data.data)

  }catch(error){
    console.error(error)
  }
})

app.post("/generate", async (req, res) => {
  const { queryDescription } = req.body
  try {
    // const sqlQuery = await generate(queryDescription);
    // res.json({ sqlQuery });

    const message = [
      { role: "system", content: `You are a translator from plain English to SQL.` },
      { role: "user", content: `Convert the following natural language description into a SQL query:\n\nShow all all the elements in the table users` },
      { role: "assistant", content: "SELECT * FROM users;" },
      { role: "user", content: `Convert the following natural language description into a SQL query:\n\n${queryDescription}` },
    ];
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: message,
    });

    console.log(response);
    res.json(response.data.choices[0].message.content)
    // console.log(response);
    // return response.data.choices[0].message.content;
    // res.send(response)
  } catch (error) {
    res.json("fail")
    console.log(error);
    // console.error(error);
    // res.status(500).send("Internal Server Error");
  }
});


app.post("/error", async (req, res) => {
  const { queryDescription } = req.body
  try {
    // const sqlQuery = await generate(queryDescription);
    // res.json({ sqlQuery });

    const message = [
      { role: "system", content: `Give the solution for the error provided` },
      { role: "user", content: `Give the solution for the error provided:\n\nShow all all the elements in the table users` },
      { role: "assistant", content: "SELECT * FROM users;" },
      { role: "user", content: `give the solution for the error provided:\n\n${queryDescription}` },
    ];
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: message,
    });

    // console.log(response.data.choices[0].message.content);
    // // return response.data.choices[0].message.content;
    // res.send(response.data.choices[0].message.content)

    console.log(response);
    res.json(response.data.choices[0].message.content)
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});



app.listen(8000,(req,res)=>{
    console.log("connected successfully")
})
