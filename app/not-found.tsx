'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const BAD_CHEF_GIFS = [
    // "https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif", // Simpsons chef disaster (Removed)
    "https://media.giphy.com/media/3o85xnoIXebk3xBBZA/giphy.gif", // Gordon Ramsay yelling
    "https://media.giphy.com/media/l0MYrLAFex1R71l0A/giphy.gif", // Swedish chef chaos
    "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif", // Office fire
    "https://media.giphy.com/media/1034EEGrn91SrS/giphy.gif", // Spongebob burning
    "https://media.giphy.com/media/DemT0S2dnCJtC/giphy.gif", // Cookie monster mess
    "https://media.giphy.com/media/3o7qE1YN7aQfVajCn6/giphy.gif", // Generic cooking fail 1
    "https://media.giphy.com/media/l2JhtVkdlmXPiSjCg/giphy.gif", // Generic cooking fail 2
    "https://media.giphy.com/media/3o6Zt481isNVuQIqZm/giphy.gif", // Generic cooking fail 3
    "https://media.giphy.com/media/xT8qB7Sbwskk27Rdy8/giphy.gif", // Generic cooking fail 4
    "https://media.giphy.com/media/l0HlCqV35hdEg2GM0/giphy.gif", // Generic cooking fail 5
    "https://media.giphy.com/media/3o6ZtpvPW6fqxkE1ll/giphy.gif", // Generic cooking fail 6
    "https://media.giphy.com/media/xT5LMB2WiOdjpB7K4o/giphy.gif", // Generic cooking fail 7
    "https://media.giphy.com/media/3o7TKs384dUSpb6Rwb/giphy.gif", // Generic cooking fail 8
    "https://media.giphy.com/media/l0HlR3kHtkgFbYfgQ/giphy.gif", // Generic cooking fail 9
    "https://media.giphy.com/media/3o6ZtaO9U6RPD1iC4g/giphy.gif", // Generic cooking fail 10
]

export default function NotFound() {
    const [gifUrl] = useState(() => BAD_CHEF_GIFS[Math.floor(Math.random() * BAD_CHEF_GIFS.length)])

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: '#f8f5f2',
            color: '#2c2c2c'
        }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '1rem', fontFamily: 'var(--font-playfair)' }}>404</h1>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Oups! Da ist etwas angebrannt.</h2>

            <div style={{ maxWidth: '600px', marginBottom: '2rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.12)', position: 'relative', width: '100%', aspectRatio: '16/9' }}>
                <Image
                    src={gifUrl}
                    alt="Chef cooking disaster"
                    fill
                    style={{ objectFit: 'cover' }}
                    unoptimized
                />
            </div>

            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '500px' }}>
                Diese Seite wurde wohl zu lange im Ofen gelassen und ist nicht mehr geniessbar.
                Kehren Sie lieber zurück zum Menü.
            </p>

            <Link
                href="/"
                style={{
                    padding: '1rem 2rem',
                    backgroundColor: '#2c2c2c',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontSize: '1.1rem',
                    transition: 'transform 0.2s ease'
                }}
            >
                Zurück zur Startseite
            </Link>
        </div>
    )
}
