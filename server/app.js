'use strict';

const express = require('express'),
  serveStatic = require('serve-static'),
  app = express();

app.use(serveStatic('../client/dist', {'index': ['index.html']}));
app.listen(3000);
