import os
import re
import urllib.parse
from bs4 import BeautifulSoup, Tag, Comment

# Dictionary for mapping HTML attribute names to JSX prop names
ATTR_MAP = {
    'class': 'className',
    'for': 'htmlFor',
    'tabindex': 'tabIndex',
    'fill-rule': 'fillRule',
    'clip-rule': 'clipRule',
    'stroke-width': 'strokeWidth',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-miterlimit': 'strokeMiterlimit',
    'srcset': 'srcSet',
    'imagesrcset': 'imageSrcSet',
    'imagesizes': 'imageSizes',
    'fetchpriority': 'fetchPriority',
    'autoplay': 'autoPlay',
    'playsinline': 'playsInline',
    'crossorigin': 'crossOrigin',
    'frameborder': 'frameBorder',
    'allowfullscreen': 'allowFullScreen',
    'nomodule': 'noModule',
    'charset': 'charSet',
    'autocomplete': 'autoComplete',
    'novalidate': 'noValidate',
    'readonly': 'readOnly',
}

VOID_TAGS = {
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 
    'meta', 'param', 'source', 'track', 'wbr', 'path', 'circle', 'rect', 
    'line', 'polygon', 'polyline', 'ellipse', 'use', 'stop'
}

def parse_css_style(style_str):
    """Convert CSS style string to JSX style object format"""
    if not style_str or not style_str.strip():
        return None
    
    props = []
    rules = re.split(r';(?=(?:[^()]*\([^()]*\))*[^()]*$)', style_str)
    
    for rule in rules:
        if not rule.strip():
            continue
        parts = rule.split(':', 1)
        if len(parts) != 2:
            continue
        key, val = parts[0].strip(), parts[1].strip()
        if not key or not val:
            continue
        
        camel_key = re.sub(r'-([a-z])', lambda m: m.group(1).upper(), key)
        
        if val.isdigit() and camel_key not in ['zIndex', 'opacity', 'fontWeight', 'flexGrow', 'flexShrink', 'order']:
            formatted_val = val
        else:
            clean_val = val.replace('"', '\\"')
            formatted_val = f'"{clean_val}"'
            
        props.append(f'{camel_key}: {formatted_val}')
    
    if not props:
        return None
    return '{{ ' + ', '.join(props) + ' }}'

def clean_image_url(url):
    """Clean Next.js image proxy URLs into direct local asset paths"""
    if not url:
        return url
    
    if '/_next/image?url=' in url:
        parsed = urllib.parse.urlparse(url)
        query = urllib.parse.parse_qs(parsed.query)
        if 'url' in query and len(query['url']) > 0:
            extracted_url = query['url'][0]
            url = extracted_url
    
    url = url.replace('/main/2/hero/03d06ee7f7ebf4413bc6fc5b8c6aaf6e.jpg.jpeg', '/main/1/hero/web/Funde-bg.png')
    url = url.replace('/main/2/hero/176c1f1e4ead917c6f7c73bdc99527fb.jpg.jpeg', '/main/1/what-u-learn/master-of-funde.png')
    url = url.replace('/main/2/hero/ae1f104c5bfee9025a9035f3a9d49447.jpg.jpeg', '/main/1/real-projects/motion.png')
    url = url.replace('/main/2/hero/49cfcca5b7d42f4041e4d8a394f4b8c5.jpg.jpeg', '/main/1/footer/camera.png')
    url = url.replace('/main/2/hero/282f9ac0a1f1f98969da9a7613156af7.jpg.jpeg', '/main/1/footer/color.png')
    url = url.replace('/main/2/hero/434d852c4f47767d82a96a99e501c917.jpg.jpeg', '/main/1/footer/effect.png')
    url = url.replace('/main/2/hero/e14557eb7cb892a7cafd42165de721fb.jpg.jpeg', '/main/1/hero/web/color-grad-new.png')
    url = url.replace('/main/2/hero/f69490e74d73c09216092bfcf7b1897e.jpg.jpeg', '/main/1/what-u-learn/master-of-color.png')
    url = url.replace('/main/2/hero/fdccef552fe4a305d5aa734bdf3d1b27.jpg.jpeg', '/main/1/real-projects/before-after.png')
    url = url.replace('/main/2/what-you-will-learn/understand-basics.png', '/main/1/what-u-learn/master-of-funde.png')
    url = url.replace('/main/2/what-you-will-learn/capcut.png', '/main/1/hero/web/Funde-bg.png')
    url = url.replace('/main/2/what-you-will-learn/import-and-organize.png', '/main/1/footer/basic.png')
    url = url.replace('/main/2/side/step-by-step.png', '/main/1/hero/web/Funde-bg.png')
    url = url.replace('/main/2/', '/main/1/')

    return url

