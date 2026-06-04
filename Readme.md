# 🚀 PIXEL BLASTER DX

A retro pixel-art arcade space shooter with online multiplayer — built in pure HTML/CSS/JS. No install. No server. Just open and play.

![Game](https://img.shields.io/badge/Game-Arcade%20Shooter-00ff88?style=flat-square&labelColor=0a0a0f)
![Players](https://img.shields.io/badge/Players-1%20%7C%202%20Local%20%7C%20Online-ffcc00?style=flat-square&labelColor=0a0a0f)
![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20Mobile-ff88ff?style=flat-square&labelColor=0a0a0f)
![License](https://img.shields.io/badge/License-MIT-00aaff?style=flat-square&labelColor=0a0a0f)

## 🎮 Play Now
👉 **[https://eswarsamanthula.github.io/pixel-blaster-dx/](https://eswarsamanthula.github.io/pixel-blaster-dx/)**

---

## 🕹 Controls

### PC
| Action | Player 1 | Player 2 |
|--------|----------|----------|
| Move   | `← →`    | `A D`    |
| Shoot  | `Space`  | `W`      |
| Bomb   | `X`      | `E`      |
| Pause  | `P` / `ESC` | —     |
| Chat   | `Enter` (online) | — |

### Mobile
| Action | Control |
|--------|---------|
| Move   | Virtual joystick (left) |
| Shoot  | 🔥 FIRE button (right) |
| Bomb   | 💣 button |
| Autofire | A button — tap to toggle ON/OFF |
| Pause  | ⏸ button |

---

## ✨ Features

- 🛸 **3 enemy types + Boss** — boss spawns every 5 waves with 3 attack patterns
- 💥 **4 power-ups** — Shield 🛡, Rapid Fire ⚡, Triple Shot, Bomb 💣
- 🎯 **Combo system** — kill streak = x2 / x3 score multiplier
- 🌊 **Wave formations** — grid, V-shape, diamond
- 🤿 **Dive attacks** — enemies break formation and kamikaze
- 🔊 **Chiptune music + SFX** — Web Audio API, fully procedural
- 📱 **Mobile** — virtual joystick + touch buttons + autofire
- 🌐 **Online multiplayer** — P2P via room code, no server needed
- 👥 **Local 2-player** — same keyboard co-op
- 🏆 **Leaderboard** — top 5 scores saved locally
- ⚙️ **4 difficulties** — Easy / Normal / Hard / Insane 💀
- 💬 **In-game chat** — online mode only
- ⏸ **Pause** — `P` / `ESC` on PC, ⏸ button on mobile
- 🎨 **Retro pixel art** — CRT scanline effect, scrolling stars, pixel sprites

---

## 🌐 How to Play Online

1. **Player 1** clicks **📡 HOST** → gets a 5-letter room code
2. Share code with **Player 2** (text, WhatsApp, anything)
3. **Player 2** clicks **🔗 JOIN** → enters code → connects
4. Countdown 3-2-1 → game starts on both devices simultaneously
5. No account, no server, no download needed

---

## 🛠 Tech Stack

| Tech | Use |
|------|-----|
| HTML5 Canvas | Pixel-art rendering |
| Web Audio API | Procedural chiptune music & SFX |
| PeerJS (WebRTC) | P2P online multiplayer |
| CSS variables | Full theme system |
| localStorage | Hi-score & leaderboard |

---

## 📁 Structure

```
pixel-blaster-dx/
├── index.html    ← entire game (single file, ~1800 lines)
└── README.md
```

---

## 🧑‍💻 Run Locally

```bash
git clone https://github.com/eswarsamanthula/pixel-blaster-dx.git
cd pixel-blaster-dx

# Open directly — no server needed
start index.html      # Windows
open index.html       # Mac
xdg-open index.html   # Linux
```

---

## 📄 License

MIT — free to use, modify, and share.