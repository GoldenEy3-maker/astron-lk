import { formatPhone } from "@/shared/lib/phone-format";
import { Button } from "@/shared/ui/button";
import { Section, SectionContent, SectionHeader } from "@/shared/ui/section";

type FactoryTeamProps = {} & React.ComponentProps<typeof Section>;

type Employee = {
  id: string;
  img: string;
  role: string;
  title: string;
  phone: string;
  email: string;
};

const employeesData: Employee[] = [
  {
    id: "1",
    img: "/factory-team-1.webp",
    role: "Генеральный директор",
    title: "Ягодкин Помидорослав",
    phone: "+79000000000",
    email: "email@astron.biz",
  },
  {
    id: "2",
    img: "/factory-team-1.webp",
    role: "Менеджер по продажам",
    title: "Травин Бананослав",
    phone: "+79000000000",
    email: "email@astron.biz",
  },
  {
    id: "3",
    img: "/factory-team-1.webp",
    role: "Директор по развитию",
    title: "Директоров Крутослав",
    phone: "+79000000000",
    email: "email@astron.biz",
  },
  {
    id: "4",
    img: "/factory-team-1.webp",
    role: "Агроном",
    title: "Ягодкин Помидорослав",
    phone: "+79000000000",
    email: "email@astron.biz",
  },
  {
    id: "5",
    img: "/factory-team-1.webp",
    role: "Родственник",
    title: "Наследников Сынослав",
    phone: "+79000000000",
    email: "email@astron.biz",
  },
];

export function FactoryTeam(props: FactoryTeamProps) {
  return (
    <Section {...props}>
      <SectionHeader>
        <h2 className="text-h2 text-heading-h2">Команда Astron</h2>
      </SectionHeader>
      <SectionContent>
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-x-12 gap-y-8">
          {employeesData.map((employee) => (
            <article key={employee.id} className="flex flex-col items-start">
              <img
                src={employee.img}
                className="rounded-main w-full h-80 object-cover"
                alt={employee.title}
              />
              <span className="mt-5 text-sm text-muted">{employee.role}</span>
              <h2 className="text-h2 mt-2">{employee.title}</h2>
              <span className="mt-3">{formatPhone(employee.phone)}</span>
              <Button variant="link" size="hug" className="mt-2 font-normal">
                <a href={`mailto:${employee.email}`}>{employee.email}</a>
              </Button>
            </article>
          ))}
        </div>
      </SectionContent>
    </Section>
  );
}
