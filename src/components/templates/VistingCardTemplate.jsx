import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';


function VisitingCardTemplate({ children, issubmitted }) {

  const cardRef = useRef(null);
  const [downloading, setDownloading] = useState(false);
  const [printing, setPrinting] = useState(false);

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
    <div className="gap-2 text-start w-[400px] mt-2 mb-4  overflow-hidden">

      {/* {printing ? (
        <div className="flex items-center gap-2 mt-2">
          <div className="w-4 h-4 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
          <span className="text-sm text-gray-600">Printing...</span>
        </div>
      ) : (<button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        onClick={handelPrint}
      >
        Print
      </button>)} */}


      <div className="mb-2 flex items-center gap-3">
        {printing ? (
          <div className="flex items-center gap-2 mt-2">
            <div className="w-4 h-4 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
            <span className="text-sm text-gray-600">Printing...</span>
          </div>
        ) : (
          <button
            onClick={handelPrint}
            style={{
              backgroundColor: !issubmitted ? '#c0baba' : '#080808',
              color: '#ffffff',
              border: 'none',
              padding: '7px 16px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: '600',
              fontFamily: 'Arial, sans-serif',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'background-color 0.2s ease',
              boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
              cursor: !issubmitted ? 'not-allowed' : 'pointer',
            }}
            disabled={!issubmitted}
          >
            Print
          </button>)}
      </div>

      {/* Card content area */}
      <div className="p-2 flex items-center justify-center" ref={cardRef}>
        {children}
      </div>

    </div >
  )
}

export default VisitingCardTemplate