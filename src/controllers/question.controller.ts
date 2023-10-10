import Question from "../domain/question/question";
import { Request, Response } from "express";


class QuestionController {
    public static async list(req: Request, res: Response) {
        const questions = Question.list();
        res.status(200).send(questions);
    }

    public static async add(req: Request, res: Response) {
        const question = Question.add(req.body);
        res.status(200).send(question);
    }

    public static async edit(req: Request, res: Response) {
        const question = Question.edit(req.body);
        res.status(200).send(question);
    }

    public static async get(req: Request, res: Response) {
        const question = Question.get(+req.params.id);
        res.status(200).send(question);
    }
}

export = QuestionController;