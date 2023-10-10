import { describe, it } from 'node:test';
import assert from 'node:assert';
import Task from '../src/task/task.js';


describe('add task', () => {
    it('should add task', () => {
        const task = Task.add({
            title: 'Test task',
            description: 'Test task',
            status: 'To Do',
            idStatus: 1,
            timeEstimated: 0,
            timeSpent: 0,
            createdAt: new Date()
        });
        assert.equal(task.id, 1);
    });
});