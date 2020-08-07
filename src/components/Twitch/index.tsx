import React, { useEffect, useRef } from "react";
import root from "window-or-global";
import { useTwitchEmbed } from "./useEmbedApi";
import { useEventListener } from "./useEventListener";
import { usePlayerReady } from "./usePlayerReady";
import { usePlayerPlay } from "./usePlayerPlay";
import { loadEmbedApi } from "./loadEmbedApi";

//@ts-ignore
const hasTwitchApiLoaded = () => Boolean(root?.Twitch?.Embed);

type PropsType = {
  /** If true, the player can go full screen. Default: true. */
  allowfullscreen?: boolean;
  /** If true, the video starts playing automatically, without the user clicking play. The exception is mobile platforms, on which video cannot be played without user interaction. Default: true. */
  autoplay: boolean;
  /** Optional for VOD embeds; otherwise, required. Name of the chat room and channel to stream. */
  channel: string;
  /** Specifies the type of chat to use. Valid values:
          * default: Default value, uses full-featured chat.
          * mobile: Uses a read-only version of chat, optimized for mobile devices.

          To omit chat, specify a value of video for the layout option. */
  chat?: "default" | "mobile";
  /** The VOD collection to play. If you use this, you also must specify an initial video in the VOD collection. All VODs are auto-played. Rechat is not supported */
  collection?: string;
  /** Maximum width of the rendered element, in pixels. This can be expressed as a percentage, by passing a string like 100% */
  height: string | number;
  /** Determines the screen layout. Valid values:
          video-with-chat: Default if channel is provided. Shows both video and chat side-by-side. At narrow sizes, chat renders under the video player.
          * video: Default if channel is not provided. Shows only the video player (omits chat). */
  layout: "video" | "video-with-chat";
  /** Specifies whether the initial state of the video is muted. Default: false. */
  muted: boolean;
  /** The video started playing. This callback receives an object with a sessionId property. */
  onPlay: () => void;
  /** The video player is ready for API commands. This callback receives the player object. */
  onReady: () => void;
  /** If you use the interactive embed, and your site is embedded in other locations, add a parent key to the options object used to configure the embed to indicate which domains your site is embedded on.
   * The value should be a JavaScript array containing any domains which embed your content. */
  parent?: string[];
  /** Custom class name for div wrapper */
  targetClass?: string;
  /** Custom id to target */
  targetId: string;
  /** The Twitch embed color theme to use. Valid values: light or dark. Default: light. */
  theme?: string;
  /** ID of a VOD to play. Chat replay is not supported. */
  video?: string;
  /** Width of video embed including chat */
  width: string | number;
};

const TwitchEmbedVideo = (props: PropsType) => {
  const { width, height, targetId, targetClass } = props;
  const containerRef = useRef(null);
  const [embed, initializeEmbed] = useTwitchEmbed(props);

  const eventListenerFactory = useEventListener(embed);
  const onPlayerReady = usePlayerReady(embed, props);
  const onPlayerPlay = usePlayerPlay(embed, props);

  useEffect(() => {
    if (!hasTwitchApiLoaded()) return;

    // @ts-ignore
    const { VIDEO_PLAY, VIDEO_READY } = root.Twitch.Embed;

    const removeVideoPlayListener = eventListenerFactory(
      VIDEO_PLAY,
      onPlayerPlay
    );

    const removePlayerReadyEventListener = eventListenerFactory(
      VIDEO_READY,
      onPlayerReady
    );

    return () => {
      removePlayerReadyEventListener();
      removeVideoPlayListener();
    };
  }, [onPlayerReady, eventListenerFactory, onPlayerPlay]);

  // Builds the Twitch Embed
  useEffect(() => {
    if (containerRef && containerRef.current) {
      //@ts-ignore
      containerRef.current.innerHTML = "";
    }

    // Check if we have Twitch in the global space and Embed is available
    if (hasTwitchApiLoaded() && initializeEmbed) {
      initializeEmbed();

      return;
    }

    // Initialize the Twitch embed lib if not present
    loadEmbedApi(initializeEmbed);
  }, [initializeEmbed, containerRef]);

  return (
    <div
      ref={containerRef}
      style={{ width: width, height: height }}
      className={targetClass}
      id={targetId}
    ></div>
  );
};

TwitchEmbedVideo.defaultProps = {
  targetId: "twitch-embed",
  layout: "video",
  width: "940",
  height: "480",
  autoplay: true,
  muted: false,
};

export default React.memo(TwitchEmbedVideo);
