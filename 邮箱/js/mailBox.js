/**
 * Created by rimi on 16/12/19.
 */

// mail 主页 settings
var data=new Date(),
    year=data.getFullYear(),
    month=data.getMonth()+1,
    m=month<10?"0"+month:month,
    day=data.getDate(),
    d=day<10?"0"+day:day,
    cont="经历得越多，就越清楚人生很多时候不能将就。也许一时的将就能够带来一段时间的便利，" +
        "但是总会在以后的某一天悔不当初。所以，我宁愿当下辛苦地追求自己想要的，也不愿意将就。" +
        "我要给自己足够的阳光，好让我的生活明媚不忧伤。我控制不了天气，也不在乎窗外是晴是雨，" +
        "但是我尽量给自己一份好心情，充实自己的生活，" +
        "不能让自己有时间伤春悲秋，自怜自艾。愿我的生活明媚不忧伤，带着内心的阳光走过以后的晴朗和阴霾。",
    infos=[ /* 数据*/
    {
        name:"秋叶🍃",
        title:"秋天但是总会在以后的某一天悔不当初始于“立秋”",
        email:"sincerer@april.biz",
        content:cont,
        rank:6,
        time:m+"-"+d
    },
    {
        name:"春天",
        title:"春天始于二十四节气中的立春",
        email:"shanna@april.biz",
        content:cont,
        rank:7,
        time:m+"-"+d
    },
    {
        name:"夏天",
        title:"夏天始于“立夏”",
        email:"hhhsjw@april.biz",
        content:cont,
        time:m+"-"+d
    },
    {
        name:"冬天",
        title:"冬天始于“立冬”",
        email:"julianne@april.biz",
        content:cont,
       rank:6,
        time:m+"-"+d
    },
    {
        name:"蓝天",
        title:"来这里看看蓝天吧",
        email:"luc_h@april.biz",
        content:cont,
        rank:9,
        time:m+"-"+d
    },
    {
        name:"海洋",
        title:"来这里看看海洋吧",
        email:"telly.hoeger@april.biz",
        content:cont,
        rank:7,
        time:m+"-"+d
    },
    {
        name:"🍎",
        title:"来这里看看苹果吧",
        email:"karley@april.biz",
        content:cont,
        rank:4,
        time:m+"-"+d
    },
        {
            name:"小草",
            title:"来这里看看小草吧",
            email:"lovepupu@april.biz",
            content:cont,
            rank:6,
            time:m+"-"+d
        },
        {
            name:"满天星",
            title:"来这里看看满天星吧",
            email:"karley@april.biz",
            content:cont,
            rank:8,
            time:m+"-"+d
        },
        {
            name:"月牙",
            title:"来这里看看月牙吧",
            email:"lovepupu@april.biz",
            content:cont,
            rank:5,
            time:m+"-"+d
        },
        {
            name:"🍊",
            title:"来这里看看橙子吧",
            email:"karley@april.biz",
            content:cont,
            rank:7,
            time:m+"-"+d
        },
        {
            name:"🐟",
            title:"来这里看看鱼儿吧",
            email:"karley@april.biz",
            content:cont,
            rank:6,
            time:m+"-"+d
        }
];

// 侧导航的插件设置
// 封装一些函数*/
var now="",
    show_per_page =8, //每页显示的数目
    nowPage=0,
    lis=[],
number_of_pages = Math.ceil(infos.length/show_per_page); //获取content对象里面，数据的数量

for(var i=0;i<number_of_pages;i++){   //创建要生成的分页按钮数组，按钮个数
        lis.push({id:i+1});
    }
