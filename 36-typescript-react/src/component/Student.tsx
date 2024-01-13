// 이름, 학년, 과목
interface StudentInfo {
  name: string;
  grade: number;
  subject: string;
}

function Student({ name, grade, subject }: StudentInfo) {
  return (
    <ul>
      <li>이름: {name}</li>
      <li>학년: {grade}</li>
      <li>과목: {subject}</li>
    </ul>
  );
}

export default Student;
