import { useState } from "react";
import QRCode from "react-qr-code";

function App() {
  const [size, setSize] = useState<number>(300);
  const [url, setUrl] = useState<string>("");
  const [generate, setGenerate] = useState<boolean>();

  const handleSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(Number(event?.target.value));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
    setGenerate(false);
  };

  const handleClick = () => {
    setGenerate(true);
  };

  return (
    <div className="bg-gradient-to-r from-pink-500 h-full pb-[20px] min-h-screen">
      <header className="bg-red-500 w-full">
        <div className="p-2">
          <h1 className="text-white font-bold text-xl">QR-Code Generator</h1>
        </div>
      </header>

      <main className="my-10 ">
        <div className="pt-10 my-10 flex flex-col-reverse md:flex-row">
          <div className="flex items-center justify-center basis-2/3 p-[20px]">
            <div className="w-full rounded-md shadow-sm text-slate-700 bg-[#35323209] p-10 md:w-[70%]">
              <p className="font-bold text-[20px] text-red-500">
                Qr-Code Generator
              </p>
              <p className="mt-3">
                This QR code generator will generate a QR code that a smartphone
                user can scan and visit your website.
              </p>

              <p className="mt-2">
                Enter your Url here to generate your Qr-Code and use it.
              </p>
              <form className="flex flex-col gap-3 mt-3">
                <input
                  type="url"
                  className="w-full p-2 border-[1px] border-slate-700 bg-slate-100"
                  placeholder="Enter URL"
                  onChange={handleChange}
                />
                <select
                  name="size"
                  id="size"
                  value={size}
                  className="w-full p-2 border-[1px] border-slate-700 bg-slate-100"
                  onChange={handleSize}
                >
                  <option value="100">100 x 100</option>
                  <option value="200">200 x 200</option>
                  <option value="300">300 x 300</option>
                  <option value="400">400 x 400</option>
                  <option value="500">500 x 500</option>
                </select>

                <button
                  className="w-full bg-slate-500 text-white p-1 font-semibold"
                  onClick={handleClick}
                  type="button"
                >
                  Generate Qr-Code
                </button>
              </form>
            </div>
          </div>
          <div className="basis-1/3 flex items-center justify-center p-[20px] md:justify-start">
            <img
              src="/image.png"
              alt=""
              className="rounded-full max-w-[250px]"
            />
          </div>
        </div>
        <div className="flex justify-center mt-10 w-full ">
          {generate && url && (
            <QRCode size={size} value={url} fgColor="#334155" />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
