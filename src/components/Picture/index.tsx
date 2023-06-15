type Props = {
  url: string;
  tabletUrl: string;
  desktopUrl: string;
  alt: string;
  gallery?: boolean;
};
function index({ gallery, alt, url, tabletUrl, desktopUrl }: Props) {
  return (
    <picture>
      <source
        media="(min-width: 768px and max-width: 1020px)"
        srcSet={tabletUrl}
      />

      <source media="(min-width: 1020px)" srcSet={desktopUrl} />
      <img
        className={`my-5 rounded-xl ${gallery ? "w-full h-full" : null}`}
        src={url}
        alt={alt}
      />
    </picture>
  );
}

export default index;
