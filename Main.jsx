import { Suspense } from "react"
import MemeForm from "./MemeForm"
import MemeDisplay from "./MemeDisplay"
import TextCustomizer from "./TextCustomizer"
import MemeHistory from "./MemeHistory"
import { useMeme } from "../hooks/useMeme"
import ErrorBoundary from "./ErrorBoundary"

function MemeContent() {
    const { 
        meme, 
        isLoading, 
        error, 
        history,
        getMemeImage, 
        handleTextChange,
        handleStyleChange,
        downloadMeme,
        shareMeme,
        retryFetch 
    } = useMeme()

    if (error) {
        return (
            <div className="error-container">
                <h2>Error loading memes</h2>
                <p>{error}</p>
                <button onClick={retryFetch}>Try Again</button>
            </div>
        )
    }

    return (
        <>
            <MemeForm
                topText={meme.topText}
                bottomText={meme.bottomText}
                onTextChange={handleTextChange}
                onNewMeme={getMemeImage}
            />
            
            <TextCustomizer
                textStyle={meme.topStyle}
                onStyleChange={handleStyleChange}
                position="top"
            />
            
            <TextCustomizer
                textStyle={meme.bottomStyle}
                onStyleChange={handleStyleChange}
                position="bottom"
            />
            
            {isLoading ? (
                <div className="loading">
                    <div className="loading-spinner"></div>
                    <p>Loading memes...</p>
                </div>
            ) : (
                <MemeDisplay
                    imageUrl={meme.imageUrl}
                    topText={meme.topText}
                    bottomText={meme.bottomText}
                    topStyle={meme.topStyle}
                    bottomStyle={meme.bottomStyle}
                    onDownload={downloadMeme}
                    onShare={shareMeme}
                />
            )}

            <MemeHistory 
                history={history}
                onSelectMeme={(selectedMeme) => {
                    handleTextChange({ target: { name: 'topText', value: selectedMeme.topText } })
                    handleTextChange({ target: { name: 'bottomText', value: selectedMeme.bottomText } })
                    getMemeImage()
                }}
            />
        </>
    )
}

export default function Main() {
    return (
        <main className="main-container">
            <ErrorBoundary>
                <Suspense fallback={
                    <div className="loading">
                        <div className="loading-spinner"></div>
                        <p>Loading...</p>
                    </div>
                }>
                    <MemeContent />
                </Suspense>
            </ErrorBoundary>
        </main>
    )
}