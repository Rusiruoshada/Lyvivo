interface ResponsiveTypes {
  desktop:{
    breakpoint: {max:number, min:number},
    items: number,
    slidesToSlide: number,
    
  },
  tablet:{
    breakpoint: {max:number, min:number},
    items: number,
    slidesToSlide: number,
    
  },
  mobile:{
    breakpoint: {max:number, min:number},
    items: number,
    slidesToSlide: number,
    
  },
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1024, min: 769 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 768, min: 465 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
  };

  export default responsive;

  