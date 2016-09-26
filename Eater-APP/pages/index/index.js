//index.js
//获取应用实例
const app = getApp()

const APIURL = "http://apicloud.mob.com/appstore/lucky/mobile/query?key=17113fceca309&mobile="

var page = {
  data: {
    result_tips: '',
    query_result: '无心插柳柳成荫，命中须有莫须有',
    inputValue: "",
    loading: false,
  },
  //查询手机归属地的方法
  btnPhone: function() {
    
    console.log( this.data.inputValue )

    //调用网络请求
    app.httpClient( APIURL + this.data.inputValue, ( error, data ) => {

      // if(!data.result.value) return

      console.log( data.result.conclusion)
      
      this.setData({loading:true})

      if( data.retCode == 200 ) {
        this.setData( {
          result_tips:'查询结果为如下: ',
          query_result:data.result.conclusion,
          loading:false
        })
      }
      
    })
  },
  //输入绑定的方法
  bindKeyInput: function( e ) {
    this.setData( {
      inputValue: e.detail.value
    })
  },
  onLoad: function() {

  },
}

Page( page )


