#!/usr/bin/env bash
set -u
DOMAIN="${1:-https://trazzoapp.online}"
TMP="$PWD/.sitemap_tmp.xml"
echo "==> Descargando sitemap de $DOMAIN/sitemap.xml"
curl -s "$DOMAIN/sitemap.xml" -o "$TMP" || { echo "No se pudo descargar el sitemap"; exit 1; }
TOTAL=$(grep -c "<loc>" "$TMP")
echo "==> $TOTAL URLs en el sitemap. Probando cada una..."
ok=0; fail=0
while IFS= read -r u; do
  code=$(curl -s -o /dev/null -w "%{http_code}" -L "$u")
  if [ "$code" = "200" ]; then
    ok=$((ok+1))
  else
    fail=$((fail+1))
    echo "  $code  $u"
  fi
done < <(grep -oP '(?<=<loc>)[^<]+' "$TMP")
rm -f "$TMP"
echo "---------------------------------------------------"
echo "OK (200): $ok   FALLIDAS (no-200): $fail   TOTAL: $TOTAL"
if [ "$fail" -eq 0 ]; then
  echo "RESULTADO: todas las URLs del sitemap responden 200. Google las indexara sin 404."
else
  echo "RESULTADO: hay $fail URLs rotas arriba. Corregir y volver a hacer deploy."
fi
