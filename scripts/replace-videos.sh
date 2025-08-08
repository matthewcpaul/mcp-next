#!/bin/bash

# Script to replace original videos with compressed versions
# Run this ONLY after testing compressed videos

INPUT_DIR="public/images"
OUTPUT_DIR="public/images/compressed"

echo "🔄 Replacing original videos with compressed versions..."

# Safety check
if [[ ! -d "$OUTPUT_DIR" ]]; then
    echo "❌ Compressed videos directory not found: $OUTPUT_DIR"
    echo "💡 Run ./scripts/compress-videos.sh first"
    exit 1
fi

# Replace each video
for compressed_video in "$OUTPUT_DIR"/*_compressed.mp4; do
    if [[ -f "$compressed_video" ]]; then
        filename=$(basename "$compressed_video" _compressed.mp4)
        original_video="$INPUT_DIR/${filename}.mp4"
        
        if [[ -f "$original_video" ]]; then
            echo "🔄 Replacing: ${filename}.mp4"
            mv "$compressed_video" "$original_video"
        else
            echo "⚠️  Original not found: ${filename}.mp4"
        fi
    fi
done

# Clean up
rm -rf "$OUTPUT_DIR"

echo ""
echo "✅ Video replacement complete!"
echo "🧹 Compressed directory cleaned up"
echo ""
echo "📈 Performance impact:"
echo "   • Faster page loads"
echo "   • Reduced bandwidth usage"  
echo "   • Better mobile experience"