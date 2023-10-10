import { describe, it } from 'node:test';
import assert from 'node:assert';
import Question from '../../build/domain/question/question.js';


describe('add question', () => {
    it('should add question', () => {
        const question = new Question('question', 'answer');
        assert.strictEqual(question.question, 'question');
        assert.strictEqual(question.answer, 'answer');
    });
});