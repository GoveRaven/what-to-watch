export type TVideoPlayerProps = {
  video: string;
};

export function VideoPlayer({ video }: TVideoPlayerProps): JSX.Element {
  return <video src={video} muted width="280" height="175" autoPlay />;
}
