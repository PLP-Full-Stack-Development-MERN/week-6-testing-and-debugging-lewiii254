import request from "supertest";
import mongoose from "mongoose";
import app from "../server.js";

describe("Bug API", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it("should create a new bug", async () => {
    const res = await request(app).post("/api/bugs").send({
      title: "Test Bug",
      description: "Bug description"
    });
    expect(res.statusCode).toBe(201);
  });

  it("should return all bugs", async () => {
    const res = await request(app).get("/api/bugs");
    expect(res.statusCode).toBe(200);
  });
});
