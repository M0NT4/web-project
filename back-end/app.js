const config = require('./config/config');
const app = require('./config/express');
require('./config/database');


app.listen(3000, () => {
 console.log = function(){}  

});

