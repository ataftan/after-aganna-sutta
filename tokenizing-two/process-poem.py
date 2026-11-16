
import json
import nltk
from nltk.tokenize import word_tokenize

# Download tokenizer data
nltk.download("punkt_tab", quiet=True)

def tokenize_entry(text):
    tokens = word_tokenize(text)

    return {
        "original": text,
        "words": tokens,
        "characters": list(text),
        "punctuation": [
            char for char in text
            if not char.isalnum() and not char.isspace()
        ]
    }

# Read poem.txt
with open("poem.txt", "r", encoding="utf-8") as file:
    lines = file.readlines()

data = {}
current_section = None
current_bank = None

for raw_line in lines:
    line = raw_line.rstrip("\r\n")
    stripped = line.strip()

    if not stripped:
        continue

    # if stripped.startswith("[") and stripped.endswith("]"):
    #     current_section = stripped[1:-1].lower()
    #     data[current_section] = {}
    #     current_bank = None
    #     continue

    if stripped.startswith("[") and stripped.endswith("]"):
        current_section = stripped[1:-1].lower()

        if current_section == "fixed lines":
            data[current_section] = []
        else:
            data[current_section] = {}

        current_bank = None
        continue

    if stripped.endswith(":"):
        current_bank = stripped[:-1]
        data[current_section][current_bank] = []
        continue

    # if current_section and current_bank:
    #     data[current_section][current_bank].append(
    #         tokenize_entry(line)
    #     )
    if current_section == "fixed lines":
        data[current_section].append(tokenize_entry(line))

    elif current_section and current_bank:
        data[current_section][current_bank].append(
            tokenize_entry(line)
    )

# Export JSON
with open("tokens.json", "w", encoding="utf-8") as file:
    json.dump(data, file, ensure_ascii=False, indent=2)

print("Done! Created tokens.json")
