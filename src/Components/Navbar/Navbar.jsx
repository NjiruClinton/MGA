import * as React from 'react';
import "./navbar.css"
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import TitlebarImageList from './ImageList';





export default function Navbar() {

  
  return (
    <div className="blog">
    <Box sx={{ display: 'flex' }}>
      
    </Box><div className="banner">
        <div className="container">
            <h1 className="banner-title">
                <span>Main.</span>Grain Articles
            </h1>
            <p>everything you want to know</p>
            <form>
                <input type="text" className="search-input" placeholder="find your story . . ."></input>
                <button type="submit" className="search-btn"> <SearchIcon />
                </button>

            </form>
        </div>
    </div>
    <div className="articles">
    <div className="title">
            <h2>Recent Articles & Stories</h2>
            <p>recent articles and stories on the blog</p>
        </div>
        <div className="imagelist">
        <TitlebarImageList/>
        </div>
        </div>
    </div>
  );
}
