# Meme Generator 🎭

A modern, feature-rich meme generator built with React that allows users to create, customize, and share memes easily.

## Features ✨

- **Text Customization**
  - Adjustable text size
  - Custom text colors
  - Multiple font options
  - Separate controls for top and bottom text

- **Meme History**
  - Saves last 5 created memes
  - Quick access to previous creations
  - Visual preview with hover effects
  - One-click restoration

- **Download & Share**
  - Download memes as PNG files
  - Share via Web Share API (mobile)
  - Copy to clipboard fallback
  - High-quality image export

- **Modern UI/UX**
  - Responsive design
  - Smooth animations
  - Loading states
  - Error handling
  - Accessibility features

## Tech Stack 🛠

- React
- CSS3 (with CSS Variables)
- HTML5 Canvas (for image processing)
- Web Share API
- Error Boundaries
- PropTypes for type checking

## Getting Started 🚀

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/meme-generator.git
cd meme-generator
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage 📝

1. **Creating a Meme**
   - Enter top and bottom text
   - Click "Get a new meme image" to change the background
   - Customize text style using the controls
   - Download or share your creation

2. **Text Customization**
   - Use the sliders to adjust text size
   - Pick colors using the color picker
   - Select from different font options
   - Customize top and bottom text independently

3. **Saving & Sharing**
   - Your last 5 memes are automatically saved
   - Click on a saved meme to restore it
   - Download memes as PNG files
   - Share directly to social media (on supported devices)

## Project Structure 📁

```
meme-generator/
├── components/
│   ├── Header.jsx
│   ├── Main.jsx
│   ├── MemeForm.jsx
│   ├── MemeDisplay.jsx
│   ├── TextCustomizer.jsx
│   ├── MemeHistory.jsx
│   └── ErrorBoundary.jsx
├── hooks/
│   └── useMeme.js
├── images/
│   └── troll-face.png
├── App.jsx
├── index.jsx
└── index.css
```

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Error Handling 🛡

The app includes comprehensive error handling:
- Error boundaries for React errors
- Image loading error handling
- API error handling
- User-friendly error messages
- Recovery options

## Browser Support 🌐

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- Meme images provided by [Imgflip API](https://imgflip.com/api)
- Icons from [Emoji One](https://www.emojione.com/)
- Fonts from Google Fonts

## Contact 📧

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/meme-generator](https://github.com/yourusername/meme-generator)