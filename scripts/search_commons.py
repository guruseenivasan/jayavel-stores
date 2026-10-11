import urllib.request
import urllib.parse
import json

def search(q):
    url = f'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch={urllib.parse.quote(q)}&gsrnamespace=6&gsrlimit=8&prop=imageinfo&iiprop=url|size&format=json'
    req = urllib.request.Request(url, headers={'User-Agent': 'JayavelCatalog/1.0 (contact@jayavelstores.in)'})
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode())
        pages = data.get('query', {}).get('pages', {})
        print(f'=== Query: {q} ===')
        for pid, p in pages.items():
            title = p.get('title')
            ii = p.get('imageinfo', [{}])[0]
            url = ii.get('url', '')
            if url.lower().endswith(('.jpg', '.jpeg', '.png')):
                w = ii.get('width')
                h = ii.get('height')
                print(f'{title} | {w}x{h} | {url}')
    except Exception as e:
        print(f'Error for {q}: {e}')

if __name__ == '__main__':
    search('coffee filter brass')
    search('Empty dabarah and tumbler')
    search('Disassembled South Indian coffee filter')
    search('stainless steel handi')
    search('cooking pot stainless steel')
    search('silver thali')
    search('thali brass')
    search('silver diya lamp')
    search('brass diya')
    search('A pure copper water storer pot')
    search('Masala-dabba-stainless-steel')
