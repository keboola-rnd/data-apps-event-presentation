#!/bin/bash
# Keboola Data App startup script. Runs once on container start before supervisord.
# No npm/uv install needed — server.cjs uses Node stdlib only.
set -Eeuo pipefail
echo "Keboola Data App · data-apps-event"
echo "Node: $(node -v)"
echo "Repo contents:"
ls -la /app
echo "Presentation HTML size:"
ls -lh /app/deploy/presentation.html || echo "MISSING /app/deploy/presentation.html"
