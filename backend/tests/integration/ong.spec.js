const request = require("supertest");
const app = require("../../src/app");

describe("ONG", () => {
  it("should be able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        name: "Tot'ong",
        email: "contato@gmail.com",
        whatsapp: "4700000000",
        city: "Nova Cruz",
        uf: "RN"
      });

    console.log(response.body);
  });
});
