# LibreVault - Developer Guide

## 🎨 Design System Quick Reference

### Color Variables
Use these CSS variables in your custom styles:

```css
:root {
  --primary-color: #2c3e50;      /* Dark Blue-Gray */
  --primary-dark: #1a252f;       /* Darker Blue-Gray */
  --secondary-color: #3498db;    /* Sky Blue */
  --accent-color: #e74c3c;       /* Coral Red */
  --success-color: #27ae60;      /* Green */
  --warning-color: #f39c12;      /* Orange */
  --light-bg: #ecf0f1;           /* Light Gray */
  --text-color: #2c3e50;         /* Main Text */
  --border-color: #bdc3c7;       /* Border Gray */
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 4px 15px rgba(0, 0, 0, 0.15);
}
```

---

## 📦 CSS Files Loaded

### 1. **styles.css** - Main Design System
Contains:
- Global styles and typography
- Navigation and footer styling
- Card and button designs
- Form elements
- Tables and pagination
- Alerts and badges
- Responsive design breakpoints

### 2. **animations.css** - Smooth Transitions
Contains:
- Page load animations (fadeIn, slideIn)
- Hover effects
- Button animations
- Form focus states
- Modal animations
- Responsive motion preferences

---

## 🧩 Common Components

### Buttons

```html
<!-- Primary Button -->
<button class="btn btn-primary">Click Me</button>

<!-- Danger Button -->
<button class="btn btn-danger">Delete</button>

<!-- Success Button -->
<button class="btn btn-success">Save</button>
```

**Features:** Gradient backgrounds, smooth hover effects, size variants

---

### Cards

```html
<div class="card">
  <div class="card-header">
    <h5>Card Title</h5>
  </div>
  <div class="card-body">
    <p>Card content goes here</p>
  </div>
</div>
```

**Features:** Shadow depth, hover animation, responsive sizing

---

### Forms

```html
<div class="form-group">
  <label for="email" class="form-label">Email Address</label>
  <input type="email" class="form-control" id="email" placeholder="Enter email">
</div>
```

**Features:** Focus states with blue glow, smooth transitions, proper spacing

---

### Alerts

```html
<!-- Info Alert -->
<div class="alert alert-info">Information message</div>

<!-- Success Alert -->
<div class="alert alert-success">Success message</div>

<!-- Danger Alert -->
<div class="alert alert-danger">Error message</div>

<!-- Warning Alert -->
<div class="alert alert-warning">Warning message</div>
```

---

### Badges

```html
<span class="badge bg-primary">Primary</span>
<span class="badge bg-success">Success</span>
<span class="badge bg-danger">Danger</span>
<span class="badge bg-warning">Warning</span>
<span class="badge bg-info">Info</span>
```

---

### Tables

```html
<table class="table">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
</table>
```

**Features:** Gradient header, hover effects, clean borders

---

### Sections

```html
<h2 class="section-title">Section Title</h2>
```

**Features:** Large, bold text with decorative underline

---

## 📁 Folder Structure

```
views/
├── librevault-templates/
│   └── base-layout.ejs         # Main layout file
├── librevault-components/
│   ├── header.ejs              # Navigation header
│   ├── footer.ejs              # Footer
│   └── admin-sidebar.ejs       # Admin menu
├── librevault-authentication/
│   ├── login.ejs               # Login page
│   └── register.ejs            # Registration page
├── librevault-user-portal/
│   ├── books.ejs               # All books listing
│   ├── search-book.ejs         # Search results
│   ├── books-genre.ejs         # Books by genre
│   ├── profile.ejs             # User profile
│   ├── profile-edit.ejs        # Edit profile
│   ├── cart.ejs                # Shopping cart
│   ├── borrow.ejs              # Borrow books
│   ├── inventory.ejs           # User's borrowed books
│   └── borrow-history.ejs      # Borrowing history
└── librevault-management-portal/
    ├── index.ejs               # Admin dashboard
    ├── books.ejs               # Manage books
    ├── book-add.ejs            # Add new book
    ├── book-detail.ejs         # Book details
    ├── book-update.ejs         # Edit book
    ├── orders.ejs              # Borrow requests
    └── view-users.ejs          # User management
```

