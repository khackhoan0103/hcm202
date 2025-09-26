import React, { useState, useEffect } from 'react'
import HoChiMinhContent from './components/HoChiMinhContent'
import Navigation from './components/Navigation'
import Game from './components/Game'

function App() {
  const [activeSection, setActiveSection] = useState('intro')
  const [showGame, setShowGame] = useState(false)
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)

  const quotes = [
    "Đoàn kết, đoàn kết, đại đoàn kết / Thành công, thành công, đại thành công",
    "Đoàn kết là sức mạnh của chúng ta",
    "Đoàn kết là một lực lượng vô địch của chúng ta để khắc phục khó khăn, giành lấy thắng lợi",
    "Đoàn kết là sức mạnh, đoàn kết là thắng lợi",
    "Đoàn kết là sức mạnh, là then chốt của thành công"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length)
    }, 4000) // Thay đổi câu mỗi 4 giây

    return () => clearInterval(interval)
  }, [quotes.length])

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-red-900 via-black to-black">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-red-900 via-black to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23fecaca%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-red-900/20 to-transparent animate-pulse"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="fixed top-20 left-10 w-20 h-20 bg-gradient-to-r from-red-700 to-red-500 rounded-full opacity-20 floating-animation"></div>
      <div className="fixed top-40 right-20 w-16 h-16 bg-gradient-to-r from-red-600 to-black rounded-full opacity-20 floating-animation" style={{animationDelay: '1s'}}></div>
      <div className="fixed bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-black to-red-700 rounded-full opacity-20 floating-animation" style={{animationDelay: '2s'}}></div>

      <header className="glass-effect shadow-2xl sticky top-0 z-50 border-b border-white/10 bg-black/40">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                Tư Tưởng Hồ Chí Minh
              </span>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full pulse-glow"></div>
            </h1>
            <p className="text-xl text-gray-200 font-medium">
              Về Đại Đoàn Kết Toàn Dân Tộc
            </p>
            <div className="mt-4 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-black rounded-full shimmer"></div>
            </div>
          </div>
        </div>
      </header>
      
      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        {showGame ? (
          <div>
            <div className="mb-6">
              <button
                onClick={() => setShowGame(false)}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-500 text-white shadow hover:brightness-110"
              >
                ← Quay lại nội dung
              </button>
            </div>
            <Game onBack={() => setShowGame(false)} />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
              <div className="mt-6 p-4 rounded-xl bg-black/30 border border-red-800/30">
                <h4 className="text-sm font-semibold text-red-200 mb-2">Trải nghiệm</h4>
                <button
                  onClick={() => setShowGame(true)}
                  className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-500 text-white shadow hover:brightness-110"
                >
                  Chơi game tìm điểm khác biệt
                </button>
              </div>
            </aside>
            
            <main className="lg:col-span-3">
              <HoChiMinhContent activeSection={activeSection} />
            </main>
          </div>
        )}
      </div>
      
      <footer className="relative z-10 mt-20">
        <div className="bg-gradient-to-r from-red-800 via-red-700 to-orange-700 text-white py-12 relative overflow-hidden">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
          
          <div className="max-w-6xl mx-auto px-4 text-center relative">
          <div className="mb-6">
            <div className="mx-auto mb-4 floating-animation">
              {/* Lớp tạo viền gradient bo góc */}
              <span className="inline-block rounded-xl p-[3px] bg-gradient-to-r from-yellow-400 to-red-400">
                {/* Lớp viền trắng mảnh (tuỳ chọn) */}
                <span className="block rounded-xl bg-white p-[0px]">
                  {/* Ảnh giữ tỉ lệ gốc, bo góc theo khung chữ nhật */}
                  <img
                    src="cropped-logo-1.jpg"
                    alt="Hồ Chí Minh Việt Nam"
                    className="block rounded-xl w-70 h-auto object-cover"
                  />
                </span>
              </span>
            </div>
          </div>
            
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentQuoteIndex * 100}%)` }}
              >
                {quotes.map((quote, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <blockquote className="text-2xl md:text-3xl font-bold mb-4 leading-relaxed">
                      "{quote}"
                    </blockquote>
                  </div>
                ))}
              </div>
              
              <p className="text-lg opacity-90 mb-6">Chủ tịch Hồ Chí Minh</p>

              {/* Navigation dots */}
              <div className="flex justify-center space-x-2 mb-4">
                {quotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuoteIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentQuoteIndex 
                        ? 'bg-yellow-400 scale-125' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
