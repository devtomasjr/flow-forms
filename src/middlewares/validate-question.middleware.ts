import Question from "../domain/question/question";
import { Request, Response, NextFunction } from "express";


class ValidateQuestion {
    public static add(req: Request, res: Response, next: NextFunction) {
        const question = req.body as Question;
        const errors: string[] = [];
        if (!question.title) {
            errors.push('Title is required');
        }
        if (question.answers.length > 0) {
            for (let i = 0; i < question.answers.length; i++) {
                if (!question.answers[i].text) {
                    errors.push('Answer text is required');
                }
                if (!question.answers[i].next) {
                    errors.push('Answer next is required');
                }
            }
        }
        if (errors.length > 0) {
            res.status(400).send({ errors });
        } else {
            next();
        }
    }

    public static edit(req: Request, res: Response, next: NextFunction) {
        const question = req.body as Question;
        const errors: string[] = [];
        if (!question.id) {
            errors.push('Id is required');
        } else {
            next();
        }
    }

    public static delete(req: Request, res: Response, next: NextFunction) {
        const id = req.params.id;
        const errors: string[] = [];
        if (!id) {
            errors.push('Id is required');
        }
        if (errors.length > 0) {
            res.status(400).send({ errors });
        } else {
            next();
        }
    }

    public static get(req: Request, res: Response, next: NextFunction) {
        const id = req.params.id;
        const errors: string[] = [];
        if (!id) {
            errors.push('Id is required');
        }
        if (errors.length > 0) {
            res.status(400).send({ errors });
        } else {
            next();
        }
    }

    public static list(req: Request, res: Response, next: NextFunction) {
        next();
    }
    
}

export = ValidateQuestion;