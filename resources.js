/*
  FILE NÀY CHỨA DANH SÁCH TÀI LIỆU TẢI VỀ TRÊN WEBSITE.

  CÁCH THÊM MỘT TÀI LIỆU MỚI:
  - Sao chép nguyên một khối từ dấu { đến dấu },
  - Dán ngay phía dưới khối đó,
  - Sửa lại nội dung bên trong dấu ngoặc kép "...".

  GIẢI THÍCH CÁC DÒNG:
  title       : tên tài liệu hiển thị trên website
  category    : CHỈ ĐƯỢC chọn một trong: "PCB", "Schematic", "Datasheet", "Project"
  description : mô tả ngắn một hai câu
  format      : định dạng file, ví dụ "ZIP", "PDF"
  updated     : ngày cập nhật, ví dụ "19 Nov 2026"
  url         : link chia sẻ MediaFire thật

  LƯU Ý QUAN TRỌNG:
  - Giữ nguyên dấu ngoặc kép " " và dấu phẩy , cuối mỗi dòng.
  - Giữa hai khối }, { phải có dấu phẩy. Khối cuối cùng thì không cần.
  - Thiếu hoặc thừa một dấu có thể làm thư viện tài liệu bị trống.
*/
const resources = [
  {
    title: "AM Radio DIY — Home-Etch PCB",
    category: "PCB",
    description: "Single-sided home-etch PCB for the AM radio build, with the schematic and parts list.",
    format: "ZIP",
    updated: "19 Nov 2026",
    url: "https://www.mediafire.com/file/w3wxaclf44t8p8z/am_radio_diy_etch.zip/file"
  },
  {
    title: "AM Radio DIY — PCB Gerber Files",
    category: "PCB",
    description: "Gerber files for the AM radio build, ready to send to a PCB manufacturer.",
    format: "ZIP",
    updated: "19 Nov 2026",
    url: "https://www.mediafire.com/file/cx73jq4fyqpbbj8/am_radio_pcb_gerber.zip/file"
  },
];
