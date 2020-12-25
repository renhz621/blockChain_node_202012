var Web3=require('Web3');
var Express=require("express");
var app=Express();
var fs=require("fs");
var server=require("http").createServer(app);
var net=require('net');
var web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

app.get("/",function(req,res){
    web3.eth.getAccounts(function(error,result){
        if(!error)
        res.send(JSON.stringify(result));
        else
        res.send(JSON.stringify(error));
    });
});
server.listen(8080);
