import React from "react"

export default function VimeoPlayer(props) {

    const { vids } = props

    console.log(vids.length)

    const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0)
    const [isPlaying, setIsPlaying] = React.useState(false)
    const [showControls, setShowControls] = React.useState(true)

    function handlePrevious() {
        setCurrentVideoIndex((prevIndex) =>
            prevIndex === 0 ? vids.length - 1 : prevIndex - 1
        )
    }

    function handleNext() {
        setCurrentVideoIndex((prevIndex) =>
            prevIndex === vids.length - 1 ? 0 : prevIndex + 1
        )
    }

    function handlePlay() {
        setIsPlaying(true)
    }

    function handlePause() {
        setIsPlaying(false)
    }

    function handleMouseEnter() {
        setShowControls(true)
    }

    function handleMouseLeave() {
      setShowControls(false)
    }    

    const videoFadeOutClass = `project-item-video ${isPlaying && !showControls? 'fade-out' : ''}`
    const videoFadeInClass = `project-item-video ${showControls ? 'fade-in' : 'fade-out'}`

    return (
        <div
            className={showControls ? videoFadeInClass : videoFadeOutClass}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {(vids.length > 1 && showControls) && (
                <>
                    <button className="video-player-side-button left" onClick={handlePrevious}>
                        &lt;
                    </button>
                    <button className="video-player-side-button right" onClick={handleNext}>
                        &gt;
                    </button>
                </>
            )}
            <iframe className="project-item-video-frame"
                src={vids[currentVideoIndex].url}
                width="640"
                height="360"
                allow="fullscreen; picture-in-picture"
                allowFullScreen
                title={vids[currentVideoIndex].name}
                onPlay={handlePlay}
                onPause={handlePause}
            ></iframe>
        </div>
    )
}