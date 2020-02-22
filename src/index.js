import express from "express";
import fetch from "node-fetch";
import React from "react";
import { renderToString } from "react-dom/server";

import HomeRoot from "./roots/HomeRoot";
import AboutRoot from "./roots/AboutRoot";
import ServicesRoot from "./roots/ServicesRoot";
import ServicestemplateRoot from "./roots/ServicestemplateRoot";
import DrcastilloRoot from "./roots/DrcastilloRoot";
import TeamRoot from "./roots/TeamRoot";
import TeamtemplateRoot from "./roots/TeamtemplateRoot";
import GalleryRoot from "./roots/GalleryRoot";
import GallerytemplateRoot from "./roots/GallerytemplateRoot";
import PatientinfoRoot from "./roots/PatientinfoRoot";
import ContactRoot from "./roots/ContactRoot";
import BlogRoot from "./roots/BlogRoot";
import BlogtemplateRoot from "./roots/BlogtemplateRoot";

import { ServerStyleSheet } from 'styled-components';

import config from './config';

const Cryptr = require('cryptr');
const cryptr = new Cryptr(config.key);

import fs from 'fs';
import compression from 'compression';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

var PORT = process.env.PORT || 3003;

const app = express();
app.use(compression());
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

var dataObj = {},
homeBundle = "",
aboutBundle = "",
servicesBundle = "",
servicestemplateBundle = "",
drcastilloBundle = "",
teamBundle = "",
teamtemplateBundle = "",
galleryBundle = "",
gallerytemplateBundle = "",
patientinfoBundle = "",
contactBundle = "",
blogBundle = "",
blogtemplateBundle = "";

fs.readFile('./dist/js/home.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  homeBundle = data || "";
})
// fs.readFile('./dist/js/about.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   aboutBundle = data || "";
// })
// fs.readFile('./dist/js/services.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   servicesBundle = data || "";
// })
// fs.readFile('./dist/js/servicestemplate.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   servicestemplateBundle = data || "";
// })
// fs.readFile('./dist/js/drcastillo.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   drcastilloBundle = data || "";
// })
// fs.readFile('./dist/js/team.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   teamBundle = data || "";
// })
// fs.readFile('./dist/js/teamtemplate.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   teamtemplateBundle = data || "";
// })
// fs.readFile('./dist/js/gallery.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   galleryBundle = data || "";
// })
// fs.readFile('./dist/js/gallerytemplate.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   gallerytemplateBundle = data || "";
// })
// fs.readFile('./dist/js/patientinfo.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   patientinfoBundle = data || "";
// })
// fs.readFile('./dist/js/contact.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   contactBundle = data || "";
// })
// fs.readFile('./dist/js/blog.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   blogBundle = data || "";
// })
// fs.readFile('./dist/js/blogtemplate.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   blogtemplateBundle = data || "";
// })

app.get('/', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, HomeRoot, "home"));
});
app.get('/about', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, aboutBundle, AboutRoot, "about"));
});
app.get('/services', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, servicesBundle, ServicesRoot, "services"));
});
app.get('/servicestemplate', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, servicestemplateBundle, ServicestemplateRoot, "servicestemplate"));
});
app.get('/drcastillo', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, drcastilloBundle, DrcastilloRoot, "drcastillo"));
});
app.get('/team', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, teamBundle, TeamRoot, "team"));
});
app.get('/teamtemplate', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, teamtemplateBundle, TeamtemplateRoot, "teamtemplate"));
});
app.get('/gallery', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, galleryBundle, GalleryRoot, "gallery"));
});
app.get('/gallerytemplate', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, gallerytemplateBundle, GallerytemplateRoot, "gallerytemplate"));
});
app.get('/patientinfo', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, patientinfoBundle, PatientinfoRoot, "patientinfo"));
});
app.get('/contact', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, contactBundle, ContactRoot, "contact"));
});
app.get('/blog', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogBundle, BlogRoot, "blog"));
});
app.get('/blogtemplate', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogtemplateBundle, BlogtemplateRoot, "blogtemplate"));
});

app.get('/images/:id', (req, res) => {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(path.join(__dirname, '../images/' + req.params.id));
});

app.post('/email', (req, res) => {
  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: cryptr.decrypt(config.email),
      pass: cryptr.decrypt(config.gmPass)
    }
  });

  transporter.sendMail({
    from: req.body.email,
    to: cryptr.decrypt(config.email),
    // to: cryptr.decrypt(config.email2),
    subject: 'Dr. Castillo Dental Inquiry',
    html: `
      <h3>Hi Dr. Castillo!</h3>
      <h3>The following person, ${req.body.name}(${req.body.email}), has a message for you and it can be read below.</h3>
      <h3>Message:</h3>
      <h3>${req.body.message}</h3>

    `
  }, (error, info) => {
    if (error) res.send({error: error});
    else res.send({response: info});
  });
})

app.get('/health', (req, res) => res.send('OK'));

app.listen( PORT, () => {
  console.log('Running on http://localhost:' + PORT)
});


// functions!!!!!!!!!!!!!

function getQueries(req, res){
  const qOb = {};
  const queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];
  if(queries.length){
    queries.forEach((x) => {
        var y = x.split('=');
        qOb[y[0]] = y[1];
    });
  }
  return qOb;
}

function fetcher(url){
	return fetch(url)
    .then((response) => {
        if(response.status !== 200) throw Error(response.statusText);
        return response.json();
    }).then((json) => {
        return json;
    }).catch(errHandle)
}

function returnHTML(data, bundle, Page, title){
    const dataString = JSON.stringify(data);
    const sheet = new ServerStyleSheet();
    const body = renderToString(sheet.collectStyles(<Page data={data}/>));
    const styles = sheet.getStyleTags();

    return `
            <html lang="en">
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>${title}</title>
                <link href="http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic%7CMontserrat:400,700%7COpen+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" rel="stylesheet" type="text/css">
                <script src="https://kit.fontawesome.com/c0157dbc17.js" crossorigin="anonymous"></script>
                <meta name="Description" content="${title}">
                <style>
                  body { margin: 0; font-family: Helvetica; }
                  a { text-decoration: none; color: #000; }
                  .i-margin { margin-right: 6px }
                </style>
                ${styles}
              </head>
              <body>
                <script>window.os = window.os || {};</script>
                <script>window.__DATA__=${dataString}</script>
                <div id="app" role="main">${body}</div>
                <script>${bundle}</script>
              </body>
            </html>
          `;
}

function errHandle(err){
    console.log(err);
}
