$(window).load(function () { $(".loading").fadeOut() })  
 
$(document).ready(function(){
	var whei=$(window).width()
	$("html").css({fontSize:whei/20})
	$(window).resize(function(){
		var whei=$(window).width()
	 $("html").css({fontSize:whei/20})
});
});
$(function () {
    echarts_1();
	echarts_2();
	echarts_3();
	echarts_4();
	echarts_5();
	zb1();
	zb2();
	zb3();
	zb4();
function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
        option = {
                    tooltip : {
                        trigger: 'item',
                        formatter: "{b} : {c} ({d}%)"
                    },
                    legend: {
                        right:10,
                        top:30,
                        height:140,
                        itemWidth:10,
                        itemHeight:10,
                        itemGap:10,
                        textStyle:{
                            color: 'rgba(255,255,255,.6)',
                            fontSize:12
                        },
                        orient:'vertical',
                        data: ['力学', '交通运输​', '机械工程​​', '交通运输工程​​', '机械​​', '管理科学与工程​​', '工程管理​​']
                    },
                   calculable : true,
                    series : [
                        {
                            name:' ',
							color: ['#62c98d', '#2f89cf', '#4cb9cf', '#53b666', '#62c98d', '#205acf', '#c9c862'],	
                            type:'pie',
                            radius : [30, 70],
                            center : ['35%', '50%'],
                            roseType : 'radius',
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },

                            lableLine: {
                                normal: {
                                    show: false
                                },
                                emphasis: {
                                    show: true
                                }
                            },

                            data:[
                                {value:4.9, name:'力学'},
                                {value:20, name:'机械工程​​'},
                                {value:12, name:'交通运输工程​​'},
                                {value:40, name:'机械​​'},
                                {value:10, name:'交通运输​'},
                                {value:4.9, name:'管理科学与工程​​'},
                                {value:8.2, name:'工程管理​​'}
                            ]
                        },
                    ]
                };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

        option = {
                    tooltip : {
                        trigger: 'item',
                        formatter: "{b} : {c} ({d}%)"
                    },
                    legend: {
                        right:10,
                        top:30,
                        height:140,
                        itemWidth:10,
                        itemHeight:10,
                        itemGap:10,
                        textStyle:{
                            color: 'rgba(255,255,255,.6)',
                            fontSize:12
                        },
                        orient:'vertical',
                        data: ['力学', '交通运输​', '机械工程​​', '交通运输工程​​', '机械​​', '管理科学与工程​​', '工程管理​​']
                    },
                   calculable : true,
                    series : [
                        {
                            name:' ',
							color: ['#62c98d', '#205acf', '#c9c862', '#c98b62', '#c962b9', '#7562c9','#c96262'],	
                            type:'pie',
                            radius : [30, 70],
                            center : ['35%', '50%'],
                            roseType : 'radius',
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },

                            lableLine: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },

                            data:[
                                {value:1.2, name:'力学'},
                                {value:5.9, name:'机械工程​​'},
                                {value:3.6, name:'交通运输工程​​'},
                                {value:4.7, name:'机械​​'},
                                {value:11.8, name:'交通运输​'},
                                {value:1.8, name:'管理科学与工程​​'},
                                {value:71, name:'工程管理​​'}
                            ]
                        },
                    ]
                };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_3() {
         /*   */
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));

       option = {
	    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#dddc6b'
            }
        }
    },
    grid: {
        left: '10',
		top: '20',
        right: '30',
        bottom: '10',
        containLabel: true
    },

    xAxis: [{
        type: 'category',
        boundaryGap: false,
axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:16,
                },
            },
        axisLine: {
			lineStyle: { 
				color: 'rgba(255,255,255,.1)'
			}

        },

   data: ['力学','机械工程​​','交通运输工程​​','机械​​','交通运输​​','管理科学与工程','工程管理']

    }, {

        axisPointer: {show: false},
        axisLine: {  show: false},
        position: 'bottom',
        offset: 20,

       

    }],

    yAxis: [{
        type: 'value',
        axisTick: {show: false},
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
       axisLabel:  {
                textStyle: {
 					color: "rgba(255,255,255,.6)",
					fontSize:16,
                },
            },

        splitLine: {
            lineStyle: {
                 color: 'rgba(255,255,255,.1)'
            }
        }
    }],
    series: [
		{
        name: '平均分',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
			
            normal: {
				color: '#dddc6b',
                width: 4
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(221, 220, 107, 0.4)'
                }, {
                    offset: 0.8,
                    color: 'rgba(221, 220, 107, 0.1)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            }
        },
			itemStyle: {
			normal: {
				color: '#dddc6b',
				borderColor: 'rgba(221, 220, 107, .1)',
				borderWidth: 12
			}
		},
        data: [290, 308, 306, 326, 318, 307, 216]

    }, 

		 ]

};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['全日制', '非全日制'],
        align: 'right',
        right: '40%',
		top:'0%',
        textStyle: {
            color: "#fff",
		    fontSize: '16',

        },
        itemWidth: 16,
        itemHeight: 16,
        itemGap: 35
    },
    grid: {
        left: '0%',
		top:'40px',
        right: '0%',
        bottom: '2%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['力学','机械工程​​','交通运输工程​​','机械​​','交通运输​​','管理科学与工程','工程管理'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '16',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '16',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [{
        name: '全日制',
        type: 'bar',
        data: [25, 14, 20, 21, 24, 12.5, 20],
        barWidth:'25', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'#2f89cf',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    }, {
        name: '非全日制',
        type: 'bar',
		data: [20, 20, 20, 20, 25, 15, 24],
		barWidth:'25',
       // barGap: 1,
        itemStyle: {
            normal: {
                color:'#62c98d',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    },
	]
};

        /*   */
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));
option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['全日制', '非全日制'],
        align: 'right',
        right: '40%',
		top:'0%',
        textStyle: {
            color: "#fff",
		    fontSize: '16',

        },
 
        itemGap: 35
    },
    grid: {
        left: '0%',
		top:'40px',
        right: '0%',
        bottom: '2%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['力学','机械工程​​','交通运输工程​​','机械​​','交通运输​​','管理科学与工程','工程管理'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '16',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '16',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [{
        name: '全日制',
        type: 'line',
		
        data: [25, 14, 20, 21, 24, 12.5, 20],
       
        itemStyle: {
            normal: {
                color:'#2f89cf',
                opacity: 1,
				
				barBorderRadius: 5,
            }
        }
    }, {
        name: '非全日制',
        type: 'line',
        data: [20, 20, 20, 20, 25, 15, 24],
		barWidth:'15',
       // barGap: 1,
        itemStyle: {
            normal: {
                color:'#62c98d',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    },
	]
};
       

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

