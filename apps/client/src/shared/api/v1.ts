import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";




const signIn_Body = z.object({ login: z.string(), password: z.string(), remember: z.boolean().optional() }).strict();
const Session = z.object({ email: z.string(), surname: z.string(), name: z.string(), patronymic: z.string().optional(), role: z.enum(["manager", "super-manager", "employee", "partner"]), phone: z.string().optional(), favorites: z.array(z.string()), favoriteProjects: z.number().int(), unreadNews: z.array(z.string()).optional(), unreadBulletins: z.array(z.string()).optional() }).strict();
const Error = z.object({ message: z.string() }).strict();
const Success = z.object({ message: z.string() }).strict();
const changeUserPassword_Body = z.object({ password: z.string(), newPassword: z.string() }).strict();
const recoveryUserPassword_Body = z.object({ password: z.string(), token: z.string() }).strict();
const PartnerCard = z.object({ id: z.string(), title: z.string(), status: z.enum(["platinum", "gold", "silver"]).optional(), projects: z.object({ count: z.number().int(), link: z.string(), implementedArea: z.number().int().optional() }).strict().optional(), cooperationYears: z.number().int().optional(), logo: z.string().optional(), certificate: z.string().optional() }).strict();
const PartnerInList = z.object({ id: z.string(), title: z.string(), logo: z.string().optional(), sales: z.object({ total: z.number().int(), percent: z.number().int() }).strict(), booking: z.object({ total: z.number().int(), percent: z.number().int() }).strict() }).strict();
const PartnerInSelect = z.object({ id: z.string(), title: z.string() }).strict();
const Image = z.object({ src: z.string(), alt: z.string().optional() }).strict();
const NewsInList = z.object({ id: z.string(), title: z.string(), description: z.string().optional(), img: Image.optional(), createdAt: z.string().datetime({ offset: true }) }).strict();
const DocumentCategory = z.object({ id: z.string(), label: z.string(), slug: z.string() }).strict();
const Document = z.object({ id: z.string(), title: z.string(), file: z.object({ url: z.string(), size: z.number().int() }).strict(), category: DocumentCategory, createdAt: z.string().datetime({ offset: true }) }).strict();
const Bulletin = z.object({ id: z.string(), title: z.string(), file: z.object({ url: z.string(), size: z.number().int() }).strict(), category: DocumentCategory, createdAt: z.string().datetime({ offset: true }) }).strict();
const News = z.object({ id: z.string(), title: z.string(), description: z.string().optional(), img: Image.optional(), content: z.object({ text: z.string(), documents: z.array(z.union([Document, Bulletin])).optional() }).strict(), createdAt: z.string().datetime({ offset: true }) }).strict();
const Favorite = z.union([Document, Bulletin]);
const SearchResult = z.object({ id: z.string(), title: z.string(), type: z.enum(["news", "document", "bulletin"]), description: z.string().optional(), fileUrl: z.string().optional() }).strict();
const sendFeedback_Body = z.object({ fio: z.string(), phone: z.string(), message: z.string(), privacy: z.boolean(), personalData: z.boolean() }).strict();
const ImageBlock = z.object({ type: z.literal("image"), src: z.string(), alt: z.string().optional() }).strict();
const VideoBlock = z.object({ type: z.literal("video"), src: z.string(), thumbnail: z.string(), alt: z.string().optional() }).strict();
const MediaBlock = 
                z.discriminatedUnion("type", [ImageBlock, VideoBlock])
            ;
const SectionBlock = z.object({ type: z.literal("section"), title: z.string(), text: z.string().optional(), media: MediaBlock.optional(), documents: z.array(Document).optional() }).strict();
const HtmlBlock = z.object({ type: z.literal("html"), content: z.string() }).strict();
const InfoBlock = 
                z.discriminatedUnion("type", [SectionBlock, HtmlBlock])
            ;
