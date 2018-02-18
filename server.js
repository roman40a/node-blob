const express = require('express');
const formidable = require('express-formidable');

var app = express();

app.use(formidable({
    encoding: 'utf-8',
    uploadDir: '.',
    multiples: true, // req.files to be arrays of files
}));


app.post('/server', (req, res) => {
    const fields = req.fields; // contains non-file fields
    const files = req.files; // contains files
    console.log(fields, files);
});

app.listen(8080)