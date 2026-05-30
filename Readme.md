# 🚀 PIXEL BLASTER DX

A retro pixel-art arcade space shooter with online multiplayer, built in pure HTML/CSS/JS.

![Game](https://img.shields.io/badge/Game-Arcade%20Shooter-00ff88?style=flat-square&labelColor=0a0a0f)
![Players](https://img.shields.io/badge/Players-1%20%7C%202%20Local%20%7C%20Online-ffcc00?style=flat-square&labelColor=0a0a0f)
![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20Mobile-ff88ff?style=flat-square&labelColor=0a0a0f)

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

### Mobile
| Action | Control |
|--------|---------|
| Move   | Virtual joystick (left side) |
| Shoot  | 🔥 FIRE button (right side) |
| Bomb   | 💣 button |
| Autofire | A button (toggle) |

---

## ✨ Features

- 🛸 **6 enemy types** — 3 grunt types + boss every 5 waves
- 💥 **4 power-ups** — Shield 🛡, Rapid Fire ⚡, Triple Shot, Bomb 💣
- 🎯 **Combo system** — Kill streak = x2 / x3 score multiplier
- 🌊 **Wave formations** — Grid, V-shape, Diamond
- 🤿 **Dive attacks** — Enemies break formation and kamikaze
- 🔊 **Chiptune music + SFX** — Web Audio API
- 📱 **Mobile support** — Virtual joystick + touch buttons
- 🌐 **Online multiplayer** — P2P via room code (no server needed)
- 👥 **Local 2-player** — Same keyboard
- 🏆 **Leaderboard** — Top 5 scores saved locally
- ⚙️ **4 difficulties** — Easy / Normal / Hard / Insane 💀
- 💬 **In-game chat** — Online mode only

---

## 🚀 How to Play Online (Multiplayer)

1. **Player 1** clicks **📡 HOST** → gets a room code
2. Share the code with **Player 2**
3. **Player 2** clicks **🔗 JOIN** → enters the code
4. Game starts automatically — no server, no account needed

---

## 🛠 Tech Stack

- Pure **HTML5 / CSS3 / JavaScript** — zero dependencies
- **Canvas API** — pixel-art rendering
- **Web Audio API** — procedural chiptune music & SFX
- **PeerJS** — WebRTC P2P multiplayer
- **localStorage** — hi-score & leaderboard

---

## 📁 Project Structure

```
pixel-blaster-dx/
├── index.html       ← entire game (single file)
└── README.md
```

---

## 🧑‍💻 Run Locally

```bash
# Clone the repo
git clone https://github.com/eswarsamanthula/pixel-blaster-dx.git

# Open in browser (no server needed)
cd pixel-blaster-dx
open index.html        # Mac
start index.html       # Windows
xdg-open index.html    # Linux
```

---

## 📄 License
MIT — free to use, modify, and share.