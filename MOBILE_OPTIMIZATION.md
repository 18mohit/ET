# Mobile Optimization Guide - ELEVEN TEN

## Overview
This document outlines mobile-first responsive design best practices implemented across the industrial manufacturing website.

---

## 1. Mobile Font Size Hierarchy

### Heading Sizes (Mobile → Tablet → Desktop)
```
H1 (Hero): text-3xl → text-5xl → text-7xl
H2 (Section): text-2xl → text-3xl → text-5xl
H3 (Cards): text-lg → text-xl → text-2xl
Body: text-sm → text-base → text-lg
Small text: text-xs → text-xs → text-sm
```

### Implementation Pattern
```tailwind
<h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
  Precision Threads
</h1>
```

---

## 2. Responsive Spacing System

### Padding/Margin Scale
- **Mobile**: px-4, py-3 (16px, 12px)
- **Small Screens (640px)**: px-6, py-4 (24px, 16px)
- **Tablet (768px)**: px-8, py-6 (32px, 24px)
- **Desktop (1024px+)**: px-12, py-8 (48px, 32px)

### Section Spacing
- **Mobile**: py-12 (48px vertical)
- **Tablet**: py-16 (64px vertical)
- **Desktop**: py-20 to py-32 (80px-128px vertical)

### Component Spacing
- **Gap between items**: gap-4 (mobile) → gap-6 (tablet) → gap-8 (desktop)
- **Card padding**: p-4 sm:p-6 lg:p-8
- **Margin between elements**: mb-4 sm:mb-6 lg:mb-8

---

## 3. Responsive Grid Layouts

### 6-Column Grid Breakpoints
```tailwind
{/* Mobile: 1 column */}
<div className="grid grid-cols-1 ...">

{/* Tablet: 2 columns */}
sm:grid-cols-2

{/* Desktop: 3 columns */}
lg:grid-cols-3
```

### Implementation Examples
- **Industries Grid**: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
- **Manufacturing Steps**: Full width single column with sidebar image
- **Why Choose Cards**: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3

---

## 4. Touch-Friendly Elements

### Button/Link Sizing
- **Minimum touch target**: 44x44px (Apple HIG standard)
- **Mobile buttons**: px-6 py-3 sm:px-8 sm:py-4
- **Icon size**: w-10 h-10 (mobile) → w-12 h-12 (desktop)

### Spacing Between Clickables
- **Minimum gap**: 8px (tap accuracy)
- **Recommended gap**: 12-16px
- **Mobile menu items**: py-3 sm:py-4 (minimum 48px height)

---

## 5. Image Scaling Strategy

### Responsive Image Sizing
```jsx
<Image
  src="/image.jpg"
  alt="description"
  width={500}
  height={600}
  className="w-full h-auto object-cover"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

### Hero Section
- **Mobile**: min-h-screen with padding py-20 sm:py-0
- **Desktop**: h-screen fixed height
- **Overlay**: bg-black/50 (mobile) for better text contrast

---

## 6. Navigation Optimization

### Navbar Heights
- **Mobile**: h-16 (64px)
- **Tablet+**: h-24 (96px)

### Mobile Menu
- **Item padding**: px-4 py-3 (touch target: 48px)
- **Gap between items**: space-y-3
- **Add border-t separator**: border-t border-border mt-3
- **Font size**: text-sm (12px) for mobile, text-xs uppercase

### Logo Sizing
- **Mobile**: w-8 h-8 (32px)
- **Desktop**: w-10 h-10 (40px)

---

## 7. Card & Container Optimization

### Card Padding Progression
```tailwind
className="p-4 sm:p-6 lg:p-8"
/* Mobile: 16px, Tablet: 24px, Desktop: 32px */
```

### Typography Within Cards
- **Title**: text-lg sm:text-xl lg:text-2xl
- **Description**: text-xs sm:text-sm leading-relaxed
- **Meta text**: text-xs font-light tracking-widest uppercase

### Icon Sizing
- **Mobile**: w-10 h-10
- **Desktop**: w-12 h-12

---

## 8. Flexbox vs Grid Decision

### Use Flexbox For:
- Navigation items (flex items-center gap-*)
- Button groups (flex flex-col sm:flex-row gap-3)
- Card layouts (flex flex-col)
- Inline elements (flex items-center gap-2)

### Use Grid For:
- Multi-column layouts (grid grid-cols-1 sm:grid-cols-2)
- 6+ item layouts
- 2D grid systems (row + column positioning)

---

## 9. Typography Line Heights

### Recommended Line Heights
- **Headings**: leading-tight (1.25)
- **Body text**: leading-relaxed (1.625)
- **Dense text**: leading-snug (1.375)

### Mobile-Specific
- Shorter headings on mobile for space efficiency
- Slightly larger line height on mobile for readability

---

## 10. Breakpoint Usage

### Tailwind Breakpoints
- **Mobile first**: no prefix (< 640px)
- **sm**: 640px (tablets in portrait)
- **md**: 768px (tablets in landscape)
- **lg**: 1024px (desktops)
- **xl**: 1280px (large desktops)

### Recommended Usage Pattern
```tailwind
className="text-sm sm:text-base md:text-lg lg:text-xl"
/* Progressive enhancement from mobile to desktop */
```

---

## 11. CTA & Sticky Elements

### Call-to-Action Buttons
- **Mobile**: Full width with flex-col gap
- **Desktop**: Inline-flex with flex-row gap
- **Height**: py-3 sm:py-4 (minimum 44px)

### Mobile CTA Patterns
```jsx
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
  <button className="inline-flex items-center justify-center ...">
    Action
  </button>