const EmployeeTesting = z.object({ id: z.string(), test: z.string(), name: z.string(), result: z.number().int() }).strict();
const LeadGenerationItem = z.object({ id: z.string(), project: z.object({ id: z.string(), name: z.string() }).strict(), fixedAt: z.string().datetime({ offset: true }) }).strict();
const LeadGenerationMonth = z.object({ monthIdx: z.number(), value: z.number() }).strict();
const LeadGenerationQuarterPassed = z.object({ quarter: z.number(), value: z.number() }).strict();
const RetailingQuarter = z.object({ quarter: z.number(), plan: z.number(), fact: z.number().optional() }).strict();
const RetailingQuartersPlan = z.object({ data: z.array(RetailingQuarter), uploadedAt: z.string().datetime({ offset: true }), updatedAt: z.string().datetime({ offset: true }) }).strict();
const Retailing = z.object({ id: z.string(), monthIdx: z.number(), project: z.object({ id: z.string(), name: z.string() }).strict(), sum: z.number(), createdAt: z.string().datetime({ offset: true }).optional() }).strict();
const Video = z.object({ src: z.string(), thumbnail: z.string(), alt: z.string().optional() }).strict();
const FactoryTeam = z.object({ id: z.string(), img: Image.optional(), role: z.string(), title: z.string(), phone: z.string(), email: z.string().optional() }).strict();
const AcademySectionInList = z.object({ id: z.string(), title: z.string(), bgImg: z.string().optional(), url: z.string().optional(), icon: z.string().optional() }).strict();
const AcademySection = z.object({ id: z.string(), title: z.string(), description: z.string().optional(), content: z.array(InfoBlock) }).strict();
const AcademySales = z.object({ title: z.string(), description: z.string().optional(), slug: z.string(), content: z.array(InfoBlock) }).strict();
const AcademyProjectInList = z.object({ id: z.string(), title: z.string(), description: z.string().optional(), img: Image.optional() }).strict();
const AcademyProject = z.object({ id: z.string(), title: z.string(), description: z.string().optional(), content: z.array(InfoBlock) }).strict();
const AcademyWebinarInList = z.object({ id: z.string(), title: z.string(), description: z.string().optional(), img: Image.optional() }).strict();
const AcademyWebinar = z.object({ id: z.string(), title: z.string(), description: z.string().optional(), content: z.array(InfoBlock) }).strict();
const AcademyBenefitTag = z.object({ id: z.string(), label: z.string(), slug: z.string() }).strict();
const AcademyBenefitInList = z.object({ id: z.string(), title: z.string(), description: z.string().optional(), img: Image.optional(), tags: z.array(AcademyBenefitTag) }).strict();
const AcademyBenefit = z.object({ id: z.string(), title: z.string(), description: z.string().optional(), img: Image.optional(), tags: z.array(AcademyBenefitTag), content: z.array(InfoBlock) }).strict();
const User = z.object({ id: z.string(), surname: z.string(), name: z.string(), patronymic: z.string().optional(), email: z.string(), phone: z.string().optional(), password: z.string(), role: z.enum(["manager", "super-manager", "employee", "partner"]), tokenVersion: z.number().int(), isBanned: z.boolean(), favorites: z.array(z.string()), partnerId: z.string().optional() }).strict();

export const schemas = {
	signIn_Body,
	Session,
	Error,
	Success,
	changeUserPassword_Body,
	recoveryUserPassword_Body,
	PartnerCard,
	PartnerInList,
	PartnerInSelect,
	Image,
	NewsInList,
	DocumentCategory,
	Document,
	Bulletin,
	News,
	Favorite,
	SearchResult,
	sendFeedback_Body,
	ImageBlock,
	VideoBlock,
	MediaBlock,
	SectionBlock,
	HtmlBlock,
	InfoBlock,
	EmployeeTesting,
	LeadGenerationItem,
	LeadGenerationMonth,
	LeadGenerationQuarterPassed,
	RetailingQuarter,
	RetailingQuartersPlan,
	Retailing,
	Video,
	FactoryTeam,
	AcademySectionInList,
	AcademySection,
	AcademySales,
	AcademyProjectInList,
	AcademyProject,
	AcademyWebinarInList,
	AcademyWebinar,
	AcademyBenefitTag,
	AcademyBenefitInList,
	AcademyBenefit,
	User,
};

