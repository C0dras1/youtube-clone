import React from 'react';
import {Divider} from 'semantic-ui-react';
import {VideoGridHeader} from '../VideoGridHeader/VideoGridHeader';
import './VideoGrid.scss';
import {VideoPreview} from '../VideoPreview/VideoPreview';

export function VideoGrid(props) {
  const divider = props.hideDivider ? null : <Divider />;
  return (
    <React.Fragment>
      <VideoGridHeader title={props.title}/>
      <div className='video-grid'>
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
      </div>
      {divider}
    </React.Fragment>
  )
}