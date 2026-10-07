#!/usr/bin/env bash
# Rebuild ../index.html (and the config workbook) from the sources in this folder.
# Needs Python 3 with openpyxl:  pip install openpyxl
set -euo pipefail
cd "$(dirname "$0")"
python3 cfg_build.py          # game data -> cfg_default.json
python3 embed.py              # embeds data + translations into script.js
python3 xlsx_build.py ../config/blast-track-config.xlsx
{
  echo '<!doctype html>'; echo '<html lang="zh-CN">'; echo '<head>'
  echo '<meta charset="utf-8">'; echo '<meta name="viewport" content="width=device-width, initial-scale=1">'; echo '<meta name="theme-color" content="#1688a6">'
  sed -n '1,/<\/style>/p' head.html
  echo '</head>'; echo '<body>'
  sed -n '/<\/style>/,$p' head.html | tail -n +2
  cat script.js
  echo '</body>'; echo '</html>'
} > ../index.html
echo "built ../index.html"
