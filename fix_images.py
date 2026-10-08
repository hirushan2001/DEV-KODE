import re
import urllib.parse
import os

def fix_image_urls(content):
    def repl(m):
        raw_url = m.group(1)
        decoded = urllib.parse.unquote(raw_url)
        return f'src="{decoded}"'
    
    content = re.sub(r'src="/_next/image\?url=([^"&]+)[^"]*"', repl, content)
    content = re.sub(r'srcSet="[^"]*"', '', content)
    return content

for i in range(7):
    path = f'd:\\2026 project\\editor.lk\\src\\section_{i}.jsx'
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            raw = f.read()
        fixed = fix_image_urls(raw)
        with open(path, 'w', encoding='utf-8') as out:
            out.write(fixed)
        print(f'Fixed image URLs in section_{i}.jsx')
