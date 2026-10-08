from bs4 import BeautifulSoup
import re

with open('src/extracted_site.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

print("=== PAGE OVERVIEW ===")
print("Title:", soup.title.string if soup.title else "N/A")

print("\n=== ALL BUTTONS & LINKS WITH CLICK HANDLERS OR MODALS ===")
for el in soup.find_all(['button', 'a']):
    text = el.get_text(strip=True)[:40]
    href = el.get('href', '')
    cls = ' '.join(el.get('class', []))
    if text:
        print(f"[{el.name}] {text} | href: {href} | class: {cls[:50]}")

print("\n=== ALL IMAGES & MEDIA SOURCES ===")
for img in soup.find_all('img'):
    src = img.get('src') or img.get('srcset', '')
    alt = img.get('alt', '')
    print(f"IMG: alt='{alt}' src='{src}'")

print("\n=== KEY STYLES / FRAMER CLASSES / KEYFRAMES / CSS IN HTML ===")
styles = soup.find_all('style')
print(f"Found {len(styles)} style tags")
for i, st in enumerate(styles):
    content = st.string or ''
    if '@keyframes' in content or 'transform' in content or 'sticky' in content or 'scale' in content:
        print(f"Style tag {i} contains animation rules ({len(content)} chars)")
        # find keyframe names
        keyframes = re.findall(r'@keyframes\s+([\w-]+)', content)
        if keyframes:
            print(f"  Keyframes found: {keyframes}")

print("\n=== INTERACTION & ANIMATION CLASSES ===")
all_classes = set()
for tag in soup.find_all(True):
    for c in tag.get('class', []):
        all_classes.add(c)

anim_classes = [c for c in all_classes if any(k in c for k in ['anim', 'motion', 'sticky', 'transition', 'duration', 'ease', 'hover', 'group', 'scale', 'rotate', 'translate', 'fade', 'slide', 'reveal', 'curtain', 'montage', 'card', 'stack'])]
print(f"Found {len(anim_classes)} animation-related classes:")
print(sorted(anim_classes))
