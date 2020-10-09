const request = require("supertest");
const app = require("./app");

// //登録テスト
// describe("職務履歴登録", () => {
// //200
// test("登録成功", async() => {
//     const resume = {
//         startDate: "2019/02/02",
//         endDate: "2020/05/15",
//         workPlace: "",
//         project: "",
//         position: "",
//         customer: "",
//         nearStation: "",
//         remarks: "",
//     };
//     const response = await request(app).post("/api/v1/resume").send(resume);
//     expect(response.statusCode).toBe(200);
// });
// //400
// test("登録情報なし", async() => {
//     const resume = {};
//     const response = await request(app).post("/api/v1/resume").send();
//     expect(response.statusCode).toBe(400);
// });
//     // 500
//     test("エラー", async() => {
//         const resume = {
//             startDate: null,
//             endDate: null,
//             workPlace: "",
//             project: "",
//             position: "",
//             customer: "",
//             nearStation: "",
//             remarks: "",
//         };
//         const response = await request(app).post("/api/v1/resume").send(resume);
//         expect(response.statusCode).toBe(500);
//     });
// });
// //全件取得テスト
// describe("職務履歴全件取得", () => {
//     //200
//     test("正常テスト", async() => {
//         const response = await request(app).get("/api/v1/resume");
//         expect(response.statusCode).toBe(200);
//     });
//     //500　sqlサーバー切断
//     test("エラー", async() => {
//         const response = await request(app).get("/api/v1/resume");
//         expect(response.statusCode).toBe(500);
//     });
// });
// //検索取得テスト
// describe("職務履歴検索", () => {
// //200
// test("正常テスト", async() => {
//     const response = await request(app).get("/api/v1/resume/111111111111");
//     expect(response.statusCode).toBe(200);
// });
// //404
// test("検索対象無し", async() => {
//     const response = await request(app).get("/api/v1/resume/222222222222");
//     expect(response.statusCode).toBe(404)
// });
//     //500
//     test("エラー", async() => {
//         const response = await request(app).get("/api/v1/resume/111111111111");
//         expect(response.statusCode).toBe(500);
//     });
// });
// // 更新テスト
// describe("職務履歴更新", () => {
// //200 createDateは登録済みのレコードを参照して記入
// test("正常テスト", async() => {
//     const resume = {
//         startDate: "2019/10/02",
//         endDate: "2020/12/15",
//         workPlace: "",
//         project: "",
//         position: "",
//         customer: "",
//         nearStation: "",
//         remarks: "更新",
//         createDate: "2020/10/09 15:43:42",
//     };
//     const response = await request(app)
//         .put("/api/v1/resume/111111111111")
//         .send(resume);
//     expect(response.statusCode).toBe(200);
// });
// //400
// test("更新情報なし", async() => {
//     const response = await request(app)
//         .put("/api/v1/resume/111111111111")
//         .send();
//     expect(response.statusCode).toBe(400);
// });
// //404
// test("対象が見つからない", async() => {
//     const resume = {
//         startDate: "2019/10/02",
//         endDate: "2020/12/15",
//         workPlace: "",
//         project: "",
//         position: "",
//         customer: "",
//         nearStation: "",
//         remarks: "更新",
//         createDate: "2020/10/09 10:36:53",
//     };
//     const response = await request(app)
//         .put("/api/v1/resume/222222222222")
//         .send(resume);
//     expect(response.statusCode).toBe(404);
// });
//     //500 更新エラー,サーバー接続エラー
//     test("エラー", async() => {
//         const resume = {
//             startDate: null,
//             endDate: null,
//             workPlace: "",
//             project: "",
//             position: "",
//             customer: "",
//             nearStation: "",
//             remarks: "更新",
//             createDate: "2020/10/09 10:36:53",
//         };
//         const response = await request(app)
//             .put("/api/v1/resume/111111111111")
//             .send(resume);
//         expect(response.statusCode).toBe(500);
//     });
// });
// //検索削除テスト
// describe("職務履歴検索削除", () => {
// //200　createDateは登録済みのレコードを参照して記入
// test("正常テスト", async() => {
//     const resume = {
//         createDate: "2020/10/09 15:43:42",
//     };
//     const response = await request(app)
//         .delete("/api/v1/resume/111111111111")
//         .send(resume);
//     expect(response.statusCode).toBe(200);
// });
// //404
// test("削除が見つからない", async() => {
//     const resume = {
//         createDate: "2020/10/08 18:02:02",
//     };
//     const response = await request(app)
//         .delete("/api/v1/resume/111111111111")
//         .send(resume);
//     expect(response.statusCode).toBe(404);
// });
//     //500
//     test("エラー", async() => {
//         const resume = {
//             createDate: "2020/10/08 18:02:02",
//         };
//         const response = await request(app)
//             .delete("/api/v1/resume/111111111111")
//             .send(resume);
//         expect(response.statusCode).toBe(500);
//     });
// });
// //全件削除テスト
// describe("職務履歴全件削除", () => {
//     //200
//     test("正常テスト", async() => {
//         const response = await request(app).delete("/api/v1/resume");
//         expect(response.statusCode).toBe(200);
//     });
//     //500
//     test("エラー", async() => {
//         const response = await request(app).delete("/api/v1/resume");
//         expect(response.statusCode).toBe(500);
//     });
// });