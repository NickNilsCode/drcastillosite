"use strict";

var _express = _interopRequireDefault(require("express"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _HomeRoot = _interopRequireDefault(require("./roots/HomeRoot"));

var _ServicestemplateRoot = _interopRequireDefault(require("./roots/ServicestemplateRoot"));

var _ProcedurestemplateRoot = _interopRequireDefault(require("./roots/ProcedurestemplateRoot"));

var _TeamtemplateRoot = _interopRequireDefault(require("./roots/TeamtemplateRoot"));

var _PatientinfoRoot = _interopRequireDefault(require("./roots/PatientinfoRoot"));

var _BlogRoot = _interopRequireDefault(require("./roots/BlogRoot"));

var _BlogtemplateRoot = _interopRequireDefault(require("./roots/BlogtemplateRoot"));

var _styledComponents = require("styled-components");

var _config = _interopRequireDefault(require("./config"));

var _teamList = _interopRequireDefault(require("./data/teamList"));

var _fs = _interopRequireDefault(require("fs"));

var _compression = _interopRequireDefault(require("compression"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import AboutRoot from "./roots/AboutRoot";
// import ServicesRoot from "./roots/ServicesRoot";
// import TeamRoot from "./roots/TeamRoot";
// import GalleryRoot from "./roots/GalleryRoot";
// import GallerytemplateRoot from "./roots/GallerytemplateRoot";
// import ContactRoot from "./roots/ContactRoot";
var Cryptr = require('cryptr');

var cryptr = new Cryptr(_config["default"].key);

var cron = require('node-cron');

var PORT = process.env.PORT || 3003;
var app = (0, _express["default"])();
app.use((0, _compression["default"])());
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded());
cron.schedule('* * 1 * *', function () {
  (0, _nodeFetch["default"])('https://drcastillo.herokuapp.com/').then(function (res) {
    return console.log("requested at " + new Date());
  });
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

_fs["default"].readFile('./dist/js/home.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  homeBundle = data || "";
}); // fs.readFile('./dist/js/about.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   aboutBundle = data || "";
// })
// fs.readFile('./dist/js/services.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   servicesBundle = data || "";
// })


_fs["default"].readFile('./dist/js/servicestemplate.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  servicestemplateBundle = data || "";
});

_fs["default"].readFile('./dist/js/procedurestemplate.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  procedurestemplateBundle = data || "";
});

_fs["default"].readFile('./dist/js/team.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  teamBundle = data || "";
});

_fs["default"].readFile('./dist/js/teamtemplate.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  teamtemplateBundle = data || "";
}); // fs.readFile('./dist/js/gallery.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   galleryBundle = data || "";
// })
// fs.readFile('./dist/js/gallerytemplate.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   gallerytemplateBundle = data || "";
// })


_fs["default"].readFile('./dist/js/patientinfo.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  patientinfoBundle = data || "";
}); // fs.readFile('./dist/js/contact.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   contactBundle = data || "";
// })


_fs["default"].readFile('./dist/js/blog.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  blogBundle = data || "";
});

_fs["default"].readFile('./dist/js/blogtemplate.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  blogtemplateBundle = data || "";
});

app.get('/', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, _HomeRoot["default"], "home"));
}); // app.get('/about', (req, res) => {
//   let data = "";
//   res.set('Cache-Control', 'public, max-age=31557600');
//   res.send(returnHTML(data, homeBundle, HomeRoot, "about"));
// });
// app.get('/services', (req, res) => {
//   let data = "";
//   res.set('Cache-Control', 'public, max-age=31557600');
//   res.send(returnHTML(data, homeBundle, HomeRoot,  "services"));
// });

app.get('/services/:id', function (req, res) {
  var data = {
    serviceId: req.params.id
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, servicestemplateBundle, _ServicestemplateRoot["default"], "servicestemplate"));
});
app.get('/procedures/:id', function (req, res) {
  var data = {
    procedureId: req.params.id
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, procedurestemplateBundle, _ProcedurestemplateRoot["default"], "procedurestemplate"));
}); // app.get('/staff', (req, res) => {
//   let data = "";
//   res.set('Cache-Control', 'public, max-age=31557600');
//   res.send(returnHTML(data, teamBundle, TeamRoot, "team"));
// });

app.get('/team/:id', function (req, res) {
  var data = {
    member: _teamList["default"].find(function (a) {
      return a.id == req.params.id;
    })
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, teamtemplateBundle, _TeamtemplateRoot["default"], "teamtemplate"));
}); // app.get('/gallery', (req, res) => {
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