def node_to_jsx(node, indent=0):
    """Recursively convert BeautifulSoup node to clean JSX string"""
    pad = ' ' * indent
    
    if isinstance(node, Comment):
        return ''
    
    if isinstance(node, str):
        text = str(node)
        if not text.strip():
            return ''
        text_escaped = text.replace('{', '&#123;').replace('}', '&#125;')
        return f"{text_escaped}"
    
    if not isinstance(node, Tag):
        return ''
    
    tag_name = node.name.lower()
    
    # Transform <a> tags with internal links to <Link>
    is_internal_link = False
    if tag_name == 'a' and 'href' in node.attrs:
        href_val = node.attrs['href']
        if href_val == '/' or (href_val.startswith('/') and not href_val.startswith('/#') and not href_val.startswith('/_next') and not href_val.startswith('/main')):
            is_internal_link = True
            tag_name = 'Link'
    
    attributes = []
    
    for attr_key, attr_val in list(node.attrs.items()):
        if attr_key == 'style':
            jsx_style = parse_css_style(attr_val)
            if jsx_style:
                attributes.append(f'style={jsx_style}')
            continue
        
        # Convert href to "to" for Link tag
        if is_internal_link and attr_key == 'href':
            attributes.append(f'to="{attr_val}"')
            continue
            
        jsx_attr = ATTR_MAP.get(attr_key.lower(), attr_key)
        
        if isinstance(attr_val, list):
            val_str = ' '.join(attr_val)
        else:
            val_str = str(attr_val)
        
        if jsx_attr in ['src', 'href', 'srcSet', 'imageSrcSet']:
            val_str = clean_image_url(val_str)
        
        val_escaped = val_str.replace('"', '&quot;')
        attributes.append(f'{jsx_attr}="{val_escaped}"')
    
    attrs_str = (' ' + ' '.join(attributes)) if attributes else ''
    
    children_jsx = []
    for child in node.children:
        child_str = node_to_jsx(child, indent + 2)
        if child_str:
            children_jsx.append(child_str)
    
    if tag_name in VOID_TAGS and not children_jsx:
        return f"<{tag_name}{attrs_str} />"
    
    inner_content = ''.join(children_jsx)
    return f"<{tag_name}{attrs_str}>{inner_content}</{tag_name}>"

def process_page(page_slug, component_name):
    html_path = f"src/extracted_pages/{page_slug}.html"
    if not os.path.exists(html_path):
        print(f"Error: {html_path} does not exist.")
        return
    
    with open(html_path, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')
    
    main_div = soup.find('div', class_=lambda c: c and 'min-h-screen' in c)
    if not main_div:
        main_div = soup.find('body')

    for header in main_div.find_all('header'):
        header.decompose()
    for footer in main_div.find_all('footer'):
        footer.decompose()

    # Remove trailing fixed curtain / duplicate footer montage overlays from extracted pages
    for div in list(main_div.find_all('div')):
        if not div or not hasattr(div, 'attrs') or div.attrs is None:
            continue
        classes = div.attrs.get('class', [])
        class_str = ' '.join(classes) if isinstance(classes, list) else str(classes)
        if 'fixed' in class_str and ('z-5' in class_str or 'top-0' in class_str) and 'bg-[#08080A]' in class_str:
            div.decompose()

    # Also remove any container wrapping the duplicate fixed curtain
    for div in list(main_div.find_all('div')):
        if not div or not hasattr(div, 'attrs') or div.attrs is None:
            continue
        if div.find(lambda el: el and hasattr(el, 'name') and el.name == 'img' and el.attrs and 'banner-montage-2.png' in str(el.attrs.get('src', ''))):
            div.decompose()

    jsx_content = node_to_jsx(main_div, indent=4)
    
    component_code = f"""import React, {{ useEffect }} from 'react';
import {{ Link }} from 'react-router-dom';

export default function {component_name}() {{
  useEffect(() => {{
    window.scrollTo(0, 0);
  }}, []);

  return (
    {jsx_content}
  );
}}
"""
    
    out_path = f"src/pages/{component_name}.jsx"
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(component_code)
    print(f"Successfully generated {out_path}")

if __name__ == '__main__':
    pages = [
        ('editing-fundamentals', 'EditingFundamentalsPage'),
        ('color-grading', 'ColorGradingPage'),
        ('music-and-sound', 'MusicAndSoundPage'),
        ('typography', 'TypographyPage'),
    ]
    for slug, comp in pages:
        process_page(slug, comp)
