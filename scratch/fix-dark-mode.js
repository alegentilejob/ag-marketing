const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../emails');
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.html')) {
    const p = path.join(dir, file);
    let content = fs.readFileSync(p, 'utf8');

    // 1. Add color-scheme meta tags if not exist
    if (!content.includes('name="color-scheme"')) {
      content = content.replace(
        '<meta name="format-detection" content="telephone=no" />',
        '<meta name="format-detection" content="telephone=no" />\n  <meta name="color-scheme" content="light only">\n  <meta name="supported-color-schemes" content="light only">'
      );
    }

    // 2. Add :root to style
    if (!content.includes(':root {')) {
      content = content.replace(
        '/* RESET */',
        ':root { color-scheme: light only; supported-color-schemes: light only; }\n    /* RESET */'
      );
    }

    // 3. Make sure .card-cell has block and 100% width, adding box-sizing
    const cssRegex = /\.card-cell \{ display: block !important; width: 100% !important; max-width: 100% !important; margin-bottom: 24px !important; \}/g;
    content = content.replace(
      cssRegex,
      ".card-cell { display: block !important; width: 100% !important; max-width: 100% !important; margin-bottom: 24px !important; box-sizing: border-box !important; }"
    );

    // Some email clients ignore width: 100% !important on inline-blocks if not converted to block. It is display block, but let's ensure the table inside is also 100%.
    // The table already has width="100%", so it should stretch.
    // Let's also add dark mode CSS to keep text colors intact as much as possible for clients that support prefers-color-scheme.
    if (!content.includes('@media (prefers-color-scheme: dark)')) {
      content = content.replace(
        '</style>',
        `
    @media (prefers-color-scheme: dark) {
      .email-container, .hero-section-cell { background-color: #ffffff !important; }
      body { background-color: #f5f5f5 !important; }
      h1, h2, h3, p, span { color: inherit !important; }
      .font-primary { color: inherit !important; }
    }
  </style>`
      );
    }

    fs.writeFileSync(p, content, 'utf8');
    console.log("Patched", file);
  }
});
