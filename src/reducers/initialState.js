export default function(resolvers) {
  return {
    home: {
      test:"value",
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
        live: [{id: 1, title:  "Lorem Ipsum", comver_img:"https://via.placeholder.com/350x350"}, {id: 2, title:  "Lorem Ipsum", comver_img:"https://via.placeholder.com/350x350"},{id: 3, title:  "Lorem Ipsum", comver_img:"https://via.placeholder.com/350x350"}, {id: 4, title:  "Lorem Ipsum", comver_img:"https://via.placeholder.com/350x350"}],
        video: [{id: 1, title:  "Lorem Ipsum", comver_img:"https://via.placeholder.com/350x350"}, {id: 2, title:  "Lorem Ipsum", comver_img:"https://via.placeholder.com/350x350"},{id: 3, title:  "Lorem Ipsum", comver_img:"https://via.placeholder.com/350x350"}, {id: 4, title:  "Lorem Ipsum", comver_img:"https://via.placeholder.com/350x350"}],
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