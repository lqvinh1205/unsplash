export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "\\.(css|less|scss)$": "jest-transform-stub",
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/src/test/__ mocks __/fileMock.ts",
  },
};
