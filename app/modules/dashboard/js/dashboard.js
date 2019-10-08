/*===================================================================================================

 - TEMPLATE : PROTOTIPO
 - DESCRIPTION : MODERN BOOTSTRAP 4 ADMIN TEMPLATE - FULLY RESPONSIVE
 - AUTHOR : SNAZZYSHEET (http://www.snazzysheet.com/)
 - VERSION : 1.0
 - FILE : DASHBAORD JS

 ===================================================================================================*/

$(document).ready(function () {


    //---------------------------------------------------------------------------------------------
    // - CHART ACTIVITY ---------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------


    //---------------------------------------------------------------------------------------------
    // - CHART VISITORS ---------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------

    var visitors_chart_data = [
        {
            label: 'Extranal',
            backgroundColor: "rgba(239, 43, 65, 0.02)",
            borderColor: "#ef2b41",
            borderWidth: 2,
            data: [50,30,60,45,35,20,30,35,40,65,50]
        }
        ,{
            label: 'Internal',
            backgroundColor: "rgba(68,68,68, 0.02)",
            borderColor: "#444",
            borderWidth: 2,
            data: [20,10,30,30,50,60,70,65,75,80,95]
        }
    ];

    var visitors_chart_data_dark = [
        {
            label: 'Extranal',
            backgroundColor: "rgba(239, 43, 65, 0.1)",
            borderColor: "#ef2b41",
            borderWidth: 2,
            data: [50,30,60,45,35,20,30,35,40,65,50]
        }
        ,{
            label: 'Internal',
            backgroundColor: "rgba(187,187,187, 0.1)",
            borderColor: "#ccc",
            borderWidth: 2,
            data: [20,10,30,30,50,60,70,65,75,80,95]
        }
    ];

    var visitors_chart_config = {
        type: 'line',

        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug','Sep','Oct','Nov','Dec'],
            datasets: visitors_chart_data
        },
        options: {
            elements: {
                line: {
                    tension: 0
                },
                point: {
                    radius: 0
                }
            },
            scales: {
                xAxes: [{
                    display: false
                }],
                yAxes: [{
                    ticks: {
                        display: false,
                        min: 0,
                        max: 100
                    },
                    display: false
                }]
            },
            legend: {
                display:false
            },
            responsive: true,
            maintainAspectRatio: false
        }
    };

    var visitors_chart_config_dark = {
        type: 'line',

        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug','Sep','Oct','Nov','Dec'],
            datasets: visitors_chart_data_dark
        },
        options: {
            elements: {
                line: {
                    tension: 0
                },
                point: {
                    radius: 0
                }
            },
            scales: {
                xAxes: [{
                    display: false
                }],
                yAxes: [{
                    ticks: {
                        display: false,
                        min: 0,
                        max: 100
                    },
                    display: false
                }]
            },
            legend: {
                display:false
            },
            responsive: true,
            maintainAspectRatio: false
        }
    };

    var visitors_chart_ctx = document.getElementById("chart-line-visitors").getContext("2d");
    if( $("#chart-line-visitors").attr("data-style") !== "dark")
        new Chart(visitors_chart_ctx, visitors_chart_config);
    else
        new Chart(visitors_chart_ctx, visitors_chart_config_dark);

    //---------------------------------------------------------------------------------------------
    // - CHART STORAGE ----------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------

    $("#storage-chart").circliful({
        percent: 75,
        animation: 1,
        animationStep: 10,
        foregroundBorderWidth: 25,
        backgroundBorderWidth: 20,
        backgroundColor:'#ef2b41',
        foregroundColor:'#444',
        fillColor:'transparent',
        fontColor:'#000'
    });

    $("#storage-chart-dark").circliful({
        percent: 75,
        animation: 1,
        animationStep: 10,
        foregroundBorderWidth: 25,
        backgroundBorderWidth: 20,
        backgroundColor:'#ef2b41',
        foregroundColor:'#f4f1e7',
        fillColor:'transparent',
        fontColor:'#fff'
    });

    //---------------------------------------------------------------------------------------------
    // - CHART PRODUCTS SOLDS ---------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------

    var products_sold_chart_data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr','May','Jun'],
        datasets: [{
            label: 'quantity  ',
            backgroundColor: '#ef2b41',
            hoverBackgroundColor: '#db2b44',
            borderColor: '#ef2b41',
            data: [50,80 ,25, 50, 95, 70]
        }]

    };

    var products_sold_chart_config = {
        type: 'bar',
        data: products_sold_chart_data,
        options: {
            scales: {
                xAxes: [{
                    barPercentage: 0.8,
                    ticks: {
                        fontColor:'black'
                    },
                    gridLines: {
                        display:false,
                        drawBorder: false
                    }
                }],
                yAxes: [{
                    stacked :true,
                    ticks: {
                        fontColor:'black',
                        min: 0,
                        max: 100,
                        stepSize: 25
                    },
                    gridLines: {
                        display:false,
                        color: 'rgba(0,0,0,0.125)',
                        lineWidth: 4
                    }
                }]
            },
            title: {
                display: false
            },
            legend: {
                display:false
            },
            tooltips: {
                enabled: false,
                mode: 'index',
                position: 'nearest',
                custom: function(tooltip) {

                    var tooltipEl = document.getElementById('product-sold-tooltip');

                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'product-sold-tooltip';
                        tooltipEl.classList.add('chartjs-tooltip');
                        tooltipEl.innerHTML = "<table></table>";
                        this._chart.canvas.parentNode.appendChild(tooltipEl);
                    }

                    if (tooltip.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }

                    tooltipEl.classList.remove('above', 'below', 'no-transform');
                    if (tooltip.yAlign) {
                        tooltipEl.classList.add(tooltip.yAlign);
                    } else {
                        tooltipEl.classList.add('no-transform');
                    }

                    function getBody(bodyItem) {
                        return bodyItem.lines;
                    }

                    if (tooltip.body) {
                        var titleLines = tooltip.title || [];
                        var bodyLines = tooltip.body.map(getBody);

                        var innerHtml = '<thead>';

                        titleLines.forEach(function(title) {
                            innerHtml += '<tr><th>' + title + '</th></tr>';
                        });
                        innerHtml += '</thead><tbody>';

                        bodyLines.forEach(function(body, i) {
                            var colors = tooltip.labelColors[i];
                            var style = 'background:' + colors.backgroundColor;
                            style += '; border-color:' + colors.borderColor;
                            style += '; border-width: 2px';
                            var span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
                            innerHtml += '<tr><td>' + span + body + '</td></tr>';
                        });
                        innerHtml += '</tbody>';

                        var tableRoot = tooltipEl.querySelector('table');
                        tableRoot.innerHTML = innerHtml;
                    }

                    var positionY = this._chart.canvas.offsetTop;
                    var positionX = this._chart.canvas.offsetLeft;
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.left = positionX + tooltip.caretX + 'px';
                    tooltipEl.style.top = positionY + tooltip.caretY + 'px';
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }

    };

    var products_sold_chart_config_dark = {
        type: 'bar',
        data: products_sold_chart_data,
        options: {
            scales: {
                xAxes: [{
                    barPercentage: 0.8,
                    ticks: {
                        fontColor:'white'
                    },
                    gridLines: {
                        display:false,
                        drawBorder: false
                    }
                }],
                yAxes: [{
                    stacked :true,
                    ticks: {
                        fontColor:'white',
                        min: 0,
                        max: 100,
                        stepSize: 25
                    },
                    gridLines: {
                        display:false,
                        color: 'rgba(255,255,255,0.125)',
                        lineWidth: 4
                    }
                }]
            },
            title: {
                display: false
            },
            legend: {
                display:false
            },
            tooltips: {
                enabled: false,
                mode: 'index',
                position: 'nearest',
                custom: function(tooltip) {

                    var tooltipEl = document.getElementById('product-sold-tooltip');

                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'product-sold-tooltip';
                        tooltipEl.classList.add('chartjs-tooltip');
                        tooltipEl.innerHTML = "<table></table>";
                        this._chart.canvas.parentNode.appendChild(tooltipEl);
                    }

                    if (tooltip.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }

                    tooltipEl.classList.remove('above', 'below', 'no-transform');
                    if (tooltip.yAlign) {
                        tooltipEl.classList.add(tooltip.yAlign);
                    } else {
                        tooltipEl.classList.add('no-transform');
                    }

                    function getBody(bodyItem) {
                        return bodyItem.lines;
                    }

                    if (tooltip.body) {
                        var titleLines = tooltip.title || [];
                        var bodyLines = tooltip.body.map(getBody);

                        var innerHtml = '<thead>';

                        titleLines.forEach(function(title) {
                            innerHtml += '<tr><th>' + title + '</th></tr>';
                        });
                        innerHtml += '</thead><tbody>';

                        bodyLines.forEach(function(body, i) {
                            var colors = tooltip.labelColors[i];
                            var style = 'background:' + colors.backgroundColor;
                            style += '; border-color:' + colors.borderColor;
                            style += '; border-width: 2px';
                            var span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
                            innerHtml += '<tr><td>' + span + body + '</td></tr>';
                        });
                        innerHtml += '</tbody>';

                        var tableRoot = tooltipEl.querySelector('table');
                        tableRoot.innerHTML = innerHtml;
                    }

                    var positionY = this._chart.canvas.offsetTop;
                    var positionX = this._chart.canvas.offsetLeft;
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.left = positionX + tooltip.caretX + 'px';
                    tooltipEl.style.top = positionY + tooltip.caretY + 'px';
                }
            },
            responsive: true,
            maintainAspectRatio: false
        }

    };

    var products_sold_chart_ctx = document.getElementById("chart-products-sold-bar").getContext("2d");

    if( $("#chart-products-sold-bar").attr("data-style") !== "dark")
        new Chart(products_sold_chart_ctx, products_sold_chart_config);
    else
        new Chart(products_sold_chart_ctx, products_sold_chart_config_dark);

    //---------------------------------------------------------------------------------------------
    // - CHART PRODUCTS  --------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------

    var products_chart_data = {
        labels: ['ON SALE', 'ORDRER', 'SALED'],
        datasets: [{
            backgroundColor: '#444',
            hoverBackgroundColor: '#444',
            borderColor: '#444',
            data: [100,40,60]
        }]

    };

    var products_chart_data_dark = {
        labels: ['ON SALE', 'ORDRER', 'SALED'],
        datasets: [{
            backgroundColor: '#f4f1e7',
            hoverBackgroundColor: '#f4f1e7',
            borderColor: '#f4f1e7',
            data: [100,40,60]
        }]

    };

    var products_chart_config = {
        type: 'bar',
        data: products_chart_data,
        options: {
            scales: {
                xAxes: [{
                    display:false
                }],
                yAxes: [{
                    display:false
                }]
            },
            title: {
                display: false
            },
            legend: {
                display:false
            },
            responsive: true,
            maintainAspectRatio: false,
            tooltips: {
                enabled: false
            }
        }
    };

    var products_chart_config_dark = {
        type: 'bar',
        data: products_chart_data_dark,
        options: {
            scales: {
                xAxes: [{
                    display:false
                }],
                yAxes: [{
                    display:false
                }]
            },
            title: {
                display: false
            },
            legend: {
                display:false
            },
            responsive: true,
            maintainAspectRatio: false,
            tooltips: {
                enabled: false
            }
        }
    };

    var products_chart_ctx = document.getElementById("chart-products-bar").getContext("2d");

    if( $("#chart-products-bar").attr("data-style") !== "dark")
        new Chart(products_chart_ctx, products_chart_config);
    else
        new Chart(products_chart_ctx, products_chart_config_dark);

    //---------------------------------------------------------------------------------------------
    // - prototipo CALENDAR ------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------

    var today = new Date(),
        month = today.getMonth() + 1,
        year = today.getFullYear(),
        notes =  [
            { "date": year + "-" + month + "-12", "time" : "15:45 AM", "content": "New Year" },
            { "date": year + "-" + month + "-25", "time" : "10:30 AM" , "content": "Christmas" }
        ];

    $("#calendar").prototipoCalendar({notes: notes});

    $("#calendar_dark").prototipoCalendar({notes: notes,theme: "light",backgroundColor : "#444"});

    //---------------------------------------------------------------------------------------------
    // - NOTIFICATION -----------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------

    $.notify("Bonjour Laëtitia !!  ", {align:"center", verticalAlign:"top",color: "#FFFFFF", background: "#4b5066"});


});
