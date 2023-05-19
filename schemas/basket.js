export default {
  name: 'basket',
  type: 'document',
  title: 'Basket',
  fields: [
    {name: 'id', type: 'string', title: 'Basket ID'},
    {name: 'name', type: 'string', title: 'Basket Name'},
    {name: 'owner', type: 'string', title: 'Owner'},
    {name: 'category', type: 'string', title: 'Category'},
    {name: 'content', type: 'array', title: 'Content', of: [{type: 'string'}]},
  ],
}
