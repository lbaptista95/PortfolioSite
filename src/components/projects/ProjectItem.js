import React from 'react'

import VimeoPlayer from './VimeoPlayer'
import ImageFrame from './ImageFrame'
import SkillList from '../SkillList'
import ProjectTitle from './ProjectTitle'

export default function ProjectItem(props) {

  console.log(props.project)
  
  const { name, company, description, mediaList, skillNames } = props.project

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
      {videos.length>0 && <VimeoPlayer vids={videos} />}
      {imageFrames}
    </div>
  )

  const title = name + (company ? ` @ ${company}` : "")

  
  return (
    <div className='project-item'>
      <div className="project-item-info">
        {mediaList.length>0 && mediaBox}
        <div className="project-item-text-box">
          <ProjectTitle title={title}/>          
          <h4 className="project-item-info-description">{description}</h4>
          <SkillList skills={skillNames} useLabel={true} parentClass="project-item" />
        </div>
      </div>
    </div>
  );
}