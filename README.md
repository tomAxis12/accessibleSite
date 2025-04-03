# Accessible Website Template with TailwindCSS

This project demonstrates a modern, accessible website template built with HTML and TailwindCSS. The template includes common components that follow Web Content Accessibility Guidelines (WCAG) best practices.

## Accessibility Features

### General Features

- **Skip to main content link**: Allows keyboard users to bypass navigation menus
- **Semantic HTML**: Proper use of landmarks, headings, lists, and other semantic elements
- **Keyboard accessibility**: All interactive elements are accessible via keyboard
- **Focus management**: Visible focus indicators for all interactive elements
- **ARIA attributes**: Used appropriately to enhance accessibility when needed
- **Color contrast**: Sufficient contrast ratios for text and visual elements
- **Responsive design**: Works on various screen sizes and devices
- **Reduced motion support**: Respects user preference for reduced motion
- **High contrast mode support**: Compatible with Windows High Contrast Mode

### Navigation

- **Accessible mobile menu**: Properly labeled with ARIA attributes
- **Keyboard support**: Menu can be navigated and operated using keyboard
- **Current page indication**: Uses `aria-current` to indicate current page
- **Escape key support**: Mobile menu can be closed with Escape key

### Cards

- **Semantic structure**: Uses proper heading hierarchy
- **Image alternatives**: All images have meaningful alt text
- **Focus handling**: Card links receive focus and have visible focus indicators
- **Readable text**: Sufficient contrast and size for readability

### Form

- **Form validation**: Accessible error messaging with error summary
- **Required fields**: Clearly labeled with aria-required attribute
- **Field descriptions**: Uses aria-describedby to associate hints with fields
- **Grouped inputs**: Uses fieldset and legend for logical grouping
- **Labels**: All form controls have properly associated labels
- **Error notification**: Error summary jumps to errors and summarizes them
- **Success feedback**: Clear success message after form submission

## Component Structure

- `index.html`: Main page structure with component placeholders
- `css/styles.css`: Custom CSS styles beyond TailwindCSS
- `components/`: Individual accessible components
  - `navigation.html`: Accessible main navigation
  - `cards.html`: Accessible card components
  - `form.html`: Accessible form component
- `js/main.js`: JavaScript for component functionality and accessibility enhancements

## Usage

This template can be used as a starting point for creating accessible websites. Simply:

1. Clone or download the repository
2. Customize the HTML, CSS, and JavaScript as needed
3. Replace placeholders with your actual content
4. Deploy to your preferred hosting service

## Learning Resources

For more information about web accessibility:

- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [MDN Web Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [A11y Project](https://www.a11yproject.com/)

## License

MIT License
# accessibleSite
