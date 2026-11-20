/*
  FILE NÀY CHỨA DANH SÁCH "VIDEO XEM NHIỀU NHẤT" VÀ "DANH SÁCH PHÁT".

  - Nếu để trống ([]), mục tương ứng sẽ TỰ ĐỘNG ẨN trên website.
  - Video xếp theo thứ tự bạn nhập: video đầu tiên hiện số 1.

  CÁCH LẤY ID VIDEO:
  Link video: https://www.youtube.com/watch?v=ABCDEFGHIJK
  -> ID video là phần sau "v=", ở ví dụ này là ABCDEFGHIJK
  (Link rút gọn https://youtu.be/ABCDEFGHIJK cũng vậy.)

  CÁCH LẤY ID DANH SÁCH PHÁT:
  Link danh sách phát: https://www.youtube.com/playlist?list=PLxxxxxxxxxxxx
  -> ID danh sách phát là phần sau "list=", ở ví dụ này là PLxxxxxxxxxxxx

  VÍ DỤ (chép mẫu này ra ngoài phần chú thích, thay cho dòng const tương ứng):

  const topVideos = [
    { id: "ABCDEFGHIJK", title: "How a transistor works" },
    { id: "LMNOPQRSTUV", title: "How a capacitor works" }
  ];

  const playlists = [
    { id: "PLxxxxxxxxxxxx", title: "Electronic components", thumb: "ABCDEFGHIJK", count: "5 videos" }
  ];

  Giải thích:
  title : tên hiển thị trên website
  thumb : ID của MỘT video trong danh sách phát, dùng làm ảnh bìa
  count : số video (ghi tùy ý, có thể bỏ dòng này)

  LƯU Ý: giữ nguyên dấu ngoặc kép " " và dấu phẩy giữa các mục.
  Mục cuối cùng trong danh sách không cần dấu phẩy.
*/
const topVideos = [
  { id: "MH9iSXuC7Ag", title: "How Technicians Find a Dead Component in 60 Seconds" },
  { id: "cgpFNpQl7tU", title: "Build an AM Radio With One 9 V Battery (And Why It Works)" },
  { id: "3ijPVR7vjM0", title: "Why Your Phone Charger Dies The 10 Cent Part to Blame" }
];

const playlists = [
  { id: "PLTRZ9PXaOwoc", title: "01. Basic Electronics & Knowledge" },
  { id: "PLG65PavP46ks", title: "02. DIY Electronics & Circuit Projects" },
  { id: "PLWz8OYiHhcLU", title: "03. Electronics Components Explained" }
];
