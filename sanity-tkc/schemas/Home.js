export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields:[
    {
      name: "carousel",
      title: "Carousel",
      type:"array",
      of: [{type: 'image'}],
      options:{
        hotspot: true
      }

    },
    {
      name: 'menu',
      title: "Menu",
      type: "array",
      of: [{type:"reference", to:{type:'menuList'}}]
    }
  ]
}