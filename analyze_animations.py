from bs4 import BeautifulSoup
import json

with open('src/extracted_site.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

print("=== ANIMATION & SCROLL ANALYSIS OF EDITOR.LK ===")

# 1. Search for script tags or Framer Motion / GSAP / Lenis signatures
scripts = soup.find_all('script')
print(f"Total script tags: {len(scripts)}")
for s in scripts:
    src = s.get('src', '')
    if 'motion' in src or 'gsap' in src or 'lenis' in src or 'framework' in src or 'app' in src:
        print(f"Script: {src}")

# 2. Key sections and their transition/animation attributes
sections = soup.find_all(['div', 'section', 'header', 'footer'])
for s in sections:
    cls = ' '.join(s.get('class', []))
    did = s.get('id', '')
    if any(term in cls for term in ['sticky', 'fixed', 'will-change', 'transform', 'transition', 'scale', 'opacity', 'translate']):
        if len(cls) > 0:
            print(f"\n<{s.name}> id='{did}'")
            print(f"  class: {cls}")
            if s.get('style'):
                print(f"  style: {s.get('style')}")
