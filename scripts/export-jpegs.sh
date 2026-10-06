#!/bin/bash
set -e

echo "Converting logos to JPEG format..."

# 1. Logo Completa Horizontal - Fundo Branco
convert public/ricks-logo-completo-transparente.png -background white -flatten -quality 95 public/ricks-logo-completo-fundo-branco.jpg
cp public/ricks-logo-completo-fundo-branco.jpg public/ricks-logo-completo-fundo-branco.jpeg
cp public/ricks-logo-completo-fundo-branco.jpg public/logo.jpg
cp public/ricks-logo-completo-fundo-branco.jpg public/logo.jpeg

# 2. Logo Completa Horizontal - Fundo Escuro
convert public/ricks-logo-completo-fundo-escuro.png -background "#0b1329" -flatten -quality 95 public/ricks-logo-completo-fundo-escuro.jpg
cp public/ricks-logo-completo-fundo-escuro.jpg public/ricks-logo-completo-fundo-escuro.jpeg

# 3. Ícone Símbolo R - 2048px (Fundo Branco e Fundo Escuro)
convert public/ricks-logo-icone-2048.png -background white -flatten -quality 95 public/ricks-logo-icone-2048-fundo-branco.jpg
cp public/ricks-logo-icone-2048-fundo-branco.jpg public/ricks-logo-icone-2048-fundo-branco.jpeg
cp public/ricks-logo-icone-2048-fundo-branco.jpg public/ricks-logo-icone-2048.jpg
cp public/ricks-logo-icone-2048-fundo-branco.jpg public/ricks-logo-icone-2048.jpeg

convert public/ricks-logo-icone-2048.png -background "#0b1329" -flatten -quality 95 public/ricks-logo-icone-2048-fundo-escuro.jpg
cp public/ricks-logo-icone-2048-fundo-escuro.jpg public/ricks-logo-icone-2048-fundo-escuro.jpeg

# 4. Ícone Símbolo R - 1024px (Perfil)
convert public/ricks-logo-icone-1024.png -background white -flatten -quality 95 public/ricks-logo-icone-1024.jpg
cp public/ricks-logo-icone-1024.jpg public/ricks-logo-icone-1024.jpeg

convert public/ricks-logo-icone-1024.png -background "#0b1329" -flatten -quality 95 public/ricks-logo-icone-1024-fundo-escuro.jpg
cp public/ricks-logo-icone-1024-fundo-escuro.jpg public/ricks-logo-icone-1024-fundo-escuro.jpeg

# 5. Ícone Símbolo R - 512px (Avatar / WhatsApp)
convert public/ricks-logo-icone-512.png -background white -flatten -quality 95 public/ricks-logo-icone-512.jpg
cp public/ricks-logo-icone-512.jpg public/ricks-logo-icone-512.jpeg
cp public/ricks-logo-icone-512.jpg public/logo-icon.jpg
cp public/ricks-logo-icone-512.jpg public/logo-icon.jpeg

convert public/ricks-logo-icone-512.png -background "#0b1329" -flatten -quality 95 public/ricks-logo-icone-512-fundo-escuro.jpg
cp public/ricks-logo-icone-512-fundo-escuro.jpg public/ricks-logo-icone-512-fundo-escuro.jpeg

echo "All JPEG / JPG files generated successfully!"
ls -lh public/*.jpg public/*.jpeg
