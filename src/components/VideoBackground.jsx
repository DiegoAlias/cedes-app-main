import videoBg from "../assets/video.mp4";

export const VideoBackground = () => {
  return (
    <div className="video-background">
      <video src={videoBg} autoPlay loop muted />
    </div>
  );
};
