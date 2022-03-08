import express from "express";
import fetch from "node-fetch";
import React from "react";
import { renderToString } from "react-dom/server";

import HomeRoot from "./roots/HomeRoot";
// import AboutRoot from "./roots/AboutRoot";
// import ServicesRoot from "./roots/ServicesRoot";
import ServicestemplateRoot from "./roots/ServicestemplateRoot";
import ProcedurestemplateRoot from "./roots/ProcedurestemplateRoot";
// import TeamRoot from "./roots/TeamRoot";
import TeamtemplateRoot from "./roots/TeamtemplateRoot";
// import GalleryRoot from "./roots/GalleryRoot";
// import GallerytemplateRoot from "./roots/GallerytemplateRoot";
import PatientinfoRoot from "./roots/PatientinfoRoot";
// import ContactRoot from "./roots/ContactRoot";
import BlogRoot from "./roots/BlogRoot";
import BlogtemplateRoot from "./roots/BlogtemplateRoot";

import { ServerStyleSheet } from 'styled-components';

import config from './config';
import teamList from './data/teamList';

const Cryptr = require('cryptr');
const cryptr = new Cryptr(config.key);

import fs from 'fs';
import compression from 'compression';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
var cron = require('node-cron');

var PORT = process.env.PORT || 3003;

const app = express();
app.use(compression());
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

cron.schedule('* * 1 * *', () => {
  fetch('https://drcastillo.herokuapp.com/')
  .then(res => console.log("requested at " + new Date()));
});

var dataObj = {},
homeBundle = "",
// aboutBundle = "",
// servicesBundle = "",
servicestemplateBundle = "",
procedurestemplateBundle = "",
drcastilloBundle = "",
teamBundle = "",
teamtemplateBundle = "",
// galleryBundle = "",
// gallerytemplateBundle = "",
patientinfoBundle = "",
// contactBundle = "",
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
fs.readFile('./dist/js/servicestemplate.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  servicestemplateBundle = data || "";
})
fs.readFile('./dist/js/procedurestemplate.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  procedurestemplateBundle = data || "";
})
fs.readFile('./dist/js/team.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  teamBundle = data || "";
})
fs.readFile('./dist/js/teamtemplate.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  teamtemplateBundle = data || "";
})
// fs.readFile('./dist/js/gallery.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   galleryBundle = data || "";
// })
// fs.readFile('./dist/js/gallerytemplate.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   gallerytemplateBundle = data || "";
// })
fs.readFile('./dist/js/patientinfo.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  patientinfoBundle = data || "";
})
// fs.readFile('./dist/js/contact.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   contactBundle = data || "";
// })
fs.readFile('./dist/js/blog.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  blogBundle = data || "";
})
fs.readFile('./dist/js/blogtemplate.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  blogtemplateBundle = data || "";
})

app.get('/', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, HomeRoot, "Fresno Dental Professionals | Affordable Dentures in Fresno", "Dr. Luis Castillo is the reliable dentist in Fresno you can count on to transform your smile. We provide complete dental care to our patients, from cosmetic dental care to general dentistry."));
});
// app.get('/about', (req, res) => {
//   let data = "";
//   res.set('Cache-Control', 'public, max-age=31557600');
//   res.send(returnHTML(data, homeBundle, HomeRoot, "about"));
// });
// app.get('/services', (req, res) => {
//   let data = "";
//   res.set('Cache-Control', 'public, max-age=31557600');
//   res.send(returnHTML(data, homeBundle, HomeRoot,  "services"));
// });
app.get('/services/:id', (req, res) => {
  let data = {
    serviceId: req.params.id
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, servicestemplateBundle, ServicestemplateRoot, "Cosmetic Dentistry near me - Quick Teeth Whitening Fresno", "Looking for affordable cosmetic dentistry service in Fresno? Dr. Luis Castillo provides patients with cosmetic solutions for quick teeth whitening, broken, chipped teeth& more."));
});
app.get('/procedures/:id', (req, res) => {
  let data = {
    procedureId: req.params.id
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, procedurestemplateBundle, ProcedurestemplateRoot, "procedurestemplate", "meta goes here"));
});
// app.get('/staff', (req, res) => {
//   let data = "";
//   res.set('Cache-Control', 'public, max-age=31557600');
//   res.send(returnHTML(data, teamBundle, TeamRoot, "team"));
// });
app.get('/team/:id', (req, res) => {
  let data = {
    member: teamList.find(a => a.id == req.params.id)
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, teamtemplateBundle, TeamtemplateRoot, "teamtemplate", "meta goes here"));
});
// app.get('/gallery', (req, res) => {
//   let data = "";
//   res.set('Cache-Control', 'public, max-age=31557600');
//   res.send(returnHTML(data, galleryBundle, GalleryRoot, "gallery"));
// });
// app.get('/gallery/:id', (req, res) => {
//   let data = {
//     galleryId: req.params.id
//   };
//   res.set('Cache-Control', 'public, max-age=31557600');
//   res.send(returnHTML(data, gallerytemplateBundle, GallerytemplateRoot, "gallerytemplate"));
// });
app.get('/patient-information', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, patientinfoBundle, PatientinfoRoot, "patientinfo", "meta goes here"));
});
// app.get('/contact', (req, res) => {
//   let data = "";
//   res.set('Cache-Control', 'public, max-age=31557600');
//   res.send(returnHTML(data, patientinfoBundle, PatientinfoRoot, "contact"));
// });
app.get('/blog', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogBundle, BlogRoot, "blog", "meta goes here"));
});
app.get('/blog/:id', (req, res) => {
  let data = {
    blogId: req.params.id
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogtemplateBundle, BlogtemplateRoot, "blogtemplate", "meta goes here"));
});

app.get('/images/:id', (req, res) => {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(path.join(__dirname, '../images/' + req.params.id));
});

const getEmailHTML = (req, option) => {
  switch(option) {
    case 1:
      return `
        <h3>Hi Dr. Castillo!</h3>
        <h3>The following person is requesting a consultation for the listed procedures.<h3/>

        <h4>First Name: ${req.body.firstName}</h4>
        <h4>Last Name: ${req.body.lastName}</h4>
        <h4>Email: ${req.body.email}</h4>
        <h4>Phone: ${req.body.phone}</h4>
        <h4>Procedures: ${req.body.procedures}</h4>
      `
    case 2:
      return `
        <h3>Hi Dr. Castillo!</h3>
        <h3>The following person is has a message for you.<h3/>

        <h4>First Name: ${req.body.firstName}</h4>
        <h4>Last Name: ${req.body.lastName}</h4>
        <h4>Email: ${req.body.email}</h4>
        <h4>Phone: ${req.body.phone}</h4>

        <h4>Message: ${req.body.message}</h4>
      `
  }
}

app.post('/emailer', (req, res) => {
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
    html: getEmailHTML(req, req.body.option)
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

function returnHTML(data, bundle, Page, title, description){
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
                <meta name="Description" content="${description}">
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
                  <script async src="https://www.googletagmanager.com/gtag/js?id=${cryptr.decrypt(config.googleID)}"></script>
                  <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${cryptr.decrypt(config.googleID)}');
                  </script>
              </body>
            </html>
          `;
}

function errHandle(err){
    console.log(err);
}
