interface ResponsiveTypes {
  desktop:{
    breakpoint: {max:number, min:number},
    items: number,
    slidesToSlide: number,
    partialVisibilityGutter?: number,
  },
  laptop:{
    breakpoint: {max:number, min:number},
    items: number,
    slidesToSlide: number,
    partialVisibilityGutter?: number,
  },
  tablet:{
    breakpoint: {max:number, min:number},
    items: number,
    slidesToSlide: number,
    partialVisibilityGutter?: number,
  },
  mobile:{
    breakpoint: {max:number, min:number},
    items: number,
    slidesToSlide: number,
    partialVisibilityGutter?: number,
  },
}

const responsive:ResponsiveTypes = {
  desktop: {
    breakpoint: { max: 3000, min: 1025 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1024, min: 769 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
    
  },
  tablet: {
    breakpoint: { max: 768, min: 465 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
    partialVisibilityGutter: -20,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: -100,
    
  }
  };

  export default responsive;

  