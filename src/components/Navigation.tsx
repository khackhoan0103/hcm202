import React from 'react'

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'intro', title: 'Giới thiệu', icon: '🏛️' },
    { id: 'role', title: 'Vai trò đại đoàn kết', icon: '⚡' },
    { id: 'force', title: 'Lực lượng đoàn kết', icon: '👥' },
    { id: 'conditions', title: 'Điều kiện xây dựng', icon: '🔑' },
    { id: 'organization', title: 'Hình thức tổ chức', icon: '🏗️' },
    { id: 'methods', title: 'Phương thức xây dựng', icon: '🛠️' }
  ]

  return (
    <nav className="sticky top-32">
      <div className="glass-effect rounded-2xl shadow-2xl p-6 border border-white/20 relative overflow-hidden">
        {/* Decorative gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-orange-50/50 to-yellow-50/50"></div>
        
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <span className="text-2xl">📚</span>
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              Nội dung chính
            </span>
            <div className="ml-auto w-2 h-2 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full pulse-glow"></div>
          </h3>
          
          <ul className="space-y-3">
            {sections.map((section, index) => (
              <li key={section.id}>
                <button
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 flex items-center gap-4 group relative overflow-hidden ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg transform scale-105'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 hover:text-gray-900 hover:shadow-md hover:transform hover:scale-102'
                  }`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {/* Shimmer effect for active button */}
                  {activeSection === section.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer"></div>
                  )}
                  
                  <span className="text-xl relative z-10">{section.icon}</span>
                  <span className="font-medium relative z-10">{section.title}</span>
                  
                  {/* Active indicator */}
                  {activeSection === section.id && (
                    <div className="ml-auto w-3 h-3 bg-white rounded-full pulse-glow"></div>
                  )}
                </button>
              </li>
            ))}
          </ul>
          
          {/* Decorative elements */}
          <div className="mt-6 pt-6 border-t border-red-100">
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
