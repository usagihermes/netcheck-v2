# 🌸 usagi-chan NetCheck v2

A beautiful, privacy-focused network diagnostic tool that runs entirely in your browser.

**v2 Updates:** SJU-inspired design reference (maroon palette, serif headings, structured layout) — no protected university branding assets used. Includes a new free-form data input area for custom scan notes, integrated into CSV and PDF exports.

**[🌐 Launch NetCheck](https://usagihermes.github.io/netcheck-v2)**

## What It Does

NetCheck gives you a comprehensive snapshot of your network and device configuration — instantly, no installation required. Just open the page and it scans everything.

### Network & IP
- **Public IP** (IPv4 + IPv6) via multiple redundant APIs
- **ISP / Organization** and ASN lookup
- **Geolocation** — city, region, country, timezone, coordinates
- **Reverse DNS** hostname

### Connection Details
- **Connection type** — WiFi, Ethernet, Cellular, Bluetooth, etc.
- **Effective connection speed** (4G/3G/2G equivalent)
- **Downlink estimate** and round-trip time (RTT)
- **Data saver** status
- **Speed test** — downloads a test file to estimate Mbps, plus latency

### Device & Browser
- Browser detection (Chrome, Firefox, Safari, Edge, Brave, etc.)
- Operating system
- Device memory and CPU cores
- Screen resolution, viewport size, color depth, pixel ratio
- Touch support and language

### WebRTC Leak Check
- Detects if your local/private IP addresses are exposed via WebRTC

### DNS & Resolution
- DNS resolution time test
- DNS over HTTPS (DoH) detection
- DoH server identification

### Security & Privacy
- HTTPS status
- VPN / proxy heuristic detection
- Tor exit node check
- Cookies, Do Not Track, referrer policy

## Export

All collected data can be exported:
- **📄 PDF** — generates a formatted report entirely in-browser (no external libraries)
- **📊 CSV** — clean spreadsheet with all key-value pairs

## Privacy

- **No cookies.** No tracking. No analytics.
- All data stays in your browser
- No data is sent to any server except the standard IP geolocation APIs used for lookups
- Single HTML file — no build step, no dependencies

## Tech

Pure HTML, CSS, and vanilla JavaScript. Self-contained single file. No frameworks, no build tools, no backend. The PDF generator uses a minimal hand-rolled PDF writer — zero external dependencies.

Built with 💜 by **usagi-chan**
