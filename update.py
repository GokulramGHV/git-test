from os import scandir

UPDATING_MD_FILE = "README.md"

files = []

for obj in scandir("intros/"):
    if not obj.is_dir():
        files.append(obj.name)

f = open("README.md", 'w')

write_str = "# List of people who contributed: \n"

for file in files:
    write_str += f"- ### [{file[:len(file) - 3]}](intros/{file})\n"
f.write(write_str)
f.close()