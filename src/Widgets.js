import React from 'react'
import './styles/widgets.css'
import { 
TwitterTimelineEmbed,
TwitterShareButton,
TwitterTweetEmbed,
} from 'react-twitter-embed'
import SearchIcon from '@mui/icons-material/Search';

const Widgets = () => {
    return (
        <div className='widgets'>
            <div className='widgets_input'>
            <SearchIcon className="widgets_searchIcon" />
            <input placeholder='search twitter' type="text" />
            </div>
            <div className='widgets_widgetContainer'>

                <h2>what's happening</h2>

                <TwitterTweetEmbed tweetId={"1473447665757310980"} />

                <TwitterTimelineEmbed
                sourceType='profile'
                screenName='nba'
                options={{ height: 400 }}
                />
                <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
            </div>
        </div>
    )
}

export default Widgets;