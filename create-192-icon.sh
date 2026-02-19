#!/bin/bash
# Create 192x192 icon from 512x512 using sips (macOS built-in tool)
sips -Z 192 /Users/eladbenarie/DS_EMEA-1/data_generation/hebrew-word-clock/icon-512.png --out /Users/eladbenarie/DS_EMEA-1/data_generation/hebrew-word-clock/icon-192.png
echo "icon-192.png created successfully"
