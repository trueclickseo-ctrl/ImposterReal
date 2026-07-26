const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/lenovo/.gemini/antigravity/brain/6ebfda78-ecbc-47d4-8bcc-142b0da7c47e';
const destDir = 'd:/Project-ImposterReal/public/images';

// Ensure destination directory exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Image definitions: input files we generated
const images = [
  {
    name: 'hero_friends',
    src: 'hero_friends_1785056299323.jpg',
    type: 'hero',
    sizes: [
      { suffix: '-mobile', width: 480 },
      { suffix: '-tablet', width: 800 },
      { suffix: '-desktop', width: 1200 }
    ]
  },
  {
    name: 'suspicious_person',
    src: 'suspicious_person_1785056317711.jpg',
    type: 'card',
    sizes: [
      { suffix: '-mobile', width: 300 },
      { suffix: '-desktop', width: 600 }
    ]
  },
  {
    name: 'confident_clue',
    src: 'confident_clue_1785056330695.jpg',
    type: 'banner',
    sizes: [
      { suffix: '-mobile', width: 480 },
      { suffix: '-tablet', width: 800 },
      { suffix: '-desktop', width: 1200 }
    ]
  },
  {
    name: 'rules_setup',
    src: 'rules_setup_1785056345897.jpg',
    type: 'banner',
    sizes: [
      { suffix: '-mobile', width: 480 },
      { suffix: '-desktop', width: 900 }
    ]
  },
  {
    name: 'strategy_bluff',
    src: 'strategy_bluff_1785056358914.jpg',
    type: 'banner',
    sizes: [
      { suffix: '-mobile', width: 480 },
      { suffix: '-desktop', width: 900 }
    ]
  },
  {
    name: 'scoring_win',
    src: 'scoring_win_1785056372400.jpg',
    type: 'banner',
    sizes: [
      { suffix: '-mobile', width: 480 },
      { suffix: '-desktop', width: 900 }
    ]
  },
  {
    name: 'faq_qa',
    src: 'faq_qa_1785056385012.jpg',
    type: 'card',
    sizes: [
      { suffix: '-mobile', width: 300 },
      { suffix: '-desktop', width: 500 }
    ]
  }
];

// Compression quality: explicitly set WebP to 78 and JPEG to 80
const webpQual = 78;
const jpegQual = 80;

async function optimize() {
  console.log('Starting image optimization...');
  
  for (const img of images) {
    const srcPath = path.join(srcDir, img.src);
    if (!fs.existsSync(srcPath)) {
      console.error(`Source image not found: ${srcPath}`);
      continue;
    }
    
    console.log(`\nProcessing ${img.name} (${img.type}):`);
    
    for (const size of img.sizes) {
      const baseDestName = `${img.name}${size.suffix}`;
      
      const destWebP = path.join(destDir, `${baseDestName}.webp`);
      const destJPEG = path.join(destDir, `${baseDestName}.jpg`);
      
      // 1. Process and save WebP
      await sharp(srcPath)
        .resize(size.width)
        .webp({ quality: webpQual, effort: 6 })
        .toFile(destWebP);
        
      const webpSizeKB = (fs.statSync(destWebP).size / 1024).toFixed(1);
      console.log(`  -> WebP: ${baseDestName}.webp (${size.width}w) - ${webpSizeKB} KB`);
      
      // 2. Process and save JPEG fallback
      await sharp(srcPath)
        .resize(size.width)
        .jpeg({ quality: jpegQual, progressive: true, mozjpeg: true })
        .toFile(destJPEG);
        
      const jpegSizeKB = (fs.statSync(destJPEG).size / 1024).toFixed(1);
      console.log(`  -> JPEG: ${baseDestName}.jpg (${size.width}w) - ${jpegSizeKB} KB`);
    }
  }
  
  console.log('\nImage optimization finished successfully!');
}

optimize().catch(err => {
  console.error('Error during image optimization:', err);
  process.exit(1);
});
