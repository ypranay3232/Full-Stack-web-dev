# 📝 Dev Log: CSS Layout Fixes

**Project:** Food Order App (Day 23)  
**Issue:** Navigation items clustering in the center instead of pushing to the right.

---

## The Problem
Inside a Flexbox header (`#main-header`), the navigation links (`nav`) were stuck in the middle
or shifting incorrectly, even when using `justify-content: space-between`.

## 🛠 The Fix: "The Power Combo"
To force a **"Left-Logo, Right-Nav"** layout that stays consistent, 
use these three properties together:

### 1. Container Setup
```css
#main-header {
    display: flex;
    width: 100%;             /* Force header to span the full screen */
    box-sizing: border-box;  /* Ensures padding doesn't cause overflow */
    align-items: center;     /* Vertically centers items */
}
```

### 2. The "Magic" Item Fix

#main-header nav {
    margin-left: auto;       /* MAGIC: Consumes all empty space on the left */
}

### 3. Why this works
Property,Why it Matters
width: 100%,"Without this, a flex container might ""shrink-wrap"" its content.
If the container isn't wide, there is no space to distribute."

border-box,"Prevents the ""100% + Padding"" math error.
It keeps the header exactly as wide as the screen."

margin-left: auto,"In Flexbox, auto margins are ""greedy."" Setting it on the left of an
item forces that item to the far right, overriding other alignment settings."