#!/bin/bash

# Video compression script for Next.js project
# Compresses videos to ~2-5MB while maintaining quality

INPUT_DIR="public/images"
OUTPUT_DIR="public/images/compressed"
BACKUP_DIR="public/images/originals"

# Create directories
mkdir -p "$OUTPUT_DIR"
mkdir -p "$BACKUP_DIR"

# Compression settings for web optimization
# -crf 28: Good quality/size balance (18=high quality, 35=small size)
# -preset slow: Better compression (slower encode)
# -movflags +faststart: Optimize for web streaming

echo "🎬 Starting video compression..."
echo "📁 Processing videos in: $INPUT_DIR"

# Backup originals first
echo "📦 Backing up original videos..."
cp "$INPUT_DIR"/*.mp4 "$BACKUP_DIR"/ 2>/dev/null || echo "⚠️  No MP4 files found to backup"

# Compress each video
for video in "$INPUT_DIR"/*.mp4; do
    if [[ -f "$video" ]]; then
        filename=$(basename "$video" .mp4)
        echo "🔄 Compressing: $filename.mp4"
        
        # Get original size
        original_size=$(du -h "$video" | cut -f1)
        
        # Compress with optimal web settings
        ffmpeg -i "$video" \
            -vcodec libx264 \
            -crf 28 \
            -preset slow \
            -vf "scale=iw:ih" \
            -movflags +faststart \
            -an \
            "$OUTPUT_DIR/${filename}_compressed.mp4" \
            -y > /dev/null 2>&1
        
        if [[ $? -eq 0 ]]; then
            # Get compressed size
            compressed_size=$(du -h "$OUTPUT_DIR/${filename}_compressed.mp4" | cut -f1)
            echo "✅ $filename: $original_size → $compressed_size"
        else
            echo "❌ Failed to compress: $filename.mp4"
        fi
    fi
done

echo ""
echo "🎉 Compression complete!"
echo "📊 Check the results:"
echo "   Original videos: $BACKUP_DIR/"
echo "   Compressed videos: $OUTPUT_DIR/"
echo ""
echo "💡 Next steps:"
echo "   1. Test the compressed videos"
echo "   2. If satisfied, replace originals: ./scripts/replace-videos.sh"
echo "   3. Update your code to use the new filenames if needed"