app.get('/patient-information', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, patientinfoBundle, _PatientinfoRoot["default"], "patientinfo"));
}); // app.get('/contact', (req, res) => {
//   let data = "";
//   res.set('Cache-Control', 'public, max-age=31557600');
//   res.send(returnHTML(data, patientinfoBundle, PatientinfoRoot, "contact"));
// });

app.get('/blog', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogBundle, _BlogRoot["default"], "blog"));
});
app.get('/blog/:id', function (req, res) {
  var data = {
    blogId: req.params.id
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, blogtemplateBundle, _BlogtemplateRoot["default"], "blogtemplate"));
});
app.get('/images/:id', function (req, res) {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(_path["default"].join(__dirname, '../images/' + req.params.id));
});

var getEmailHTML = function getEmailHTML(req, option) {
  switch (option) {
    case 1:
      return "\n        <h3>Hi Dr. Castillo!</h3>\n        <h3>The following person is requesting a consultation for the listed procedures.<h3/>\n\n        <h4>First Name: ".concat(req.body.firstName, "</h4>\n        <h4>Last Name: ").concat(req.body.lastName, "</h4>\n        <h4>Email: ").concat(req.body.email, "</h4>\n        <h4>Phone: ").concat(req.body.phone, "</h4>\n        <h4>Procedures: ").concat(req.body.procedures, "</h4>\n      ");

    case 2:
      return "\n        <h3>Hi Dr. Castillo!</h3>\n        <h3>The following person is has a message for you.<h3/>\n\n        <h4>First Name: ".concat(req.body.firstName, "</h4>\n        <h4>Last Name: ").concat(req.body.lastName, "</h4>\n        <h4>Email: ").concat(req.body.email, "</h4>\n        <h4>Phone: ").concat(req.body.phone, "</h4>\n\n        <h4>Message: ").concat(req.body.message, "</h4>\n      ");
  }
};

app.post('/emailer', function (req, res) {
  var transporter = _nodemailer["default"].createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: cryptr.decrypt(_config["default"].email),
      pass: cryptr.decrypt(_config["default"].gmPass)
    }
  });

  transporter.sendMail({
    from: req.body.email,
    to: cryptr.decrypt(_config["default"].email),
    // to: cryptr.decrypt(config.email2),
    subject: 'Dr. Castillo Dental Inquiry',
    html: getEmailHTML(req, req.body.option)
  }, function (error, info) {
    if (error) res.send({
      error: error
    });else res.send({
      response: info
    });
  });
});
app.get('/health', function (req, res) {
  return res.send('OK');
});
app.listen(PORT, function () {
  console.log('Running on http://localhost:' + PORT);
}); // functions!!!!!!!!!!!!!

function getQueries(req, res) {
  var qOb = {};
  var queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];

  if (queries.length) {
    queries.forEach(function (x) {
      var y = x.split('=');
      qOb[y[0]] = y[1];
    });
  }

  return qOb;
}

function fetcher(url) {
  return (0, _nodeFetch["default"])(url).then(function (response) {
    if (response.status !== 200) throw Error(response.statusText);
    return response.json();
  }).then(function (json) {
    return json;
  })["catch"](errHandle);
}

function returnHTML(data, bundle, Page, title) {
  var dataString = JSON.stringify(data);
  var sheet = new _styledComponents.ServerStyleSheet();
  var body = (0, _server.renderToString)(sheet.collectStyles( /*#__PURE__*/_react["default"].createElement(Page, {
    data: data
  })));
  var styles = sheet.getStyleTags();
  return "\n            <html lang=\"en\">\n              <head>\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n                <title>".concat(title, "</title>\n                <link href=\"http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic%7CMontserrat:400,700%7COpen+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800\" rel=\"stylesheet\" type=\"text/css\">\n                <script src=\"https://kit.fontawesome.com/c0157dbc17.js\" crossorigin=\"anonymous\"></script>\n                <meta name=\"Description\" content=\"").concat(title, "\">\n                <style>\n                  body { margin: 0; font-family: Helvetica; }\n                  a { text-decoration: none; color: #000; }\n                  .i-margin { margin-right: 6px }\n                </style>\n                ").concat(styles, "\n              </head>\n              <body>\n                <script>window.os = window.os || {};</script>\n                <script>window.__DATA__=").concat(dataString, "</script>\n                <div id=\"app\" role=\"main\">").concat(body, "</div>\n                <script>").concat(bundle, "</script>\n              </body>\n            </html>\n          ");
}

function errHandle(err) {
  console.log(err);
}