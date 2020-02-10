module.exports.category = function (req,res) {
    var result = {
        total:20,
        rows:[
            {id:1,categoryName:'特惠区',isDelete:1},
            {id:2,categoryName:'9.9包邮',isDelete:1},
            {id:3,categoryName:'男士馆',isDelete:1},
            {id:4,categoryName:'女士馆',isDelete:1},
            {id:5,categoryName:'生活馆',isDelete:1},
            {id:6,categoryName:'儿童区',isDelete:1},
            {id:7,categoryName:'母婴区',isDelete:1},
            {id:8,categoryName:'精品区',isDelete:1},
            {id:9,categoryName:'厨卫区',isDelete:1},
            {id:10,categoryName:'运动馆',isDelete:1},
            {id:11,categoryName:'户外馆',isDelete:1},
        ]
    }
    res.send(result);
};

module.exports.secondCategory = function (req,res) {
    var data = {
        total:28,
        rows:[
            {id:1,brandName:'耐克',categoryId:1,brandLogo:'/mobile/images/brand1.png'},
            {id:2,brandName:'adidas',categoryId:1,brandLogo:'/mobile/images/brand2.png'},
            {id:3,brandName:'三叶草',categoryId:1,brandLogo:'/mobile/images/brand3.png'},
            {id:4,brandName:'new balance',categoryId:1,brandLogo:'/mobile/images/brand4.png'},
            {id:5,brandName:'BEAU',categoryId:1,brandLogo:'/mobile/images/brand7.png'},
            {id:6,brandName:'匡威',categoryId:1,brandLogo:'/mobile/images/brand6.png'},
            {id:7,brandName:'耐克',categoryId:2,brandLogo:'/mobile/images/brand1.png'},
            {id:8,brandName:'new balance',categoryId:2,brandLogo:'/mobile/images/brand4.png'},
            {id:9,brandName:'耐克',categoryId:2,brandLogo:'/mobile/images/brand1.png'},
            {id:10,brandName:'匡威',categoryId:2,brandLogo:'/mobile/images/brand6.png'},
            {id:11,brandName:'三叶草',categoryId:2,brandLogo:'/mobile/images/brand3.png'},
            {id:12,brandName:'耐克',categoryId:2,brandLogo:'/mobile/images/brand1.png'},
            {id:13,brandName:'耐克',categoryId:3,brandLogo:'/mobile/images/brand1.png'},
            {id:14,brandName:'匡威',categoryId:3,brandLogo:'/mobile/images/brand6.png'},
            {id:15,brandName:'new balance',categoryId:3,brandLogo:'/mobile/images/brand4.png'},
            {id:16,brandName:'三叶草',categoryId:1,brandLogo:'/mobile/images/brand3.png'},
            {id:17,brandName:'new balance',categoryId:4,brandLogo:'/mobile/images/brand4.png'},
            {id:18,brandName:'BEAU',categoryId:4,brandLogo:'/mobile/images/brand7.png'},
            {id:19,brandName:'BEAU',categoryId:5,brandLogo:'/mobile/images/brand7.png'},
            {id:20,brandName:'new balance',categoryId:6,brandLogo:'/mobile/images/brand4.png'},
            {id:21,brandName:'BEAU',categoryId:6,brandLogo:'/mobile/images/brand7.png'},
            {id:22,brandName:'BEAU',categoryId:7,brandLogo:'/mobile/images/brand7.png'},
            {id:23,brandName:'耐克',categoryId:8,brandLogo:'/mobile/images/brand1.png'},
            {id:24,brandName:'adidas',categoryId:8,brandLogo:'/mobile/images/brand2.png'},
            {id:25,brandName:'adidas',categoryId:9,brandLogo:'/mobile/images/brand2.png'},
            {id:26,brandName:'匡威',categoryId:10,brandLogo:'/mobile/images/brand6.png'},
            {id:27,brandName:'耐克',categoryId:10,brandLogo:'/mobile/images/brand1.png'},
            {id:28,brandName:'耐克',categoryId:11,brandLogo:'/mobile/images/brand1.png'}
        ]
    }
    var id = req.query.id;
    var result = [];
    for(var i =0;i<data.rows.length;i++){
        if(data.rows[i].categoryId == id){
            result.push(data.rows[i]);
        }
    }
    res.send(result);
}

module.exports.searchResult = function (req,res) {
    var data = {
        total:4,
        rows:[
            {id:1,detail:'红蜻蜓 女式 惊艳红 春秋款高跟鞋',newPrice:299,oldPrice:360,proImg:'/mobile/images/product1.jpg'},
            {id:2,detail:'红蜻蜓 女式 惊艳红 春秋款高跟鞋',newPrice:298,oldPrice:360,proImg:'/mobile/images/product1.jpg'},
            {id:3,detail:'红蜻蜓 女式 惊艳红 春秋款高跟鞋',newPrice:297,oldPrice:360,proImg:'/mobile/images/product1.jpg'},
            {id:4,detail:'红蜻蜓 女式 惊艳红 春秋款高跟鞋',newPrice:296,oldPrice:360,proImg:'/mobile/images/product1.jpg'}
        ]
    };
    var keyword = req.query.keyword;//获取搜索关键字
    //通过关键字进行数据库查找---省略

    //返回搜索结果
    res.send(data);
}