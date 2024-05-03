"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

// icons/images.
import TumblrIcon from "/public/icons/tumblr.png";
import RedditIcon from "/public/icons/reddit.png";
import TwitterIcon from "/public/icons/twitter.png";
import FacebookIcon from "/public/icons/facebook.png";
import WhatsappIcon from "/public/icons/whatsapp.png";
import LinkedinIcon from "/public/icons/linkedin.png";
import TelegramIcon from "/public/icons/telegram.png";
import MessengerIcon from "/public/icons/messenger.png";

import {
  TumblrShareButton,
  RedditShareButton,
  TwitterShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  FacebookMessengerShareButton,
} from "react-share";

const SocialShare = ({ handleClose }) => {
  const pathname = usePathname();

  const url = process.env.NEXT_PUBLIC_BASE_URL + pathname;

  return (
    <div
      onClick={handleClose}
      className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen backdrop-blur-sm bg-slate-300/30"
    >
      <div
        className="p-3 border-2 rounded-md border-slate-700/70 bg-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center w-full gap-3 mb-4">
          <h3 className="flex-grow text-lg text-center">
            Share with your network
          </h3>
          <button
            onClick={handleClose}
            className="p-0.5 transition-all rounded-full bg-slate-700/50 text-slate-200 hover:bg-slate-700/70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-row gap-4 px-3 py-3">
          <FacebookShareButton url={url}>
            <Image
              width={40}
              height={40}
              alt="facebook"
              src={FacebookIcon}
              className="social-icon"
            />
          </FacebookShareButton>

          <LinkedinShareButton url={url}>
            <Image
              width={40}
              height={40}
              alt="linkedin"
              src={LinkedinIcon}
              className="social-icon"
            />
          </LinkedinShareButton>

          <FacebookMessengerShareButton url={url}>
            <Image
              width={40}
              height={40}
              alt="messenger"
              src={MessengerIcon}
              className="social-icon"
            />
          </FacebookMessengerShareButton>

          <WhatsappShareButton url={url}>
            <Image
              width={40}
              height={40}
              alt="whatsapp"
              src={WhatsappIcon}
              className="social-icon"
            />
          </WhatsappShareButton>

          <TelegramShareButton url={url}>
            <Image
              width={40}
              height={40}
              alt="telegram"
              src={TelegramIcon}
              className="social-icon"
            />
          </TelegramShareButton>

          <TwitterShareButton url={url}>
            <Image
              width={40}
              height={40}
              alt="twitter"
              src={TwitterIcon}
              className="social-icon"
            />
          </TwitterShareButton>

          <RedditShareButton url={url}>
            <Image
              width={40}
              height={40}
              alt="reddit"
              src={RedditIcon}
              className="social-icon"
            />
          </RedditShareButton>

          <TumblrShareButton url={url}>
            <Image
              width={40}
              height={40}
              alt="tumblr"
              src={TumblrIcon}
              className="social-icon"
            />
          </TumblrShareButton>
        </div>
      </div>
    </div>
  );
};

export default SocialShare;
