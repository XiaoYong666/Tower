import Axios from 'axios';

let app =new Axios.create({
    //baseURL: 'http://47.100.193.107:7865',
    baseURL: 'http://localhost:7865',
    timeout:7000,
    headers: {
            "Content-Type":"application/json"
        }
})


Axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    config.headers.common['Authorization'] = 'Bearer ' + token;
    return config;
})

/**新建一个砖石
 * @param {String} title 砖石名称
 * @param {String} user 砖石创造者
 * @returns {Object} 接受状态和砖石的数据
 */
let createNewBrick = async function(title,user){

    let {data} = await app.post('/api/createNewBrick',{title,user})
    let {ok,brickData}=data
    return {ok,brickData}
}


/**新建一个模块
 *
 *
 * @param {String} name
 * @param {string} id
 * @returns {Object} 接受状态和砖石的数据
 */
let createNewModule = async function(name,id){
    //{title:"",time:"这个不用，服务器自己来","user":""}
    let {data} = await app.post('/api/createNewModule',{name,id})
    
    return data
}



/**新建一篇文章
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
let createNewParagraph = async function(title,topicId,moduleId,content,creator){

    let {data} = await app.post('/api/createNewParagraph',{title,topicId,moduleId,content,creator})
    let {ok,brickData}=data
    return {ok,brickData}
    //要返回文章自己的id,
}

/**新建在看状态
 *
 *
 * @param {string} paragraphId
 * @returns
 */
let createWatching = async function(paragraphId){

    let {data} = await app.post('/api/createWatching ',{paragraphId})
    let {ok}=data
    return {ok}
}



/**修改一个砖石的名字
 *
 *
 * @param {*} id
 * @param {*} name
 * @returns
 */
let changeBrickName = async function(id,name){
    //{id:"",time:"这个不用，服务器自己来","user":"",title:""}
    let {data} = await app.post('/api/changeBrickName',{id,name})
    let {ok}=data
    return {ok}
}

/**修改一个模块的名字
 *
 *
 * @param {string} id
 * @param {object} brick
 * @returns
 */
let changeModuleName = async function(id,moduleId,name){
    //{id:"",time:"这个不用，服务器自己来","user":"",title:""}
    let {data} = await app.post('/api/changeModuleName',{id,moduleId,name})
    let {ok}=data
    return {ok}
}

/**修改模块的排序
 *
 *
 * @param {string} id
 * @param {object} brick
 * @returns
 */
let changeModuleSort = async function(id,modules){
    //{id:"",time:"这个不用，服务器自己来","user":"",title:""}
    let {data} = await app.post('/api/changeModuleSort',{id,modules})
    let {ok}=data
    return {ok}
}

/**修改文章的名字
 *
 *
 * @param {string} id
 * @param {string} name
 * @returns
 */
let changeParaName = async function(id,paraId,moduleId,name){
    console.log({id,paraId,moduleId,name})
    //{id:"",time:"这个不用，服务器自己来","user":"",title:""}
    let {data} = await app.post('/api/changeParaName',{id,paraId,moduleId,name})
    let {ok}=data
    return {ok}
}

/**修改文章的排序
 *
 *
 * @param {string} id
 * @param {object} brick
 * @returns
 */
let changeParaSort = async function(id,moduleId,content){
    //{id:"",time:"这个不用，服务器自己来","user":"",title:""}
    let {data} = await app.post('/api/changeParaSort',{id,moduleId,content})
    let {ok}=data
    return {ok}
}

/**修改一篇文章内容
 *
 *
 * @param {string} id
 * @param {string} content
 * @returns
 */
let changePara = async function(id,content){
    //{id:"",paragraph:"",time:"这个不用，服务器自己来","user":""}
    let {data} = await app.post('/api/changePara',{id,content})
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
        params:{
            id
        }
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
let createComment = async function(id,type,content,positionX,positionY){
    //{id:"",paragraph:"",time:"这个不用，服务器自己来","user":""}
    let {data} = await app.post('/api/createComment',{id,type,content,positionX,positionY})
    
    return data
}




/**获取个砖石get
 *
 *
 * @param {string} id
 * @returns
 */
let getBrick = async function(id){
    //{id:"",paragraph:"",time:"这个不用，服务器自己来","user":""}
    let {data} = await app.get('/api/getBrick',{
        params:{
            id
        }
    })
    let {ok,brickData}= data
    return {ok,brickData}
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
    let res = await app.post('/login', {
		email: email,
		password: password
	})
    if(res.code === '000001'){
        localStorage.setItem('token', res.data);
        localStorage.setItem('token_exp', new Date().getTime());
        return true
    }else{
        alert(res.msg);
        return false
    }
}




let request={
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
    createComment
}

export default request
