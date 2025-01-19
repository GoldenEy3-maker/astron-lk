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

    const user = res.locals.user;
    const company = dbService
      .get("companies")
      .find((company) => company.userId === user.id);

    const employeeTests = dbService.get("employeeTests");
    const employees = dbService.get("employees");
    const tests = dbService.get("tests");

    const data = employeeTests.filter((employeeTest) =>
      employees.some((employee) => employee.id === employeeTest.employeeId)
    );

    res.json(
      data
        .filter((employeeTest) => {
          const createdAt = new Date(employeeTest.createdAt);

          switch (period) {
            case "month":
              return createdAt.getMonth() === new Date().getMonth();
            case "quarter":
              return getQuarter(createdAt) === getQuarter(new Date());
            case "year":
              return createdAt.getFullYear() === new Date().getFullYear();
            case "today":
              return createdAt.toDateString() === new Date().toDateString();
            case "prev-year":
              return createdAt.getFullYear() === new Date().getFullYear() - 1;
            case "prev-prev-year":
              return createdAt.getFullYear() === new Date().getFullYear() - 2;
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
