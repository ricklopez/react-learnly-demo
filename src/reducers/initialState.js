export default function(resolvers) {
  return {
    home: {
      h1_1: "Lorem Ipsum",
      p_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      form_h2_1: "non diam phasellus"  
    },
    signin: {
      h2_1: "Lorem Ipsum",
      button_label_1: "non diam phasellus" 
    },
    public: {
      courses: {
        live: [],
        video:[]
      }
    },
    auth: {
      isAuthenticated: false,
      h1_1: "Lorem Ipsum",
      user:null,
      courses: {
        live: [],
        video: []
      }
    }
  }
}