from os import scandir

fileObjString = "var fileNames = ["

for obj in scandir("intros/"):
    if not obj.is_dir():
        md_file = open(f"intros/{obj.name}")
        fileObjString += f"{{name: `{obj.name}`, content:`{md_file.read()}`}},"
        md_file.close()
fileObjString += "] \n\n"
f = open("index.js", 'r+')
c = f.read()
f.seek(0,0)
f.write(fileObjString + c)
f.close()