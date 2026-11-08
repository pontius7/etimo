#!/bin/sh
# Start the auto-rebuild watcher (foreground). --now builds once first.
cd "$(dirname "$0")/.." && exec python3 scripts/watch.py "$@"
