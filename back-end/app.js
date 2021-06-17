const config = require('./config/config');
const app = require('./config/express');
require('./config/database');


app.listen(config.PORT, () => {
    console.info(`server started on port ${config.PORT} `);
  });

