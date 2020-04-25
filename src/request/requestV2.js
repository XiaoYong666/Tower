import Axios from 'axios';
import md5 from "md5"

let mydate = new Date()

let app =new Axios.create({
    baseURL: 'https://backside.liuzhengdong.top:7865',
    //baseURL: 'http://localhost:7865',
    //baseURL: 'http://localhost:7865',
    timeout:7000,
    headers: {
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin":"*"
        }
})


app.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    /* console.log(token) */
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

/**新建一个砖石√
 * @param {String} title 砖石名称
 * @param {String} user 砖石创造者
 * @returns {Object} 接受状态和砖石的数据
 */
let createNewBrick = async function(title){

    let {data} = await app.post('/danger/createNewBrick',{title})
    let {ok,res}=data
    return {ok,res}
}


/**新建一个模块√
 *
 *
 * @param {String} name
 * @param {string} id
 * @returns {Object} 接受状态和砖石的数据
 */
let createNewModule = async function(name,id){
    //{title:"",time:"这个不用，服务器自己来","user":""}
    let {data} = await app.post('/danger/createNewModule',{name,id})
    
    return data.res
}



/**新建一篇文章√
 *
 *
 * @param {String} title
 * @param {String} titleId
 * @param {String} classfication
 * @param {String} subTitle
 * @param {String} content
 * @param {Object} creator
 * @return 
 */
let createNewParagraph = async function(title,topicId,moduleId){

    let {data} = await app.post('/danger/createNewParagraph',{title,topicId,moduleId})
    let {ok,res}=data
    return {ok,res}
    //要返回文章自己的id,
}

/**新建在看状态
 *
 *
 * @param {string} paragraphId
 * @returns
 */
let createWatching = async function(paragraphId){

    let {data} = await app.post('/danger/createWatching ',{paragraphId})
    let {ok}=data
    return {ok}
}



/**修改一个砖石的名字√
 *
 *
 * @param {*} id
 * @param {*} name
 * @returns
 */
let changeBrickName = async function(id,name){
    //{id:"",time:"这个不用，服务器自己来","user":"",title:""}
    let {data} = await app.post('/danger/changeBrickName',{id,name})
    let {ok}=data
    return {ok}
}

/**修改一个模块的名字√
 *
 *
 * @param {string} id
 * @param {object} brick
 * @returns
 */
let changeModuleName = async function(id,moduleId,name){
    //{id:"",time:"这个不用，服务器自己来","user":"",title:""}
    let {data} = await app.post('/danger/changeModuleName',{id,moduleId,name})
    let {ok}=data
    return {ok}
}

/**修改模块的排序√
 *
 *
 * @param {string} id
 * @param {object} brick
 * @returns
 */
let changeModuleSort = async function(id,modules){
    //{id:"",time:"这个不用，服务器自己来","user":"",title:""}
    let {data} = await app.post('/danger/changeModuleSort',{id,modules})
    let {ok}=data
    return {ok}
}

/**修改文章的名字√
 *
 *
 * @param {string} id
 * @param {string} name
 * @returns
 */
let changeParaName = async function(id,paraId,moduleId,name){
    /* console.log({id,paraId,moduleId,name}) */
    //{id:"",time:"这个不用，服务器自己来","user":"",title:""}
    let {data} = await app.post('/danger/changeParaName',{id,paraId,moduleId,name})
    let {ok}=data
    return {ok}
}

/**修改文章的排序√
 *
 *
 * @param {string} id
 * @param {object} brick
 * @returns
 */
let changeParaSort = async function(id,moduleId,content){
    //{id:"",time:"这个不用，服务器自己来","user":"",title:""}
    let {data} = await app.post('/danger/changeParaSort',{id,moduleId,content})
    let {ok}=data
    return {ok}
}

/**修改一篇文章内容√
 *
 *
 * @param {string} id
 * @param {string} content
 * @returns
 */
let changePara = async function(id,content){
    //{id:"",paragraph:"",time:"这个不用，服务器自己来","user":""}
    let {data} = await app.post('/danger/changePara',{id,content})
    let {ok} = data
    return {ok}
}



/**点赞一个文章
 *
 *
 * @param {string} id
 * @returns
 */
let likePara = async function(id){
    //{id:"",paragraph:"",time:"这个不用，服务器自己来","user":""}
    let {data} = await app.get('/api/likePara',{
        params:{
            id
        }
    })
    let {ok} = data
    return {ok}
}

