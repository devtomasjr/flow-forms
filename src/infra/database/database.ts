import * as fs from 'fs';

class Database {
    private static readonly filePath = 'data/questions.json';
    private static readonly testFilePath = 'data/questions.test.json';

    public static read() {
        try {
            const data = JSON.parse(fs.readFileSync(this.filePath).toString());
            data.response = { status: 200, message: 'Success' };
            return data;
        } catch (error) {
            return { response: { status: 500, message: 'Unable to read database' } }
        }
    }

    public static write(data: any) {
        try {
            fs.writeFileSync(this.filePath, JSON.stringify(data));
            return { response: { status: 200, message: 'Success' } };
        } catch (error) {
            return { response: { status: 500, message: 'Unable to write database' } };
        }
    }

    public static createFile(isTest: boolean = false) {
        try {
            fs.writeFileSync(isTest ? this.testFilePath : this.filePath, '[]');
            return { response: { status: 200, message: 'Success' } };
        } catch (error) {
            return { response: { status: 500, message: 'Unable to create database file' } };
        }
    }
}

export default Database;