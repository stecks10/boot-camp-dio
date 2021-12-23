import express from 'express';
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();
// Config da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Config de rotas
app.use(usersRoute);
app.use(statusRoute);
app.use(authorizationRoute);

// Config de Handlers dde erro
app.use(errorHandler);

// Start the server
app.listen(3000, () => {
  console.log('Aplicação executando na porta 3000');
});
