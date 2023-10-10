import Question from "../domain/question/question";
import { Request, Response } from "express";


class QuestionController {
    public static async list(req: Request, res: Response) {
        const tasks = Question.list();
        res.status(200).send(tasks);
    }

    public static async add(req: Request, res: Response) {
        const task = Question.add(req.body);
        res.status(200).send(task);
    }

    public static async edit(req: Request, res: Response) {
        const task = Question.edit(req.body);
        res.status(200).send(task);
    }

    public static async get(req: Request, res: Response) {
        const task = Question.get(+req.params.id);
        res.status(200).send(task);
    }
}

export = QuestionController;