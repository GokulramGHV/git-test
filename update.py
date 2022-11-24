from os import scandir

UPDATING_MD_FILE = "README.md"

files = []

for obj in scandir("intros/"):
    if not obj.is_dir():
        files.append(obj.name)

f = open("README.md", 'a')

for file in files:
    f.write(f"- [{file[:len(file) - 3]}](intros/{file})\n")

f.close()