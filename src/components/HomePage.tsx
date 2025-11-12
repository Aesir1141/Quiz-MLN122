import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface HomePageProps {
  onStartQuiz: () => void;
}

function HomePage({ onStartQuiz }: HomePageProps) {
  const [activeBox, setActiveBox] = useState<number | null>(null);

  const handleClose = () => setActiveBox(null);
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10">
        <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center px-6 py-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MLN122
            </h2>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16">
          <section className="mb-20">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
                Độc quyền về tri thức và thông tin
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Độc quyền về dữ liệu, thuật toán, và trí tuệ nhân tạo trong thế
                kỉ XXI
              </p>
            </div>

            <div className="relative h-96 mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://static.twentyoverten.com/5989e1613fee0d040bfd964f/SJzulu99M/tech.jpg"
                alt="Hero"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </section>

          <article className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Quyền lực của các ông lớn công nghệ
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Các tập đoàn Big Tech như
                <span className="font-bold">
                  {" "}
                  Google, Meta, Amazon, Apple…
                </span>{" "}
                đang kiểm soát hành vi người dùng. Hình thành{" "}
                <span className="font-bold">
                  độc quyền nền tảng số, tri thức và thuật toán
                </span>
                , nắm toàn bộ hạ tầng thông tin, truyền thông, và điện toán đám
                mây vừa tạo ra rào cản kỹ thuật và chi phối ai được tham gia nền
                kinh tế tri thức.
              </p>

              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg mb-6">
                <img
                  src="https://www.feedough.com/wp-content/uploads/2020/11/monopoly.webp"
                  alt="Learning"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-6 font-bold">
                Vai trò lịch sử của chủ nghĩa tư bản hiện đại
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-gray-600">
                    Thúc đẩy phát triển lực lượng sản xuất mạnh mẽ hơn bao giờ
                    hết.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-gray-600">
                    Thúc đẩy toàn cầu hoá, chuyển đổi số, đổi mới công nghệ.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500 text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-gray-600">
                    Bất bình đẳng ngày càng tăng, tài sản và dữ liệu tập trung
                    vào tay số ít.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-gray-600">
                    Các tập đoàn kiểm soát cả
                    <strong> ý thức xã hội</strong> thông qua công nghệ và mạng
                    xã hội.
                  </span>
                </li>
              </ul>
            </div>
          </article>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Tác động và mâu thuẫn của độc quyền dữ liệu
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Box 1 */}
              <div
                onClick={() => setActiveBox(1)}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-xl font-bold">📈</span>
                </div>
                <h3 className="text-l text-gray-800 mb-2">
                  Tăng năng suất, thúc đẩy đổi mới sáng tạo, phát triển AI. Giúp
                  doanh nghiệp tối ưu sản xuất, giảm chi phí.
                </h3>
              </div>

              {/* Box 2 */}
              <div
                onClick={() => setActiveBox(2)}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-xl">📌</span>
                </div>
                <h3 className="text-xl text-gray-800 mb-2">
                  Lợi nhuận tập trung vào số ít, bất bình đẳng dữ liệu ngày càng
                  lớn và nguy cơ xâm phạm
                  <strong> quyền riêng tư và tự do cá nhân.</strong>
                </h3>
              </div>

              {/* Box 3 */}
              <div
                onClick={() => setActiveBox(3)}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-xl text-gray-800 mb-2">
                  Người lao động số bị bóc lột thông qua thời gian online.
                </h3>
              </div>
            </div>

            {/* --- MODAL --- */}
            {activeBox && (
              <div
                className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 animate-fadeIn"
                onClick={handleClose}
              >
                <div
                  className="bg-white rounded-3xl shadow-2xl w-[700px] max-w-[90%] p-8 relative transform scale-100 animate-zoomIn"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Nút đóng */}
                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl transition"
                  >
                    ✕
                  </button>

                  {/* Nội dung tuỳ box */}
                  {activeBox === 1 && (
                    <>
                      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                        Hiệu quả của việc ứng dụng AI trong sản xuất
                      </h2>
                      <p className="text-gray-700 text-lg leading-relaxed text-center">
                        <strong>Tăng năng suất</strong>,{" "}
                        <strong>thúc đẩy đổi mới sáng tạo</strong> và{" "}
                        <strong>phát triển AI</strong> giúp doanh nghiệp tối ưu
                        hóa quy trình, giảm chi phí vận hành, nâng cao năng lực
                        cạnh tranh và mở ra cơ hội phát triển các sản phẩm thông
                        minh.
                      </p>
                    </>
                  )}

                  {activeBox === 2 && (
                    <>
                      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                        Bất bình đẳng dữ liệu và quyền riêng tư
                      </h2>
                      <p className="text-gray-700 text-lg leading-relaxed text-center">
                        Khi dữ liệu tập trung vào tay số ít tập đoàn lớn, nguy
                        cơ xâm phạm <strong>quyền riêng tư</strong> và{" "}
                        <strong>tự do cá nhân</strong> ngày càng nghiêm trọng,
                        đồng thời gia tăng khoảng cách bất bình đẳng xã hội.
                      </p>
                    </>
                  )}

                  {activeBox === 3 && (
                    <>
                      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                        Lao động số và sự bóc lột thời gian online
                      </h2>
                      <p className="text-gray-700 text-lg leading-relaxed text-center">
                        Người lao động bị bóc lột thông qua dữ liệu hành vi,
                        năng suất bị giám sát chặt chẽ. Công nghệ vừa là công cụ
                        hỗ trợ, vừa là cơ chế kiểm soát.
                      </p>
                    </>
                  )}
                </div>
              </div>
            )}
          </section>

          <article className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl  text-gray-800 mb-4">
                Quyền lực tư bản thế kỷ XXI
              </h2>

              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg mb-6">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/The_Bosses_of_the_Senate_by_Joseph_Keppler.jpg/1200px-The_Bosses_of_the_Senate_by_Joseph_Keppler.jpg"
                  alt="Achievement"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Quyền lực tư bản thế kỷ XXI nằm trong server và dữ liệu. Tư bản
                ngày nay đang chuyển từ{" "}
                <strong>chiếm hữu vật chất sang chiếm hữu tinh thần</strong>, từ
                dầu mỏ sang dữ liệu, từ máy móc sang trí tuệ nhân tạo.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Hình thức{" "}
                <strong>
                  độc quyền mới chính là độc quyền thông tin, thuật toán, và tri
                  thức.
                </strong>
              </p>
            </div>
          </article>

          <section className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://mitsloan.mit.edu/sites/default/files/styles/og_image/public/2018-11/tech-companies-divided-from-capitol-building-fault-line.jpg?h=2dbf321e&itok=MTFXQekt"
                  alt="Learning"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Đây là biểu hiện rõ nét của{" "}
                  <strong>chủ nghĩa tư bản độc quyền kiểu mới</strong>, nơi dữ
                  liệu trở thành <strong>nguồn lực sản xuất chính.</strong>
                </p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://equitablegrowth.org/wp-content/uploads/2018/07/competitive-edge-promo.png"
                  alt="Growth"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Làm sao để <strong>công nghệ phục vụ con người</strong>, chứ
                  không để con người trở thành “nguyên liệu” cho thuật toán?
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl shadow-2xl p-12 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Challenge
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Hãy tham gia cùng hàng ngàn học viên khác và kiểm tra kiến thức
              của bạn ngay hôm nay
            </p>
            <button
              onClick={onStartQuiz}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:scale-105 transition-all duration-300 text-lg shadow-lg hover:shadow-xl group"
            >
              Bắt Đầu Quiz Ngay
              <ArrowRight
                size={24}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </section>
        </div>

        <footer className="bg-white/50 backdrop-blur-sm border-t border-white/20">
          <div className="container mx-auto px-4 py-8 text-center text-gray-600">
            <p>
              © {new Date().getFullYear()} Quiz ChallengeBlog. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default HomePage;
