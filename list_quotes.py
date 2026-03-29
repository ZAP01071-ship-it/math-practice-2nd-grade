import re
import json

with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

chars = re.findall(r'name:\s*"([^"]+)".*?quotes:\s*(\[[^\]]+\])', text, flags=re.DOTALL)
result = []
for name, quotes_str in chars:
    # Remove brackets and split by comma
    qs = [q.strip(' \n"\',') for q in quotes_str.strip('[]').split(',')]
    # filter empty
    qs = [q for q in qs if q]
    result.append(f"【{name}】\n" + "\n".join([f"  - {q}" for q in qs]))

with open('show_quotes.txt', 'w', encoding='utf-8') as f:
    f.write("\n\n".join(result))

print("Quotes extracted.")
