import React, { Component } from 'react';

import Mix from './mix'

class MixList extends Component {

  static defaultProps = {
    "mixes": [{
    "name": "Operation Doomsday",
    "artist": "MF DOOM",
    "date": "11/11",
    "image_url": "https://djbooth.net/.image/t_share/MTUzNDg1OTkyMjgzNDgxMjg2/image-placeholder-title.jpg",
    "description": "Losing your brother and being dropped by your record label in the same week can do things to your psyche. Dumile fell off the grid for several years to collect himself and re-emerged at the Nuyorican Poets Cafe in New York, adorned in a metal mask. He was scorned by the industry the same way Doctor Doom thought the world had shunned him when he fucked up that science experiment in college. Operation: Doomsday was his rebirth.",
    "tags": ["Hip-Hop", "Rap", 'Psychedelic Rock', 'Detroit House', 'Afrobeat']
    },
    {
    "name": "MM..FOOD?",
    "artist": "MF DOOM",
    "date": "15/2",
    "image_url": "https://djbooth.net/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1000/MTUzNDg1OTkxNzQ2NjEwMzc0/image-placeholder-title.jpg",
    "description": "Fourteen years ago, DOOM decided to make an album about food. Not because of our inherent relationship with food, but because hip-hop had forgotten what it was like to just enjoy a snack. “It’s about the beats / Not about the streets of who food he ‘bout to eat,” he claims on opener “Beef Rapp.”",
    "tags": ["Hip-Hop"]
    },
    {
    "name": "Madvillainy",
    "artist": "Madlib & MF DOOM",
    "date": "1/9",
    "image_url": "https://djbooth.net/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_600/MTUzNDg1OTkyNTUxODUxMjA2/image-placeholder-title.jpg",
    "description": "Some artists were just born to work together. When their paths eventually cross, they bring out the best in each other and form a unit greater than the sum of its parts. In 2004, that duo was MF DOOM and Madlib.",
    "tags": ["Hip-Hop"]
    },
    {
    "name": "Vaudeville Villain",
    "artist": "Viktor Vaughn",
    "date": "11/11",
    "image_url": "https://djbooth.net/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1000/MTUzNDg1OTkxNzQ4NTc2NDU0/image-placeholder-title.jpg",
    "description": "If MF DOOM is the despot ruling over the streets, then Viktor Vaughn is the youngblood running through them. Coming four years after the comeback that was Operation: Doomsday, there’s a focus and a hunger pushing Dumile from “Modern Day Mugging” to a post-apocalyptic sci-fi open mic night without missing a tonal step. As Vaughn, Dumile’s style is more confrontational and direct than that of the masked villain proper. He wants you to know just how wack you are.",
    "tags": ["Hip-Hop"]
    },
    {
    "name": "Take Me to Your Leader",
    "artist": "King Geedorah",
    "date": "11/11",
    "image_url": "https://djbooth.net/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_600/MTUzNDg1OTkyMDE2MTU5OTQy/image-placeholder-title.jpg",
    "description": "A cutout of the three-headed Godzilla villain King Ghidorah staring down a battalion of paper tanks. A diorama cover is about as apt a choice for an album by a sample-heavy producer like DOOM (here under the alias King Geedorah), who crafted all but one song on this joint project..",
    "tags": ["Hip-Hop"]
    }
    ]
  }

  render() {
    return (
      <div>
        <div className="row">
          {this.props.mixes.map((mix) => <Mix mix={mix} key={mix.name}/>)}
        </div>
      </div>
  )}
}

export default MixList;
