import classNames from '../../styles/Home.module.css';

export default function SocialLinks() {
  return (
    <div className={classNames.socials}>
      <a href="https://www.facebook.com/ChoirBalsis"
         target="_blank"
         className={classNames.socialLinkContainer}
      >
        <img
          src="/icon/facebook_white_28dp.png" alt="Facebook"
          className={classNames.socialLink} width="28" height="28"/>
      </a>
      <a
        href="https://www.instagram.com/youthchoirbalsis/"
        target="_blank"
        className={classNames.socialLinkContainer}
      >
        <img
          src="/icon/instagram_white_28dp.png" alt="Instagram"
          className={classNames.socialLink} width="28" height="28"/>
      </a>
      <a
        href="https://www.tiktok.com/@youthchoirbalsis"
        target="_blank"
        className={classNames.socialLinkContainer}
      >
        <img
          src="/icon/tiktok_white_28dp.png" alt="TikTok"
          className={classNames.socialLink} width="28" height="28"/>
      </a>
      <a
        href="https://open.spotify.com/artist/4Syljz78c4rBwXuh5lFEyj"
        target="_blank"
        className={classNames.socialLinkContainer}
      >
        <img
          src="/icon/spotify_white_28dp.png" alt="Spotify"
          className={classNames.socialLink} width="28" height="28"/>
      </a>
      <a
        href="https://www.youtube.com/channel/UCP8KkpLuSXxwib1medw1r6A" target="_blank"
        className={classNames.socialLinkContainer}
      >
        <img
          src="/icon/youtube_white_28dp.png" alt="YouTube"
          className={classNames.socialLink} width="28" height="28"/>
      </a>
    </div>
  )

}