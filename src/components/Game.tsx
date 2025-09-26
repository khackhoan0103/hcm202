import React, { useMemo, useState } from 'react'

type Hotspot = {
  id: string
  // percentage-based center position relative to image container
  xPct: number
  yPct: number
  // clickable radius in percentage of the image width
  rPct: number
}

interface GameProps {
  onBack: () => void
}

// Note: Positions are percentage-based and may need fine-tuning to exactly match your images.
// You can adjust xPct/yPct/rPct below to align precisely with the differences.
const Game: React.FC<GameProps> = ({ onBack }) => {
  const [currentGame, setCurrentGame] = useState<'game1' | 'game2'>('game1')

  const hotspotsGame1: Hotspot[] = useMemo(
    () => [
      // Game 1: hinh1.jpg vs hinh2.jpg (5 differences)
      // 1) Lá cờ góc trên bên trái
      { id: 'flag_top_left', xPct: 10, yPct: 15.5, rPct: 8 },
      // 2) Biểu tượng cờ VN trên áo người nông dân hàng đầu tiên
      { id: 'farmer_badge', xPct: 37.5, yPct: 50, rPct: 3 },
      // 3) Biểu tượng hoa trên áo người phụ nữ hàng đầu tiên
      { id: 'woman_flower', xPct: 53, yPct: 75, rPct: 10 },
      // 4) Cây súng góc bên phải của anh lính hàng đầu tiên
      { id: 'soldier_gun_right', xPct: 79, yPct: 80, rPct: 10 },
      // 5) Khói nhà máy góc bên phải phía trên
      { id: 'factory_smoke', xPct: 90, yPct: 13, rPct: 8 },
    ],
    [],
  )

  const hotspotsGame2: Hotspot[] = useMemo(
    () => [
      // Game 2: hinh3.jpg vs hinh4.jpg (6 differences)
      // You can adjust these positions and radii as needed

      // xe trắng
      { id: 'diff1', xPct: 5, yPct: 30, rPct: 4.5 },
      // xe vàng 1
      { id: 'diff2', xPct: 19, yPct: 13.5, rPct: 4 },
      // xe vàng 2
      { id: 'diff3', xPct: 79, yPct: 67, rPct: 5.5 },
      // cây
      { id: 'diff4', xPct: 20, yPct: 90, rPct: 30 },
      // tòa nhà
      { id: 'diff5', xPct: 80, yPct: 14, rPct: 18 },
      // vũng nước
      { id: 'diff6', xPct: 91, yPct: 80, rPct: 8 },
    ],
    [],
  )

  const hotspots = currentGame === 'game1' ? hotspotsGame1 : hotspotsGame2

  const [foundIds, setFoundIds] = useState<string[]>([])
  const [showHints, setShowHints] = useState(false)

  const allFound = foundIds.length === hotspots.length

  // Reset found items when switching games
  React.useEffect(() => {
    setFoundIds([])
    setShowHints(false)
  }, [currentGame])

  function handleClick(event: React.MouseEvent<HTMLDivElement>, imageRef: HTMLDivElement) {
    const rect = imageRef.getBoundingClientRect()
    const clickX = ((event.clientX - rect.left) / rect.width) * 100
    const clickY = ((event.clientY - rect.top) / rect.height) * 100

    // find first not-found hotspot within radius
    const hit = hotspots.find((h) => {
      if (foundIds.includes(h.id)) return false
      const dx = clickX - h.xPct
      const dy = clickY - h.yPct
      const dist = Math.sqrt(dx * dx + dy * dy)
      return dist <= h.rPct
    })
    if (hit) {
      setFoundIds((prev) => [...prev, hit.id])
    }
  }

  return (
    <div className="space-y-6">
      <div className="section-card">
        <div className="flex items-center justify-between">
          <h2 className="section-title">
            <span>🎮</span>
            Game: Tìm điểm khác biệt
          </h2>
          <div className="flex items-center gap-4">
            {/* Game Selection */}
            <div className="flex gap-2">
            <button
              onClick={() => setCurrentGame('game1')}
              className={`w-36 h-14 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${
                currentGame === 'game1'
                  ? 'bg-red-500 text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Game 1 (5 điểm)
            </button>
              <button
                onClick={() => setCurrentGame('game2')}
                className={`w-36 h-14 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${
                  currentGame === 'game2'
                    ? 'bg-red-500 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Game 2 (6 điểm)
              </button>
            </div>
            <ProgressBar total={hotspots.length} found={foundIds.length} />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[1, 2].map((col) => (
            <SpotTheDifferencePanel
              key={col}
              imgSrc={
                currentGame === 'game1'
                  ? (col === 1 ? '/hinh1.jpg' : '/hinh2.jpg')
                  : (col === 1 ? '/hinh3.jpg' : '/hinh4.jpg')
              }
              hotspots={hotspots}
              foundIds={foundIds}
              onHit={(id) => setFoundIds((prev) => (prev.includes(id) ? prev : [...prev, id]))}
              onClickWithin={handleClick}
              showHints={showHints}
            />
          ))}
        </div>

        <div className="mt-6">
          {allFound && (
            <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-green-200/80 to-emerald-200/80 border border-emerald-400 text-gray-800 font-semibold">
              ✨ Tuyệt vời! Bạn đã tìm đủ {hotspots.length} điểm khác biệt!
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const SpotTheDifferencePanel: React.FC<{
  imgSrc: string
  hotspots: Hotspot[]
  foundIds: string[]
  onHit: (id: string) => void
  onClickWithin: (e: React.MouseEvent<HTMLDivElement>, ref: HTMLDivElement) => void
  showHints: boolean
}> = ({ imgSrc, hotspots, foundIds, onHit, onClickWithin, showHints }) => {
  const [refEl, setRefEl] = useState<HTMLDivElement | null>(null)

  function onContainerClick(e: React.MouseEvent<HTMLDivElement>) {
    if (refEl) onClickWithin(e, refEl)
  }

  return (
    <div className="game-panel relative rounded-xl overflow-hidden border border-red-800/40 bg-black/40">
      <div
        ref={setRefEl}
        onClick={onContainerClick}
        className="relative select-none cursor-default"
      >
        {/* Image */}
        <img src={imgSrc} className="w-full h-auto block" alt="spot-difference" />

        {/* Hotspots overlay */}
        {hotspots.map((h) => {
          const found = foundIds.includes(h.id)
          return (
            <button
              type="button"
              key={h.id}
              onClick={(e) => {
                e.stopPropagation()
                onHit(h.id)
              }}
              className={`absolute rounded-full transition-all duration-200 ${
                found ? 'ring-4 ring-green-400/80 bg-green-400/20' : showHints ? 'ring-2 ring-red-400/80 bg-red-400/10' : 'ring-0 bg-transparent'
              }`}
              style={{
                left: `${h.xPct}%`,
                top: `${h.yPct}%`,
                width: `${h.rPct * 2}%`,
                height: `${h.rPct * 2}%`,
                transform: 'translate(-50%, -50%)',
              }}
              aria-label={`hotspot-${h.id}`}
            />
          )
        })}
      </div>
    </div>
  )
}

const ProgressBar: React.FC<{ total: number; found: number }> = ({ total, found }) => {
  const pct = Math.min(100, Math.round((found / total) * 100))
  return (
    <div className="w-full">
      <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden ring-1 ring-white/10">
        <div
          className="h-3 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="mt-2 text-sm text-black">
        Đã tìm thấy: {found}/{total}
      </div>
    </div>
  )
}

export default Game


