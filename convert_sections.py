import bs4
import re
import os

def clean_style(style_str):
    styles = []
    for pair in style_str.split(';'):
        if ':' in pair:
            k, v = pair.split(':', 1)
            k = k.strip()
            v = v.strip()
            # camelCase CSS property names
            parts = k.split('-')
            camel_k = parts[0] + ''.join(x.title() for x in parts[1:])
            styles.append(f'{camel_k}: "{v}"')
    return 'style={{' + ', '.join(styles) + '}}'

def html_to_jsx(html_str):
    # Fix class -> className, etc.
    html_str = html_str.replace('class=', 'className=')
    html_str = html_str.replace('srcset=', 'srcSet=')
    html_str = html_str.replace('viewbox=', 'viewBox=')
    html_str = html_str.replace('stroke-linecap=', 'strokeLinecap=')
    html_str = html_str.replace('stroke-linejoin=', 'strokeLinejoin=')
    html_str = html_str.replace('stroke-width=', 'strokeWidth=')
    html_str = html_str.replace('clip-rule=', 'clipRule=')
    html_str = html_str.replace('fill-rule=', 'fillRule=')
    html_str = html_str.replace('for=', 'htmlFor=')
    html_str = html_str.replace('tabindex=', 'tabIndex=')
    
    # Self-closing tags
    html_str = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', html_str)
    html_str = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', html_str)
    html_str = re.sub(r'<br([^>]*?)(?<!/)>', r'<br\1 />', html_str)
    html_str = re.sub(r'<path([^>]*?)(?<!/)>', r'<path\1 />', html_str)
    html_str = re.sub(r'<hr([^>]*?)(?<!/)>', r'<hr\1 />', html_str)

    # Convert style="..." to style={{...}}
    html_str = re.sub(r'style="([^"]*)"', lambda m: clean_style(m.group(1)), html_str)

    return html_str

for i in range(7):
    path = f'd:\\2026 project\\editor.lk\\src\\section_{i}.html'
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            raw = f.read()
        jsx = html_to_jsx(raw)
        with open(f'd:\\2026 project\\editor.lk\\src\\section_{i}.jsx', 'w', encoding='utf-8') as out:
            out.write(jsx)
        print(f'Converted section_{i}.jsx ({len(jsx)} bytes)')
