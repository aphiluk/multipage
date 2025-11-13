export default function Home() {
  return (
    <div className="bg01" style={{ textAlign: "center" }}>
      <img
        src="/multipage/animation/human.jpg"
        alt="student"
        style={{
          borderRadius: "50%",
          width: "300px",
          height: "300px",
          objectFit: "cover",
        }}
      />
      <h2>รหัสนักศึกษา: 67164038</h2>
      <h3>ชื่อ-สกุล: นายอภิรักษ์ ภูมิเพ็ง</h3>
      <p>ชั้นปีที่ 2 | สาขาเทคโนโลยีสารสนเทศ | คณะเทคโนโลยีสารสนเทศ | สาขาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟแวร์</p>
      <p>สวัสดีครับ ผมกำลังศึกษา React และการสร้างเว็บแบบ Multi-Page Application</p>
    </div>
  );
}
