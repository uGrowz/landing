const fs = require('fs');
const path = require('path');

// SVG content from the original favicon
const svgContent = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_41_18)">
<path d="M247.215 101.702C165.99 106.278 101.534 173.59 101.534 255.959C101.534 341.291 170.71 410.467 256.043 410.467C338.413 410.467 405.725 346.012 410.301 264.787H507.587C504.076 401.916 391.812 512.001 253.836 512.001C113.646 512.001 0.000166348 398.356 0 258.167C5.54645e-05 120.192 110.085 7.92816 247.215 4.41699V101.702Z" fill="#273D5D"/>
<path d="M407.276 103.724H307.759C307.207 103.724 306.759 103.277 306.759 102.724V1C306.759 0.447715 307.207 0 307.759 0H511C511.552 0 512 0.447719 512 1V204.242C512 204.794 511.552 205.242 511 205.242H409.276C408.724 205.242 408.276 204.794 408.276 204.242V104.724C408.276 104.172 407.828 103.724 407.276 103.724Z" fill="#68C721" stroke="#68C721"/>
</g>
<defs>
<clipPath id="clip0_41_18">
<rect width="512" height="512" fill="white"/>
</clipPath>
</defs>
</svg>`;

function createFavicons() {
  const publicDir = path.join(__dirname, 'public');

  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Create SVG favicon (works in modern browsers)
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent);
  console.log('✅ Created favicon.svg');

  // Create placeholder files with instructions
  const getPlaceholderContent = (filename) => `# Favicon Placeholder
# This file needs to be replaced with the actual ${filename}
# To generate proper favicons:
# 1. Use an online converter like https://favicon.io/favicon-converter/
# 2. Upload the favicon.svg file from this directory
# 3. Download and replace these placeholder files
# 4. Or install ImageMagick and run: npm install canvas && npm run favicon
`;

  const placeholderContent = getPlaceholderContent('favicon files');

  const files = [
    'favicon.ico',
    'favicon-16x16.png',
    'favicon-32x32.png',
    'apple-touch-icon.png'
  ];

  files.forEach(file => {
    const filePath = path.join(publicDir, file);
    if (!fs.existsSync(filePath) || fs.readFileSync(filePath, 'utf8').startsWith('#')) {
      fs.writeFileSync(filePath, placeholderContent);
      console.log(`📝 Created placeholder ${file}`);
    }
  });

  console.log('\n🎨 Favicon setup complete!');
  console.log('📋 Next steps:');
  console.log('   1. Visit https://favicon.io/favicon-converter/');
  console.log('   2. Upload public/favicon.svg');
  console.log('   3. Download the generated files');
  console.log('   4. Replace the placeholder files in public/');
  console.log('\n   Alternative: Install ImageMagick and run:');
  console.log('   brew install imagemagick && npm install canvas && npm run favicon');
}

function tryImageMagick() {
  try {
    const { execSync } = require('child_process');

    console.log('🔧 Attempting to use ImageMagick...');

    // Create temporary SVG file
    const tempSvg = path.join(__dirname, 'temp-favicon.svg');
    fs.writeFileSync(tempSvg, svgContent);

    // Convert using ImageMagick
    const commands = [
      `convert ${tempSvg} -resize 16x16 public/favicon-16x16.png`,
      `convert ${tempSvg} -resize 32x32 public/favicon-32x32.png`,
      `convert ${tempSvg} -resize 180x180 public/apple-touch-icon.png`,
      `convert public/favicon-32x32.png public/favicon-16x16.png public/favicon.ico`
    ];

    commands.forEach(cmd => {
      try {
        execSync(cmd, { stdio: 'pipe' });
      } catch (error) {
        console.log(`⚠️  Failed to run: ${cmd}`);
      }
    });

    // Clean up temp file
    fs.unlinkSync(tempSvg);

    console.log('✅ Generated favicons using ImageMagick!');
    return true;
  } catch (error) {
    console.log('❌ ImageMagick not available or failed');
    return false;
  }
}

// Main execution
if (require.main === module) {
  console.log('🚀 uGrowz Favicon Generator');
  console.log('============================\n');

  if (!tryImageMagick()) {
    createFavicons();
  }
}

module.exports = { createFavicons };