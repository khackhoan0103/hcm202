import React from 'react'

interface HoChiMinhContentProps {
  activeSection: string
}

const HoChiMinhContent: React.FC<HoChiMinhContentProps> = ({ activeSection }) => {
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
          <p className="text-right text-gray-700 font-medium">- Chủ tịch Hồ Chí Minh</p>
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
                    Bác Hồ đi đến một kết luận kinh điển: “Đoàn kết, đoàn kết, đại đoàn kết / Thành công, thành công, đại thành công”.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="quote-highlight">
            <p className="font-bold text-red-800 mb-3 flex items-center gap-2">
              Đoàn kết là nhân tố quyết định thành bại của cách mạng
            </p>
            <p className="text-gray-700 leading-relaxed">-"Đoàn kết là sức mạnh của chúng ta".</p>
            <p className="text-gray-700 leading-relaxed">-"Đoàn kết là một lực lượng vô địch của chúng ta để khắc phục khó khăn, giành lấy thắng lợi".</p>
            <p className="text-gray-700 leading-relaxed">-"Đoàn kết là sức mạnh, đoàn kết là thắng lợi".</p>
            <p className="text-gray-700 leading-relaxed">-"Đoàn kết là sức mạnh, là then chốt của thành công".</p>
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
              <p className="text-right text-gray-600 text-sm">- Mục đích của Đảng Lao động Việt Nam (3-3-1951)</p>
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
              Chủ thể của khối đại đoàn kết bao gồm toàn thể nhân dân, tất cả những người Việt Nam yêu nước, không phân biệt giai cấp, tầng lớp, tôn giáo, dân tộc, giới tính hay tuổi tác.
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-3">💝 Tiêu chí đoàn kết</h4>
              <div className="quote-highlight bg-blue-100 border-blue-300">
                <p className="font-semibold text-blue-700">
                  "ai có tài, có đức, có sức, có lòng phụng sự Tổ quốc và phục vụ nhân dân thì ta đoàn kết với họ"
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
              <h3 className="text-lg font-semibold text-green-800">Lòng khoan dung</h3>
            </div>
            <p className="text-gray-700 text-sm mb-3">
              Phải có lòng khoan dung, độ lượng với con người, trân trọng phần thiện dù nhỏ nhất ở mỗi người.
            </p>
            <div className="quote-highlight bg-green-100 border-green-300">
              <p className="text-sm font-semibold text-green-700">
                "Năm ngón tay cũng có ngón vắn, ngón dài... ta phải khoan hồng đại độ"
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
              <h3 className="text-lg font-semibold text-blue-800">Niềm tin vào nhân dân</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Phải có niềm tin vào nhân dân. Bác Hồ luôn tin tưởng tuyệt đối vào sức mạnh của nhân dân với nguyên tắc "Nước lấy dân làm gốc".
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
            
            <div className="bg-gradient-to-r from-red-50 to-yellow-50 p-6 rounded-lg mt-4">
              <h4 className="font-semibold text-red-800 mb-4">📅 Các giai đoạn phát triển:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-700 mb-2">• Hội Phản đế đồng minh (1930)</h5>
                  <p className="text-sm text-gray-600">Hình thức đầu tiên của Mặt trận Dân tộc thống nhất</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-700 mb-2">• Mặt trận Việt Minh (1941)</h5>
                  <p className="text-sm text-gray-600">Việt nam Độc lập đồng minh chống phát xít Pháp Nhật</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-700 mb-2">• Mặt trận Liên Việt (1951)</h5>
                  <p className="text-sm text-gray-600">Tập hợp toàn dân đẩy mạnh kháng chiến</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h5 className="font-semibold text-red-700 mb-2">• Mặt trận Tổ quốc Việt Nam (1955, 1976)</h5>
                  <p className="text-sm text-gray-600">Đấu tranh đánh bại đế quốc Mỹ xâm lược</p>
                </div>
              </div>
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
                    "cầu đồng tồn dị" - tìm kiếm điểm chung, chấp nhận điểm khác biệt
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
                    "cần phải chịu khó tìm đủ cách giải thích cho họ hiểu rằng: những việc đó là vì ích lợi của họ mà phải làm"
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
          <p className="text-center text-red-600 text-sm mt-2">- Chủ tịch Hồ Chí Minh</p>
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