/**获取一篇文章get
 *
 *
 * @param {string} id
 * @returns
 */
let getPara = async function(id){
    //{id:"",paragraph:"",time:"这个不用，服务器自己来","user":""}
    let {data} = await app.get('/api/getPara',{
        params:{id}
    })
    
    return data
}

/**获取评论
 *
 *
 * @param {*} id
 * @returns
 */
let getComment = async function(bindId){
    //{id:"",paragraph:"",time:"这个不用，服务器自己来","user":""}
    let {data} = await app.get('/api/getComment',{
        params:{
            bindId
        }
    })
    
    return data
}

/**删除一个评论
 *
 *
 * @param {*} id
 * @returns
 */
let deleteComment = async function(bindId,id){
    //{id:"",paragraph:"",time:"这个不用，服务器自己来","user":""}
    let {data} = await app.get('/api/deleteComment',{
        params:{
            bindId,
            id
        }
    })
    
    return data
}

/**创建评论
 *
 *
 * @param {*} id
 * @returns
 */
let createComment = async function(bindId,type,content,positionX,positionY){
    //{bindID:"",paragraph:"",time:"这个不用，服务器自己来","user":""}
    let {data} = await app.post('/danger/createComment',{bindId,type,content,positionX,positionY})
    
    return data
}




/**获取个砖石get
 *
 *
 * @param {string} id
 * @returns
 */
let getBrick = async function(id){
    
    let {data} = await app.get('/api/getBrick',{
        params:{
            id
        }
    })
    //console.log(data)
    let {ok,res}= data
    return {ok,res}
}

/**获取一个人的个人信息get
 *
 *
 * @param {string} id
 * @returns
 */
let getPersonInfo = async function(id){
    let {data} = await app.get('/api/getPersonInfo',{
        params:{
            id
        }
    })
    let {ok,person}= data
    return {ok,person}
}

/**删除一个砖石
 *
 *
 * @param {string} id
 * @returns
 */
let deleBrick = async function(id){
    let {data} = await app.get('/api/deleBrick',{
        params:{
            id
        }
    })
    let {ok}= data
    return {ok}
}

/**删除一个模块
 *
 *
 * @param {string} id
 * @param {object} brick
 * @returns
 */
let deleModule = async function(id,moduleName){
    let {data} = await app.get('/api/deleModule',{
        params:{
            id,
            moduleName
        }
    })
    let {ok}= data
    return {ok}
}

/**删除一个篇文章
 *
 *
 * @param {string} id
 * @returns
 */
let delePara = async function(id){
    let {data} = await app.get('/api/delePara',{
        params:{
            id
        }
    })
    let {ok}= data
    return {ok}
}

/**得到token
 *
 *
 * @param {string} user
 * @param {string} password
 * @returns
 */
let getToken = async function(email,password){

    let {data} = await app.post('/login', {
		email: email,
		password: md5(password)
	})
    if(data.code == 1){
        localStorage.setItem('token', data.token);
        localStorage.setItem('loseToken',mydate.toLocaleDateString())
        
        return true
    }else if(data.code==2 || data.code==4){
        alert(data.message);
        return false
    }else if(data.code==3){
        alert(data.message);
        localStorage.setItem('token', data.token);
        localStorage.setItem('loseToken',mydate.toLocaleDateString())
        
        return true
    }
}

/**搜索
 *
 *
 * @param {*} query
 * @returns
 */
let search =async function(query){
    let {data} = await app.get('/search',{
        params:{
            query
        }
    })
    return data
}

let getSomeBrick =async function(){
    let {data} = await app.get('/api/getSomeBrick')
    return data
}

let watchingAdd =async function(id){
    let {data} = await app.get('/api/watchingAdd',{
        params:{
            id
        }
    })
    return data
}

let descriptionAdd =async function(id,description){
    let {data} = await app.post('/danger/descriptionAdd',{
id,description
    })
    return data
}




let request={
    descriptionAdd,
    createNewBrick,
    createNewModule,
    createNewParagraph,
    createWatching,
    changeBrickName,
    changeModuleName,
    changeModuleSort,
    changeParaName,
    changeParaSort,
    changePara,
    likePara,
    getPara,
    getBrick,
    getPersonInfo,
    deleBrick,
    deleModule,
    delePara,
    getToken,
    getComment,
    deleteComment,
    createComment,
    search,
    getSomeBrick,
    watchingAdd
}

export default request
