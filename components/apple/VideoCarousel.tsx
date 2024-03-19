import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "@/lib/constants";

import Image from "next/image";

export default function VideoCarousel() {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);

  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

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
      let anim = gsap.to(videoSpanRef.current[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);

          if (progress !== currentProgress) {
            currentProgress = progress;

            // Set width of progress bar
            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
            });

            gsap.to(videoSpanRef.current[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
            });

            gsap.to(videoSpanRef.current[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });

      // console.log({ currentProgress });
      // console.log(videoRef.current[videoId]);

      if (videoId === 0) {
        anim.restart();
      }

      // console.log("current time", videoRef.current[videoId]?.currentTime);

      // console.log("duration", hightlightsSlides[videoId].videoDuration);

      // console.log("progress", anim.progress() * 100);

      // Update progress bar
      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId]?.currentTime /
            hightlightsSlides[videoId].videoDuration,
        );
      };

      if (isPlaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }
    }
    if (startPlay) {
      videoRef.current[videoId].play();
    }
  }, [startPlay, videoId]);

  useEffect(() => {
    if (loadedData.length > hightlightsSlides.length - 1) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }

    // console.log({ loadedData });
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleProcess = (type, i) => {
    console.log("handle process");
    console.log(type + " " + i);

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

  const handleLoadedMetaData = (i, e) => {
    setLoadedData((pre) => [...pre, e]);
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
                  ref={(el) => (videoRef.current[i] = el)}
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
                  onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
                <div className="absolute  left-[5%] top-12 z-10 text-white">
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
              ref={(el) => (videoDivRef.current[i] = el)}
              className="relative mx-2 h-4  w-3 cursor-pointer rounded-full bg-apple-grey-200"
            >
              <div
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRef.current[i] = el)}
              ></div>
            </span>
          ))}
        </div>
        <button className="control-btn">
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
            width={20}
            height={20}
          />
        </button>
      </div>
    </>
  );
}
