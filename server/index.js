const express = require('express');
const path = require('path');
const port = process.env.port || 4260;
const app = express();

const destinationDir = path.join(__dirname, '../dist/product-mart');
//hosting from dist folder
app.use(express.static(destinationDir))
console.log('express hosting from ', destinationDir)

//serving index.html
app.get('*', (req, res) => {
      res.sendFile(path.join(destinationDir, 'index.html'))
})
//Listen PORT
app.listen(port, () => {
      console.log('server is running from' , port )
})

