module.exports = {
    preset: 'ts-jest',
    runner: 'jest-electron/runner',
    testEnvironment: 'jest-electron/environment',
    setupFiles: ['./dist/opc-comment-input.js'],
};
