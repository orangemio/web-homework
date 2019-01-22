
Vue.component(
    'comment',
    {   
        props:["comment"],
        template: '<li>{{comment.content}}</li>'
    }
)


Vue.component('todo-item', {
    template: '<li>这是个待办项</li>'
  })
var app = new Vue({
    el:'#app',
    data:{
        message:"hello",
        title:"hello",
        welcome:true,
        comments:[
            {content:"Great"},
            {content:"Orange"},
            {content:"Hello"},
        ],
    },
    methods: {
        showMessage(){
        console.log(this.welcome);
        },
        addComment:function(){
            this.comments.push({content:"New Message"});
        }
    },
})

