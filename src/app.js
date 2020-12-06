
const express = require('express');
const app = express()
const subscriberModel=require('./models/subscribers');

// Your code goes here
app.get("/subscribers",async (req,res)=>{
	const allSubscribers=await subscriberModel.find();
	res.writeHead(200,{
		"content-type":"application/json"
	});
	res.write(JSON.stringify(allSubscribers));
	res.end();
});
app.get("/subscribers/names",async (req,res)=>{
	const allSubscribers=await subscriberModel.find();
	const output=allSubscribers.map((item,index)=>{return {"name":item.name,"subscribedChannel": item.subscribedChannel}});
	res.writeHead(200,{
		"content-type":"application/json"
	});
	res.write(JSON.stringify(output));
	res.end();	
});
app.get("/subscribers/:id",async (req,res)=>{
	try {
	const id=req.params.id;
	const subscriber=await subscriberModel.findById(id);
	res.writeHead(200,{
		"content-type":"application/json"
	});
	res.write(JSON.stringify(subscriber));	
	}catch(err) {
		res.writeHead(400,{
		"content-type":"application/json"			
		});
		res.write(JSON.stringify({message: err.message}));
	}
	res.end();
});




















module.exports = app;