</div>
```

---

## 12. Common Mobile Issues & Fixes

### Issue: Horizontal Overflow
**Fix**: Use px-4 on mobile, px-safe utility class

### Issue: Text Too Large
**Fix**: Use responsive sizing: text-2xl sm:text-3xl md:text-5xl

### Issue: Touch Targets Too Small
**Fix**: Ensure minimum 44px height: py-3 sm:py-4

### Issue: Cards Cramped
**Fix**: Use gap-4 on mobile, gap-8 on desktop

### Issue: Images Distorted
**Fix**: Always use object-cover with proper aspect ratio

---

## 13. Performance Optimization

### Mobile Performance Best Practices
1. **Images**: Use next/image with proper sizes attribute
2. **Fonts**: Load only used weights (400, 700)
3. **Scrolling**: Avoid transform animations on mobile
4. **Touch**: Disable tap highlight with custom color
5. **Layout**: Minimize reflow with fixed dimensions

---

## 14. Accessibility on Mobile

### Touch-Friendly
- Minimum 44x44px interactive elements
- 12px gap minimum between buttons
- Clear focus states for keyboard navigation

### Text Contrast
- Maintain 4.5:1 ratio for body text
- Ensure overlay text readable over images
- Use bg-black/50 minimum on hero sections

### Semantic HTML
- Use proper heading hierarchy (h1, h2, h3)
- Add aria-labels to icon-only buttons
- Use role="navigation" for menus

---

## 15. Testing Checklist

### Mobile Testing
- [ ] All text readable without zooming
- [ ] All buttons/links tappable (44x44px)
- [ ] No horizontal scrolling
- [ ] Images load and display correctly
- [ ] Navigation accessible on small screens
- [ ] Forms easy to use on mobile
- [ ] Test on iOS and Android browsers

### Responsive Testing
- [ ] 375px (iPhone SE)
- [ ] 568px (iPhone 6)
- [ ] 640px (tablets)
- [ ] 768px (iPad)
- [ ] 1024px (desktop)

---

## Implementation Summary

The ELEVEN TEN website uses a **mobile-first approach** with:
- Responsive typography scaling
- Flexible grid layouts (1 → 2 → 3 columns)
- Touch-optimized spacing and buttons
- Adaptive padding and margins
- Proper image sizing strategies
- Accessible touch targets

All components follow the pattern:
```tailwind
className="
  /* Mobile base */
  text-3xl px-4 py-3 gap-4
  /* Tablet */
  sm:text-4xl sm:px-6 sm:gap-6
  /* Desktop */
  lg:text-6xl lg:px-12 lg:gap-8
"
```
