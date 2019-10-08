/*===================================================================================================

 - TEMPLATE : PROTOTIPO
 - DESCRIPTION : MODERN BOOTSTRAP 4 ADMIN TEMPLATE - FULLY RESPONSIVE
 - AUTHOR : SNAZZYSHEET (http://www.snazzysheet.com/)
 - VERSION : 1.0
 - FILE : DASHBAORD JS

 ===================================================================================================*/

$(document).ready(function () {

    //---------------------------------------------------------------------------------------------
    // - MAP VIEW ---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------

      var map_data = {
            "AF": 16.63,
            "AL": 11.58,
            "DZ": 158.97,
            "AO": 85.81,
            "AG": 1.1,
            "AR": 351.02,
            "AM": 8.83,
            "AU": 1219.72,
            "AT": 366.26,
            "AZ": 52.17,
            "BS": 7.54,
            "BH": 21.73,
            "BD": 105.4,
            "BB": 3.96,
            "BY": 52.89,
            "BE": 461.33,
            "BZ": 1.43,
            "BJ": 6.49,
            "BT": 1.4,
            "BO": 19.18,
            "BA": 16.2,
            "BW": 12.5,
            "BR": 2023.53,
            "BN": 11.96,
            "BG": 44.84,
            "BF": 8.67,
            "BI": 1.47,
            "KH": 11.36,
            "CM": 21.88,
            "CA": 1563.66,
            "CV": 1.57,
            "CF": 2.11,
            "TD": 7.59,
            "CL": 199.18,
            "CN": 5745.13,
            "GL": 0.56,
            "CO": 283.11,
            "KM": 0.56,
            "SO": 0.56,
            "CD": 12.6,
            "CG": 11.88,
            "CR": 35.02,
            "CI": 22.38,
            "HR": 59.92,
            "CY": 22.75,
            "CZ": 195.23,
            "DK": 304.56,
            "DJ": 1.14,
            "DM": 0.38,
            "DO": 50.87,
            "EC": 61.49,
            "EG": 216.83,
            "SV": 21.8,
            "GQ": 14.55,
            "ER": 2.25,
            "EE": 19.22,
            "ET": 30.94,
            "FJ": 3.15,
            "FI": 231.98,
            "FR": 2555.44,
            "GA": 12.56,
            "GM": 1.04,
            "GE": 11.23,
            "DE": 3305.9,
            "GH": 18.06,
            "GR": 305.01,
            "GD": 0.65,
            "GT": 40.77,
            "GN": 4.34,
            "GW": 0.83,
            "GY": 2.2,
            "HT": 6.5,
            "HN": 15.34,
            "HK": 226.49,
            "HU": 132.28,
            "IS": 12.77,
            "IN": 1430.02,
            "ID": 695.06,
            "IR": 337.9,
            "IQ": 84.14,
            "IE": 204.14,
            "IL": 201.25,
            "IT": 2036.69,
            "JM": 13.74,
            "JP": 5390.9,
            "JO": 27.13,
            "KZ": 129.76,
            "KE": 32.42,
            "KI": 0.15,
            "KR": 986.26,
            "UNDEFINED": 5.73,
            "KW": 117.32,
            "KG": 4.44,
            "LA": 6.34,
            "LV": 23.39,
            "LB": 39.15,
            "LS": 1.8,
            "LR": 0.98,
            "LY": 77.91,
            "LT": 35.73,
            "LU": 52.43,
            "MK": 9.58,
            "MG": 8.33,
            "MW": 5.04,
            "MY": 218.95,
            "MV": 1.43,
            "ML": 9.08,
            "MT": 7.8,
            "MR": 3.49,
            "MU": 9.43,
            "MX": 1004.04,
            "MD": 5.36,
            "MN": 5.81,
            "ME": 3.88,
            "MA": 91.7,
            "MZ": 10.21,
            "MM": 35.65,
            "NA": 11.45,
            "NP": 15.11,
            "NL": 770.31,
            "NZ": 138,
            "NI": 6.38,
            "NE": 5.6,
            "NG": 206.66,
            "NO": 413.51,
            "OM": 53.78,
            "PK": 174.79,
            "PA": 27.2,
            "PG": 8.81,
            "PY": 17.17,
            "PE": 153.55,
            "PH": 189.06,
            "PL": 438.88,
            "PT": 223.7,
            "QA": 126.52,
            "RO": 158.39,
            "RU": 1476.91,
            "RW": 5.69,
            "WS": 0.55,
            "ST": 0.19,
            "SA": 434.44,
            "SN": 12.66,
            "RS": 38.92,
            "SC": 0.92,
            "SL": 1.9,
            "SG": 217.38,
            "SK": 86.26,
            "SI": 46.44,
            "SB": 0.67,
            "ZA": 354.41,
            "ES": 1374.78,
            "LK": 48.24,
            "KN": 0.56,
            "LC": 1,
            "VC": 0.58,
            "SS": 0.58,
            "SD": 65.93,
            "SR": 3.3,
            "SZ": 3.17,
            "SE": 444.59,
            "CH": 522.44,
            "SY": 59.63,
            "TW": 426.98,
            "TJ": 5.58,
            "TZ": 22.43,
            "TH": 312.61,
            "TL": 0.62,
            "TG": 3.07,
            "TO": 0.3,
            "TT": 21.2,
            "TN": 43.86,
            "TR": 729.05,
            "TM": 0,
            "UG": 17.12,
            "UA": 136.56,
            "AE": 239.65,
            "GB": 2258.57,
            "US": 14624.18,
            "UY": 40.71,
            "UZ": 37.72,
            "VU": 0.72,
            "VE": 285.21,
            "VN": 101.99,
            "YE": 30.02,
            "ZM": 15.69,
            "ZW": 5.57
        },
        map_country_name,
        map_country_visits,
        map_country_online,
        map_country_proportion,
        map_total_visits = 61943.51;

    function updateMapInfo(code,Name) {
        map_country_visits = parseInt(map_data[code]);
        map_country_online = Math.floor(Math.random() * map_country_visits);
        map_country_proportion = parseInt(map_country_visits * 100 / map_total_visits);
        $("#map-country").text(Name);
        $("#map-visits").text(map_country_visits);
        $("#map-online").text(map_country_online);
        $("#map-chart-visits").circliful({percent: map_country_proportion}).find("svg")[1].remove();
    }
    if( $("#map-view").attr("data-style") !== "dark")
        $('#map-view').vectorMap({
        map: 'world_mill',
        backgroundColor: 'transparent',
        zoomMin: 0.95,
        focusOn: {
            x: 0.5,
            y: 0.5,
            scale: 0.95
        },

        markers: [
            {latLng: [40, -95], name: 'Position'}
        ],
        markerStyle: {
            initial: {
                fill: '#ef2b41'
            },
            hover: {
                stroke: '#ef2b41',
                "stroke-width": 2,
                cursor: 'pointer'
            },
            selected: {
                stroke: '#ef2b41',
                "stroke-width": 2
            }
        },

        series: {
            regions: [{
                values: map_data,
                scale: ['#777777', '#4f4f4f'],
                normalizeFunction: 'polynomial',
                legend : {
                    vertical: true
                }
            }]
        },
        regionStyle: {
            initial: {
                "fill-opacity": 1
            },
            hover: {
                "fill-opacity": 0.9
            }
        },
        onRegionTipShow: function (e, el) {
        map_country_name = el.html();
        },
        onRegionClick: function (e, code) {
            updateMapInfo(code,map_country_name);
        }
    });
    else
        $('#map-view').vectorMap({
        map: 'world_mill',
        backgroundColor: 'transparent',
        zoomMin: 0.95,
        focusOn: {
            x: 0.5,
            y: 0.5,
            scale: 0.95
        },

        markers: [
            {latLng: [40, -95], name: 'Position'}
        ],
        markerStyle: {
            initial: {
                fill: '#ef2b41'
            },
            hover: {
                stroke: '#ef2b41',
                "stroke-width": 2,
                cursor: 'pointer'
            },
            selected: {
                stroke: '#ef2b41',
                "stroke-width": 2
            }
        },

        series: {
            regions: [{
                values: map_data,
                scale: ['#999999', '#c0c0c0'],
                normalizeFunction: 'polynomial',
                legend : {
                    vertical: true
                }
            }]
        },
        regionStyle: {
            initial: {
                "fill-opacity": 1
            },
            hover: {
                "fill-opacity": 0.9
            }
        },
        onRegionTipShow: function (e, el) {
            map_country_name = el.html();
        },
        onRegionClick: function (e, code) {
            updateMapInfo(code,map_country_name);
        }
    });

    $('#sidebarCollapse').on('click', function () {
        $('#map-view').vectorMap('get', 'mapObject').updateSize();
    });

    //---------------------------------------------------------------------------------------------
    // - CHART VIEW -------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------

    var options = {
        percent: 0,
        animation: 1,
        animationStep: 10,
        foregroundBorderWidth: 10,
        foregroundColor: '#444',
        backgroundColor: "none",
        fillColor: '#ef2b41',
        iconColor: '#fff',
        fontColor: '#222',
        icon: '',
        iconSize: '40',
        iconPosition: 'middle'
    };
    var options_dark = {
        percent: 0,
        animation: 1,
        animationStep: 10,
        foregroundBorderWidth: 10,
        foregroundColor: '#f4f1e7',
        backgroundColor: "none",
        fillColor: '#ef2b41',
        iconColor: '#fff',
        fontColor: '#f4f1e7',
        icon: '',
        iconSize: '40',
        iconPosition: 'middle'
    };

    if( $("#map-chart-visits").attr("data-style") !== "dark")
        $("#map-chart-visits").circliful(options, function () {
        updateMapInfo("US","United States");
    }).find(".icon").removeClass("icon").addClass("material-icons").attr("y","117").text("people");
    else
        $("#map-chart-visits").circliful(options_dark, function () {
        updateMapInfo("US","United States");
    }).find(".icon").removeClass("icon").addClass("material-icons").attr("y","117").text("people");

    //---------------------------------------------------------------------------------------------
    // - CHART ACTIVITY ---------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------

    var activity_chart_data = [
        {
            label: 'Internal ',
            borderColor: "#4a4643",
            pointBackgroundColor: '#fff',
            pointBorderColor: '#4a4643',
            fill: false,
            data: [50, 30, 60, 55, 70, 90, 85, 55, 55, 20, 40]
        },
        {
            label: 'Extranal ',
            borderColor: "#ef2b41",
            pointBackgroundColor: '#fff',
            fill: false,
            data: [10, 5, 30, 30, 45, 40, 30, 20, 20, 5, 0]
        }
    ];

    var activity_chart_data_dark = [
        {
            label: 'Internal ',
            borderColor: "#cabfb7",
            pointBackgroundColor: '#444',
            pointBorderColor: '#cabfb7',
            fill: false,
            data: [50, 30, 60, 55, 70, 90, 85, 55, 55, 20, 40]
        },
        {
            label: 'Extranal ',
            borderColor: "#ef2b41",
            pointBackgroundColor: '#444',
            fill: false,
            data: [10, 5, 30, 30, 45, 40, 30, 20, 20, 5, 0]
        }
    ];

    var activity_chart_config = {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: activity_chart_data
        },
        options: {
            elements: {
                line: {
                    tension: 0
                },
                point: {
                    borderWidth: 3
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        fontColor: "black"
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false,
                        color: 'rgba(0,0,0,0.125)',
                        lineWidth: 4
                    },
                    ticks: {
                        fontColor: 'black',
                        min: 0,
                        max: 100,
                        stepSize: 25
                    }
                }]
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: false,
                mode: 'index',
                position: 'nearest',
                custom: function(tooltip) {

                    var tooltipEl = document.getElementById('activity-tooltip');

                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'activity-tooltip';
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
                            var style = 'background:' + colors.borderColor;
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

    var activity_chart_config_dark = {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: activity_chart_data_dark
        },
        options: {
            elements: {
                line: {
                    tension: 0
                },
                point: {
                    borderWidth: 3
                }
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        fontColor: "white"
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false,
                        color: 'rgba(255,255,255,0.125)',
                        lineWidth: 4
                    },
                    ticks: {
                        fontColor: 'white',
                        min: 0,
                        max: 100,
                        stepSize: 25
                    }
                }]
            },
            legend: {
                display: false
            },
            tooltips: {
                enabled: false,
                mode: 'index',
                position: 'nearest',
                custom: function(tooltip) {

                    var tooltipEl = document.getElementById('activity-tooltip');

                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'activity-tooltip';
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
                            var style = 'background:' + colors.borderColor;
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

    var activity_chart_ctx = document.getElementById("chart-line-activity").getContext("2d");

    if( $("#chart-line-activity").attr("data-style") !== "dark")
        new Chart(activity_chart_ctx, activity_chart_config);
    else
        new Chart(activity_chart_ctx, activity_chart_config_dark);


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
