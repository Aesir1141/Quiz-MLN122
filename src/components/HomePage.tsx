import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface HomePageProps {
  onStartQuiz: () => void;
  onGoLogin: () => void;
}
interface User {
  name: string;
  picture: string;
  email: string;
}

function HomePage({ onStartQuiz, onGoLogin }: HomePageProps) {
  const [user, setUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // đọc thông tin user từ localStorage khi load trang
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setOpen(false);
  };

  // Đóng menu khi click ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="relative z-10">
              <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center px-6 py-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Quiz Challenge Blog
            </h2>

            <div className="relative">
              {!user ? (
                <button
                  onClick={onGoLogin}
                  className="px-4 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition"
                >
                  Sign In
                </button>
              ) : (
                <>
                  <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-2 focus:outline-none"
                  >
                    <img
                      src={user.picture}
                      alt="avatar"
                      className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-blue-500 transition"
                    />
                  </button>

                  {/* Dropdown menu */}
                  <div
                    ref={dropdownRef}
                    className={`absolute right-0 mt-3 w-56 bg-white border rounded-xl shadow-xl overflow-hidden transition-all duration-300 origin-top-right
                      ${open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
                    `}
                  >
                    <div className="p-4 flex flex-col gap-1">
                      <span className="font-semibold text-gray-800">{user.name}</span>
                      <span className="text-sm text-gray-500">{user.email}</span>
                    </div>
                    <div className="border-t border-gray-200" />
                      <button
                       onClick={handleLogout}
                       className="w-full flex justify-between items-center px-4 py-2 text-red-600 font-semibold hover:bg-red-50 transition"
                        >
                      <span>Logout</span>
                      <i className="bi bi-box-arrow-right"></i>
                      </button>
                    </div>
                </>
              )}
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16">
          <section className="mb-20">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
                Khám Phá Sức Mạnh Của Kiến Thức
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tham gia cùng chúng tôi trong hành trình nâng cao kiến thức và kỹ năng thông qua những câu hỏi thú vị
              </p>
            </div>

            <div className="relative h-96 mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.mos.cms.futurecdn.net/pX2mDYGsSAiT428zwhnQ5k.jpg"
                alt="Hero"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </section>

          <article className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Tại Sao Bạn Nên Thử Quiz Ngay Hôm Nay?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Trong thế giới ngày nay, kiến thức là chìa khóa thành công. Quiz Challenge không chỉ là một bài kiểm tra đơn thuần, mà là một công cụ học tập tương tác giúp bạn khám phá những điểm mạnh và cơ hội cải thiện của mình.
              </p>

              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg mb-6">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/011/077/307/non_2x/quiz-time-button-quiz-time-speech-bubble-quiz-time-text-web-template-illustration-vector.jpg"
                  alt="Learning"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Với 10 câu hỏi được lựa chọn cẩn thận, bạn sẽ có cơ hội:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">✓</span>
                  <span className="text-gray-600">Kiểm tra hiểu biết của bạn về các chủ đề quan trọng</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold">✓</span>
                  <span className="text-gray-600">Đánh dấu những câu hỏi khó để xem lại sau</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-bold">✓</span>
                  <span className="text-gray-600">Theo dõi tiến độ và cải thiện kỹ năng của bạn</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">✓</span>
                  <span className="text-gray-600">Trải nghiệm giao diện thân thiện và dễ sử dụng</span>
                </li>
              </ul>
            </div>
          </article>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Các Tính Năng Nổi Bật</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-xl font-bold">10</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">10 Câu Hỏi</h3>
                <p className="text-gray-600">Được lựa chọn cẩn thận để kiểm tra kiến thức toàn diện</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-xl">📌</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Đánh Dấu Câu</h3>
                <p className="text-gray-600">Đánh dấu các câu hỏi khó để quay lại xem lại sau</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Theo Dõi Tiến Độ</h3>
                <p className="text-gray-600">Xem thống kê chi tiết về các câu đã trả lời</p>
              </div>
            </div>
          </section>

          <article className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Cải Thiện Kỹ Năng Của Bạn
              </h2>

              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg mb-6">
                <img
                  src="https://d3rds0a9qm8vc5.cloudfront.net/cloodon.com/18.1646746451702.jpg"
                  alt="Achievement"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Bài quiz của chúng tôi được thiết kế không chỉ để kiểm tra kiến thức, mà còn để giúp bạn phát triển. Mỗi câu hỏi đều có mục đích cụ thể, giúp bạn:
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Nhận biết các lĩnh vực mà bạn cần tập trung hơn, xây dựng sự tự tin trong các chủ đề khó, và phát triển chiến lược học tập hiệu quả hơn.
              </p>
            </div>
          </article>

          <section className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/008/517/534/large_2x/online-self-education-cartoon-poster-with-sitting-on-textbooks-man-with-laptop-outline-style-background-illustration-vector.jpg"
                  alt="Learning"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Học Tập Hiệu Quả</h3>
                <p className="text-gray-600">Phương pháp tương tác giúp bạn ghi nhớ kiến thức tốt hơn</p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://business.caw.ac.uk/wp-content/uploads/2024/05/Learning-at-Work-Week.jpg"
                  alt="Growth"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Phát Triển Liên Tục</h3>
                <p className="text-gray-600">Mỗi lần làm quiz, bạn lại tiến gần hơn tới mục tiêu</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl shadow-2xl p-12 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sẵn Sàng Bắt Đầu Hành Trình Của Bạn?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Hãy tham gia cùng hàng ngàn học viên khác và kiểm tra kiến thức của bạn ngay hôm nay
            </p>
            <button
              onClick={onStartQuiz}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:scale-105 transition-all duration-300 text-lg shadow-lg hover:shadow-xl group"
            >
              Bắt Đầu Quiz Ngay
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </section>
        </div>

        <footer className="bg-white/50 backdrop-blur-sm border-t border-white/20">
          <div className="container mx-auto px-4 py-8 text-center text-gray-600">
            <p>© {new Date().getFullYear()} Quiz ChallengeBlog. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
