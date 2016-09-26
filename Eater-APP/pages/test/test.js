
const app=getApp();

const API_URL="http://apicloud.mob.com/v1/cook/menu/search?page=1&name=%E7%BA%A2%E7%83%A7%E8%82%89&cid=0010001007&key=17113fceca309&size=10";

var page = {
    data: {
        caiItems:[]
    },
    onLoad: function( options ) {
    //调用网络请求
    app.httpClient( API_URL , ( error, data ) => {

      if( data.retCode == 200 ) {
        this.setData( {
          caiItems:data.result.list,
        })
      }else{
          console.log("服务器异常")
      }
      
    })
    
  },

}

Page( page )