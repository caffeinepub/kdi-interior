# KDI Interior — AI 3D Room Visualizer

## Current State
A full single-page interior design website with: hero, services, projects gallery, design process, testimonials, cost calculator (3-step HomeLane style with Delhi NCR rates), about, FAQ, and contact form. The calculator gives itemised estimates but has no visual representation.

## Requested Changes (Diff)

### Add
- **AI 3D Room Visualizer section** (new section called "3D Room Designer", accessible via nav) that lets users:
  - Select a room type: Living Room, Bedroom, Kitchen, Office
  - Select a wall-to-wall design style: Modern, Classic, Luxury, Minimalist, Bohemian
  - Select wall color/finish from Berger Paints-inspired palette (10 options)
  - Select flooring type: Wooden Laminate, Marble, Vitrified Tile, Hardwood
  - See an interactive CSS/canvas-based 3D perspective room preview rendered entirely in the browser (no external API) — wall-to-wall view with perspective depth showing left wall, back wall, right wall, ceiling, and floor
  - A "Design Options" panel showing 3 AI-suggested design combos (preset theme bundles) for the selected room type
  - An itemised "Products Used" card listing specific materials, brands, and unit prices for the selected configuration (Berger Paints color, Asian Paints texture, etc.)
  - A live cost estimate tied to the room visualizer showing total estimated cost for the selected design
  - WhatsApp CTA pre-filled with the selected design details

### Modify
- Add "3D Visualizer" to the NAV_LINKS array so users can jump to the section
- The existing CostCalculator section remains unchanged

### Remove
- Nothing removed

## Implementation Plan
1. Add "3D Visualizer" to NAV_LINKS
2. Build `RoomVisualizer` component with:
   - Room selector tabs (Living Room / Bedroom / Kitchen / Office)
   - Style selector (Modern / Classic / Luxury / Minimalist / Bohemian)
   - Wall color palette (10 Berger-inspired swatches with names)
   - Flooring selector (4 options)
   - CSS-based 3D perspective room box using CSS transforms (left/back/right wall planes, floor, ceiling) — no external library needed
   - Animated transitions when changing options
   - "AI Design Suggestions" panel — 3 preset combos per room type rendered as clickable cards
   - "Products Used" breakdown: Berger Paints (name, finish, approx price per litre), flooring brand/type, false ceiling info
   - Live cost estimate panel for the visualizer configuration
   - WhatsApp share button with pre-filled design summary
3. Insert `<RoomVisualizer />` in the `<main>` section between CostCalculator and About
