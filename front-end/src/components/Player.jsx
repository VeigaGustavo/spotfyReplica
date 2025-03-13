import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCirclePlay,
    faCirclePause,
    faBackwardStep,
    faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
        .toString()
        .padStart(2, "0");
    const seconds = Math.floor(timeInSeconds % 60)
        .toString()
        .padStart(2, "0");
    return `${minutes}:${seconds}`;
};

const timeInSeconds = (timeString) => {
    const [minutes, seconds] = timeString.split(":").map(Number);
    return minutes * 60 + seconds;
};

const Player = ({ duration, randomIdFromArtist, randomId2FromArtist, audio }) => {
    const audioPlayer = useRef(null);
    const progressBar = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(formatTime(0));
    const durationInSeconds = timeInSeconds(duration);

    useEffect(() => {
        if (audioPlayer.current) {
            audioPlayer.current.src = audio;
            audioPlayer.current.load();

            // Reproduz automaticamente o novo áudio se estiver tocando
            if (isPlaying) {
                audioPlayer.current.play().catch(error => {
                    console.error("Erro ao reproduzir o áudio:", error);
                });
            }
        }
    }, [audio, isPlaying]);

    const playPause = () => {
        if (!audioPlayer.current) return;

        if (isPlaying) {
            audioPlayer.current.pause();
        } else {
            audioPlayer.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const updateProgress = () => {
            if (!audioPlayer.current) return;

            setCurrentTime(formatTime(audioPlayer.current.currentTime));
            progressBar.current.style.setProperty(
                "--_progress",
                (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%"
            );
        };

        if (isPlaying) {
            const intervalId = setInterval(updateProgress, 1000);
            return () => clearInterval(intervalId);
        }
    }, [isPlaying, durationInSeconds]);

    return (
        <div className="player">
            <div className="player__controllers">
                <Link to={`/song/${randomIdFromArtist}`}>
                    <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
                </Link>

                <FontAwesomeIcon
                    className="player__icon player__icon--play"
                    icon={isPlaying ? faCirclePause : faCirclePlay}
                    onClick={playPause}
                />

                <Link to={`/song/${randomId2FromArtist}`}>
                    <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
                </Link>
            </div>

            <div className="player__progress">
                <p>{currentTime}</p>

                <div className="player__bar">
                    <div ref={progressBar} className="player__bar-progress"></div>
                </div>

                <p>{duration}</p>
            </div>

            <audio ref={audioPlayer} src={audio}></audio>
        </div>
    );
};

Player.propTypes = {
    duration: PropTypes.string.isRequired,
    randomIdFromArtist: PropTypes.string.isRequired,
    randomId2FromArtist: PropTypes.string.isRequired,
    audio: PropTypes.string.isRequired,
};

export default Player;