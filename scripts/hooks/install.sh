#!/bin/sh
cd "$(dirname "$0")/../.." && chmod +x scripts/hooks/pre-commit scripts/watch.sh && git config core.hooksPath scripts/hooks && echo "pre-commit hook installed"
