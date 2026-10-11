import urllib.request
from PIL import Image
import io

base = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLhtVb5nfKfa7J3XNNKBW0kzD1JFS_D0Y-chp-8rUg5j8ydAGTbrnVctDJ7l4caxOQL2iCmGLEodKkvr7FQS1HsujkQ7ZzeS_JeMvp89ygUvv9W5xDRv0s_IAT1glfsi_jbOTWIz1CMvH7DM1X4bb1NhMmgx9t1T7grCrZXsREQ3ZoPNLEJdd5xgfCKTqkXN4vsa2GL7NvFDXluHHezesWJalYTIDxCdAhcCZzNvPgL5J3IL-iAdg-xQ'

for suffix in ['', '=s1024', '=s0', '=w1024-h1024']:
    u = base + suffix
    try:
        req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as resp:
            data = resp.read()
            im = Image.open(io.BytesIO(data))
            print(f'Suffix "{suffix}": size = {im.size}, bytes = {len(data)}')
    except Exception as e:
        print(f'Suffix "{suffix}": error = {e}')