var app=angular.module("myApp",['ngRoute']);
// app.provider("Data",function () {  // 利用服务service来提供一个全周期数据
//     this.$get=function () {
//         return{
//             sendMail:""
//         }
//     }
// });
app.directive("onFishishRenderFilter",function ($timeout) { //设置渲染后操作DOM
    return{
        restrict:'AEMC',
        link:function (scope,element,attr) {
            if(scope.$last===true){   //最后一个ng-repeat渲染出来之后再进行
                $timeout(function () {
                    scope.$emit('ngRepeatFinished');
                })
            }
        }
    };
});
app.controller("inboxCtrl",["$scope","$location",function($scope,$location) {      // 默认页面 收件箱的js设置
    $scope.ins=infos;
    $scope.lis=lis; //分页设置
    function changePages(a) {  //封装分页的函数
        nowPage=a;  //设置上一页和下一个将匹配的页面数
        angular.forEach($scope.ins,function (data,index) {   /*数据的展示*/
          $("#allChecked").prop("checked",false);
            var aa=[];
            if(a<=1){  //如果当前是第一页那么禁用pre点击事件
                $('#next').removeClass("disabled");
                $('#pre').addClass("disabled");
                a=1;
            }
            else if(a>=number_of_pages){  //如果当前是最后一页那么禁用next点击事件
                $('#pre').removeClass("disabled");
                $('#next').addClass("disabled");
                a=number_of_pages;
            }
            if (a*show_per_page<=$scope.ins.length){  //加载数据不超过定义数据时
                for(var i=a*8-8;i<a*show_per_page;i++){
                    if(true){aa.push($scope.ins[i]);}
                }
                $scope.infos=aa;
            }else {
                for(var i=a*8-8;i<$scope.ins.length;i++){ //加载数据超过定义数据时,长度只能是定义数据
                    if(true){aa.push($scope.ins[i]);}
                }
                $scope.infos=aa;
            }
        });
    };
    changePages(1);//页面初始化
    $scope.skipPages=function (a) {  //点击分页码进行对应的跳转
        changePages(a);
    }
    $scope.pre=function () {  //点击上一页的设置
        changePages(--nowPage);
    };
    $scope.next=function () {  //点击下一页的设置
        changePages(++nowPage);
    };
    $scope.$on('ngRepeatFinished',function (event) {
        $(".inboxPageLi").eq(nowPage-1).addClass("active").siblings().removeClass('active');
    });
    $scope.select=function () {  //展示页面的单个input点击设置
        var i=0;
        angular.forEach($("input[name = inBoxInt]"),function(data,index) {  //下面的input反选全选的选中和不选中
            if(data.checked===true){i++;}
            if($("input[name = inBoxInt]").length===i){$("#allChecked").prop("checked",true);}
            else{$("#allChecked").prop("checked",false);}
        });
    };
    $scope.del=function () {    //点击删除的删除事件
        angular.forEach($("input[name = inBoxInt]"),function(data,index) {
            if(data.checked===true){
                $scope.infos.splice(index, 1);
            }
        });
    };
    $scope.skipContent =function (info) {  /*点击收件箱title跳进的页面*/
        now=info;
        $location.path('skipContent');
    };
}]);

app.controller('skipContentCtrl',function($scope){  /*点击收件箱title跳进邮件具体信息的页面*/
    $scope.infos=infos;
    $scope.nowInfos=now;
});
app.controller('contactCtrl',function($scope,$location){   /*点击收件箱联系人跳进的页面*/
    $scope.infos=infos;
     $scope.skipFriendList =function (firendsDetail,Data) {   /*点击联系人跳进联系人详情的页面*/
         $scope.sendMail = Data;
         $scope.firends=firendsDetail;
     };
});
app.controller('outboxCtrl',function($scope,$routeParams){    /*点击发件箱跳进的页面*/
    if($routeParams.email==='0'){$scope.sendMail=""} //点击好友列表的发送邮件，在发件箱获取当前好友的邮箱号
    else{$scope.sendMail=$routeParams.email;}
});

app.directive("model",function () {  /*点击好友姓名弹出好友具体的信息*/
    return{
        restrict:"AMCE",
        transclude:true,
        templateUrl:"contactPages/friendList.html"
    };
});
app.config(["$routeProvider",function($routeProvider){  /*设置ng-view路由*/
    $routeProvider
        .when("/inbox",{  //初始化页面进入的时候就是收件箱页面
            controller:"inboxCtrl",
            templateUrl:"inbox.html"
        })
        .when("/contact",{  //收件箱页面点击联系人进入的时候就是联系人页面
            controller:"contactCtrl",
            templateUrl:"contact.html"
        })
        .when("/outbox/:email",{   //收件箱页面点击发件箱，和在联系人页面点击发送按钮进入的时候就是发件箱页面
            controller:"outboxCtrl",
            templateUrl:"outbox.html"
        })
        .when("/skipContent",{ //收件箱化页面点击title进入具体邮寄信息的页面
            controller:"skipContentCtrl",
            templateUrl:"skipContent.html"
        })
        .otherwise({redirectTo:"/inbox"});
}]);


