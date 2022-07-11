import React from 'react'
import {
    EmailShareButton,
    EmailIcon,
    LineShareButton,
    LineIcon,
    TwitterShareButton,
    TwitterIcon,
    TelegramShareButton,
    TelegramIcon
  } from "react-share";

export default function Sharing() {
    const shareUrl = 'https://www.google.com.ua/'
    return (
        <div>
            <EmailShareButton url={shareUrl}>
                {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
                <EmailIcon round={true}></EmailIcon>
            </EmailShareButton>

            <TwitterShareButton url={shareUrl}>
            {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
                <TwitterIcon></TwitterIcon>
            </TwitterShareButton>

            <LineShareButton url={shareUrl}>
            {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
                <LineIcon round={true}></LineIcon>
            </LineShareButton>

            <TelegramShareButton url={shareUrl}>
            {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
                <TelegramIcon round={true}></TelegramIcon>
            </TelegramShareButton>
        </div>
    )
}
