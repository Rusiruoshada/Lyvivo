interface ResponsiveTypes {
  desktop:{
    breakpoint: {max:number, min:number}
    items: number,
    slidesToSlide: number
  },
  tablet:{
    breakpoint: {max:number, min:number}
    items: number,
    slidesToSlide: number
  },
  mobile:{
    breakpoint: {max:number, min:number}
    items: number,
    slidesToSlide: number
  },
}

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  export default responsive;

  