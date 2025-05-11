import { useState, useEffect, useCallback } from 'react'

const DEFAULT_TEXT_STYLE = {
    size: 2,
    color: '#FFFFFF',
    font: 'impact'
}

export function useMeme() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg",
        topStyle: { ...DEFAULT_TEXT_STYLE },
        bottomStyle: { ...DEFAULT_TEXT_STYLE }
    })
    const [allMemes, setAllMemes] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [history, setHistory] = useState([])
    const [selectedTemplate, setSelectedTemplate] = useState(null)

    const fetchMemes = useCallback(async () => {
        try {
            setIsLoading(true)
            const response = await fetch("https://api.imgflip.com/get_memes")
            if (!response.ok) {
                throw new Error('Failed to fetch memes')
            }
            const data = await response.json()
            setAllMemes(data.data.memes)
            setError(null)
        } catch (err) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchMemes()
    }, [fetchMemes])

    const getMemeImage = useCallback(() => {
        if (allMemes.length === 0) return
        
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const newMemeUrl = allMemes[randomNumber].url
        const newMeme = {
            ...meme,
            imageUrl: newMemeUrl
        }
        setMeme(newMeme)
        addToHistory(newMeme)
    }, [allMemes, meme])

    const handleTextChange = useCallback((event) => {
        const { value, name } = event.target
        const newMeme = {
            ...meme,
            [name]: value
        }
        setMeme(newMeme)
        addToHistory(newMeme)
    }, [meme])

    const handleStyleChange = useCallback((position, property, value) => {
        const newMeme = {
            ...meme,
            [`${position}Style`]: {
                ...meme[`${position}Style`],
                [property]: value
            }
        }
        setMeme(newMeme)
        addToHistory(newMeme)
    }, [meme])

    const addToHistory = useCallback((newMeme) => {
        setHistory(prev => {
            const newHistory = [newMeme, ...prev].slice(0, 5)
            return newHistory
        })
    }, [])

    const selectTemplate = useCallback((template) => {
        setSelectedTemplate(template)
        const newMeme = {
            ...meme,
            imageUrl: template.url
        }
        setMeme(newMeme)
        addToHistory(newMeme)
    }, [meme, addToHistory])

    const downloadMeme = useCallback(async () => {
        try {
            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d')
            const img = new Image()
            
            img.crossOrigin = 'anonymous'
            img.src = meme.imageUrl
            
            await new Promise((resolve) => {
                img.onload = resolve
            })
            
            canvas.width = img.width
            canvas.height = img.height
            
            ctx.drawImage(img, 0, 0)
            
            // Add text
            ctx.textAlign = 'center'
            ctx.textBaseline = 'top'
            
            // Top text
            ctx.font = `${meme.topStyle.size * 30}px ${meme.topStyle.font}`
            ctx.fillStyle = meme.topStyle.color
            ctx.strokeStyle = 'black'
            ctx.lineWidth = 4
            ctx.strokeText(meme.topText, canvas.width / 2, 20)
            ctx.fillText(meme.topText, canvas.width / 2, 20)
            
            // Bottom text
            ctx.textBaseline = 'bottom'
            ctx.strokeText(meme.bottomText, canvas.width / 2, canvas.height - 20)
            ctx.fillText(meme.bottomText, canvas.width / 2, canvas.height - 20)
            
            // Download
            const link = document.createElement('a')
            link.download = 'meme.png'
            link.href = canvas.toDataURL('image/png')
            link.click()
        } catch (err) {
            console.error('Error downloading meme:', err)
        }
    }, [meme])

    const shareMeme = useCallback(async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'My Meme',
                    text: `${meme.topText} ${meme.bottomText}`,
                    url: meme.imageUrl
                })
            } else {
                // Fallback for browsers that don't support Web Share API
                const dummy = document.createElement('input')
                document.body.appendChild(dummy)
                dummy.value = meme.imageUrl
                dummy.select()
                document.execCommand('copy')
                document.body.removeChild(dummy)
                alert('Meme URL copied to clipboard!')
            }
        } catch (err) {
            console.error('Error sharing meme:', err)
        }
    }, [meme])

    return {
        meme,
        isLoading,
        error,
        history,
        allMemes,
        selectedTemplate,
        getMemeImage,
        handleTextChange,
        handleStyleChange,
        selectTemplate,
        downloadMeme,
        shareMeme,
        retryFetch: fetchMemes
    }
} 