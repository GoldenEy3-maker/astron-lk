/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/api/user/sign-in": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Аутентификация */
        post: operations["signIn"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/user/sign-out": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Разлогинить пользователя */
        get: operations["signOut"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/user/session": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить сессию */
        get: operations["getSession"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/user/session/refresh": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Обновить токены */
        get: operations["refreshToken"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/user/password/change": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Изменить пароль */
        post: operations["changeUserPassword"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/user/password/send-link": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Отправить ссылку для восстановления пароля */
        post: operations["sendRecoveryPasswordLink"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/user/password/recovery": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Восстановить пароль */
        post: operations["recoveryUserPassword"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/user/company": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить компанию пользователя */
        get: operations["getUserCompany"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/user/favorites": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить список избранных документов/бюллетеней */
        get: operations["getUserFavorites"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/user/favorites/add": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Добавить документ/бюллетень в избранное */
        post: operations["addFavorite"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/user/favorites/remove": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Удалить документ/бюллетень из избранного */
        delete: operations["removeFavorite"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/news": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить список новостей */
        get: operations["getNews"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/news/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить новость по ID */
        get: operations["getNewsById"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/documents": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить список документов */
        get: operations["getDocuments"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/documents/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить список категорий документов */
        get: operations["getDocumentCategories"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/bulletins": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить список бюллетеней */
        get: operations["getBulletins"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/bulletins/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить список категорий бюллетеней */
        get: operations["getBulletinCategories"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Поиск документов/бюллетеней/новостей */
        get: operations["search"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/kpi/employee-testing": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Получить данные тестирования сотрудников */
        get: operations["getEmployeeTesting"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/feedback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Форма обратной связи */
        post: operations["sendFeedback"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        User: {
            /** @example 1 */
            id: string;
            /** @example Королев */
            surname: string;
            /** @example Данил */
            name: string;
            /** @example Николаевич */
            patronymic?: string;
            /** @example dev@mail.ru */
            email: string;
            /** @example +79231665038 */
            phone: string;
            /** @example 123 */
            password: string;
            tokenVersion: number;
            isBanned: boolean;
            favorites: string[];
        };
        Session: {
            /** @example dev@mail.ru */
            email: string;
            /** @example Королев */
            surname: string;
            /** @example Данил */
            name: string;
            /** @example Николаевич */
            patronymic?: string;
            /** @example +79231665038 */
            phone: string;
            favorites: string[];
        };
        Company: {
            /** @example 1 */
            id: string;
            /** @example NABUCCO Architecture & Construction */
            title: string;
            projects: {
                /** @example 23 */
                count: number;
                /** @example /link/to/projects */
                link: string;
                /** @example 6578 */
                implementedArea: number;
            };
            /** @example 12 */
            cooperationYears: number;
            /** @example /path/to/logo.svg */
            logo: string;
            /** @example /path/to/certificate.pdf */
            certificate: string;
            /** @example 1 */
            userId: string;
        };
        News: {
            /** @example 1 */
            id: string;
            /** @example Ключевая ставка достигла 30% */
            title: string;
            /** @example Деняк нет, но вы держитесь */
            description: string;
            /** @example /path/to/img.jpg */
            img: string;
            /** @example <p>Деняк нет, но вы держитесь</p> */
            content: string;
            /**
             * Format: date-time
             * @example 2024-12-30T12:34:56Z
             */
            createdAt: string;
        };
        Document: {
            /** @example 1 */
            id: string;
            /** @example Документ */
            title: string;
            file: {
                /** @example /path/to/file.pdf */
                url: string;
                /** @example 607232 */
                size: number;
            };
            /** @example Изменение цены */
            category: string;
            /**
             * Format: date-time
             * @example 2024-12-30T12:34:56Z
             */
            createdAt: string;
        };
        Bulletin: {
            /** @example 1 */
            id: string;
            /** @example Документ */
            title: string;
            file: {
                /** @example /path/to/file.pdf */
                url: string;
                /** @example 607232 */
                size: number;
            };
            /** @example Изменение цены */
            category: string;
            /**
             * Format: date-time
             * @example 2024-12-30T12:34:56Z
             */
            createdAt: string;
        };
        Favorite: components["schemas"]["Document"] | components["schemas"]["Bulletin"];
        Error: {
            message: string;
        };
        Success: {
            message: string;
        };
        SearchResult: {
            /** @example 1 */
            id: string;
            /** @example Ключевая ставка достигла 30% */
            title: string;
            /** @enum {string} */
            type: "news" | "document" | "bulletin";
            /** @example Деняк нет, но вы держитесь */
            description?: string;
            /** @example /path/to/file.pdf */
            fileUrl?: string;
        };
        EmployeeTesting: {
            /** @example 1 */
            id: string;
            /** @example Специалист по монтажу */
            test: string;
            /** @example Иванов-Петров Кладиславослав */
            name: string;
            /** @example 81 */
            result: number;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    signIn: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example dev@mail.ru */
                    login: string;
                    /** @example password */
                    password: string;
                    remember?: boolean;
                };
            };
        };
        responses: {
            /** @description Успешный ответ */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        accessToken: string;
                        user: components["schemas"]["Session"];
                    };
                };
            };
            /** @description Ошибка ввода данных */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Пользователь забанен */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    signOut: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Успешный ответ */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Success"];
                };
            };
        };
    };
    getSession: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Успешный ответ */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Session"];
                };
            };
            /** @description Ошибка авторизации */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    refreshToken: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: {
                /** @description Refresh Token с клиента */
                refreshToken?: string;
            };
        };
        requestBody?: never;
        responses: {
            /** @description Успешный ответ */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        accessToken: string;
                    };
                };
            };
            /** @description Ошибка авторизации */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    changeUserPassword: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    password: string;
                    newPassword: string;
                };
            };
        };
        responses: {
            /** @description Пароль успешно изменен */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Success"];
                };
            };
            /** @description Введен неверный пароль */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Пользователь не авторизован */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    sendRecoveryPasswordLink: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    email: string;
                };
            };
        };
        responses: {
            /** @description Ссылка для восстановления пароля отправлена на почту */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Success"];
                };
            };
            /** @description Пользователь с таким email не найден */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Ошибка при отправке письма */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    recoveryUserPassword: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    password: string;
                    token: string;
                };
            };
        };
        responses: {
            /** @description Пароль успешно изменен */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Success"];
                };
            };
            /** @description Время на восстановление пароля по этой ссылке истекло */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Пользователь с таким ID токена не найден */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getUserCompany: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Успешный ответ */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Company"];
                };
            };
            /** @description Пользователь не авторизован */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getUserFavorites: {
        parameters: {
            query?: {
                /** @description Номер страницы */
                page?: number;
                /** @description Количество документов на странице */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Успешный ответ */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Favorite"][];
                        /** @example 1 */
                        nextPage: number;
                        /** @example 10 */
                        totalPages: number;
                    };
                };
            };
            /** @description Пользователь не авторизован */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    addFavorite: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    id: string;
                };
            };
        };
        responses: {
            /** @description Документ/бюллетень успешно добавлен в избранное */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Success"];
                };
            };
            /** @description Пользователь не авторизован */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Документ/бюллетень с таким ID не найден */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    removeFavorite: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    id: string;
                };
            };
        };
        responses: {
            /** @description Документ/бюллетень успешно удален из избранного */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Success"];
                };
            };
            /** @description Пользователь не авторизован */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
            /** @description Документ/бюллетень с таким ID не найден */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getNews: {
        parameters: {
            query?: {
                /** @description Номер страницы */
                page?: number;
                /** @description Количество новостей на странице */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Успешный ответ */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["News"][];
                        /** @example 1 */
                        nextPage: number;
                    };
                };
            };
        };
    };
    getNewsById: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID новости */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Успешный ответ */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["News"];
                };
            };
            /** @description Новость с таким ID не найдена */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Error"];
                };
            };
        };
    };
    getDocuments: {
        parameters: {
            query?: {
                /** @description Номер страницы */
                page?: number;
                /** @description Количество документов на странице */
                limit?: number;
                /** @description Категория документа */
                category?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Успешный ответ */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Document"][];
                        /** @example 10 */
                        totalPages: number;
                        /** @example 1 */
                        nextPage: number;
                    };
                };
            };
        };
    };
    getDocumentCategories: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Успешный ответ */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[];
                };
            };
        };
    };
    getBulletins: {
        parameters: {
            query?: {
                /** @description Номер страницы */
                page?: number;
                /** @description Количество бюллетеней на странице */
                limit?: number;
                /** @description Категория бюллетеня */
                category?: string;
                /** @description Сортировка бюллетеней */
                sort?: "latest" | "oldest";
                /** @description Дата начала периода */
                fromDate?: string;
                /** @description Дата конца периода */
                toDate?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Успешный ответ */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Bulletin"][];
                        /** @example 10 */
                        totalPages: number;
                        /** @example 1 */
                        nextPage: number;
                    };
                };
            };
        };
    };
    getBulletinCategories: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Успешный ответ */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[];
                };
            };
        };
    };
    search: {
        parameters: {
            query: {
                /** @description Запрос для поиска */
                query: string;
                /** @description Номер страницы */
                page?: number;
                /** @description Количество результатов на странице */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Успешный ответ */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["SearchResult"][];
                        /** @example 10 */
                        totalPages: number;
                        /** @example 300 */
                        totalResults: number;
                        /** @example 1 */
                        nextPage: number;
                    };
                };
            };
        };
    };
    getEmployeeTesting: {
        parameters: {
            query: {
                /** @description Период */
                period: "all" | "today" | "month" | "quarter" | "year" | "prev-year" | "prev-prev-year";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Успешный ответ */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["EmployeeTesting"][];
                };
            };
        };
    };
    sendFeedback: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Иванов Иван Иванович */
                    fio: string;
                    /** @example +79231665038 */
                    phone: string;
                    /** @example Хороший сайт */
                    message: string;
                    /** @example true */
                    privacy: boolean;
                    /** @example true */
                    personalData: boolean;
                };
            };
        };
        responses: {
            /** @description Успешный ответ */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Success"];
                };
            };
        };
    };
}
