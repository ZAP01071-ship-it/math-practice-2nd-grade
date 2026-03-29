import re

with open('script.js', 'r', encoding='utf-8') as f:
    c = f.read()

# Fix the missing comma after description
# Before:        description: "..."\n        successSFX:
# After:         description: "...",\n        successSFX:
c = re.sub(r'(description:\s*"[^"]+")(\s*successSFX:)', r'\1,\2', c)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(c)

print('Fixed commas!')
