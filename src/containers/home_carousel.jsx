import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'assets/images/LogoFinal.jpg',
    title: "New Website Live!",
    caption: `All new mixes week in week out`,
    link: null,
    link_url: '/',
    pos: 'left'
  },
  {
    src: 'assets/images/lifex.jpeg',
    title: 'Life Experience w/ John Loveless',
    caption: `If you came to the first one, you know the deal. If you didn’t, we believe in second chances.
      This time it's John Loveless in the driving seat. He'll melt your brain Hacienda style.
      The residents will do their thing, come do yours.`,
    link: 'See Tickets',
    link_url: '/',
    pos: "left"
  },
  {
    src: 'assets/images/lifex2.png',
    title: 'Life Experience w/ Proteus',
    caption: `Life Experience is throwing its debut party.
      Proteus and residents are supplying 6 hours of dark and driving music.
      There's a cage inside. There's a garden outside.
      We can't promise anything, but you may just gain some life experience.`,
    link: 'See Tickets',
    link_url: '/',
    pos: "right"
  },
  {
    src: 'assets/images/djpremier.jpg',
    title: 'MASTA ACE – EAT (FEAT. EVIDENCE) (PROD. BY DJ PREMIER)',
    caption: `Finally DJ Premier x Masta Ace collabo!! Rumours say it’s a beat from 2011 created for Nick Javas. It will be released on the Digital Deluxe Edition of the album “A Breukelen Story” together with another Marco Polo produced song, and those bonus songs also being released as a 45 vinyl!!`,
    link: 'Listen Here',
    link_url: '/',
    pos: "right"
  }
];

class HomeCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {

      const posClass = `carousel-item-info carousel-info-${item.pos}`

      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.caption}
          ride="carousel"
        >
          <img className="home-carousel-image" src={item.src} alt={item.altText} />
          <div className={posClass}>
            <div className="home-carousel-info">
              <h2 className="carousel-text">{item.title}</h2>
              <p className="carousel-text">{item.caption}</p>
              {item.link ? <a href={item.link_url} className="carousel-text carousel-info-button">{item.link}</a> : ""}
            </div>

          </div>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />

        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}



export default HomeCarousel;
