"use client";
import Image from "next/image";
import { useState } from "react";
import flipText from "flip-text";
import { zalgoGeneration } from "zalgo-generator";
import transformText from "fancy-text-generator";
import morse from "morse";

export default function Home() {
    const [text, setText] = useState("");
    return (
        <div classNameName="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
            <main>

                <div className="main-title">
                    <h1>Text Generator</h1>

                    <h2 className="subtitle"></h2>
                </div>
                <div class="container mx-auto">

                    <div className="grid grid-cols-2 gap-4 mx-auto">
                        <div className="bg-white m-2 h-100vh">
                            <div className="box-shadow-1 h-[400px] p-4 text-gray-500 text-2xl">
                                <textarea
                                    id="english-text"
                                    className="w-full outline-none "
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
                                    <div className="pb-8 text-black text-4xl">{transformText(text, "aurebeshMap")}</div>
                                    <div className="pb-8 text-black text-4xl">{zalgoGeneration(text, 1, 1, 1)}</div>
                                    <div className="pb-8 text-black text-4xl">{flipText(text)}</div>
                                    <div className="pb-8 text-black text-4xl">{morse.encode(text)}</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="bg-white p-4 max-w-7xl mx-auto mt-8">
                        <h1 className="text-center text-black text-3xl font-bold mb-4">
                            Build Text Generator
                        </h1>

                        <div>
                            <p className="mb-4 text-gray-700">
                                Welcome! This tool allows you to convert normal text into multiple stylish formats like bold, italic, fancy text, glitch (zalgo), flipped text, morse code, and more. You can easily copy and paste these styles into your social media bios, posts, messages, or anywhere you want to stand out.
                            </p>

                            <p className="mb-4 text-gray-700">
                                Unlike traditional fonts, these styles are generated using special Unicode characters. That means they are not just visual styles — they are completely different characters that can be copied and used across platforms like Instagram, Facebook, Twitter, and WhatsApp.
                            </p>

                            <h2 className="text-xl font-semibold text-black mt-6 mb-2">
                                Available Text Styles
                            </h2>

                            <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                <li>Bold, Italic, Bold Italic</li>
                                <li>Underline, Strikethrough</li>
                                <li>Monospace, Superscript, Subscript</li>
                                <li>Fraktur, Double Struck, Script</li>
                                <li>Fancy Text Variations</li>
                                <li>Aurebesh Style</li>
                                <li>Zalgo (Glitch Text)</li>
                                <li>Flipped Text</li>
                                <li>Morse Code</li>
                            </ul>

                            <h2 className="text-xl font-semibold text-black mt-6 mb-2">
                                How It Works
                            </h2>

                            <p className="mb-4 text-gray-700">
                                This generator uses the Unicode standard, which defines thousands of unique characters and symbols. Instead of styling normal text, we convert each letter into its corresponding styled Unicode equivalent. This is why the generated text works across most platforms without needing special fonts.
                            </p>

                            <p className="mb-4 text-gray-700">
                                Simply type your text above, and instantly see it transformed into different styles. Click to copy and use it anywhere you like!
                            </p>
                        </div>
                    </div>
                </div>

            </main >
        </div >
    );
}
