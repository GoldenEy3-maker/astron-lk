import { Request, Response, Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { EmployeeTesting } from "../types/globals";
import dbService from "../services/db.service";
import { getQuarter } from "date-fns";

const kpiRouter = Router();

kpiRouter.get(
  "/employee-testing",
  authMiddleware,
  (req: Request, res: Response<EmployeeTesting[]>) => {
    const { period } = req.query as {
      period:
        | "month"
        | "quarter"
        | "year"
        | "all"
        | "prev-year"
        | "today"
        | "prev-prev-year";
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

    res.json(
      data
        .filter((employeeTest) => {
          const createdAt = new Date(
            Date.UTC(
              new Date(employeeTest.createdAt).getUTCFullYear(),
              new Date(employeeTest.createdAt).getUTCMonth(),
              new Date(employeeTest.createdAt).getUTCDate(),
              12,
              0,
              0,
              0
            )
          );
          const now = new Date(
            Date.UTC(
              new Date().getUTCFullYear(),
              new Date().getUTCMonth(),
              new Date().getUTCDate(),
              12,
              0,
              0,
              0
            )
          );

          switch (period) {
            case "month":
              return createdAt.getUTCMonth() === now.getUTCMonth();
            case "quarter":
              return getQuarter(createdAt) === getQuarter(now);
            case "year":
              return createdAt.getUTCFullYear() === now.getUTCFullYear();
            case "today":
              return createdAt.toDateString() === now.toDateString();
            case "prev-year":
              return createdAt.getUTCFullYear() === now.getUTCFullYear() - 1;
            case "prev-prev-year":
              return createdAt.getUTCFullYear() === now.getUTCFullYear() - 2;
            default:
              return true;
          }
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
        })
    );
  }
);

export { kpiRouter };
