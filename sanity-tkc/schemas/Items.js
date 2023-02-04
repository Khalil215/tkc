export default {
  name: 'items',
  title: 'Items',
  type: 'document',
  fields:[
    {
      name: "title",
      title: "Title",
      type:"string",
    },
    {
      name: "image",
      title: "Image",
      type:"image",
    },
    {
      name: "prices",
      title: "Prices",
      type:"array",
      of: [{type:"reference", to:{type:'priceList'}}]
    },
    {
      name: "extras",
      title: "Extras",
      type:"string",
    },
    {
      name: "extrasList",
      title: "ExtrasList",
      type:"array",
      of: [{type:"reference", to:{type:'priceList'}}]
    },
    {
      name: "instagram",
      title: "Instagram",
      type:"reference",
      to: [{type:'socials'}]
    },
    {
      name: "whatsapp",
      title: "Whatsapp",
      type:"reference",
      to: [{type:'socials'}]
    },
    {
      name: "carousel",
      title: "Carousel",
      type:"array",
      of: [{type:"image"}],
      options:{
        hotspot: true
      }
    },
    
  ]
}