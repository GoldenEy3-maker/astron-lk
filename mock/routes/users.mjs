import express from "express";

const usersRouter = express.Router();

usersRouter.get("/", async (req, res) => {
  res.json(req.users);
});

usersRouter.get("/:userId", async (req, res) => {
  const user = req.users.find((user) => user.id === req.params.userId);

  if (!user) res.status(404).json({ message: "Пользователь не найден" });

  res.json(user);
});

usersRouter.post("/:userId/change-password", (req, res) => {
  const { newPassword } = req.body;

  const userIndex = req.users.findIndex(
    (user) => user.id === req.params.userId
  );
  if (userIndex === -1) {
    return res.status(400).json({ message: "Пользователь не найден" });
  }

  req.users[userIndex].password = newPassword;

  res.json({ message: "Пароль успешно изменен" });
});

export { usersRouter };
