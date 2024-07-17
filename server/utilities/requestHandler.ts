import { Request, Response, NextFunction } from 'express';

type RequestHandlerFunction = (req: Request, res: Response, next: NextFunction) => Promise<void>;

const requestHandler = (fn: RequestHandlerFunction): RequestHandlerFunction => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            await fn(req, res, next);
        } catch (error) {
            next(error);
        }
    };
};

export default requestHandler;
