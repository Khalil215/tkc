export default {
  name: 'footer',
  type: 'document',
  title: 'Footer',
  fields: [
    {
      name: "contact",
      title: "Contact",
      type:"array",
      of: [{type:"reference", to:{type:'contact'}}]
    },
    {
      name: "location",
      title: "Location",
      type:"string",
    },
    {
      name: "slogan",
      title: "Slogan",
      type:"string",
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
      name: "days",
      title: "Days",
      type:"string",
    },
    {
      name: "hours",
      title: "Hours",
      type:"string",
    },

  ]
}