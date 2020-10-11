import express from 'express';
import { rootHandler, helloHandler } from './handlers';

const app = express();
const port = process.env.PORT || '8000';

app.get('/', rootHandler);
app.get('/hello/:name', helloHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