const endpoints = makeApi([
	{
		method: "get",
		path: "/api/academy/benefits",
		alias: "getAcademyBenefits",
		requestFormat: "json",
		parameters: [
			{
				name: "page",
				type: "Query",
				schema: z.number().int().optional()
			},
			{
				name: "limit",
				type: "Query",
				schema: z.number().int().optional()
			},
			{
				name: "tags",
				type: "Query",
				schema: z.array(z.string()).optional()
			},
		],
		response: z.object({ data: z.array(AcademyBenefitInList), nextPage: z.number().int(), totalResults: z.number().int() }).strict(),
	},
	{
		method: "get",
		path: "/api/academy/benefits/:id",
		alias: "getAcademyBenefitById",
		requestFormat: "json",
		parameters: [
			{
				name: "id",
				type: "Path",
				schema: z.string()
			},
		],
		response: AcademyBenefit,
		errors: [
			{
				status: 404,
				description: `Преимущество не найдено`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "get",
		path: "/api/academy/benefits/tags",
		alias: "getAcademyBenefitTags",
		requestFormat: "json",
		response: z.array(AcademyBenefitTag),
	},
	{
		method: "get",
		path: "/api/academy/projects",
		alias: "getAcademyProjects",
		requestFormat: "json",
		response: z.array(AcademyProjectInList),
	},
	{
		method: "get",
		path: "/api/academy/projects/:id",
		alias: "getAcademyProjectById",
		requestFormat: "json",
		parameters: [
			{
				name: "id",
				type: "Path",
				schema: z.string()
			},
		],
		response: AcademyProject,
		errors: [
			{
				status: 404,
				description: `Проект не найден`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "get",
		path: "/api/academy/sales",
		alias: "getAcademySales",
		requestFormat: "json",
		response: z.array(AcademySales),
	},
	{
		method: "get",
		path: "/api/academy/sections",
		alias: "getAcademySections",
		requestFormat: "json",
		response: z.array(AcademySectionInList),
	},
	{
		method: "get",
		path: "/api/academy/sections/:id",
		alias: "getAcademySectionById",
		requestFormat: "json",
		parameters: [
			{
				name: "id",
				type: "Path",
				schema: z.string()
			},
		],
		response: AcademySection,
		errors: [
			{
				status: 404,
				description: `Раздел не найден`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "get",
		path: "/api/academy/webinars",
		alias: "getAcademyWebinars",
		requestFormat: "json",
		response: z.array(AcademyWebinarInList),
	},
	{
		method: "get",
		path: "/api/academy/webinars/:id",
		alias: "getAcademyWebinarById",
		requestFormat: "json",
		parameters: [
			{
				name: "id",
				type: "Path",
				schema: z.string()
			},
		],
		response: AcademyWebinar,
		errors: [
			{
				status: 404,
				description: `Вебинар не найден`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "get",
		path: "/api/bulletins",
		alias: "getBulletins",
		requestFormat: "json",
		parameters: [
			{
				name: "page",
				type: "Query",
				schema: z.number().int().optional()
			},
			{
				name: "limit",
				type: "Query",
				schema: z.number().int().optional()
			},
			{
				name: "category",
				type: "Query",
				schema: z.string().optional()
			},
			{
				name: "sort",
				type: "Query",
				schema: z.enum(["latest", "oldest"]).optional().default("latest")
			},
			{
				name: "fromDate",
				type: "Query",
				schema: z.string().optional()
			},
			{
				name: "toDate",
				type: "Query",
				schema: z.string().optional()
			},
		],
		response: z.object({ data: z.array(Bulletin), totalPages: z.number().int(), nextPage: z.number().int() }).strict(),
	},
	{
		method: "get",
		path: "/api/bulletins/categories",
		alias: "getBulletinCategories",
		requestFormat: "json",
		response: z.array(DocumentCategory),
	},
	{
		method: "post",
		path: "/api/bulletins/read",
		alias: "readBulletin",
		requestFormat: "json",
		parameters: [
			{
				name: "body",
				type: "Body",
				schema: z.object({ id: z.string() }).strict()
			},
		],
		response: z.object({ message: z.string() }).strict(),
		errors: [
			{
				status: 401,
				description: `Пользователь не авторизован`,
				schema: z.object({ message: z.string() }).strict()
			},
			{
				status: 404,
				description: `Бюллетень с таким ID не найден`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "get",
		path: "/api/documents",
		alias: "getDocuments",
		requestFormat: "json",
		parameters: [
			{
				name: "page",
				type: "Query",
				schema: z.number().int().optional()
			},
			{
				name: "limit",
				type: "Query",
				schema: z.number().int().optional()
			},
			{
				name: "category",
				type: "Query",
				schema: z.string().optional()
			},
		],
		response: z.object({ data: z.array(Document), totalPages: z.number().int(), nextPage: z.number().int() }).strict(),
	},
	{
		method: "get",
		path: "/api/documents/categories",
		alias: "getDocumentCategories",
		requestFormat: "json",
		response: z.array(DocumentCategory),
	},
	{
		method: "get",
		path: "/api/factory",
		alias: "getFactoryInfo",
		requestFormat: "json",
		response: z.object({ text: z.string(), img: Image.optional(), video: Video.optional(), document: Document.optional() }).strict(),
	},
	{
		method: "get",
		path: "/api/factory/team",
		alias: "getFactoryTeam",
		requestFormat: "json",
		response: z.array(FactoryTeam),
	},
	{
		method: "post",
		path: "/api/feedback",
		alias: "sendFeedback",
		requestFormat: "json",
		parameters: [
			{
				name: "body",
				type: "Body",
				schema: sendFeedback_Body
			},
		],
		response: z.object({ message: z.string() }).strict(),
	},
	{
		method: "get",
		path: "/api/kpi/employee-testing",
		alias: "getEmployeeTesting",
		requestFormat: "json",
		parameters: [
			{
				name: "year",
				type: "Query",
				schema: z.string()
			},
			{
				name: "partnerId",
				type: "Query",
				schema: z.string().optional()
			},
		],
		response: z.object({ data: z.array(EmployeeTesting), uploadedAt: z.string().datetime({ offset: true }), updatedAt: z.string().datetime({ offset: true }) }).strict(),
		errors: [
			{
				status: 401,
				description: `Пользователь не авторизован`,
				schema: z.object({ message: z.string() }).strict()
			},
			{
				status: 404,
				description: `Партнёр не найден`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "get",
		path: "/api/kpi/employee-testing/uploaded-years",
		alias: "getEmployeeTestingUploadedYears",
		requestFormat: "json",
		parameters: [
			{
				name: "partnerId",
				type: "Query",
				schema: z.string().optional()
			},
		],
		response: z.array(z.string()),
		errors: [
			{
				status: 401,
				description: `Пользователь не авторизован`,
				schema: z.object({ message: z.string() }).strict()
			},
			{
				status: 404,
				description: `Партнёр не найден`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "get",
		path: "/api/kpi/lead-generation/list",
		alias: "getLeadGenerationList",
		requestFormat: "json",
		parameters: [
			{
				name: "year",
				type: "Query",
				schema: z.string()
			},
			{
				name: "partnerId",
				type: "Query",
				schema: z.string().optional()
			},
		],
		response: z.object({ data: z.array(LeadGenerationItem), uploadedAt: z.string().datetime({ offset: true }), updatedAt: z.string().datetime({ offset: true }) }).strict(),
		errors: [
			{
				status: 401,
				description: `Пользователь не авторизован`,
				schema: z.object({ message: z.string() }).strict()
			},
			{
				status: 404,
				description: `Партнёр не найден`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "get",
		path: "/api/kpi/lead-generation/plan",
		alias: "getLeadGenerationPlan",
		requestFormat: "json",
		parameters: [
			{
				name: "year",
				type: "Query",
				schema: z.string()
			},
			{
				name: "partnerId",
				type: "Query",
				schema: z.string().optional()
			},
		],
		response: z.object({ months: z.array(LeadGenerationMonth), quarterPassed: z.array(LeadGenerationQuarterPassed) }).strict(),
		errors: [
			{
				status: 401,
				description: `Пользователь не авторизован`,
				schema: z.object({ message: z.string() }).strict()
			},
			{
				status: 404,
				description: `Партнёр не найден`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "get",
		path: "/api/kpi/lead-generation/uploaded-years",
		alias: "getLeadGenerationUploadedYears",
		requestFormat: "json",
		parameters: [
			{
				name: "partnerId",
				type: "Query",
				schema: z.string().optional()
			},
		],
		response: z.array(z.string()),
		errors: [
			{
				status: 401,
				description: `Пользователь не авторизован`,
				schema: z.object({ message: z.string() }).strict()
			},
			{
				status: 404,
				description: `Партнёр не найден`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "get",
		path: "/api/kpi/retailing",
		alias: "getRetailingList",
		requestFormat: "json",
		parameters: [
			{
				name: "year",
				type: "Query",
				schema: z.string()
			},
			{
				name: "type",
				type: "Query",
				schema: z.enum(["sales", "booking"])
			},
			{
				name: "partnerId",
				type: "Query",
				schema: z.string().optional()
			},
		],
		response: z.array(Retailing),
		errors: [
			{
				status: 401,
				description: `Пользователь не авторизован`,
				schema: z.object({ message: z.string() }).strict()
			},
			{
				status: 404,
				description: `Партнёр не найден`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "get",
		path: "/api/kpi/retailing/quarters-plan",
		alias: "getRetailingQuartersPlan",
		requestFormat: "json",
		parameters: [
			{
				name: "year",
				type: "Query",
				schema: z.string()
			},
			{
				name: "type",
				type: "Query",
				schema: z.enum(["sales", "booking"])
			},
			{
				name: "partnerId",
				type: "Query",
				schema: z.string().optional()
			},
		],
		response: RetailingQuartersPlan,
		errors: [
			{
				status: 401,
				description: `Пользователь не авторизован`,
				schema: z.object({ message: z.string() }).strict()
			},
			{
				status: 404,
				description: `Партнёр не найден`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "get",
		path: "/api/kpi/retailing/uploaded-years",
		alias: "getRetailingUploadedYears",
		requestFormat: "json",
		parameters: [
			{
				name: "type",
				type: "Query",
				schema: z.enum(["sales", "booking"])
			},
			{
				name: "partnerId",
				type: "Query",
				schema: z.string().optional()
			},
		],
		response: z.array(z.string()),
		errors: [
			{
				status: 401,
				description: `Пользователь не авторизован`,
				schema: z.object({ message: z.string() }).strict()
			},
			{
				status: 404,
				description: `Партнёр не найден`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "get",
		path: "/api/kpi/uploaded-date",
		alias: "getKpiUploadedDate",
		requestFormat: "json",
		parameters: [
			{
				name: "partnerId",
				type: "Query",
				schema: z.string().optional()
			},
		],
		response: z.string().datetime({ offset: true }),
		errors: [
			{
				status: 401,
				description: `Пользователь не авторизован`,
				schema: z.object({ message: z.string() }).strict()
			},
			{
				status: 404,
				description: `Партнёр не найден`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "get",
		path: "/api/news",
		alias: "getNews",
		requestFormat: "json",
		parameters: [
			{
				name: "page",
				type: "Query",
				schema: z.number().int().optional()
			},
			{
				name: "limit",
				type: "Query",
				schema: z.number().int().optional()
			},
		],
		response: z.object({ data: z.array(NewsInList), nextPage: z.number().int() }).strict(),
		errors: [
			{
				status: 401,
				description: `Пользователь не авторизован`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "get",
		path: "/api/news/:id",
		alias: "getNewsById",
		requestFormat: "json",
		parameters: [
			{
				name: "id",
				type: "Path",
				schema: z.string()
			},
		],
		response: News,
		errors: [
			{
				status: 401,
				description: `Пользователь не авторизован`,
				schema: z.object({ message: z.string() }).strict()
			},
			{
				status: 404,
				description: `Новость с таким ID не найдена`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "post",
		path: "/api/news/read",
		alias: "readNews",
		requestFormat: "json",
		parameters: [
			{
				name: "body",
				type: "Body",
				schema: z.object({ id: z.string() }).strict()
			},
		],
		response: z.object({ message: z.string() }).strict(),
		errors: [
			{
				status: 401,
				description: `Пользователь не авторизован`,
				schema: z.object({ message: z.string() }).strict()
			},
			{
				status: 404,
				description: `Новость с таким ID не найдена`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "get",
		path: "/api/online-tests",
		alias: "getOnlineTest",
		requestFormat: "json",
		response: z.object({ content: z.array(InfoBlock) }).strict(),
	},
	{
		method: "get",
		path: "/api/partners",
		alias: "getPartners",
		requestFormat: "json",
		parameters: [
			{
				name: "sort",
				type: "Query",
				schema: z.enum(["asc-sales", "desc-sales", "asc-bookings", "desc-bookings", "asc-name", "desc-name"]).optional().default("asc-sales")
			},
		],
		response: z.array(PartnerInList),
		errors: [
			{
				status: 401,
				description: `Пользователь не авторизован`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "get",
		path: "/api/partners/:id",
		alias: "getPartnerById",
		requestFormat: "json",
		parameters: [
			{
				name: "id",
				type: "Path",
				schema: z.string()
			},
		],
		response: PartnerCard,
		errors: [
			{
				status: 401,
				description: `Пользователь не авторизован`,
				schema: z.object({ message: z.string() }).strict()
			},
			{
				status: 404,
				description: `Партнер-Строитель не найден`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "get",
		path: "/api/partners/select",
		alias: "getPartnersSelect",
		requestFormat: "json",
		response: z.array(PartnerInSelect),
		errors: [
			{
				status: 401,
				description: `Пользователь не авторизован`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "get",
		path: "/api/partners/session",
		alias: "getPartnerBySession",
		requestFormat: "json",
		response: PartnerCard,
		errors: [
			{
				status: 401,
				description: `Пользователь не авторизован`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "get",
		path: "/api/partners/uploaded-date",
		alias: "getPartnersUploadedDate",
		requestFormat: "json",
		response: z.string().datetime({ offset: true }),
		errors: [
			{
				status: 401,
				description: `Пользователь не авторизован`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "get",
		path: "/api/search",
		alias: "search",
		requestFormat: "json",
		parameters: [
			{
				name: "query",
				type: "Query",
				schema: z.string()
			},
			{
				name: "page",
				type: "Query",
				schema: z.number().int().optional()
			},
			{
				name: "limit",
				type: "Query",
				schema: z.number().int().optional()
			},
		],
		response: z.object({ data: z.array(SearchResult), totalPages: z.number().int(), totalResults: z.number().int(), nextPage: z.number().int() }).strict(),
	},
	{
		method: "get",
		path: "/api/user/favorites",
		alias: "getUserFavorites",
		requestFormat: "json",
		parameters: [
			{
				name: "page",
				type: "Query",
				schema: z.number().int().optional()
			},
			{
				name: "limit",
				type: "Query",
				schema: z.number().int().optional()
			},
		],
		response: z.object({ data: z.array(Favorite), nextPage: z.number().int(), totalPages: z.number().int() }).strict(),
		errors: [
			{
				status: 401,
				description: `Пользователь не авторизован`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "post",
		path: "/api/user/favorites/add",
		alias: "addFavorite",
		requestFormat: "json",
		parameters: [
			{
				name: "body",
				type: "Body",
				schema: z.object({ id: z.string() }).strict()
			},
		],
		response: z.object({ message: z.string() }).strict(),
		errors: [
			{
				status: 401,
				description: `Пользователь не авторизован`,
				schema: z.object({ message: z.string() }).strict()
			},
			{
				status: 404,
				description: `Документ/бюллетень с таким ID не найден`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "delete",
		path: "/api/user/favorites/remove",
		alias: "removeFavorite",
		requestFormat: "json",
		parameters: [
			{
				name: "body",
				type: "Body",
				schema: z.object({ id: z.string() }).strict()
			},
		],
		response: z.object({ message: z.string() }).strict(),
		errors: [
			{
				status: 401,
				description: `Пользователь не авторизован`,
				schema: z.object({ message: z.string() }).strict()
			},
			{
				status: 404,
				description: `Документ/бюллетень с таким ID не найден`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "post",
		path: "/api/user/password/change",
		alias: "changeUserPassword",
		requestFormat: "json",
		parameters: [
			{
				name: "body",
				type: "Body",
				schema: changeUserPassword_Body
			},
		],
		response: z.object({ message: z.string() }).strict(),
		errors: [
			{
				status: 400,
				description: `Введен неверный пароль`,
				schema: z.object({ message: z.string() }).strict()
			},
			{
				status: 401,
				description: `Пользователь не авторизован`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "post",
		path: "/api/user/password/recovery",
		alias: "recoveryUserPassword",
		requestFormat: "json",
		parameters: [
			{
				name: "body",
				type: "Body",
				schema: recoveryUserPassword_Body
			},
		],
		response: z.object({ message: z.string() }).strict(),
		errors: [
			{
				status: 403,
				description: `Время на восстановление пароля по этой ссылке истекло`,
				schema: z.object({ message: z.string() }).strict()
			},
			{
				status: 404,
				description: `Пользователь с таким ID токена не найден`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "post",
		path: "/api/user/password/send-link",
		alias: "sendRecoveryPasswordLink",
		requestFormat: "json",
		parameters: [
			{
				name: "body",
				type: "Body",
				schema: z.object({ email: z.string() }).strict()
			},
		],
		response: z.object({ message: z.string() }).strict(),
		errors: [
			{
				status: 404,
				description: `Пользователь с таким email не найден`,
				schema: z.object({ message: z.string() }).strict()
			},
			{
				status: 500,
				description: `Ошибка при отправке письма`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "get",
		path: "/api/user/session",
		alias: "getSession",
		requestFormat: "json",
		response: Session,
		errors: [
			{
				status: 401,
				description: `Ошибка авторизации`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "get",
		path: "/api/user/session/refresh",
		alias: "refreshToken",
		requestFormat: "json",
		response: z.object({ accessToken: z.string() }).strict(),
		errors: [
			{
				status: 401,
				description: `Ошибка авторизации`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "post",
		path: "/api/user/sign-in",
		alias: "signIn",
		requestFormat: "json",
		parameters: [
			{
				name: "body",
				type: "Body",
				schema: signIn_Body
			},
		],
		response: z.object({ accessToken: z.string(), user: Session }).strict(),
		errors: [
			{
				status: 400,
				description: `Ошибка ввода данных`,
				schema: z.object({ message: z.string() }).strict()
			},
			{
				status: 403,
				description: `Пользователь забанен`,
				schema: z.object({ message: z.string() }).strict()
			},
		]
	},
	{
		method: "get",
		path: "/api/user/sign-out",
		alias: "signOut",
		requestFormat: "json",
		response: z.object({ message: z.string() }).strict(),
	},
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
    return new Zodios(baseUrl, endpoints, options);
}
