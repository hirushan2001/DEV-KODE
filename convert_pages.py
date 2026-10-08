import bs4
import re
import os
import urllib.parse

def clean_style(style_str):
    styles = []
    for pair in style_str.split(';'):
        if ':' in pair:
            k, v = pair.split(':', 1)
            k = k.strip()
            v = v.strip()
            parts = k.split('-')
            camel_k = parts[0] + ''.join(x.title() for x in parts[1:])
            # Escape quotes in style strings
            v = v.replace('"', "'")
            styles.append(f'{camel_k}: "{v}"')
    return 'style={{' + ', '.join(styles) + '}}'

def html_to_jsx(html_str):
    # Replace next image URLs first
    html_str = re.sub(r'/_next/image\?url=([^&]+)&amp;[^\s"\']+', lambda m: urllib.parse.unquote(m.group(1)), html_str)
    html_str = re.sub(r'/_next/image\?url=([^&]+)&[^\s"\']+', lambda m: urllib.parse.unquote(m.group(1)), html_str)

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
    html_str = html_str.replace('aria-controls=', 'ariaControls=')
    html_str = html_str.replace('aria-expanded=', 'ariaExpanded=')
    html_str = html_str.replace('aria-hidden=', 'ariaHidden=')
    html_str = html_str.replace('autocomplete=', 'autoComplete=')

    # Self-closing tags
    html_str = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', html_str)
    html_str = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', html_str)
    html_str = re.sub(r'<br([^>]*?)(?<!/)>', r'<br\1 />', html_str)
    html_str = re.sub(r'<path([^>]*?)(?<!/)>', r'<path\1 />', html_str)
    html_str = re.sub(r'<circle([^>]*?)(?<!/)>', r'<circle\1 />', html_str)
    html_str = re.sub(r'<rect([^>]*?)(?<!/)>', r'<rect\1 />', html_str)
    html_str = re.sub(r'<hr([^>]*?)(?<!/)>', r'<hr\1 />', html_str)
    
    # Remove Next js hidden comments / hydration markers
    html_str = html_str.replace('<!--$', '').replace('<!--/$-->', '').replace('<!-- -->', '')

    # Convert style="..." to style={{...}}
    html_str = re.sub(r'style="([^"]*)"', lambda m: clean_style(m.group(1)), html_str)

    # Convert href links to react-router Links if internal
    html_str = re.sub(r'<a([^>]*?)href="(/editing-fundamentals|/color-grading|/music-and-sound|/typography)"([^>]*?)>', r'<Link\1to="\2"\3>', html_str)
    html_str = re.sub(r'</a>', r'</Link>', html_str)

    return html_str

os.makedirs('src/pages', exist_ok=True)

files = [
    ('editing-fundamentals', 'EditingFundamentalsPage'),
    ('color-grading', 'ColorGradingPage'),
    ('music-and-sound', 'MusicAndSoundPage'),
    ('typography', 'TypographyPage')
]

for file_name, comp_name in files:
    path = f'src/extracted_pages/{file_name}.html'
    with open(path, 'r', encoding='utf-8') as file:
        raw_html = file.read()
    
    soup = bs4.BeautifulSoup(raw_html, 'html.parser')
    
    # Extract main content inside body (excluding header & next script elements)
    body = soup.find('body')
    if not body:
        continue
        
    # Get main container inside body (after header if header exists)
    header = body.find('header')
    if header:
        header.decompose()
        
    target_div = body.find('div', class_=re.compile(r'relative'))
    if not target_div:
        target_div = body.find('div')
        
    jsx_content = html_to_jsx(str(target_div))
    
    file_code = f'''import React, {{ useEffect }} from 'react';
import {{ Link }} from 'react-router-dom';
import Header from '../components/Header';
import FooterSection from '../components/FooterSection';

export default function {comp_name}() {{
  useEffect(() => {{
    window.scrollTo(0, 0);
  }}, []);

  return (
    <div className="min-h-full flex flex-col bg-neutral-950 text-white font-sans antialiased select-none">
      <Header />
      {jsx_content}
      <FooterSection />
    </div>
  );
}}
'''
    with open(f'src/pages/{comp_name}.jsx', 'w', encoding='utf-8') as out:
        out.write(file_code)
    print(f'Generated src/pages/{comp_name}.jsx ({len(file_code)} bytes)')
