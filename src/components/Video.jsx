const Video = () => {
  let videoLink = 'https://youtube.com/embed/CWX00lH1ZB8?wmode=transparent';
  return (
    <iframe
      width="530"
      height="300"
      src={videoLink}
      allowFullScreen={false}
      className="rounded-2xl shadow-[10px_10px_0px_0px_#417978]"
    ></iframe>
  );
};

export default Video;
