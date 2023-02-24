// import { Buffer } from 'node:buffer';
let server=require('ws').Server;
let s=new server({port:5000});

s.on('connection',function(ws){
    ws.on('message',function(message){
        console.log("Recieved:" +message);
        var str=message.toString();
        const myArray = str.split(" ");
        const name=myArray[0];
        const msg=str.substring(name.length);
        console.log(typeof message,name,msg);
        //////send message from any client and recieve on all pages(group)///
        s.clients.forEach(function e(client){
            if(client!=ws)      ////// if client is same the we will not publish the message
            {
                
                // client.send(message);
                client.send(name+': '+msg);
            }
            else{
                // msg=message;
                client.send('you: '+msg)
            }
        })
        //////// messages will recieve on the cleint from where it send///////
        // ws.send(message);
    });
    ws.on('close',function(){
        console.log("I lost a client");
    })
})