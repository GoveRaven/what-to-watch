export type VideoPlayerProps = {
  video: string;
};

export function VideoPlayer({
  video,
}: VideoPlayerProps): JSX.Element {
  return (
    <video
      src={video}
      muted
      width="280"
      height="175"
      autoPlay
    />
  );
}
