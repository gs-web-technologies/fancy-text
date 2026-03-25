import React from 'react'

export default function Description() {
    return (
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
    )
}
