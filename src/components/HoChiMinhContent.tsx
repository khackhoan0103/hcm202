import React, { useState } from 'react'

interface HoChiMinhContentProps {
  activeSection: string
}

const HoChiMinhContent: React.FC<HoChiMinhContentProps> = ({ activeSection }) => {
  const [selectedTimelineItem, setSelectedTimelineItem] = useState<string | null>(null)

  const timelineDetails = {
    'hoi-phan-de': '<strong>Hội Phản đế Đồng minh (18/11/1930):</strong> Được thành lập theo Chỉ thị của Đảng Cộng sản Đông Dương, dựa trên Chính cương vắn tắt (1930), nhằm đoàn kết các lực lượng phản đế, phản phong. Phong trào Xô viết Nghệ Tĩnh là nền tảng, tập hợp các tổ chức, tầng lớp hướng tới giải phóng dân tộc.',
    'viet-minh': '<strong>Việt Minh (19/5/1941):</strong> Ra đời tại Hội nghị Trung ương 8, do Nguyễn Ái Quốc đề xuất, chống thực dân Pháp và phát xít Nhật, lấy cờ đỏ sao vàng làm biểu tượng. Việt Minh lãnh đạo cách mạng, thành lập nước Việt Nam Dân chủ Cộng hòa.',
    'lien-viet': '<strong>Liên Việt (1951):</strong> Hợp nhất Việt Minh và Hội Liên hiệp Quốc dân, tập trung sức người, sức của cho kháng chiến chống Pháp. Mặt trận góp phần làm nên chiến thắng Điện Biên Phủ (1954) và Hiệp định Genève, khẳng định độc lập, thống nhất Việt Nam.',
    'mat-tran-to-quoc': '<strong>Mặt trận Tổ quốc Việt Nam (10/9/1955):</strong> Thành lập trong bối cảnh Mỹ xâm lược miền Nam, phá hoại Hiệp định Genève. Mặt trận đoàn kết dân tộc, thực hiện cách mạng XHCN ở miền Bắc, đấu tranh giải phóng miền Nam, hướng tới thống nhất đất nước.',
    'giai-phong-mien-nam': '<strong>Mặt trận Dân tộc Giải phóng miền Nam (20/12/1960):</strong> Ra đời trong cao trào Đồng Khởi, tập hợp toàn dân miền Nam chống Mỹ-ngụy, giải phóng miền Nam, tiến tới thống nhất Tổ quốc.'
  }
  const renderIntro = () => (
    <div className="section-card">
      <h2 className="section-title">
        <span>🏛️</span>
        Giới thiệu
      </h2>
      <div className="content-text">
        Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc là một trong những di sản quý báu, đóng vai trò then chốt trong sự nghiệp cách mạng Việt Nam. Người đã xây dựng một hệ thống lý luận chặt chẽ, từ vai trò, lực lượng đến các nguyên tắc để xây dựng khối đại đoàn kết.
      </div>
      
      <div className="quote-highlight relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-100/50 via-yellow-100/50 to-green-100/50 animate-pulse"></div>
        <div className="relative z-10">
          <p className="text-xl font-bold text-red-800 mb-3 leading-relaxed">
            "Đoàn kết, đoàn kết, đại đoàn kết / Thành công, thành công, đại thành công"
          </p>
          <p className="text-right text-gray-700 font-medium">Chủ tịch Hồ Chí Minh</p>
        </div>
        <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full pulse-glow"></div>
      </div>
      
      <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 p-8 rounded-2xl mt-8 relative overflow-hidden border border-yellow-200">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-200/30 to-yellow-200/30 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-200/30 to-red-200/30 rounded-full translate-y-12 -translate-x-12"></div>
        
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-red-800 mb-6 flex items-center gap-3">
            <span className="text-2xl">📋</span>
            Các phần chính
            <div className="ml-auto w-3 h-3 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full pulse-glow"></div>
          </h3>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Vai trò của đại đoàn kết toàn dân tộc',
              'Lực lượng của khối đại đoàn kết', 
              'Điều kiện xây dựng khối đại đoàn kết',
              'Hình thức tổ chức - Mặt trận Dân tộc Thống nhất',
              'Phương thức xây dựng khối đại đoàn kết'
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/60 hover:bg-white/80 transition-all duration-300 group">
                <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full pulse-glow group-hover:scale-125 transition-transform duration-300"></div>
                <span className="text-gray-800 font-medium group-hover:text-red-700 transition-colors duration-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )

  const renderRole = () => (
    <div className="space-y-6">
      <div className="section-card">
        <h2 className="section-title">
          <span>⚡</span>
          1. Vai trò của đại đoàn kết toàn dân tộc
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="subsection-title">
              <span>🎯</span>
              1.1. Đại đoàn kết là vấn đề có ý nghĩa chiến lược
            </h3>
            <div className="content-text">
              Trong tư tưởng của Bác, đại đoàn kết toàn dân tộc không phải là một sách lược nhất thời mà là một chiến lược lâu dài, nhất quán xuyên suốt quá trình cách mạng Việt Nam.
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-200 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-200/30 to-pink-200/30 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="relative z-10">
                  <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                    <span className="text-2xl">🛡️</span>
                    Đoàn kết là vấn đề sống còn
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Lịch sử đã chứng minh, khi dân ta đoàn kết muôn người như một, nước ta được độc lập, tự do. Ngược lại, khi không đoàn kết, nước ta sẽ bị ngoại bang xâm lấn.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="relative z-10">
                  <h4 className="font-bold text-yellow-800 mb-3 flex items-center gap-2">
                    <span className="text-2xl">⚖️</span>
                    Đoàn kết là "điểm mẹ", là ngọn nguồn của mọi thắng lợi
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Bác Hồ đi đến một kết luận kinh điển: "Đoàn kết, đoàn kết, đại đoàn kết / Thành công, thành công, đại thành công".
                  </p>
                </div>
              </div>
            </div>

            {/* Ví dụ minh họa lịch sử */}
            <div className="mt-8 space-y-6">
              <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <span className="text-2xl">📚</span>
                Ví dụ minh họa từ lịch sử
              </h4>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Ví dụ thành công - Cách mạng Tháng Tám */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full -translate-y-12 translate-x-12"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-green-300/20 to-emerald-300/20 rounded-full translate-y-8 -translate-x-8"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        ✅
                      </div>
                      <h5 className="font-bold text-green-800 text-lg">Đoàn kết dẫn đến thành công</h5>
                    </div>
                    
                    <div className="bg-white/60 p-4 rounded-lg mb-4">
                      <h6 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                        Cách mạng Tháng Tám 1945 
                        <img 
                          src="/favicon-32x32.png" 
                          alt="icon" 
                          className="w-6 h-5 inline-block" 
                        />
                      </h6>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Dưới sự lãnh đạo của Hồ Chí Minh, cả dân tộc Việt Nam từ Bắc chí Nam, không phân biệt giai cấp, tôn giáo, đã đồng lòng nổi dậy, giành chính quyền từ tay phát xít Nhật.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-3 rounded-lg border border-green-300">
                      <p className="text-sm font-semibold text-green-900 text-center">
                        Sức mạnh đại đoàn kết đã biến cuộc cách mạng tưởng chừng không thể thành công trở thành tổng khởi nghĩa <span className="text-green-600 font-bold">"thần tốc"</span>, giành độc lập chỉ trong <span className="text-green-600 font-bold">15 ngày</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ví dụ thất bại - Thời kỳ Pháp thuộc */}
                <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-xl border border-red-200 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-200/30 to-rose-200/30 rounded-full -translate-y-12 translate-x-12"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-red-300/20 to-rose-300/20 rounded-full translate-y-8 -translate-x-8"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-red-200 to-rose-200 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        ❌
                      </div>
                      <h5 className="font-bold text-red-800 text-lg">Chia rẽ dẫn đến thất bại</h5>
                    </div>
                    
                    <div className="bg-white/60 p-4 rounded-lg mb-4">
                      <h6 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                        Cuối thế kỷ 19 - Thời kỳ Pháp thuộc
                      </h6>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Khi thực dân Pháp xâm lược, triều đình nhà Nguyễn thiếu sự đoàn kết nội bộ và không thể tập hợp được sức mạnh toàn dân.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-red-100 to-rose-100 p-3 rounded-lg border border-red-300">
                      <p className="text-sm font-semibold text-red-900 text-center">
                        Sự chia rẽ và các phong trào kháng Pháp tự phát đã không tạo nên sức mạnh tổng hợp, khiến đất nước rơi vào <span className="text-red-600 font-bold">ách đô hộ</span> của thực dân
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hai ví dụ bổ sung */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                {/* Chiến thắng Điện Biên Phủ 1954 */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full -translate-y-12 translate-x-12"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-300/20 to-indigo-300/20 rounded-full translate-y-8 -translate-x-8"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        🏆
                      </div>
                      <h5 className="font-bold text-blue-800 text-lg">Đoàn kết tạo nên chiến thắng</h5>
                    </div>
                    
                    <div className="bg-white/60 p-4 rounded-lg mb-4">
                      <h6 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                        Chiến thắng Điện Biên Phủ 1954
                      </h6>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Thắng lợi này không chỉ là công lao của quân đội mà còn là kết quả của sự đoàn kết "muôn người như một" của toàn dân. Hàng vạn dân công, thanh niên xung phong đã bất chấp mưa bom bão đạn, ngày đêm mở đường, vận chuyển lương thực, vũ khí lên tiền tuyến.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-3 rounded-lg border border-blue-300">
                      <p className="text-sm font-semibold text-blue-900 text-center">
                        Sức mạnh tổng hợp này đã tạo nên chiến thắng lịch sử, buộc thực dân Pháp phải ký <span className="text-blue-600 font-bold">Hiệp định Geneva</span> và chấm dứt sự thống trị của chúng
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chiến dịch Hồ Chí Minh 1975 */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full -translate-y-12 translate-x-12"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-300/20 to-pink-300/20 rounded-full translate-y-8 -translate-x-8"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        🎯
                      </div>
                      <h5 className="font-bold text-purple-800 text-lg">Đoàn kết thống nhất đất nước</h5>
                    </div>
                    
                    <div className="bg-white/60 p-4 rounded-lg mb-4">
                      <h6 className="font-semibold text-purple-700 mb-2 flex items-center gap-2">
                        Chiến dịch Hồ Chí Minh 1975
                      </h6>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Khối đại đoàn kết đã được thể hiện một cách tuyệt vời. Miền Bắc trở thành hậu phương vững chắc, dốc sức chi viện cho chiến trường miền Nam. Sự đồng lòng của cả dân tộc đã tạo nên một sức mạnh vô địch.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded-lg border border-purple-300">
                      <p className="text-sm font-semibold text-purple-900 text-center">
                        Đánh bại đế quốc Mỹ và tay sai, <span className="text-purple-600 font-bold">giải phóng hoàn toàn miền Nam</span> và thống nhất đất nước
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Kết luận từ ví dụ */}
              <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 p-6 rounded-xl border border-yellow-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="relative z-10">
                  <h5 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                    <span className="text-xl">💡</span>
                    Bài học lịch sử
                  </h5>
                  <p className="text-gray-700 leading-relaxed text-center font-medium">
                    Bốn ví dụ trên cho thấy rõ ràng: <span className="text-orange-600 font-bold">đoàn kết là sức mạnh</span>, 
                    còn <span className="text-red-600 font-bold">chia rẽ là yếu đuối</span>. 
                    Đây chính là minh chứng sống động cho tư tưởng đại đoàn kết của Bác Hồ.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="quote-highlight">
            <p className="font-bold text-red-800 mb-3 flex items-center gap-2">
              Đoàn kết là nhân tố quyết định thành bại của cách mạng
            </p>
            <p className="text-gray-700 leading-relaxed">• "Đoàn kết là sức mạnh của chúng ta".</p>
            <p className="text-gray-700 leading-relaxed">• "Đoàn kết là một lực lượng vô địch của chúng ta để khắc phục khó khăn, giành lấy thắng lợi".</p>
            <p className="text-gray-700 leading-relaxed">• "Đoàn kết là sức mạnh, đoàn kết là thắng lợi".</p>
            <p className="text-gray-700 leading-relaxed">• "Đoàn kết là sức mạnh, là then chốt của thành công".</p>
          </div>
          
          <div>
            <h3 className="subsection-title">
              <span>🎯</span>
              1.2. Đại đoàn kết là mục tiêu, nhiệm vụ hàng đầu
            </h3>
            <div className="content-text">
              Không chỉ mang ý nghĩa chiến lược, đại đoàn kết còn là một mục tiêu và nhiệm vụ hàng đầu của cách mạng.
            </div>
            
            <div className="quote-highlight">
              <p className="font-semibold text-red-700">
                "ĐOÀN KẾT TOÀN DÂN, PHỤC VỤ TỔ QUỐC"
              </p>
              <p className="text-right text-gray-600 text-sm">Bác Hồ tuyên bố mục đích của Đảng Lao động Việt Nam (3-3-1951)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderForce = () => (
    <div className="space-y-6">
      <div className="section-card">
        <h2 className="section-title">
          <span>👥</span>
          2. Lực lượng của khối đại đoàn kết toàn dân tộc
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="subsection-title">
              <span>🌍</span>
              2.1. Chủ thể của khối đại đoàn kết (Phạm vi đoàn kết)
            </h3>
            <div className="content-text">
              Chủ thể của khối đại đoàn kết bao gồm <span className="text-blue-600 font-bold">toàn thể nhân dân, tất cả những người Việt Nam yêu nước</span>, không phân biệt giai cấp, tầng lớp, tôn giáo, dân tộc, giới tính hay tuổi tác.
            </div>
            <div className="content-text">
              Trong quá trình xây dựng khối đoàn kết, cần đứng vững trên <span className="text-blue-600 font-bold">lập trường giai cấp công nhân</span> nhưng vẫn giải quyết hài hòa mối quan hệ giữa giai cấp và dân tộc.
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-3">💝 Tiêu chí đoàn kết</h4>
              <div className="quote-highlight bg-blue-100 border-blue-300">
                <p className="font-semibold text-blue-700">
                  "Ai có tài, có đức, có sức, có lòng phụng sự Tổ quốc và phục vụ nhân dân thì ta đoàn kết với họ"
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="subsection-title">
              <span>🏗️</span>
              2.2. Nền tảng của khối đại đoàn kết
            </h3>
            <div className="content-text">
              Theo Bác, đại đoàn kết phải bắt đầu từ đại đa số nhân dân, tức là từ công nhân, nông dân và các tầng lớp lao động khác.
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
                <div className="text-3xl mb-2">👷</div>
                <h4 className="font-semibold text-green-800">Công nhân</h4>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 text-center">
                <div className="text-3xl mb-2">🌾</div>
                <h4 className="font-semibold text-orange-800">Nông dân</h4>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 text-center">
                <div className="text-3xl mb-2">🎓</div>
                <h4 className="font-semibold text-purple-800">Trí thức</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderConditions = () => (
    <div className="space-y-6">
      <div className="section-card">
        <h2 className="section-title">
          <span>🔑</span>
          3. Điều kiện để xây dựng khối đại đoàn kết toàn dân tộc
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <h3 className="text-lg font-semibold text-red-800">Lợi ích chung</h3>
            </div>
            <p className="text-gray-700 text-sm mb-3">
              Phải lấy lợi ích chung làm điểm quy tụ: Mục tiêu chung của Mặt trận phải là lợi ích tối cao của dân tộc.
            </p>
            <div className="quote-highlight bg-red-100 border-red-300">
              <p className="text-sm font-semibold text-red-700">
                "Nếu nước được độc lập mà dân không được hưởng hạnh phúc, tự do thì độc lập cũng chẳng có ý nghĩa gì."
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <h3 className="text-lg font-semibold text-yellow-800">Kế thừa truyền thống</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Phải kế thừa truyền thống yêu nước, nhân nghĩa, đoàn kết của dân tộc - truyền thống quý báu được hun đúc hàng ngàn năm.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <h3 className="text-lg font-semibold text-green-800">Niềm tin vào nhân dân</h3>
            </div>
            <p className="text-gray-700 text-sm mb-3">
              Nhân dân là chỗ dựa vững chắc, là nguồn sức mạnh vô địch, quyết định thắng lợi của mọi cuộc cách mạng.
            </p>
            <div className="quote-highlight bg-green-100 border-green-300">
              <p className="text-sm font-semibold text-green-700">
                "Nước lấy dân làm gốc"
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
              <h3 className="text-lg font-semibold text-blue-800">Lòng khoan dung</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Phải có lòng khoan dung, độ lượng với con người, trân trọng phần thiện dù nhỏ nhất ở mỗi người.
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderOrganization = () => (
    <div className="space-y-6">
      <div className="section-card">
        <h2 className="section-title">
          <span>🏗️</span>
          4. Hình thức, Nguyên tắc tổ chức của khối Đại đoàn kết Toàn dân tộc
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="subsection-title">
              <span>🏛️</span>
              4.1. Hình thức tổ chức: Mặt trận Dân tộc Thống nhất
            </h3>
            <div className="content-text">
              Khối đại đoàn kết toàn dân tộc chỉ trở thành một lực lượng to lớn khi được tập hợp, tổ chức lại thành một khối vững chắc.
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-yellow-50 p-6 rounded-lg mt-4 relative">
              <h4 className="font-semibold text-red-800 mb-8 text-center">📅 Các giai đoạn phát triển</h4>
              {/* Vertical center line */}
              <div className="absolute left-1/2 top-16 bottom-6 w-0.5 bg-red-600"></div>

                <div className="relative">
                  {/* Row 1 - Left (top) */}
                  <div className="grid grid-cols-2 gap-0 items-start">
                    <div className="relative pr-10">
                      <button 
                        onClick={() => setSelectedTimelineItem(selectedTimelineItem === 'hoi-phan-de' ? null : 'hoi-phan-de')}
                        className="bg-white p-4 rounded-lg border border-red-300 shadow-sm hover:shadow-md hover:border-red-400 transition-all duration-300 w-full text-left cursor-pointer group"
                      >
                        <h5 className="font-semibold text-red-700 mb-2 group-hover:text-red-800">Hội Phản đế đồng minh (1930)</h5>
                        <p className="text-sm text-gray-600">Hình thức đầu tiên của Mặt trận Dân tộc thống nhất</p>
                      </button>
                      {/* horizontal connector to center */}
                      <div className="absolute top-6 right-0 h-0.5 w-10 bg-red-600"></div>
                    </div>
                    <div></div>
                  </div>

                  {/* Row 2 - Right (slightly lower) */}
                  <div className="grid grid-cols-2 gap-0 items-start mt-10">
                    <div></div>
                    <div className="relative pl-10">
                      <button 
                        onClick={() => setSelectedTimelineItem(selectedTimelineItem === 'viet-minh' ? null : 'viet-minh')}
                        className="bg-white p-4 rounded-lg border border-red-300 shadow-sm hover:shadow-md hover:border-red-400 transition-all duration-300 w-full text-left cursor-pointer group"
                      >
                        <h5 className="font-semibold text-red-700 mb-2 group-hover:text-red-800">Mặt trận Việt Minh (1941)</h5>
                        <p className="text-sm text-gray-600">Việt Nam Độc lập đồng minh chống phát xít Pháp Nhật</p>
                      </button>
                      {/* horizontal connector to center */}
                      <div className="absolute top-6 left-0 h-0.5 w-10 bg-red-600"></div>
                    </div>
                  </div>

                  {/* Row 3 - Left (lower than row 2) */}
                  <div className="grid grid-cols-2 gap-0 items-start mt-10">
                    <div className="relative pr-10">
                      <button 
                        onClick={() => setSelectedTimelineItem(selectedTimelineItem === 'lien-viet' ? null : 'lien-viet')}
                        className="bg-white p-4 rounded-lg border border-red-300 shadow-sm hover:shadow-md hover:border-red-400 transition-all duration-300 w-full text-left cursor-pointer group"
                      >
                        <h5 className="font-semibold text-red-700 mb-2 group-hover:text-red-800">Mặt trận Liên Việt (1951)</h5>
                        <p className="text-sm text-gray-600">Tập hợp toàn dân đẩy mạnh kháng chiến</p>
                      </button>
                      {/* horizontal connector to center */}
                      <div className="absolute top-6 right-0 h-0.5 w-10 bg-red-600"></div>
                    </div>
                    <div></div>
                  </div>

                  {/* Row 4 - Right (lower than row 3) */}
                  <div className="grid grid-cols-2 gap-0 items-start mt-10">
                    <div></div>
                    <div className="relative pl-10">
                      <button 
                        onClick={() => setSelectedTimelineItem(selectedTimelineItem === 'mat-tran-to-quoc' ? null : 'mat-tran-to-quoc')}
                        className="bg-white p-4 rounded-lg border border-red-300 shadow-sm hover:shadow-md hover:border-red-400 transition-all duration-300 w-full text-left cursor-pointer group"
                      >
                        <h5 className="font-semibold text-red-700 mb-2 group-hover:text-red-800">Mặt trận Tổ quốc Việt Nam (1955)</h5>
                        <p className="text-sm text-gray-600">Đấu tranh đánh bại đế quốc Mỹ xâm lược</p>
                      </button>
                      {/* horizontal connector to center */}
                      <div className="absolute top-6 left-0 h-0.5 w-10 bg-red-600"></div>
                    </div>
                  </div>

                  {/* Row 5 - Left (lowest) */}
                  <div className="grid grid-cols-2 gap-0 items-start mt-10">
                    <div className="relative pr-10">
                      <button 
                        onClick={() => setSelectedTimelineItem(selectedTimelineItem === 'giai-phong-mien-nam' ? null : 'giai-phong-mien-nam')}
                        className="bg-white p-4 rounded-lg border border-red-300 shadow-sm hover:shadow-md hover:border-red-400 transition-all duration-300 w-full text-left cursor-pointer group"
                      >
                        <h5 className="font-semibold text-red-700 mb-2 group-hover:text-red-800">Mặt trận Dân tộc Giải phóng miền Nam (1960)</h5>
                        <p className="text-sm text-gray-600">Tập hợp toàn dân miền Nam chống Mỹ, giải phóng miền Nam</p>
                      </button>
                      {/* horizontal connector to center */}
                      <div className="absolute top-6 right-0 h-0.5 w-10 bg-red-600"></div>
                    </div>
                    <div></div>
                  </div>
                </div>

                {/* Detail Panel */}
                {selectedTimelineItem && (
                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h5 className="text-lg font-bold text-blue-800 flex items-center gap-2">
                          <span className="text-xl">📖</span>
                          Thông tin chi tiết
                        </h5>
                        <button 
                          onClick={() => setSelectedTimelineItem(null)}
                          className="text-blue-600 hover:text-blue-800 font-bold text-xl leading-none"
                        >
                          ×
                        </button>
                      </div>
                      <p 
                        className="text-gray-700 leading-relaxed text-sm"
                        dangerouslySetInnerHTML={{ 
                          __html: timelineDetails[selectedTimelineItem as keyof typeof timelineDetails] 
                        }}
                      />
                    </div>
                  </div>
                )}
            </div>
          </div>
          
          <div>
            <h3 className="subsection-title">
              <span>⚖️</span>
              4.2. Nguyên tắc xây dựng và hoạt động
            </h3>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <span>🤝</span>
                  Liên minh công - nông - trí thức
                </h4>
                <p className="text-gray-700 text-sm">
                  Xây dựng trên nền tảng liên minh công - nông - trí thức, đặt dưới sự lãnh đạo của Đảng.
                </p>
              </div>
              
              <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <span>🗳️</span>
                  Hiệp thương dân chủ
                </h4>
                <p className="text-gray-700 text-sm">
                  Hoạt động theo nguyên tắc hiệp thương dân chủ, mọi vấn đề phải được tất cả thành viên cùng bàn bạc công khai.
                </p>
              </div>
              
              <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                  <span>💪</span>
                  Đoàn kết lâu dài, chặt chẽ
                </h4>
                <p className="text-gray-700 text-sm">
                  Đoàn kết lâu dài, chặt chẽ, thật sự, chân thành, thân ái giúp đỡ nhau cùng tiến bộ.
                </p>
                <div className="quote-highlight bg-purple-100 border-purple-300 mt-3">
                  <p className="text-sm font-semibold text-purple-700">
                    "Cầu đồng tồn dị" - tìm kiếm điểm chung, chấp nhận điểm khác biệt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderMethods = () => (
    <div className="space-y-6">
      <div className="section-card">
        <h2 className="section-title">
          <span>🛠️</span>
          5. Phương thức xây dựng khối Đại đoàn kết Dân tộc
        </h2>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-red-50 to-yellow-50 p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg border border-red-200">
                <div className="text-3xl mb-3 text-center">📢</div>
                <h3 className="font-semibold text-red-800 mb-3 text-center">Dân vận</h3>
                <p className="text-sm text-gray-700 text-center">
                  Làm tốt công tác vận động quần chúng để đoàn kết mọi người, tạo động lực cho sự phát triển.
                </p>
                <div className="quote-highlight bg-red-100 border-red-300 mt-3">
                  <p className="text-xs font-semibold text-red-700">
                    "Cần phải chịu khó tìm đủ cách giải thích cho họ hiểu rằng: những việc đó là vì ích lợi của họ mà phải làm"
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-yellow-200">
                <div className="text-3xl mb-3 text-center">👥</div>
                <h3 className="font-semibold text-yellow-800 mb-3 text-center">Tổ chức đoàn thể</h3>
                <p className="text-sm text-gray-700 text-center">
                  Thành lập các đoàn thể, tổ chức quần chúng phù hợp với từng đối tượng như Công đoàn, Hội Nông dân, Đoàn Thanh niên...
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-green-200">
                <div className="text-3xl mb-3 text-center">🏛️</div>
                <h3 className="font-semibold text-green-800 mb-3 text-center">Tập hợp trong Mặt trận</h3>
                <p className="text-sm text-gray-700 text-center">
                  Tập hợp các đoàn thể, tổ chức quần chúng trong Mặt trận Dân tộc Thống nhất để tạo sức mạnh to lớn và bền vững.
                </p>
                <div className="quote-highlight bg-green-100 border-green-300 mt-3">
                  <p className="text-xs font-semibold text-green-700">
                    "Những đoàn thể ấy là tổ chức của dân, phấn đấu cho dân, bênh vực quyền của dân"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="section-card bg-gradient-to-r from-red-100 to-yellow-100 border-red-300">
        <h2 className="section-title text-red-900">
          <span>🎯</span>
          Kết luận
        </h2>
        <div className="content-text text-red-800">
          Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc là một hệ thống lý luận hoàn chỉnh, sâu sắc và có ý nghĩa thực tiễn to lớn. Những quan điểm của Người về vai trò, lực lượng, điều kiện, hình thức tổ chức và phương thức xây dựng khối đại đoàn kết đã trở thành kim chỉ nam cho sự nghiệp cách mạng Việt Nam.
        </div>
        
        <div className="quote-highlight bg-red-200 border-red-400 mt-4">
          <p className="text-lg font-bold text-red-800 text-center">
            "Đoàn kết là sức mạnh, đoàn kết là thắng lợi"
          </p>
          <p className="text-center text-red-600 text-sm mt-2">Chủ tịch Hồ Chí Minh</p>
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeSection) {
      case 'intro':
        return renderIntro()
      case 'role':
        return renderRole()
      case 'force':
        return renderForce()
      case 'conditions':
        return renderConditions()
      case 'organization':
        return renderOrganization()
      case 'methods':
        return renderMethods()
      default:
        return renderIntro()
    }
  }

  return (
    <div className="space-y-6">
      {renderContent()}
    </div>
  )
}

export default HoChiMinhContent
