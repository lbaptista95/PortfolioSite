import React from 'react'

import VimeoPlayer from './VimeoPlayer'
import ImageFrame from './ImageFrame'
import SkillList from './SkillList'

export default function ProjectItem(props) {

  const { name, description, mediaList, skillNames } = props.project

  let images = []
  let videos = []


  for (let i = 0; i < mediaList.length; i++) {
    if (mediaList[i].type == "image")
      images.push(mediaList[i])
    else
      videos.push(mediaList[i])
  }


  //const videoPlayers = videos.map(video => (<VimeoPlayer vid={video} />))
  const imageFrames = images.map(image => (<ImageFrame img={image} />))

  const mediaBox = (
    <div className="project-item-media-box">
      <VimeoPlayer vids={videos} />
      {imageFrames}
    </div>
  )

  return (
    <div className='project-item'>
      <div className="project-item-info">
        {mediaList.length>0 && mediaBox}
        <div className="project-item-text-box">
          <h3 className="project-item-info-title">{name}</h3>
          <h4 className="project-item-info-description">{description}</h4>
          <SkillList skills={skillNames} />
        </div>
      </div>
    </div>
  );
}