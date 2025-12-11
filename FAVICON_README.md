# uGrowz Favicon Setup

This project includes automated favicon generation from the original uGrowz SVG logo.

## Generated Files

The following favicon files are created in the `public/` directory:

- `favicon.svg` - Modern SVG favicon (32x32)
- `favicon.ico` - Traditional ICO format (32x32)
- `favicon-16x16.png` - 16x16 PNG
- `favicon-32x32.png` - 32x32 PNG
- `apple-touch-icon.png` - 180x180 PNG for iOS

## How to Generate Favicons

### Option 1: Automatic Generation (Recommended)

1. Install dependencies:
```bash
npm install
```

2. Run the favicon generation script:
```bash
npm run favicon
```

This will automatically convert the SVG to all required favicon formats.

### Option 2: Manual Generation

If you prefer to use external tools:

1. Use an online SVG to ICO converter (like favicon.io, realfavicongenerator.net)
2. Upload the `public/favicon.svg` file
3. Download the generated favicon files and replace the ones in `public/`

### Option 3: Using ImageMagick (Advanced)

If you have ImageMagick installed:

```bash
# Install canvas dependency first
npm install canvas

# Run the conversion script
node convert-favicon.js
```

## Original SVG Source

The favicon is based on `/Users/vishnusharma/Downloads/ugrowz-favicon.svg` and includes:
- Blue circular element (#273D5D)
- Green square element (#68C721)
- Clean, professional design matching the uGrowz brand

## Browser Support

- Modern browsers: SVG favicon (best quality)
- Older browsers: ICO and PNG fallbacks
- Mobile devices: Apple touch icon for iOS home screen

## HTML Implementation

The favicons are properly linked in `index.html` with:
- SVG favicon for modern browsers
- ICO fallback for older browsers
- Multiple PNG sizes for different contexts
- Apple touch icon for iOS devices