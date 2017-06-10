import React from 'react';
import { Link } from 'react-router-dom';
import { LinkComponent } from '../Avatar';

import Avatar from '../Avatar';
import './PostEntry.scss';
import defaultImage from '../assets/reddit-default.png';

/*
data: {
contest_mode: false,
banned_by: null,
media_embed: { },
subreddit: "AskReddit",
selftext_html: null,
selftext: "",
likes: null,
suggested_sort: null,
user_reports: [ ],
secure_media: null,
link_flair_text: null,
id: "6ge9pw",
view_count: null,
secure_media_embed: { },
clicked: false,
score: 5966,
report_reasons: null,
author: "TheJeck",
saved: false,
mod_reports: [ ],
name: "t3_6ge9pw",
subreddit_name_prefixed: "r/AskReddit",
approved_by: null,
over_18: false,
domain: "self.AskReddit",
hidden: false,
thumbnail: "",
subreddit_id: "t5_2qh1i",
edited: false,
link_flair_css_class: null,
author_flair_css_class: null,
gilded: 0,
downs: 0,
brand_safe: true,
archived: false,
removal_reason: null,
can_gild: false,
is_self: true,
hide_score: false,
spoiler: false,
permalink: "/r/AskReddit/comments/6ge9pw/you_receive_a_million_dollars_for_every_time/",
num_reports: null,
locked: false,
stickied: false,
created: 1497112819,
url: "https://www.reddit.com/r/AskReddit/comments/6ge9pw/you_receive_a_million_dollars_for_every_time/",
author_flair_text: null,
quarantine: false,
title: "You receive a million dollars for every time somebody says the word "dingleberry" to you, but you can't tell anyone what you're doing. What is your plan to make the most money?",
created_utc: 1497084019,
distinguished: null,
media: null,
num_comments: 1666,
visited: false,
subreddit_type: "public",
is_video: false,
ups: 5966
}
*/

const PostEntry = (props) => {
  const { post } = props;

  return (
    <div className='Post-container container-fluid'>
      <div className='Post-image-container'>
        <Avatar link={post.url} image={post.thumbnail || defaultImage} />
        <div className='Post-count'>{post.ups}</div>
      </div>

      <div className='Post-info-container'>
        <div className='Post-info-line'>
          <span className='Post-subreddit'><Link to={`/subreddit/${post.subreddit}`}>{`/r/${post.subreddit}`}</Link></span>
          -- <span className='Post-date'>{(new Date(post.created_utc*1000)).toLocaleDateString()}</span>
          -- <span className='Post-author'>
              <LinkComponent href={`https://www.reddit.com/u/${post.author}`}>{post.author}</LinkComponent>
            </span>
        </div>
        <div className='Post-title'>{post.title}</div>
      </div>

    </div>
  );
};

export default PostEntry;
