import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import "./imagelist.css"
import ReadMoreIcon from '@mui/icons-material/ReadMore';



export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: '100%', height: '100%' }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <div className=".imglistitem">
        <ImageListItem key={item.img} 
        // add margin 20px to large screens and remove from small screens
        sx={{
            margin: '20px',
            '@media (max-width: 600px)': {
                margin: '0',
            },
            // enlarge image on hover
            '&:hover': {
                transform: 'scale(1.1)',
                transition: 'transform 0.2s ease-in-out',
            },
            
        }}
         >
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <ReadMoreIcon />
              </IconButton>
            }
          />
        </ImageListItem></div>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://www.ideamotive.co/hubfs/4-3.png',
    title: 'Understanding FrontEnd',
    author: '10 min read',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://ddimitrov.dev/wp-content/uploads/2020/03/designing-data-intensive-applications-cover-748x515.png',
    title: 'Designing Data Intensive Applications',
    author: '30 min read',
  },
  {
    img: 'https://designli.co/blog/wp-content/uploads/2022/02/chris-ried-ieic5Tq8YMk-unsplash-e1649256104852.jpg',
    title: 'Top Programming Languages',
    author: '5 min read',
  },
  {
    img: 'https://miro.medium.com/max/1400/1*9M69JTd6k31rJOZ2Ih8Uuw.png',
    title: 'Futuer of web dev',
    author: '3 min read',
    cols: 2,
  },
  {
    img: 'https://blog.back4app.com/wp-content/uploads/2021/05/backend-vs-frontend-2.png',
    title: 'Understanding Backend',
    author: '10 min read',
    cols: 2,
  },
  {
    img: 'https://firebase.google.com/static/docs/cloud-messaging/images/diagram-FCM.png',
    title: 'Firebase Workflow',
    author: '10 min read',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://www.devteam.space/wp-content/uploads/2022/06/Agile-Methodology.jpg',
    title: 'Agile Methodology',
    author: '15 min read',
  },
  {
    img: 'https://static.news.bitcoin.com/wp-content/uploads/2016/02/EthCover.jpg',
    title: 'ETH - Then and Now',
    author: '7 min read',
  },
  {
    img: 'https://i.ytimg.com/vi/2q91vTvc7YE/maxresdefault.jpg',
    title: 'Closed vs Open Source',
    author: '12 min read',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://laigames.com/wp-content/uploads/2016/07/20120420-Welcome-to-the-first-Tech-Tip-of-the-Month-from-LAI-Games.jpg',
    title: 'Tech Tip of the Month',
    author: '5 min read',
  },
  {
    img: 'https://d33wubrfki0l68.cloudfront.net/56e849bf2b94a092f62ee8461b3da88359742a1a/6841b/v3/img/blog/jamstack_conf_banner_photo_1.jpg',
    title: 'Advent of Code',
    author: '6 min read',
  },
  {
    img: 'https://www.mindk.com/wp-content/uploads/2019/07/Continuous-integration-min.png',
    title: 'Building APIs',
    author: '10 min read',
    cols: 2,
  },
];
