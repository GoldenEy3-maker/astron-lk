import { Request, Response, Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import dbService from "../services/db.service";
import { EmployeeTesting } from "../types/globals";

const employeeTestingRouter = Router();

employeeTestingRouter.get(
  "/",
  authMiddleware,
  (
    req: Request,
    res: Response<{
      data: EmployeeTesting[];
      uploadedAt: string;
      updatedAt: string;
    }>
  ) => {
    const { year } = req.query as {
      year: string;
    };

    // const user = res.locals.user;
    // const company = dbService
    //   .get("companies")
    //   .find((company) => company.userId === user.id);

    const employeeTests = dbService.get("employeeTests");
    const employees = dbService.get("employees");
    const tests = dbService.get("tests");

    const data = employeeTests.filter((employeeTest) =>
      employees.some((employee) => employee.id === employeeTest.employeeId)
    );

    res.json({
      data: data
        .filter((employeeTest) => {
          const createdAt = new Date(
            new Date(employeeTest.createdAt).getFullYear(),
            new Date(employeeTest.createdAt).getMonth(),
            new Date(employeeTest.createdAt).getDate(),
            12,
            0,
            0,
            0
          );
          // const now = new Date(
          //   Date.UTC(
          //     new Date().getUTCFullYear(),
          //     new Date().getUTCMonth(),
          //     new Date().getUTCDate(),
          //     12,
          //     0,
          //     0,
          //     0
          //   )
          // );

          // switch (period) {
          //   case "month":
          //     return createdAt.getUTCMonth() === now.getUTCMonth();
          //   case "quarter":
          //     return getQuarter(createdAt) === getQuarter(now);
          //   case "year":
          //     return createdAt.getUTCFullYear() === now.getUTCFullYear();
          //   case "today":
          //     return createdAt.toDateString() === now.toDateString();
          //   case "prev-year":
          //     return createdAt.getUTCFullYear() === now.getUTCFullYear() - 1;
          //   case "prev-prev-year":
          //     return createdAt.getUTCFullYear() === now.getUTCFullYear() - 2;
          //   default:
          //     return true;
          // }
          return createdAt.getFullYear() === Number(year);
        })
        .map((employeeTest) => {
          const employee = employees.find(
            (employee) => employee.id === employeeTest.employeeId
          );
          const test = tests.find((test) => test.id === employeeTest.testId);
          return {
            id: employeeTest.id,
            test: test.name,
            name: employee.name,
            result: employeeTest.result,
          };
        }),
      uploadedAt: employeeTests[0].createdAt,
      updatedAt: employeeTests[0].createdAt,
    });
  }
);

employeeTestingRouter.get(
  "/uploaded-years",
  authMiddleware,
  (req: Request, res: Response<string[]>) => {
    const employeeTests = dbService.get("employeeTests");
    const years = employeeTests
      .map((employeeTest) =>
        new Date(employeeTest.createdAt).getUTCFullYear().toString()
      )
      .sort((a, b) => parseInt(b) - parseInt(a));
    res.json(Array.from(new Set(years)));
  }
);

export { employeeTestingRouter };
