import { phoneBookCompanies } from "../../phone-book/shared/company-mock.data";

export type Contact = {
  id: string;
  employeeId: string;
  name: string;
  role: string;
  division: string;
};

export const profile = {
  name: phoneBookCompanies[0]?.name ?? "Teddy bank"
};

export const companyOptions = phoneBookCompanies;

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

const createMockContact = (index: number): Contact => {
  const base: Contact = {
    id: `search-${index + 1}`,
    employeeId: makeEmployeeId(index),
    name: `${firstNamePool[index % firstNamePool.length]} ${lastNamePool[(index * 3 + 2) % lastNamePool.length]}`,
    role: rolePool[(index * 5 + 1) % rolePool.length],
    division: divisionPool[(index * 7 + 3) % divisionPool.length]
  };

  if (index === 0) {
    return {
      ...base,
      name: "สมชาย ใจดี",
      role: "นักการบัญชี",
      division: "กลุ่มกลยุทธ์และบริหารจัดการควบคุมดูแล"
    };
  }

  if (index === 1) {
    return {
      ...base,
      name: "สมหญิง ใจงาม",
      role: "ผู้ช่วยผู้จัดการฝ่าย",
      division: "กลุ่มพัฒนาองค์กรและทรัพยากรบุคคล"
    };
  }

  return base;
};

export const searchableContacts: Contact[] = Array.from({ length: mockContactCount }, (_, index) => createMockContact(index));

const cloneWithId = (contact: Contact, id: string): Contact => ({ ...contact, id });

export const favoriteContacts: Contact[] = [
  cloneWithId(searchableContacts[0], "fav-1"),
  cloneWithId(searchableContacts[1], "fav-2"),
  cloneWithId(searchableContacts[2], "fav-3")
];

export const latestContacts: Contact[] = [
  cloneWithId(searchableContacts[3], "latest-1"),
  cloneWithId(searchableContacts[4], "latest-2")
];

export const defaultSearchQuery = "";

const normalizeText = (value: string) => value.trim().toLocaleLowerCase("th");

export function filterContacts(query: string) {
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) {
    return searchableContacts;
  }

  return searchableContacts.filter((contact) => {
    const haystacks = [contact.employeeId, contact.name, contact.role, contact.division].map(normalizeText);
    return haystacks.some((item) => item.includes(normalizedQuery));
  });
}
