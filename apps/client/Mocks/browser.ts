// src/mocks/browser.ts
import { setupWorker, rest } from "msw";

const users = [
  {
    firstName: "Tony",
    lastName: "Stark",
    email: "tony@stark.com",
    password: "password123",
    token: "mock-token-1",
  },
  {
    firstName: "Steve",
    lastName: "Rogers",
    email: "steve@rogers.com",
    password: "password456",
    token: "mock-token-2",
  },
];

export const worker = setupWorker(
  rest.post("/api/v1/user/login", (req, res, ctx) => {
    const { email, password } = req.body as { email: string; password: string };
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      return res(ctx.status(200), ctx.json({ body: { token: user.token } }));
    } else {
      return res(ctx.status(400), ctx.json({ message: "Invalid credentials" }));
    }
  }),

  rest.get("/api/v1/user/profile", (req, res, ctx) => {
    const token = req.headers.get("Authorization")?.split("Bearer ")[1];
    const user = users.find((u) => u.token === token);
    if (user) {
      return res(
        ctx.status(200),
        ctx.json({
          body: { firstName: user.firstName, lastName: user.lastName },
        })
      );
    } else {
      return res(ctx.status(400), ctx.json({ message: "User not found" }));
    }
  }),

  rest.put("/api/v1/user/profile", (req, res, ctx) => {
    const token = req.headers.get("Authorization")?.split("Bearer ")[1];
    const { firstName, lastName } = req.body as {
      firstName: string;
      lastName: string;
    };
    const userIndex = users.findIndex((u) => u.token === token);
    if (userIndex !== -1) {
      users[userIndex].firstName = firstName;
      users[userIndex].lastName = lastName;
      return res(ctx.status(200), ctx.json({ body: { firstName, lastName } }));
    } else {
      return res(ctx.status(400), ctx.json({ message: "User not found" }));
    }
  })
);
