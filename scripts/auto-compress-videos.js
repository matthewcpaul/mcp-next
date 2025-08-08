const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const ORIGINALS_DIR = path.join(__dirname, '../public/videos/originals');
const COMPRESSED_DIR = path.join(__dirname, '../public/videos/compressed');

// Ensure compressed directory exists
if (!fs.existsSync(COMPRESSED_DIR)) {
  fs.mkdirSync(COMPRESSED_DIR, { recursive: true });
}

function compressVideo(originalPath, compressedPath) {
  return new Promise((resolve, reject) => {
    const command = `ffmpeg -i "${originalPath}" -vcodec libx264 -crf 28 -preset slow -vf "scale=iw:ih" -movflags +faststart -an "${compressedPath}" -y`;
    
    console.log(`🔄 Compressing: ${path.basename(originalPath)}`);
    
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`❌ Failed to compress ${path.basename(originalPath)}:`, error.message);
        reject(error);
        return;
      }
      
      // Get file sizes for reporting
      const originalStats = fs.statSync(originalPath);
      const compressedStats = fs.statSync(compressedPath);
      const originalSize = (originalStats.size / (1024 * 1024)).toFixed(1);
      const compressedSize = (compressedStats.size / (1024 * 1024)).toFixed(1);
      const savings = Math.round((1 - compressedStats.size / originalStats.size) * 100);
      
      console.log(`✅ ${path.basename(originalPath)}: ${originalSize}MB → ${compressedSize}MB (${savings}% savings)`);
      resolve();
    });
  });
}

async function processVideos() {
  console.log('🎬 Auto-compressing videos...');
  console.log(`📁 Originals: ${ORIGINALS_DIR}`);
  console.log(`📁 Compressed: ${COMPRESSED_DIR}\n`);
  
  if (!fs.existsSync(ORIGINALS_DIR)) {
    console.log('⚠️  Originals directory not found. Creating it...');
    fs.mkdirSync(ORIGINALS_DIR, { recursive: true });
    console.log('💡 Add your original videos to: public/videos/originals/');
    return;
  }
  
  const videoFiles = fs.readdirSync(ORIGINALS_DIR).filter(file => file.endsWith('.mp4'));
  
  if (videoFiles.length === 0) {
    console.log('📝 No MP4 files found in originals directory.');
    console.log('💡 Add videos to public/videos/originals/ to compress them.');
    return;
  }
  
  let processed = 0;
  let skipped = 0;
  
  for (const videoFile of videoFiles) {
    const originalPath = path.join(ORIGINALS_DIR, videoFile);
    const compressedPath = path.join(COMPRESSED_DIR, videoFile);
    
    // Check if compressed version already exists and is newer
    if (fs.existsSync(compressedPath)) {
      const originalStat = fs.statSync(originalPath);
      const compressedStat = fs.statSync(compressedPath);
      
      if (compressedStat.mtime > originalStat.mtime) {
        console.log(`⏭️  Skipping ${videoFile} - already compressed and up to date`);
        skipped++;
        continue;
      }
    }
    
    try {
      await compressVideo(originalPath, compressedPath);
      processed++;
    } catch (error) {
      console.error(`❌ Error processing ${videoFile}`);
    }
  }
  
  console.log(`\n🎉 Compression complete!`);
  console.log(`   • Processed: ${processed} videos`);
  console.log(`   • Skipped: ${skipped} (already up to date)`);
  console.log(`   • Total videos: ${videoFiles.length}`);
  
  if (processed > 0) {
    console.log(`\n💡 Your compressed videos are ready at: ${COMPRESSED_DIR}`);
    console.log(`🚀 Update your page.js to use: /videos/compressed/filename.mp4`);
  }
}

processVideos().catch(console.error);