---

## 🔄 Updating Controllers

When creating new EJS renders, use the new folder paths:

```javascript
// OLD
res.render('admin/index', { ... })
res.render('customer/profile', { ... })

// NEW
res.render('librevault-management-portal/index', { ... })
res.render('librevault-user-portal/profile', { ... })
```

---

## 🎯 Best Practices

### 1. Use Bootstrap Grid
```html
<div class="container">
  <div class="row">
    <div class="col-md-6 col-lg-4">
      <!-- Responsive columns -->
    </div>
  </div>
</div>
```

### 2. Apply Custom Animations
```html
<!-- Elements automatically animate on load -->
<div class="card">Content</div>

<!-- Use transition utilities -->
<div class="transition-all">Hover for effect</div>
```

### 3. Use Color Variables
```css
.my-element {
  background: var(--secondary-color);
  color: var(--text-color);
  box-shadow: var(--shadow-lg);
}
```

### 4. Maintain Responsive Design
```html
<div class="col-12 col-sm-6 col-md-4 col-lg-3">
  <!-- Responsive on all sizes -->
</div>
```

---

## 🌟 Included Features

✅ **Modern UI/UX**
- Gradient backgrounds
- Smooth transitions
- Professional shadows
- Clean typography

✅ **Responsive Design**
- Mobile-first approach
- Optimized for all devices
- Touch-friendly buttons

✅ **Accessibility**
- ARIA labels
- Proper heading hierarchy
- Color contrast compliance

✅ **Performance**
- Minimal CSS bloat
- Smooth animations
- Optimized for loading

✅ **Customization**
- CSS variables for colors
- Easy to extend
- Well-documented classes

---

## 🚀 Customization Guide

### Change Primary Color
```css
:root {
  --primary-color: #your-color;
}
```

### Add New Button Style
```css
.btn-custom {
  background: linear-gradient(135deg, #color1 0%, #color2 100%);
  border-radius: 8px;
  /* ... more styles ... */
}
```

### Create New Component
```css
.my-component {
  animation: fadeInUp 0.5s ease-out;
  transition: all 0.3s ease;
  box-shadow: var(--shadow);
  border-radius: 12px;
}
```

---

## 📚 Resources

- **Bootstrap Docs:** https://getbootstrap.com/docs/5.0/
- **Bootstrap Icons:** https://icons.getbootstrap.com/
- **CSS Gradients:** https://gradients.dev/

---

## 🐛 Troubleshooting

### Styles Not Applying
- Ensure CSS files are linked in base-layout.ejs
- Check file paths (should start with `/public/css/`)
- Clear browser cache and reload

### Animations Not Working
- Check if animations.css is loaded
- Verify animation names in console
- Test on different browsers

### Responsive Issues
- Use Bootstrap grid classes
- Test with different viewport sizes
- Check media queries in styles.css

---

## 📝 Quick Checklist for New Pages

When creating a new view file:

- [ ] Use correct folder name (librevault-xxx)
- [ ] Include proper HTML structure
- [ ] Add Bootstrap grid classes
- [ ] Use semantic HTML elements
- [ ] Apply appropriate Bootstrap classes
- [ ] Test responsive design
- [ ] Verify all links work
- [ ] Check accessibility (keyboard navigation)
- [ ] Test on mobile devices
- [ ] Verify animations load smoothly

---

## 💡 Tips & Tricks

1. **Use section-title class** for page headers
2. **Apply card class** to content boxes
3. **Use alert classes** for messages
4. **Add btn classes** to buttons
5. **Use badge class** for status indicators
6. **Apply transition-all** for hover effects
7. **Use var(--color)** for theme colors
8. **Test with DevTools** for responsive design

---

**Happy Coding! 🎉**

For more information, refer to FRONTEND_IMPROVEMENTS.md
