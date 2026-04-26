# Professional Text Animation System

A lightweight, performant text animation system using Tailwind CSS and Intersection Observer API for scroll-triggered fade-in and slide-up effects.

## Features

- **Scroll-Triggered Animations**: Text animates when entering viewport
- **Staggered Delays**: Separate timing for headings, subheadings, and paragraphs
- **Smooth Ease-Out Motion**: Professional fade-in with subtle upward motion
- **Responsive Design**: Works seamlessly on mobile and desktop
- **Performance Optimized**: Uses native Intersection Observer (no external libraries required)
- **Configurable Timing**: Duration options (600ms, 900ms, 1200ms)
- **Reusable Components**: Easy to apply across all pages

## Animation Specifications

- **Duration**: 600ms (fast) | 900ms (normal) | 1200ms (slow)
- **Motion**: 16px upward slide + fade-in
- **Easing**: ease-out
- **Trigger**: Viewport entry (threshold: 0.1)
- **Delay**: Configurable per element (0ms, 100ms, 200ms+)

## Components

### AnimatedHeading
Primary heading with fade-in and slide-up effect.
```jsx
import { AnimatedHeading } from '@/components/animated-text'

<AnimatedHeading delay={0} duration="normal">
  <h1>Your Heading</h1>
</AnimatedHeading>
```

### AnimatedSubheading
Secondary heading with staggered animation.
```jsx
import { AnimatedSubheading } from '@/components/animated-text'

<AnimatedSubheading delay={100} duration="normal">
  <h2>Subheading</h2>
</AnimatedSubheading>
```

### AnimatedParagraph
Body text with delayed animation for hierarchy.
```jsx
import { AnimatedParagraph } from '@/components/animated-text'

<AnimatedParagraph delay={200} duration="normal">
  <p>Paragraph text</p>
</AnimatedParagraph>
```

### AnimatedText
Generic wrapper for any content with custom timing.
```jsx
import { AnimatedText } from '@/components/animated-text'

<AnimatedText delay={150} duration="slow" className="mb-4">
  <div>Custom content</div>
</AnimatedText>
```

## Props

All components accept:
- `children` (ReactNode): Content to animate
- `duration` ('fast' | 'normal' | 'slow'): Animation duration
  - fast: 600ms
  - normal: 900ms
  - slow: 1200ms
- `delay` (number): Delay in milliseconds (0, 100, 200, etc.)
- `threshold` (number): Viewport visibility threshold (0.1 = 10% visible)

## Usage Examples

### Hero Section
```jsx
<AnimatedHeading delay={0} duration="normal">
  <h1 className="text-5xl font-bold">Premium Quality</h1>
</AnimatedHeading>

<AnimatedSubheading delay={100} duration="normal">
  <p className="text-xl">Excellence in every thread</p>
</AnimatedSubheading>

<AnimatedParagraph delay={200} duration="normal">
  <p>Trusted by manufacturers worldwide...</p>
</AnimatedParagraph>
```

### Manufacturing Section
```jsx
<AnimatedHeading delay={0} duration="normal">
  <h2>Manufacturing Process</h2>
</AnimatedHeading>

<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
  {steps.map((step, i) => (
    <AnimatedText key={step.id} delay={i * 100} duration="normal">
      <div className="p-6 border border-border">
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
    </AnimatedText>
  ))}
</div>
```

### About Section
```jsx
<AnimatedHeading delay={0}>
  <h1>About ELEVEN TEN</h1>
</AnimatedHeading>

<AnimatedParagraph delay={200}>
  <p>Founded in 1990...</p>
</AnimatedParagraph>

<AnimatedText delay={300} duration="slow">
  <img src="/about.jpg" alt="Factory" />
</AnimatedText>
```

### Shop Products
```jsx
{products.map((product, i) => (
  <AnimatedText key={product.id} delay={i * 50} duration="fast">
    <div className="p-6 bg-white">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  </AnimatedText>
))}
```

## CSS Classes

### animation-fade-up
Standalone animation class (optional):
```jsx
<div className="animate-fade-up">Content</div>
```

### text-animate
Base animation utility (applied automatically by components):
```jsx
<div className="text-animate">Content</div>
```

## Customization

### Adjust Animation Duration
Edit `components/animated-text.tsx`:
```jsx
const durationMap = {
  fast: 'duration-500',    // Change from 600ms
  normal: 'duration-800',  // Change from 900ms
  slow: 'duration-1500',   // Change from 1200ms
}
```

### Adjust Slide Distance
Edit `app/globals.css`:
```css
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(24px);  /* Change from 16px */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Adjust Viewport Trigger
Edit `hooks/use-scroll-animation.ts`:
```jsx
const observer = new IntersectionObserver(
  [...],
  { threshold: 0.2 }  // Change from 0.1 (20% visible before animating)
)
```

## Performance Tips

1. **Limit Concurrent Animations**: Stagger delays to avoid too many simultaneous animations
2. **Use Fast Duration for Many Elements**: Use 'fast' (600ms) for grids with many items
3. **Browser DevTools**: Use Performance tab to monitor animation impact
4. **Trigger Once**: Animations trigger once by default for optimal performance

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (iOS 15+)
- Fallback: Static text displays without animation if Intersection Observer isn't supported

## Best Practices

1. **Stagger Delays**: Use 100-200ms intervals between related elements
2. **Duration Hierarchy**: Headings (normal), subheadings (normal), paragraphs (normal)
3. **Threshold**: Use 0.1 (10%) for early trigger, 0.3 (30%) for precise trigger
4. **Mobile Consideration**: Animations work on all devices; reduce delay on mobile if needed

## Integration Checklist

- [x] Hook created (`use-scroll-animation.ts`)
- [x] Components created (`animated-text.tsx`)
- [x] CSS utilities added (`globals.css`)
- [ ] Apply to B2B Hero
- [ ] Apply to Manufacturing Process
- [ ] Apply to Industries We Serve
- [ ] Apply to Why Choose Us
- [ ] Apply to About Page
- [ ] Apply to Contact Page
- [ ] Apply to Shop Page
