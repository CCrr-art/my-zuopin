$(window).load(function () {
    $(".loading").fadeOut()
})

/****/
$(document).ready(function () {
    var whei = $(window).width()
    $("html").css({ fontSize: whei / 20 })
    $(window).resize(function () {
        var whei = $(window).width()
        $("html").css({ fontSize: whei / 20 })
    })
})


$(window).load(function () { $(".loading").fadeOut() })
$(function () {
    echarts_1()
    echarts_2()
    echarts_3()
    echarts_4()
    echarts_5()
    echarts_6()
    pe01()
    pe02()
    pe03()

    function echarts_1 () {
        var myChart = echarts.init(document.getElementById('echarts1'))

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'shadow' },
            }, "grid": {
                "top": "20%",
                "right": "50",
                "bottom": "20",
                "left": "30",
            },
            legend: {
                data: ['升学率 升学比例'],
                right: 'center', width: '100%',
                textStyle: {
                    color: "#fff"
                },
                itemWidth: 12,
                itemHeight: 10,
            },
            "xAxis": [
                {
                    "type": "category",
                    data: ['3.7+', '3.5+', '3.3+', '3.1+', '2.9+', '2.7+', '2.5+', '2.3+', '2.1+', '2.1-'],
                    axisLine: { lineStyle: { color: "rgba(255,255,255,.1)" } },
                    axisLabel: {
                        textStyle: { color: "rgba(255,255,255,.7)", fontSize: '14', },
                    },

                },
            ],
            "yAxis": [
                {
                    "type": "value",
                    "name": "单位百分比",
                    axisTick: { show: false },
                    splitLine: {
                        show: false,

                    },
                    "axisLabel": {
                        "show": true,
                        fontSize: 14,
                        color: "rgba(255,255,255,.6)"

                    },
                    axisLine: {
                        min: 0,
                        max: 1.2,
                        lineStyle: { color: 'rgba(255,255,255,.1)' }
                    },//左线色

                },
                // {
                //     "type": "value",
                //     "name": "增速",
                //     "show": true,
                //     "axisLabel": {
                //         "show": true,
                //         fontSize: 14,
                //         formatter: "{value} %",
                //         color: "rgba(255,255,255,.6)"
                //     },
                //     axisTick: { show: false },
                //     axisLine: { lineStyle: { color: 'rgba(255,255,255,.1)' } },//右线色
                //     splitLine: { show: true, lineStyle: { color: 'rgba(255,255,255,.1)' } },//x轴线
                // },
            ],
            "series": [
                {
                    "name": "升学率 升学比例",
                    "type": "bar",
                    "data": ['84.2', '68.2', '46.5', '44.8', '31.9', '17.9', '14.4', '8.4', '5.4','2.1'],
                    "barWidth": "20%",
                    "itemStyle": {
                        "normal": {
                            barBorderRadius: 15,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#8bd46e'
                            }, {
                                offset: 1,
                                color: '#09bcb7'
                            }]),
                        }
                    },
                    "barGap": "0.2"
                },
                // {
                //     "name": "字段2",
                //     "type": "bar",
                //     "data": [14.8, 14.1, 15, 16.30],
                //     "barWidth": "15%",
                //     "itemStyle": {
                //         "normal": {
                //             barBorderRadius: 15,
                //             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                 offset: 0,
                //                 color: '#248ff7'
                //             }, {
                //                 offset: 1,
                //                 color: '#6851f1'
                //             }]),
                //         }
                //     },
                //     "barGap": "0.2"
                // },
                // {
                //     "name": "字段3",
                //     "type": "bar",
                //     "data": [9.2, 9.1, 9.85, 8.9],
                //     "barWidth": "15%",
                //     "itemStyle": {
                //         "normal": {
                //             barBorderRadius: 15,
                //             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //                 offset: 0,
                //                 color: '#fccb05'
                //             }, {
                //                 offset: 1,
                //                 color: '#f5804d'
                //             }]),
                //         }
                //     },
                //     "barGap": "0.2"
                // },
                // {
                //     "name": "字段4",
                //     "type": "line",
                //     smooth: true,
                //     "yAxisIndex": 1,
                //     "data": [0, 6.01, 5.26, 1.48],
                //     lineStyle: {
                //         normal: {
                //             width: 2
                //         },
                //     },
                //     "itemStyle": {
                //         "normal": {
                //             "color": "#86d370",

                //         }
                //     },

                // }
                // ,
                // {
                //     "name": "字段5",
                //     "type": "line",
                //     "yAxisIndex": 1,

                //     "data": [0, -4.73, 6.38, 8.67],
                //     lineStyle: {
                //         normal: {
                //             width: 2
                //         },
                //     },
                //     "itemStyle": {
                //         "normal": {
                //             "color": "#3496f8",

                //         }
                //     },
                //     "smooth": true
                // },
                // {
                //     "name": "字段6",
                //     "type": "line",
                //     "yAxisIndex": 1,

                //     "data": [0, -1.09, 8.24, -9.64],
                //     lineStyle: {
                //         normal: {
                //             width: 2
                //         },
                //     },
                //     "itemStyle": {
                //         "normal": {
                //             "color": "#fbc30d",

                //         }
                //     },
                //     "smooth": true
                // }
            ]
        }

        myChart.setOption(option)
        window.addEventListener("resize", function () {
            myChart.resize()
        })


    }
    function echarts_2 () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts2'))

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'shadow' },
                // formatter:'{c}' ,
            },
            grid: {
                left: '0',
                top: '30',
                right: '10',
                bottom: '-20',
                containLabel: true
            },
            legend: {
                data: ['车辆工程', '交通工程','物流工程'],
                right: 'center',
                top: 0,
                textStyle: {
                    color: "#fff"
                },
                itemWidth: 12,
                itemHeight: 10,
                // itemGap: 35
            },

            xAxis: [{
                type: 'category',
                boundaryGap: true,
                axisLabel: {
                    rotate: 0,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 14,

                    },
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }

                },

                data: ['2013级', '2014级', '2015级', '2016级', '2017级', '2018级']

            }, {

                axisPointer: { show: false },
                axisLine: { show: false },
                position: 'bottom',
                offset: 20,



            }],

            yAxis: [{
                type: 'value',
                axisTick: { show: false },
                // splitNumber: 6,
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                axisLabel: {
                    formatter: "{value} %",
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 14,
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
                    name: '车辆工程',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            color: 'rgba(228, 228, 126, 1)',
                            width: 2
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(228, 228, 126, .2)'
                            }, {
                                offset: 1,
                                color: 'rgba(228, 228, 126, 0)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(228, 228, 126, 1)',
                            borderColor: 'rgba(228, 228, 126, .1)',
                            borderWidth: 12
                        }
                    },
                    data: [23.6,17.9,28.4,27.6,27.4,33.6]

                }, {
                    name: '物流工程',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {

                        normal: {
                            color: 'rgba(255, 128, 128, 1)',
                            width: 2
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(255, 128, 128,.2)'
                            }, {
                                offset: 1,
                                color: 'rgba(255, 128, 128, 0)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255, 128, 128, 1)',
                            borderColor: 'rgba(255, 128, 128, .1)',
                            borderWidth: 12
                        }
                    },
                    data: [18.9,31.3,30.6,38.9,32.2,36.7]
                },{
                    name: '交通工程',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {

                        normal: {
                            color: 'rgba(128, 255, 134, 1)',
                            width: 2
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(255, 128, 128,.2)'
                            }, {
                                offset: 1,
                                color: 'rgba(255, 128, 128, 0)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(128, 255, 134, 1)',
                            borderColor: 'rgba(255, 128, 128, .1)',
                            borderWidth: 12
                        }
                    },
                    data: [21.9,33.3,31.3,36.1,36.1,40]
                },
            ]
        }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
        window.addEventListener("resize", function () {
            myChart.resize()
        })
    }
    function echarts_3 () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts3'))

        option = {

            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['985', '211', '非升学', '其它院校'],
                right: 'center',
                top: 0,
                textStyle: {
                    color: "#fff"
                },
                itemWidth: 12,
                itemHeight: 10,
                // itemGap: 35
            },
            grid: {
                left: '0',
                right: '20',
                bottom: '15%',
                top: '15%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['3.7+', '3.5+', '3.3+', '3.1+', '2.9+', '2.7+', '2.5+', '2.3+', '2.1+', '2.1-'],
                axisLine: {
                    lineStyle: {
                        color: 'white'

                    }
                },
                axisLabel: {
                    //rotate:-90,
                    //formatter: function (value) { return value.split("").join("\n") },
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 14,
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.3)'
                    }
                },
            },

            yAxis: {
                type: 'value',
                splitNumber: 4,
                axisTick: { show: false },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 14,
                    }
                },
                axisLine: { show: false },
            },

            series: [{
                name: '985',
                type: 'bar',
                stack: 'a',
                barWidth: '30', barGap: 0,
                itemStyle: {
                    normal: {
                        color: '#8bd46e',
                    }
                },
                data: [7, 23, 24, 16, 10, 3, 5, 1, 1, 0]
            },
            {
                name: '211',
                type: 'bar',
                stack: 'a',
                barWidth: '30', barGap: 0,
                itemStyle: {
                    normal: {
                        color: '#f5804d',
                        barBorderRadius: 0,
                    }
                },
                data: [9, 42, 42, 60, 41, 17, 16, 7, 3, 1]
            },
            {
                name: '非升学',
                type: 'bar',
                stack: 'a',
                barWidth: '30', barGap: 0,
                itemStyle: {
                    normal: {
                        color: '#248ff7',
                        barBorderRadius: 0,
                    }
                },
                data: [3, 41, 98, 149, 196, 253, 260, 250, 174, 91]
                },
                {
                    name: '其它院校',
                    type: 'bar',
                    stack: 'a',
                    barWidth: '30', barGap: 0,
                    itemStyle: {
                        normal: {
                            color: '#ffff',
                            barBorderRadius: 0,
                        }
                    },
                    data: [0, 23, 40, 45, 41, 35, 23, 15, 6, 1]
                }
            ]
        }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
        window.addEventListener("resize", function () {
            myChart.resize()
        })
    }
    function echarts_5 () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts5'))

        // option = {
        //     // tooltip: {
        //     //     trigger: 'axis',
        //     //     axisPointer: { type: 'shadow' },
        //     // },
        //     grid: {
        //         left: '2%',
        //         top: '1%',
        //         right: '5%',
        //         bottom: '0%',
        //         containLabel: true
        //     },
        //     legend: {
        //         data: ['每年升学学生人数'],
        //         right: 'center',
        //         top: 0,
        //         textStyle: {
        //             color: "#fff"
        //         },
        //         itemWidth: 12,
        //         itemHeight: 10,
        //     },
        //     "xAxis": [
        //         {
        //             "type": "category",

        //             data: ['2019', '2020', '2021', '2022'],
        //             axisLine: { lineStyle: { color: "rgba(255,255,255,.1)" } },
        //             axisLabel: {
        //                 textStyle: { color: "rgba(255,255,255,.7)", fontSize: '14', },
        //             },

        //         },
        //     ],
        //     "yAxis": [
        //         {
        //             "type": "value",
        //             "name": "标准升学人数",
        //             splitLine: { show: false },
        //             axisTick: { show: false },
        //             "axisLabel": {
        //                 "show": true,
        //                 color: "rgba(255,255,255,.6)"

        //             },
        //             axisLine: { lineStyle: { color: 'rgba(255,255,255,.1)' } },//左线色

        //         },
        //         {
        //             "type": "value",
        //             "name": "升学人数百分比",
        //             "show": true,
        //             axisTick: { show: false },
        //             "axisLabel": {
        //                 "show": true,
        //                 formatter: "{value} %",
        //                 color: "rgba(255,255,255,.6)"
        //             },
        //             axisLine: { lineStyle: { color: 'rgba(255,255,255,.1)' } },//右线色
        //             splitLine: { show: true, lineStyle: { color: 'rgba(255,255,255,.1)' } },//x轴线
        //         },
        //     ],
        //     "series": [

        //         {
        //             "name": "升学人数百分比",
        //             "type": "bar",
        //             "data": [
        //                 18453.35, 20572.22, 24274.22, 30500.00
        //             ],
        //             "barWidth": "20%",

        //             "itemStyle": {
        //                 "normal": {
        //                     barBorderRadius: 15,
        //                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        //                         offset: 0,
        //                         color: '#fccb05'
        //                     }, {
        //                         offset: 1,
        //                         color: '#f5804d'
        //                     }]),
        //                 }
        //             },
        //             "barGap": "0"
        //         },
        //         {
        //             "name": "标准升学人数",
        //             "type": "line",
        //             "yAxisIndex": 1,

        //             "data": [0, 11.48, 18.00, 25.65],
        //             lineStyle: {
        //                 normal: {
        //                     width: 2
        //                 },
        //             },
        //             "itemStyle": {
        //                 "normal": {
        //                     "color": "#ff3300",

        //                 }
        //             },
        //             "smooth": true
        //         }
        //     ]
        // }
        // 使用刚指定的配置项和数据显示图表。
        option = {

            grid: {
                left: '2%',
                top: '1%',
                right: '5%',
                bottom: '0%',
                containLabel: true
            },
            xAxis: [{
                show: false,
            }],
            yAxis: [{
                axisTick: 'none',
                axisLine: 'none',
                offset: '7',
                axisLabel: {
                    textStyle: {
                        color: 'rgba(255,255,255,.6)',
                        fontSize: '14',
                    }
                },
                data: ['2.1-', '2.1+', '2.3+', '2.5+', '2.7+', '2.9+', '3.1+', '3.3+', '3.5+', '3.7+']

            }, {
                name: '单位：件',
                nameGap: '50',
                nameTextStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: '16',
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [],
            }],
            series: [{
                name: '条',
                type: 'bar',
                yAxisIndex: 0,
                data: [2, 10, 23, 44, 55, 92, 121, 106, 88, 16],
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: function (param) {
                            return param.value
                        },
                        textStyle: {
                            color: 'rgba(255,255,255,.8)',
                            fontSize: '12',
                        }
                    }
                },
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: '#03c893'
                        },
                        {
                            offset: 1,
                            color: '#ff3300'
                        }
                        ]),
                        barBorderRadius: 15,
                    }
                },
                z: 2
            }]
        }
        myChart.setOption(option)
        window.addEventListener("resize", function () {
            myChart.resize()
        })
    }
    function echarts_4 () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts4'))
        var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3']
        option = {

            grid: {
                left: '2%',
                top: '1%',
                right: '5%',
                bottom: '0%',
                containLabel: true
            },
            xAxis: [{
                show: false,
            }],
            yAxis: [{
                axisTick: 'none',
                axisLine: 'none',
                offset: '7',
                axisLabel: {
                    textStyle: {
                        color: 'rgba(255,255,255,.6)',
                        fontSize: '14',
                    }
                },
                data: ['2.1-', '2.1+', '2.3+', '2.5+', '2.7+', '2.9+', '3.1+', '3.3+', '3.5+', '3.7+']

            }, {
                name: '单位：件',
                nameGap: '50',
                nameTextStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: '16',
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [],
            }],
            series: [{
                name: '条',
                type: 'bar',
                yAxisIndex: 0,
                data: [94, 184, 273, 304, 308, 288, 270, 204, 129, 19],
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: function (param) {
                            return param.value
                        },
                        textStyle: {
                            color: 'rgba(255,255,255,.8)',
                            fontSize: '12',
                        }
                    }
                },
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: '#03c893'
                        },
                        {
                            offset: 1,
                            color: '#0091ff'
                        }
                        ]),
                        barBorderRadius: 15,
                    }
                },
                z: 2
            }, {
                name: '白框',
                type: 'bar',
                yAxisIndex: 1,
                barGap: '-100%',
                data: [99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,.2)',
                        barBorderRadius: 15,
                    }
                },
                z: 1
            }]
        }


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
        window.addEventListener("resize", function () {
            myChart.resize()
        })
    }
    function echarts_6 () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts6'))


        option = {
            title: {
                // text: '5132',
                // subtext: '总体',
                x: 'center',
                y: '40%',
                textStyle: {
                    color: '#fff',
                    fontSize: 22,
                    lineHeight: 10,
                },
                subtextStyle: {
                    color: '#90979c',
                    fontSize: 16,
                    lineHeight: 10,

                },
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },

            visualMap: {
                show: false,
                min: 500,
                max: 600,
                inRange: {
                    //colorLightness: [0, 1]
                }
            },
            series: [{
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                center: ['50%', '50%'],
                color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5'], //'#FBFE27','rgb(11,228,96)','#FE5050'
                data: [{
                    "value": 41,
                    "name": "其它高校"
                }, {
                    "value": 16,
                    "name": "985"
                }, {
                    "value": 43,
                    "name": "211"
                }
                ].sort(function (a, b) {
                    return a.value - b.value
                }),
                roseType: 'radius',

                label: {
                    normal: {
                        formatter: ['{c|{c}%}', '{b|{b}}'].join('\n'),
                        rich: {
                            c: {
                                color: 'rgb(241,246,104)',
                                fontSize: 20,
                                fontWeight: 'bold',
                                lineHeight: 5
                            },
                            b: {
                                color: 'rgb(98,137,169)',
                                fontSize: 14,
                                height: 44
                            },
                        },
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgb(98,137,169)',
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20,

                    }
                }
            }]
        }


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
        window.addEventListener("resize", function () {
            myChart.resize()
        })
    }


    function pe01 () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('pe01'))
        var txt = 4.3
        option = {
            title: {
                text: txt + '%',
                x: 'center',
                y: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    color: '#fff',
                    fontSize: '18'
                }
            },
            color: 'rgba(255,255,255,.3)',

            series: [{
                name: 'Line 1',
                type: 'pie',
                clockWise: true,
                radius: ['65%', '80%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                hoverAnimation: false,
                data: [{
                    value: txt,
                    name: '已使用',
                    itemStyle: {
                        normal: {
                            color: '#eaff00',
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    }
                }, {
                    name: '未使用',
                    value: 100 - txt
                }]
            }]
        }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
        window.addEventListener("resize", function () {
            myChart.resize()
        })
    }

    function pe02 () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('pe02'))
        var txt = 11.4
        option = {
            title: {
                text: txt + '%',
                x: 'center',
                y: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    color: '#fff',
                    fontSize: '18'
                }
            },
            color: 'rgba(255,255,255,.3)',

            series: [{
                name: 'Line 1',
                type: 'pie',
                clockWise: true,
                radius: ['65%', '80%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                hoverAnimation: false,
                data: [{
                    value: txt,
                    name: '已使用',
                    itemStyle: {
                        normal: {
                            color: '#ea4d4d',
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    }
                }, {
                    name: '未使用',
                    value: 100 - txt
                }]
            }]
        }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
        window.addEventListener("resize", function () {
            myChart.resize()
        })
    }
    function pe03 () {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('pe03'))
        var txt = 11.1
        option = {
            title: {
                text: txt + '%',
                x: 'center',
                y: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    color: '#fff',
                    fontSize: '18'
                }
            },
            color: 'rgba(255,255,255,.3)',

            series: [{
                name: 'Line 1',
                type: 'pie',
                clockWise: true,
                radius: ['65%', '80%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                hoverAnimation: false,
                data: [{
                    value: txt,
                    name: '已使用',
                    itemStyle: {
                        normal: {
                            color: '#395ee6',
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    }
                }, {
                    name: '未使用',
                    value: 100 - txt
                }
                ]
            }]
        }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
        window.addEventListener("resize", function () {
            myChart.resize()
        })
    }
})




























