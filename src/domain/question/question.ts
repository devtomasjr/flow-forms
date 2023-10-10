import Database from '../../infra/database/database';

interface Answer {
    id: number;
    text: string;
    next: number;
}

interface Question {
    id: number;
    title: string;
    answers: Answer[];
}

class Question {
    public static list(): Question[] {
        const questions = Database.read();
        return questions;
    }

    public static add(question: any): Question {
        const questions = this.list();
        const lastId = questions.length > 0 ? questions[questions.length - 1].id : 0;
        question.id = lastId + 1;
        questions.push(question as Question);
        Database.write(questions);
        return question;
    }

    public static edit(question: Question): Question {
        const questions = this.list();
        const index = questions.findIndex((t) => t.id == question.id);
        if (index < 0) {
            throw new Error('Question not found');
        }
        questions[index] = {...questions[index], ...question};
        Database.write(questions);
        return questions[index];
    }

    public static delete(id: number): Question {
        const questions = this.list();
        const index = questions.findIndex((t) => t.id == id);
        const question = questions[index];
        questions.splice(index, 1);
        Database.write(questions);
        return question;
    }

    public static get(id: number): Question {
        const questions = this.list();
        const index = questions.findIndex((t) => t.id == id);
        return questions[index];
    }
}

export default Question;
