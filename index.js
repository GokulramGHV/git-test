var fileNames = [{name: `sample.md`, content:`## Hello world`},{name: `nithin.md`, content:`Hi i am nithin balaji. Student at SSN. I love coding. I am in my third year

![img](https://repository-images.githubusercontent.com/373582499/876f9800-c4be-11eb-9111-ecf555718c39)
`},] 

var fileNames = [{name: `sample.md`, content:`## Hello world`},{name: `nithin.md`, content:`Hi i am nithin balaji. Student at SSN. I love coding. I am in my third year

![img](https://repository-images.githubusercontent.com/373582499/876f9800-c4be-11eb-9111-ecf555718c39)
`},] 

var fileNames = [{name: `sample.md`, content:`## Hello world`},{name: `nithin.md`, content:`Hi i am nithin balaji. Student at SSN. I love coding. I am in my third year

[!img](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.healthcareitnews.com%2Fnews%2Fopen-source-ai-voice-assistant-takes-aim-amazon-and-google&psig=AOvVaw3ELE42HUG-US2jhLprUTz0&ust=1669439146981000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIiP-M3HyPsCFQAAAAAdAAAAABAD)`},] 

var fileNames = [{name: `sample.md`, content:`## Hello world`},{name: `nithin.md`, content:`Hi i am nithin balaji. Student at SSN. I love coding. I am in my third year

[!img](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.healthcareitnews.com%2Fnews%2Fopen-source-ai-voice-assistant-takes-aim-amazon-and-google&psig=AOvVaw3ELE42HUG-US2jhLprUTz0&ust=1669439146981000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIiP-M3HyPsCFQAAAAAdAAAAABAD)`},] 

var fileNames = [{name: `nithin.md`, content:`Hi i am nithin balaji. Student at SSN. I love coding. I am in my third year

[!img](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.healthcareitnews.com%2Fnews%2Fopen-source-ai-voice-assistant-takes-aim-amazon-and-google&psig=AOvVaw3ELE42HUG-US2jhLprUTz0&ust=1669439146981000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIiP-M3HyPsCFQAAAAAdAAAAABAD)`},{name: `sample.md`, content:`## Hello world`},] 

var converter = new showdown.Converter();
for (let i = 0; i < fileNames.length; i++) {
  fileNames[i].content = converter.makeHtml(fileNames[i].content);
}

const { useState, useEffect } = React;
const ReactAppFromCDN = () => {
  const [showWindow, setShowWindow] = useState(false);
  const [windowTitle, setWindowTitle] = useState('');
  const [windowContent, setWindowContent] = useState('');
  return (
    <div>
      <img
        src="https://media.idownloadblog.com/wp-content/uploads/2021/06/macOS-Monterey-wallpaper-Light-2048x2048.jpg"
        alt="wallpaper"
        className="absolute top-0 left-0 h-screen w-full"
      />
      <div className="overflow-hidden h-screen w-full relative">
        <div
          className="mx-10 my-10 flex flex-col flex-wrap gap-10 h-screen w-fit"
          id="files"
        >
          {fileNames.map((file, i) => {
            return (
              <button
                className="focus:bg-blue-500/50 p-3 rounded-md flex flex-col justify-center items-center w-fit"
                key={i}
                id={`file${i}`}
                onClick={() => {
                  setShowWindow(true);
                  setWindowTitle(file.name);
                  setWindowContent(file.content);
                }}
              >
                <img
                  src="https://cdn.neowin.com/forum/uploads/monthly_04_2013/post-360412-0-09676400-1365986245.png"
                  width="60px"
                />
                <div
                  className="text-white text-sm text-shadow-lg w-16 overflow-hidden text-ellipsis"
                  title={file.name}
                >
                  {file.name}
                </div>
              </button>
            );
          })}
        </div>
        {showWindow && (
          <div
            id="parent"
            className="z-50 min-w-[300px] max-w-[600px] border-[1px] border-[#0000001F] rounded-xl bg-[#F6F6F6] shadow-filter absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          >
            <div className="w-full h-7 bg-white rounded-t-xl border-b-[1px] border-[#0000001F] relative flex items-center justify-center">
              <div className="flex gap-2 items-center h-full absolute left-2">
                <button
                  id="div1"
                  onClick={() => {
                    setShowWindow(false);
                  }}
                  className="rounded-full h-3.5 w-3.5 bg-[#FF5E57] hover:bg-red-600"
                ></button>
                <button
                  onClick={() => {
                    setShowWindow(false);
                  }}
                  className="rounded-full h-3.5 w-3.5 bg-[#FFBB2E] hover:bg-yellow-600"
                ></button>
                <div className="rounded-full h-3.5 w-3.5 bg-[#38C149]"></div>
              </div>
              <div className="font-medium text-[14px]">{windowTitle}</div>
            </div>
            <div
              className="m-4 prose lg:prose-xl"
              dangerouslySetInnerHTML={{ __html: windowContent }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

ReactDOM.render(<ReactAppFromCDN />, document.querySelector('#root'));
