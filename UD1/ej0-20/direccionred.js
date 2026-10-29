"use strict";

let red=[172,16,25,10];
let mascara=[255,255,192,0];
let dirRed=[];
let complemento=[];
let host=[];

// 2.

dirRed[0]=red[0]&mascara[0];
dirRed[1]=red[1]&mascara[1];
dirRed[2]=red[2]&mascara[2];
dirRed[3]=red[3]&mascara[3];


// 3.

complemento[0]=(~dirRed[0]&255);
complemento[1]=(~dirRed[1]&255);
complemento[2]=(~dirRed[2]&255);
complemento[3]=(~dirRed[3]&255);


// 4.
host[0]=(red[0]&complemento[0]);
host[1]=(red[1]&complemento[1]);
host[2]=(red[2]&complemento[2]);
host[3]=(red[3]&complemento[3]);


// 5.
console.log(red[0]+"."+red[1]+"."+red[2]+"."+red[3]) // sale 172.16.25.10

console.log(host[0]+"."+host[1]+"."+host[2]+"."+host[3]) // sale 0.0.25.10





