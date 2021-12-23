import { NextFunction, Request, Response, Router } from 'express';
import ForbiddenError from '../models/forbidden.error.model';

const authorizationRoute = Router();

authorizationRoute.post(
  '/token',
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const authorizationHeader = req.headers['authorization'];

      if (!authorizationHeader) {
        throw new ForbiddenError('Credenciais não informadas');
      }

      const [authenticationType, token] = authorizationHeader.split(' ');

      if (authenticationType !== 'Basic' || !token) {
        throw new ForbiddenError('Tipo de authenticação inválido ');
      }

      const tokenContent = Buffer.from(token, 'base64').toString('utf-8');

      const [username, password] = tokenContent.split(':');

      if (!username || !password) {
        throw new ForbiddenError('Credenciais nao preenchidas ');
      }
    } catch (error) {
      next(error);
    }
  }
);

export default authorizationRoute;