function zb1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb1'));
        var v1=25//最高录取率（非全）
		var v2=25//最高录取率（全）
option = {	
    series: [{
        type: 'pie',
        radius: ['60%', '70%'],
        color:'#49bcf7',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: v1,
            name: '最高录取率',
            label: {
                normal: {
                    formatter:Math.round( v1 )+ '%',
                    textStyle: {
                        fontSize: 30,
						color:'#fff',
                    }
                }
            }
        }, 
			   {
            value: v2,
            label: {
                normal: {
                 formatter : function (params){
                return '最高录取率'
            },
                    textStyle: {
                        color: '#aaa',
                        fontSize: 16
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,.2)'
                },
                emphasis: {
                    color: '#fff'
                }
            },
        }]
    }]
};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function zb2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb2'));
        var v1=25//最高录取率（非全）
		var v2=25//最高录取率（全）
      option = {
	
//animation: false,
    series: [{	
        type: 'pie',
       radius: ['60%', '70%'],
        color:'#49bcf7',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: v1,
            name: '最高录取率',
            label: {
                normal: {
                    formatter:Math.round( v2 )+ '%',
                    textStyle: {
                        fontSize: 24,
						color:'#fff',
                    }
                }
            }
        }, {
            value: v2,
            label: {
                normal: {
                 formatter : function (params){
                return '最高录取率'
            },
                    textStyle: {
                        color: '#aaa',
                        fontSize: 16
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,.2)'
                },
                emphasis: {
                    color: '#fff'
                }
            },
        }]
    }]
};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function zb3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb3'));
		var v1=19//非全日制通过率（均值）
		var v2=23//全日制通过率（均值）
option = {	
    series: [{
		
        type: 'pie',
       radius: ['60%', '70%'],
        color:'#62c98d',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: v1,
            name: '非全日制通过率',
            label: {
                normal: {
                    formatter:Math.round( v1 )+ '%',
                    textStyle: {
                        fontSize: 24,
						color:'#fff',
                    }
                }
            }
        }, {
            value: v2,
            label: {
                normal: {
                 formatter : function (params){
                return '非全日制通过率'
            },
                    textStyle: {
                        color: '#aaa',
                        fontSize: 16
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,.2)'
                },
                emphasis: {
                    color: '#fff'
                }
            },
        }]
    }]
};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function zb4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb4'));
		var v1=19//非全日制通过率（均值）
		var v2=23//全日制通过率（均值）
option = {	
    series: [{
		
        type: 'pie',
       radius: ['60%', '70%'],
        color:'#29d08a',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: v1,
            name: '全日制通过率',
            label: {
                normal: {
                    formatter:Math.round( v2 )+ '%',
                    textStyle: {
                        fontSize: 24,
						color:'#fff',
                    }
                }
            }
        }, {
            value: v2,
            label: {
                normal: {
                 formatter : function (params){
                return '全日制通过率'
            },
                    textStyle: {
                        color: '#aaa',
                        fontSize: 16
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,.2)'
                },
                emphasis: {
                    color: '#fff'
                }
            },
        }]
    }]
};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
})



		
		
		


		









