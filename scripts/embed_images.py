import base64
import re

with open('assets/hero_mockup.png', 'rb') as f:
    hero_b64 = base64.b64encode(f.read()).decode('utf-8')

with open('assets/audits_visual.png', 'rb') as f:
    audit_b64 = base64.b64encode(f.read()).decode('utf-8')

with open('assets/banner.svg', 'rb') as f:
    banner_svg = f.read().decode('utf-8')

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace product-ui-panel with real image Base64 tag
hero_img_tag = f'<img src="data:image/png;base64,{hero_b64}" alt="Borrowed Brain Pro Interface Preview" class="hero-img-b64">'

# Replace audit card with real image Base64 tag
audit_img_tag = f'<img src="data:image/png;base64,{audit_b64}" alt="Failure Audit Case File Preview" class="bento-img-b64">'

# Replace hero panel div
pattern_hero = r'<div class="product-ui-panel">[\s\S]*?</div>\s*</div>\s*</div>\s*</div>'
html = re.sub(pattern_hero, hero_img_tag + '\n      </div>\n    </div>\n  </section>', html)

# Replace audit preview div
pattern_audit = r'<div class="audit-card-preview">[\s\S]*?</div>\s*</div>'
html = re.sub(pattern_audit, audit_img_tag, html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Base64 images embedded cleanly into index.html!")
