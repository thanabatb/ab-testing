import { phoneBookCompanies, type CompanyMock } from "../../phone-book/shared/company-mock.data";

export type CompanyCard = CompanyMock;

export type VersionBContact = {
  id: string;
  employeeId: string;
  name: string;
  role: string;
  division: string;
  company: string;
  phone: string;
  email: string;
};

export const companyCards: CompanyCard[] = phoneBookCompanies;

export const helpSection = {
  title: "ขอความช่วยเหลือ",
  description: "ต้องการความช่วยเหลือจากหน่วยงานกลางหรือประชาสัมพันธ์",
  callCta: "โทรออก"
};

export const companyOptions = companyCards.map((company) => company.name);

const firstNamePool = [
  "สมชาย",
  "สมหญิง",
  "สมศรี",
  "สมปอง",
  "วิชัย",
  "วิภา",
  "อนันต์",
  "อรทัย",
  "ชาญชัย",
  "ชลธิชา",
  "ปกรณ์",
  "ปวีณา",
  "ธนพล",
  "ธนพร",
  "กิตติ",
  "กมล",
  "ปราณี",
  "ปรเมศ",
  "สุรชัย",
  "สุพัตรา"
];

const lastNamePool = [
  "ใจดี",
  "ใจงาม",
  "บุญมี",
  "ศรีสวัสดิ์",
  "พูนทรัพย์",
  "วัฒนกูล",
  "เจริญชัย",
  "อินทร์ทอง",
  "ศรีสุวรรณ",
  "จันทร์เพ็ญ",
  "ทองสุข",
  "วิริยะกุล",
  "พิทักษ์ธรรม",
  "รัตนวงศ์",
  "ชินวัตร",
  "อัครเดช",
  "มงคลชัย",
  "พิมพ์วชิระ",
  "ธรรมรัตน์",
  "เกียรติกุล"
];

const rolePool = [
  "นักการบัญชี",
  "ผู้ช่วยผู้จัดการฝ่าย",
  "ผู้เชี่ยวชาญการเงิน",
  "นักวิเคราะห์ระบบ",
  "นักวางแผนกลยุทธ์",
  "ผู้จัดการอาวุโส",
  "เจ้าหน้าที่ทรัพยากรบุคคล",
  "นักพัฒนาธุรกิจ"
];

const divisionPool = [
  "กลุ่มกลยุทธ์และบริหารจัดการควบคุมดูแล",
  "กลุ่มพัฒนาองค์กรและทรัพยากรบุคคล",
  "กลุ่มเทคโนโลยีและนวัตกรรม",
  "กลุ่มบริหารความเสี่ยงองค์กร",
  "กลุ่มวางแผนการเงินและวิเคราะห์ข้อมูล"
];

const mockContactCount = 50;

const makeEmployeeId = (index: number) => String(120000 + ((index * 7919 + 137) % 800000)).padStart(6, "0");

export const versionBContacts: VersionBContact[] = Array.from({ length: mockContactCount }, (_, index) => ({
  id: `vb-contact-${index + 1}`,
  employeeId: makeEmployeeId(index),
  name: `${firstNamePool[index % firstNamePool.length]} ${lastNamePool[(index * 3 + 2) % lastNamePool.length]}`,
  role: rolePool[(index * 5 + 1) % rolePool.length],
  division: divisionPool[(index * 7 + 3) % divisionPool.length],
  company: companyOptions[index % companyOptions.length],
  phone: `02-2${String(100000 + index).slice(-6)}`,
  email: `contact${index + 1}@ktb-one.mock`
}));

const normalizeText = (value: string) => value.trim().toLocaleLowerCase("th");

export function filterVersionBContacts(query: string, selectedCompany: string) {
  const normalizedQuery = normalizeText(query);

  const base = versionBContacts.filter((contact) => contact.company === selectedCompany);
  if (!normalizedQuery) {
    return base;
  }

  return base.filter((contact) => {
    const haystacks = [contact.employeeId, contact.name, contact.role, contact.division].map(normalizeText);
    return haystacks.some((item) => item.includes(normalizedQuery));
  });
}
