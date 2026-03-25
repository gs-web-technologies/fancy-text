"use client";
import Image from "next/image";
import { useState } from "react";
import flipText from "flip-text";
import { zalgoGeneration } from "zalgo-generator";
import transformText from "fancy-text-generator";
import morse from "morse";
import Description from "@/components/Description";

export default function Home() {
    const [text, setText] = useState("");
    return (
        <>
            <div className="main-title">
                <h1>Text Generator</h1>

                <h2 className="subtitle"></h2>
            </div>
            <div className="container mx-auto">
                {/* text translator */}
                <div className="grid grid-cols-2 gap-4 mx-auto">
                    <div className="bg-white m-2 h-100vh">
                        <div className="box-shadow-1 h-[400px] p-4 text-gray-500 text-2xl">
                            <textarea
                                id="english-text"
                                className="w-full outline-none  h-[400px]"
                                placeholder="English goes here..."
                                onChange={(e) => setText(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="bg-white m-2 h-100vh">
                        <div className=" box-shadow-1 h-[400px] overflow-y-auto" >
                            <div id="ghetto-text" className="p-4 text-gray-500 text-2xl">
                                {text.trim() == '' && 'And generated Text will appear here...'}
                                <div className="pb-8 text-black text-4xl">{transformText(text, "bold")}</div>
                                <div className="pb-8 text-black text-4xl">{transformText(text, "italic")}</div>
                                <div className="pb-8 text-black text-4xl">{transformText(text, "boldItalic")}</div>
                                <div className="pb-8 text-black text-4xl">{transformText(text, "underline")}</div>
                                <div className="pb-8 text-black text-4xl">{transformText(text, "strikethrough")}</div>
                                <div className="pb-8 text-black text-4xl">{transformText(text, "monospace")}</div>
                                <div className="pb-8 text-black text-4xl">{transformText(text, "superscript")}</div>
                                <div className="pb-8 text-black text-4xl">{transformText(text, "subscript")}</div>
                                <div className="pb-8 text-black text-4xl">{transformText(text, "fraktur")}</div>
                                <div className="pb-8 text-black text-4xl">{transformText(text, "boldFraktur")}</div>
                                <div className="pb-8 text-black text-4xl">{transformText(text, "doubleStruck")}</div>
                                <div className="pb-8 text-black text-4xl">{transformText(text, "script")}</div>
                                <div className="pb-8 text-black text-4xl">{transformText(text, "boldScript")}</div>
                                <div className="pb-8 text-black text-4xl">{transformText(text, "fancy1")}</div>
                                <div className="pb-8 text-black text-4xl">{transformText(text, "fancy2")}</div>
                                <div className="pb-8 text-black text-4xl">{transformText(text, "fancy3")}</div>
                                {/* <div className="pb-8 text-black text-4xl">{transformText(text, "aurebeshMap")}</div> */}
                                <div className="pb-8 text-black text-4xl">{zalgoGeneration(text, 1, 1, 1)}</div>
                                <div className="pb-8 text-black text-4xl">{flipText(text)}</div>
                                <div className="pb-8 text-black text-4xl">{morse.encode(text)}</div>
                            </div>
                        </div>
                    </div>

                </div>

                <Description />
            </div>
        </ >
    );
}
