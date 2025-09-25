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
// You can adjust xPct/yPct/rPct below to align precisely with the 5 differences.
const Game: React.FC<GameProps> = ({ onBack }) => {
  const hotspots: Hotspot[] = useMemo(
    () => [
      // 1) Lá cờ góc trên bên trái
      { id: 'flag_top_left', xPct: 10, yPct: 15.5, rPct: 8 },
      // 2) Biểu tượng cờ VN trên áo người nông dân hàng đầu tiên
      { id: 'farmer_badge', xPct: 37.5, yPct: 50, rPct: 3 },
      // 3) Biểu tượng hoa trên áo người phụ nữ hàng đầu tiên
      { id: 'woman_flower', xPct: 53, yPct: 52.5, rPct: 3 },
      // 4) Cây súng góc bên phải của anh lính hàng đầu tiên
      { id: 'soldier_gun_right', xPct: 79, yPct: 80, rPct: 10 },
      // 5) Khói nhà máy góc bên phải phía trên
      { id: 'factory_smoke', xPct: 90, yPct: 13, rPct: 8 },
    ],
    [],
  )

  const [foundIds, setFoundIds] = useState<string[]>([])
  const [showHints, setShowHints] = useState(false)

  const allFound = foundIds.length === hotspots.length

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
          <div className="flex items-center gap-2">
            <ProgressBar total={hotspots.length} found={foundIds.length} />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[1, 2].map((col) => (
            <SpotTheDifferencePanel
              key={col}
              imgSrc={col === 1 ? '/hinh1.jpg' : '/hinh2.jpg'}
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
              ✨ Tuyệt vời! Bạn đã tìm đủ 5 điểm khác biệt!
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


