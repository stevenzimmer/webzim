"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { hightlightsSlides } from "@/lib/constants";

type VideoState = {
  isEnd: boolean;
  startPlay: boolean;
  videoId: number;
  isLastVideo: boolean;
  isPlaying: boolean;
};

export default function VideoCarousel() {
  const videoRef = useRef<Array<HTMLVideoElement | null>>([]);
  const videoSpanRef = useRef<Array<HTMLDivElement | null>>([]);
  const videoDivRef = useRef<Array<HTMLSpanElement | null>>([]);
  const [video, setVideo] = useState<VideoState>({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });
  const [loadedData, setLoadedData] = useState<number[]>([]);

  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useGSAP(() => {
    gsap.to(`#slider`, {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 0.5,
      ease: "power2.inOut",
    });

    gsap.to(`#video`, {
      scrollTrigger: {
        trigger: `#video`,
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    let currentProgress = 0;

    if (videoSpanRef.current[videoId]) {
      // Animate
      const currentVideo = videoRef.current[videoId];
      const currentProgressIndicator = videoSpanRef.current[videoId];
      const currentProgressTrack = videoDivRef.current[videoId];

      if (!currentVideo || !currentProgressIndicator || !currentProgressTrack) {
        return;
      }

      const anim = gsap.to(currentProgressIndicator, {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);

          if (progress !== currentProgress) {
            currentProgress = progress;

            // Set width of progress bar
            gsap.to(currentProgressTrack, {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                    ? "10vw"
                    : "4vw",
            });

            gsap.to(currentProgressIndicator, {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(currentProgressTrack, {
              width: "16px",
            });

            gsap.to(currentProgressIndicator, {
              backgroundColor: "#afafaf",
            });
          }
        },
      });

      if (videoId === 0) {
        anim.restart();
      }

      // Update progress bar
      const animUpdate = () => {
        anim.progress(
          currentVideo.currentTime / hightlightsSlides[videoId].videoDuration,
        );
      };

      if (isPlaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }

      if (startPlay) {
        currentVideo.play();
      }
    }
  }, [isPlaying, startPlay, videoId]);

  useEffect(() => {
    if (loadedData.length > hightlightsSlides.length - 1) {
      if (!isPlaying) {
        videoRef.current[videoId]?.pause();
      } else {
        if (startPlay) {
          videoRef.current[videoId]?.play();
        }
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleProcess = (type: string, i: number) => {

    switch (type) {
      case "end":
        setVideo((pre) => ({
          ...pre,
          isEnd: true,
          videoId: i + 1,
        }));
        break;

      case "last":
        setVideo((pre) => ({
          ...pre,
          isLastVideo: true,
        }));
        break;

      case "reset":
        setVideo((pre) => ({
          ...pre,
          isLastVideo: false,
          videoId: 0,
        }));
        break;

      case "pause":
        setVideo((pre) => ({
          ...pre,
          isPlaying: !pre.isPlaying,
        }));
        break;

      case "play":
        setVideo((pre) => ({
          ...pre,
          isPlaying: !pre.isPlaying,
        }));
        break;

      default:
        return video;
    }
  };

  const handleLoadedMetaData = (index: number) => {
    setLoadedData((previous) =>
      previous.includes(index) ? previous : [...previous, index],
    );
  };

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={i} className="pr-10 sm:pr-20" id={`slider`}>
            <div className="video-carousel_container relative">
              <div className="flex-center h-full w-full overflow-hidden rounded-3xl bg-black">
                <video
                  id={`video`}
                  playsInline={true}
                  preload="auto"
                  className={`${
                    i === 1 && "translate-x-44"
                  } pointer-events-none`}
                  muted
                  ref={(element) => {
                    videoRef.current[i] = element;
                  }}
                  onEnded={() =>
                    i !== hightlightsSlides.length - 1
                      ? handleProcess("end", i)
                      : handleProcess("last", i)
                  }
                  onPlay={() => {
                    setVideo((pre) => ({
                      ...pre,
                      isPlaying: true,
                    }));
                  }}
                  onLoadedMetadata={() => handleLoadedMetaData(i)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
                <div className="absolute left-[5%] top-12 z-10 text-white">
                  {list.textLists.map((text, j) => (
                    <div
                      key={j}
                      className="mb-4 text-xl font-medium md:text-2xl"
                    >
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-center relative mt-10">
        <div className="flex-center rounded-full bg-apple-grey-300 px-7 py-5 backdrop-blur">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              ref={(element) => {
                videoDivRef.current[i] = element;
              }}
              className="relative mx-2 h-4 w-4 cursor-pointer rounded-full bg-apple-grey-200"
            >
              <div
                className="absolute h-full w-full rounded-full"
                ref={(element) => {
                  videoSpanRef.current[i] = element;
                }}
              />
            </span>
          ))}
        </div>
        <button
          className="control-btn"
          onClick={
            isLastVideo
              ? () => {
                  handleProcess("reset", videoId);
                }
              : !isPlaying
                ? () => {
                    handleProcess("play", videoId);
                  }
                : () => {
                    handleProcess("pause", videoId);
                  }
          }
        >
          <Image
            src={
              isLastVideo
                ? "/apple/assets/images/replay.svg"
                : !isPlaying
                  ? "/apple/assets/images/play.svg"
                  : "/apple/assets/images/pause.svg"
            }
            alt={
              isLastVideo
                ? "Replay icon"
                : !isPlaying
                  ? "Play icon"
                  : "Pause icon"
            }
            width={20}
            height={20}
          />
        </button>
      </div>
    </>
  );
}
