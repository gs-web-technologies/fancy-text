import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';


function VisitingCardTemplate({ children, issubmitted }) {

  const cardRef = useRef(null);
  const [downloading, setDownloading] = useState(false);
  const [printing, setPrinting] = useState(false);
  // const handelDownload = async () => {
  //   setDownloading(true);
  //   const node = cardRef.current;
  //   if (!node) {
  //     setDownloading(false);
  //     return;
  //   }

  //   try {
  //     const canvas = await html2canvas(node, {
  //       scale: 3,
  //       useCORS: true,
  //       backgroundColor: null,
  //     });

  //     const link = document.createElement('a');
  //     link.download = 'visiting-card.png';
  //     link.href = canvas.toDataURL('image/png');
  //     link.click();

  //   } catch (err) {
  //     console.log("Download Failed:", err);
  //   } finally {
  //     setDownloading(false);
  //   }
  // }

  const handelPrint = async () => {
    setPrinting(true);
    const node = cardRef.current;
    if (!node) {
      setPrinting(false);
      return;
    }

    try {
      const canvas = await html2canvas(node, {
        scale: 3,
        useCORS: true,
        backgroundColor: null,
      });
      const dataUrl = canvas.toDataURL('image/png');

      const win = window.open('', '_blank', 'width=800,height=600');

      win.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { display: flex; align-items: center; justify-content: center; min-height: 100vh; }
          img { max-width: 100%; display: block; }
          @media print {
            body { margin: 0; }
            @page { margin: 0; size: 3.5in 2in landscape; }
          }
        </style>
      </head>
      <body>
        <img src="${dataUrl}" onload="window.print(); win.close()" />
      </body>
      </html>
    `);

      win.document.close();
    } catch (err) {
      console.error('Print failed:', err);
    } finally {
      setPrinting(false);
    }
  };
  return (
    <div className="text-start w-[700px] mt-2 mb-4 border-none rounded-xl shadow-sm  overflow-hidden">

      {/* Header bar with actions */}
      <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-black-200 bg-gray-50 bg-white">
        <span className="text-sm font-medium text-gray-500"></span>

        <div className="flex items-center gap-2 m-3">
          {/* {downloading ? (
            <div className="flex items-center gap-2 mt-2">
              <div className="w-4 h-4 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
              <span className="text-sm text-gray-600">Downloading...</span>
            </div>
          ) : (
            <button
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium text-gray-700 bg-white border-none rounded-lg hover:bg-gray-50 active:scale-95 transition-all duration-150 underline ${!issubmitted ? "opacity-50 cursor-not-allowed" : ""
                }`}
              onClick={handelDownload}
            >
              Download
            </button>
          )} */}

          {printing ? (
            <div className="flex items-center gap-2 mt-2">
              <div className="w-4 h-4 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
              <span className="text-sm text-gray-600">Printing...</span>
            </div>
          ) : (<button
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium text-gray-700 bg-white border-none rounded-lg hover:bg-gray-50 active:scale-95 transition-all duration-150 p-2 underline"
            onClick={handelPrint}
          >
            Print
          </button>)}
        </div>
      </div>

      {/* Card content area */}
      <div className="p-5 flex items-center justify-center" ref={cardRef}>
        {children}
      </div>

    </div >
  )
}

export default VisitingCardTemplate