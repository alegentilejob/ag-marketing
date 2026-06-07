const fs = require('fs');
const path = require('path');

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Match the entire GRID block
  const startIdx = content.indexOf('<!-- CARDS GRID -->');
  if (startIdx === -1) return;

  const preContent = content.substring(0, startIdx);
  const gridEndIdx = content.indexOf('</table>\n                  </td>\n                <tr>\n                  <td align="left" style="padding-top:48px;">', startIdx);
  
  if (gridEndIdx === -1) {
    const gridEndIdx2 = content.indexOf('</table>\n                  </td>\n                </tr>\n              </table>', startIdx);
    if (gridEndIdx2 === -1) return;
  }
  
  // It's much easier to just use standard DOM parsing or precise regexes
  // Let's use a simpler approach. We know the 3 cards.
  const regex1 = /<!-- Card 1: .*? -->\s*<td class="card-cell" width="31%" valign="top">\s*<table[^>]+>([\s\S]*?)<\/table>\s*<\/td>/;
  const regex2 = /<!-- Card 2: .*? -->\s*<td class="card-cell" width="31%" valign="top">\s*<table[^>]+>([\s\S]*?)<\/table>\s*<\/td>/;
  const regex3 = /<!-- Card 3: .*? -->\s*<td class="card-cell" width="31%" valign="top">\s*<table[^>]+>([\s\S]*?)<\/table>\s*<\/td>/;

  const m1 = content.match(regex1);
  const m2 = content.match(regex2);
  const m3 = content.match(regex3);

  if (!m1 || !m2 || !m3) {
      console.log("Could not match cards in", filePath);
      return;
  }

  const inner1 = m1[1];
  const inner2 = m2[1];
  const inner3 = m3[1];

  const newGrid = `<!-- CARDS GRID -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td align="left" style="font-size:0;">
                          <!--[if mso]>
                          <table role="presentation" border="0" cellspacing="0" cellpadding="0" width="100%">
                          <tr>
                          <td valign="top" width="31%">
                          <![endif]-->
                          <div class="card-cell" style="display:inline-block; width:100%; max-width:31%; vertical-align:top; min-width:280px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#f5f5f5; border-radius:8px; padding:32px 24px; text-align:left; height:100%; min-height:360px;">
                              ${inner1}
                            </table>
                          </div>
                          <!--[if mso]>
                          </td>
                          <td valign="top" width="3.5%"></td>
                          <td valign="top" width="31%">
                          <![endif]-->
                          <div class="card-spacer" style="display:inline-block; width:3.5%; max-width:3.5%;"></div>
                          <div class="card-cell" style="display:inline-block; width:100%; max-width:31%; vertical-align:top; min-width:280px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#f5f5f5; border-radius:8px; padding:32px 24px; text-align:left; height:100%; min-height:360px;">
                              ${inner2}
                            </table>
                          </div>
                          <!--[if mso]>
                          </td>
                          <td valign="top" width="3.5%"></td>
                          <td valign="top" width="31%">
                          <![endif]-->
                          <div class="card-spacer" style="display:inline-block; width:3.5%; max-width:3.5%;"></div>
                          <div class="card-cell" style="display:inline-block; width:100%; max-width:31%; vertical-align:top; min-width:280px;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color:#f5f5f5; border-radius:8px; padding:32px 24px; text-align:left; height:100%; min-height:360px;">
                              ${inner3}
                            </table>
                          </div>
                          <!--[if mso]>
                          </td>
                          </tr>
                          </table>
                          <![endif]-->
                        </td>
                      </tr>
                    </table>`;

  const replaceRegex = /<!-- CARDS GRID -->[\s\S]*?<!-- Card 3: .*? -->\s*<td class="card-cell" width="31%" valign="top">\s*<table[^>]+>[\s\S]*?<\/table>\s*<\/td>\s*<\/tr>\s*<\/table>/;
  content = content.replace(replaceRegex, newGrid);

  // Update CSS for .card-cell
  const cssRegex = /\.card-cell \{ display: block !important; width: 100% !important; margin-bottom: 24px !important; \}/;
  content = content.replace(cssRegex, ".card-cell { display: block !important; width: 100% !important; max-width: 100% !important; margin-bottom: 24px !important; }");

  fs.writeFileSync(filePath, content, 'utf8');
}

const dir = path.join(__dirname, '../emails');
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.html')) {
    const p = path.join(dir, file);
    updateFile(p);
    console.log("Updated", file);
  }
});
